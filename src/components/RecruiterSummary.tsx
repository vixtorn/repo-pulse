

interface RecruiterSummaryProps {
    publicRepos: number;
    totalStars: number;
    totalForks: number;
    topLanguages: string[];
}

export default function RecruiterSummary({
    publicRepos,
    totalStars,
    totalForks,
    topLanguages,
}: RecruiterSummaryProps) {
    return (
        <section className="summary-card">
            <h2>Recruiter Summary</h2>

            <p>
                This GitHub profile contains <strong>{publicRepos}</strong> public
                repositories, with <strong>{totalStars}</strong> stars and{" "}
                <strong>{totalForks}</strong> forks across visible projects.
            </p>

            <p>
                Main technologies detected:{" "}
                <strong>
                    {topLanguages.length > 0 ? topLanguages.join(", ") : "No language data"}
                </strong>
                .
            </p>
        </section>
    );
}