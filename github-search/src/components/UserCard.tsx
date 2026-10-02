import { FaGithubAlt } from "react-icons/fa";
import type { GitHubUser } from "../types";


const UserCardComponent = ({ user }: {user: GitHubUser}) => {
  return <UserCard user={user} />;
};

export default UserCardComponent;

const UserCard = ({ user }: {user: GitHubUser}) => {
  return (
    <div className="user-card">
      <img
        className="avatar"
        src={user.avatar_url}
        alt={user.name || user.login}
      />

      <h2>{user.name || user.login}</h2>

      {user.bio && <p className="bio">{user.bio}</p>}

      <a
        href={user.html_url}
        className="profile-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubAlt /> View GitHub Profile
      </a>
    </div>
  );
};
