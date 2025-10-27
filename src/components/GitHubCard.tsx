import React, { useEffect, useState } from "react";
import axios from "axios";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

const GitHubCard: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = "racheluwera"; // change this to your GitHub username

  useEffect(() => {
    const fetchGitHubUser = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUser(response.data);
      } catch {
        setError("⚠️ Failed to load GitHub data. Please check the username or internet.");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubUser();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 w-64 text-center">
      <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">
        GitHub
      </h2>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {user && !loading && !error && (
        <div className="flex flex-col items-center space-y-3">
          <img
            src={user.avatar_url}
            alt="Avatar"
            className="w-16 h-16 rounded-full"
          />
          <p className="text-gray-600 dark:text-gray-300">
            <strong>{user.public_repos}</strong> Repos
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>{user.followers}</strong> Followers
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>{user.following}</strong> Following
          </p>
        </div>
      )}
    </div>
  );
};

export default GitHubCard;
