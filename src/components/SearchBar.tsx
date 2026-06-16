
interface SearchBarProps {
    username: string;
    setUsername: (value: string) => void;
    onSearch: () => void;
    loading: boolean;
}

export default function SearchBar({
    username,
    setUsername,
    onSearch,
    loading,
}: SearchBarProps) {
    return (
        <div className="search-card">
            <input
                type="text"
                placeholder="Enter GitHub username..."
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        onSearch();
                    }
                }}
            />

            <button onClick={onSearch} disabled={loading}>
                {loading ? "Analyzing..." : "Analyze"}
            </button>
        </div>
    );
}