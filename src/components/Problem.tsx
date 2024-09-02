import { ProblemDataType } from "../services/problemMapper";
import { useActiveData } from "../store/useActiveData";
import {
  changeLevelToKorean,
  changeTypeTokorean,
} from "../utils/changeToKoreanUtils";

export const Problem = ({
  problemData: { level, type, problemImageUrl, answerRate, id },
}: {
  problemData: ProblemDataType;
}) => {
  const { title: koreanLevel, color: textColor } = changeLevelToKorean(level);
  const koreanType = changeTypeTokorean(type);

  const activeData = useActiveData((state) => state.activeData);

  return (
    <section
      className={`flex gap-[15px] w-full px-[16px] py-[24px] bg-white ${activeData?.id === id ? "border-solid border-b-[3px] border-r-[3px] border-l-[3px] border-b-[#00ABFF] border-r-[#00ABFF] border-l-[#00ABFF]" : ""} rounded-b-[12px]`}
    >
      <div className="flex flex-col gap-[4px] min-w-[40px]">
        <div
          className={`flex justify-center items-center h-[20px] rounded-[4px] bg-[#F5F5F5] ${textColor}`}
        >
          <span className="leading-[18px] text-[14px] font-normal">
            {koreanLevel}
          </span>
        </div>
        <div className="flex justify-center items-center h-[20px] rounded-[4px] bg-[#F5F5F5]">
          <span className="leading-[18px] text-[12px] font-normal text-[#707070]">
            {`${answerRate}%`}
          </span>
        </div>
        <div className="flex justify-center items-center h-[20px] rounded-[4px] bg-[#F5F5F5]">
          <span className="leading-[18px] text-[12px] font-normal text-[#959595]">
            {koreanType}
          </span>
        </div>
      </div>

      <div className="flex">
        <img src={problemImageUrl} />
      </div>
    </section>
  );
};
