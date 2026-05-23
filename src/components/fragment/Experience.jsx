import AosCom from "../../../utils/AosCom";

const Experience = ({ duration, cardLogo, cardText, subCardText }) => {
  return (
    <AosCom dataAos="fade-down" dataAosDelay={50} dataAosOnce={"true"} dataAosDuration={duration}>
      <div className="flex flex-col h-16 text-center md:h-[4.7rem] border w-[6.6rem] md:w-28 lg:w-32 rounded-xl border-cyan-500/15 bg-slate-950/60 backdrop-blur-md">
        <div className="flex flex-col">
          <p className="mx-auto mt-[0.20rem] md:mt-[0.35rem] py-1 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,255,255,0.25)]">
            {cardLogo}
          </p>
          <h5 className="text-xs font-semibold md:h-[1.35rem] md:text-sm text-slate-200 font-mono">
            {cardText}
          </h5>
          <p className="text-[0.60rem] font-semibold text-slate-400">{subCardText}</p>
        </div>
      </div>
    </AosCom>
  );
};

export default Experience;
