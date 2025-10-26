import React from "react";

interface GitHubData {
  repos: number;
  followers: number;
  following: number;
}

const GitHubCard: React.FC<GitHubData> = ({ repos, followers, following }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 w-64 text-center">
      <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">
        GitHub
      </h2>
      <div className="flex flex-col items-center space-y-3">
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center text-3xl">
          👤
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          <strong>{repos}</strong> Repos
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <strong>{followers}</strong> Followers
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <strong>{following}</strong> Following
        </p>
      </div>
    </div>
  );
};

export default GitHubCard;
