import type { GitHubRepo } from "../types/github";

export function getTotalStars(repos: GitHubRepo[]): number {
    return repos.reduce((total, repo) => total + repo.stargazers_count, 0);
}

export function getTotalForks(repos: GitHubRepo[]): number {
    return repos.reduce((total, repo) => total + repo.forks_count, 0);
}

export function getTopLanguages(repos: GitHubRepo[]): string[] {
    const languageMap: Record<string, number> = {};

    repos.forEach((repo) => {
        if (!repo.language) return;
        languageMap[repo.language] = (languageMap[repo.language] || 0) + 1;
    });

    return Object.entries(languageMap)
        .sort((a, b) => b[1] - a[1])
        .map(([language]) => language)
        .slice(0, 5);
}

export function getTopRepos(repos: GitHubRepo[]): GitHubRepo[] {
    return [...repos]
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);
}

export function getRecentlyUpdatedRepos(repos: GitHubRepo[]): GitHubRepo[] {
    return [...repos]
        .sort(
            (a, b) =>
                new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        )
        .slice(0, 5);
}

export function formatDate(date: string): string {
    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(date));
}