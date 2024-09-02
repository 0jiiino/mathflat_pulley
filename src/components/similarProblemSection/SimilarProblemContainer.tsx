import { Problem } from "../Problem";

import { SwapHorizButton } from "../buttons/SwapHorizButton";
import { AddButton } from "../buttons/AddButton";
import { ProblemDataType } from "../../services/problemMapper";

export const SimilarProblemContainer = ({
  problemData,
  order,
}: {
  problemData: ProblemDataType;
  order: number;
}) => {
  const { title } = problemData;

  return (
    <article>
      <section className="flex items-center justify-between w-full h-[44px] pl-[28px] pr-[16px] bg-[#FAFAFA] gap-[13px] rounded-t-[12px]">
        <div className="flex gap-[32px]">
          <span className="leading-[24px] text-[18px] font-bold tracking-[-1%]">
            {order}
          </span>

          <span className="leading-[21px] text-[14px] font-normal tracking-[-0.2%] text-[#333333] line-clamp-1 break-all">
            {title}
          </span>
        </div>

        <div className="flex gap-[12px] min-w-fit">
          <SwapHorizButton problemData={problemData} />
          <AddButton problemData={problemData} />
        </div>
      </section>

      <Problem key={problemData.id} problemData={problemData} />
    </article>
  );
};
