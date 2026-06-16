import type { GitHubUser } from "../types/github";

interface ProfileCardProps {
    user: GitHubUser;
}

export default function ProfileCard({ user }: ProfileCardProps) {
    return (
        <section className="profile-card">
            <img src={user.avatar_url} alt={user.login} />

            <div>
                <h2>{user.name || user.login}</h2>
                <p className="username">@{user.login}</p>

                {user.bio && <p className="bio">{user.bio}</p>}

                <div className="profile-meta">
                    {user.location && <span>{user.location}</span>}
                    {user.company && <span>{user.company}</span>}
                </div>

                <a href={user.html_url} target="_blank" rel="noreferrer">
                    View GitHub Profile
                </a>
            </div>
        </section>
    );
}