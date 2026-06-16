import type { GitHubRepo } from "../types/github";
import { formatDate } from "../utils/repoAnalytics";

interface RepoCardProps {
    repo: GitHubRepo;
}

export default function RepoCard({ repo }: RepoCardProps) {
    return (
        <article className="repo-card">
            <div>
                <h3>{repo.name}</h3>
                <p>{repo.description || "No description provided."}</p>
            </div>

            <div className="repo-meta">
                {repo.language && <span>{repo.language}</span>}
                <span>★ {repo.stargazers_count}</span>
                <span>⑂ {repo.forks_count}</span>
                <span>Updated {formatDate(repo.updated_at)}</span>
            </div>

            <a href={repo.html_url} target="_blank" rel="noreferrer">
                View Repository
            </a>
        </article>
    );
}