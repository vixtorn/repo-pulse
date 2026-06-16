import type { GitHubRepo } from "../types/github";
import RepoCard from "./RepoCard";

interface RepoListProps {
    title: string;
    repos: GitHubRepo[];
}

export default function RepoList({ title, repos }: RepoListProps) {
    return (
        <section className="repo-section">
            <h2>{title}</h2>

            <div className="repo-list">
                {repos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </div>
        </section>
    );
}