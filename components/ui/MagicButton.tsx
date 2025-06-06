import React, { ReactNode } from "react";

const MagicButton = ({
  text,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  text: String;
  icon: ReactNode;
  position: String;
  handleClick?: () => void;
  otherClasses?: String;
}) => {
  return (
    <button className="relative w-full inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none md:w-60">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
