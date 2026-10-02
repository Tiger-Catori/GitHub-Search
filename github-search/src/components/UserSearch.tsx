import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchGithubUser } from "../api/github";
import UserCardComponent from "./UserCard";

const UserSearchComponent = () => {
  return <UserSearch />;
};

export default UserSearchComponent;

const UserSearch = () => {
  const [username, setUsername] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", submittedUsername],
    queryFn: () => fetchGithubUser(submittedUsername),
    enabled: !!submittedUsername,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedUsername(username.trim());
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter GitHub Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p className="status">Loading...</p>}
      {isError && (
        <p className="status error">
          {error instanceof Error ? error.message : "Something went wrong"}
        </p>
      )}
      {data && <UserCardComponent user={data} />}
    </>
  );
};
