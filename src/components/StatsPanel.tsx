

interface StatsPanelProps {
    publicRepos: number;
    followers: number;
    following: number;
    totalStars: number;
    totalForks: number;
    topLanguages: string[];
}

export default function StatsPanel({
    publicRepos,
    followers,
    following,
    totalStars,
    totalForks,
    topLanguages,
}: StatsPanelProps) {
    return (
        <section className="stats-grid">
            <div className="stat-card">
                <span>Public Repos</span>
                <strong>{publicRepos}</strong>
            </div>

            <div className="stat-card">
                <span>Total Stars</span>
                <strong>{totalStars}</strong>
            </div>

            <div className="stat-card">
                <span>Total Forks</span>
                <strong>{totalForks}</strong>
            </div>

            <div className="stat-card">
                <span>Followers</span>
                <strong>{followers}</strong>
            </div>

            <div className="stat-card">
                <span>Following</span>
                <strong>{following}</strong>
            </div>

            <div className="stat-card languages">
                <span>Top Languages</span>
                <strong>
                    {topLanguages.length > 0 ? topLanguages.join(", ") : "No language data"}
                </strong>
            </div>
        </section>
    );
}