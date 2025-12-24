import AosCom from '../../../utils/AosCom'

const Experience = ({duration,cardLogo,cardText,subCardText}) => {
  return (    
            <AosCom
              dataAos="fade-down"
              dataAosDelay={50}
              dataAosOnce={"true"}
              dataAosDuration={duration}
            >
              <div className="flex flex-col h-16  text-center md:h-[4.7rem] border w-[6.6rem] md:w-28 lg:w-32 rounded-xl border-slate-200 bg-white">
                <div className="flex flex-col">
                  <p className="text-slate-500 mx-auto mt-[0.20rem] md:mt-[0.35rem] py-1">{cardLogo}</p>
                  <h5 className="text-xs font-medium md:h-[1.35rem] md:text-sm text-slate-800">
                    {cardText}
                  </h5>
                  <p className="text-[0.60rem] font-semibold text-slate-500">{subCardText}</p>
                </div>
              </div>
            </AosCom>
  )
}

export default Experience