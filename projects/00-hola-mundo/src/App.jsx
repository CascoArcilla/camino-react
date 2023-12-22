import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "mard_io",
    user: "Mario",
    initialIsFollowy: true,
  },
  {
    userName: "link00",
    user: "Linl",
    initialIsFollowy: false,
  },
  {
    userName: "benito11",
    user: "Benito Smul",
    initialIsFollowy: true,
  },
  {
    userName: "clet1o",
    user: "Cleto Morales",
    initialIsFollowy: false,
  },
];

export function App() {
  const formatUserNanme = (userName) => `@${userName}`;

  return (
    <section className="App">
      {users.map((user) => (
        <TwitterFollowCard
          key={user.userName}
          {...user}
          format={formatUserNanme}
        >
          {user.user}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
