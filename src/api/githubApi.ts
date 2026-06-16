import type { GitHubRepo, GitHubUser } from "../types/github";

const BASE_URL = "https://api.github.com";

async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("GitHub user not found.");
        }

        if (response.status === 403) {
            throw new Error("GitHub API rate limit exceeded. Try again later.");
        }

        throw new Error("Something went wrong while fetching GitHub data.");
    }

    return response.json();
}

export async function getGitHubUser(username: string): Promise<GitHubUser> {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    return handleResponse<GitHubUser>(response);
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
    const response = await fetch(
        `${BASE_URL}/users/${username}/repos?sort=updated&per_page=100`
    );

    return handleResponse<GitHubRepo[]>(response);
}