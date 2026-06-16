import * as React from "react";
import { getGitHubRepos, getGitHubUser } from "./api/githubApi";
import ProfileCard from "./components/ProfileCard";
import RecruiterSummary from "./components/RecruiterSummary";
import RepoList from "./components/RepoList";
import SearchBar from "./components/SearchBar";
import StatsPanel from "./components/StatsPanel";
import type { GitHubRepo, GitHubUser } from "./types/github";
import {
    getRecentlyUpdatedRepos,
    getTopLanguages,
    getTopRepos,
    getTotalForks,
    getTotalStars,
} from "./utils/repoAnalytics";

export default function App() {
    const [username, setUsername] = React.useState("vixtorn");
    const [user, setUser] = React.useState<GitHubUser | null>(null);
    const [repos, setRepos] = React.useState<GitHubRepo[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const totalStars = getTotalStars(repos);
    const totalForks = getTotalForks(repos);
    const topLanguages = getTopLanguages(repos);
    const topRepos = getTopRepos(repos);
    const recentlyUpdatedRepos = getRecentlyUpdatedRepos(repos);

    async function handleSearch() {
        if (!username.trim()) {
            setError("Please enter a GitHub username.");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const cleanUsername = username.trim();

            const [userData, repoData] = await Promise.all([
                getGitHubUser(cleanUsername),
                getGitHubRepos(cleanUsername),
            ]);

            setUser(userData);
            setRepos(repoData);
        } catch (err) {
            setUser(null);
            setRepos([]);
            setError(err instanceof Error ? err.message : "Unexpected error.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="app">
            <section className="hero">
                <p className="eyebrow">GitHub Portfolio Analyzer</p>
                <h1>RepoPulse</h1>
                <p>
                    Analyze any public GitHub profile and turn repositories into a clean
                    recruiter-focused portfolio snapshot.
                </p>

                <SearchBar
                    username={username}
                    setUsername={setUsername}
                    onSearch={handleSearch}
                    loading={loading}
                />
            </section>

            {error && <div className="error-card">{error}</div>}

            {user && (
                <div className="dashboard">
                    <ProfileCard user={user} />

                    <StatsPanel
                        publicRepos={user.public_repos}
                        followers={user.followers}
                        following={user.following}
                        totalStars={totalStars}
                        totalForks={totalForks}
                        topLanguages={topLanguages}
                    />

                    <RecruiterSummary
                        publicRepos={user.public_repos}
                        totalStars={totalStars}
                        totalForks={totalForks}
                        topLanguages={topLanguages}
                    />

                    <RepoList title="Top Repositories" repos={topRepos} />

                    <RepoList
                        title="Recently Updated Repositories"
                        repos={recentlyUpdatedRepos}
                    />
                </div>
            )}
        </main>
    );
}