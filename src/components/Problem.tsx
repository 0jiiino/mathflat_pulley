import { ProblemDataType } from "../types/apiTypes";
import {
  changeLevelToKorean,
  changeTypeTokorean,
} from "../utils/changeKoreaUtils";

export const Problem = ({
  problemData: { level, type, problemImageUrl, answerRate },
}: {
  problemData: ProblemDataType;
}) => {
  const koreanLevel = changeLevelToKorean(level);
  const koreanType = changeTypeTokorean(type);

  return (
    <section className="flex gap-[15px] w-full px-[16px] py-[24px] bg-white">
      <div className="flex flex-col gap-[4px] min-w-[40px]">
        <div className="flex justify-center items-center h-[20px] rounded-[4px] bg-[#F5F5F5]">
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
