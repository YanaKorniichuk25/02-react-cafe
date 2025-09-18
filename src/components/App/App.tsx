import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { useState } from "react";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import type { Votes, VoteType } from "../../types/votes";
import Notification from "../Notification/Notification";

export default function App() {
  const initialVotes: Votes = { good: 0, neutral: 0, bad: 0 };
  const [votes, setVotes] = useState<Votes>(initialVotes);

  const handleVote = (key: VoteType) => {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const resetVotes = () => {
    setVotes(initialVotes);
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0 ? true : false}
      />

      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
