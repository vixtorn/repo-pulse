export interface GitHubUser {
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    bio: string | null;
    followers: number;
    following: number;
    public_repos: number;
    location: string | null;
    company: string | null;
    blog: string | null;
}

export interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    topics: string[];
}