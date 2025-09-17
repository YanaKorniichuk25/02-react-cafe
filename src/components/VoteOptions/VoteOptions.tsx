//* 🔹 Imports
import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";
//! --------------------------------------

//! 🔹 Interface
interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}
//! --------------------------------------

//! 🔹 Component
export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>
      {canReset ? (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
//! -------------------
