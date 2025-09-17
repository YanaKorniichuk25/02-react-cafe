import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { useState } from "react";
import VoteOptions from "../VoteOptions/VoteOptions";
import type { Votes, VoteType } from "../../types/votes";

export default function App() {
  // Початковий стан
  const initialVotes: Votes = { good: 0, neutral: 0, bad: 0 };
  const [votes, setVotes] = useState<Votes>(initialVotes);

  // Функція для голосування
  const handleVote = (type: VoteType) => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  };

  // Функція для скидання голосів
  const resetVotes = () => {
    setVotes(initialVotes);
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={votes.good + votes.neutral + votes.bad > 0}
      />
    </div>
  );
}
