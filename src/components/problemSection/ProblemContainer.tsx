import { Problem } from "../Problem";
import { useActiveData } from "../../store/useActiveData";
import { ProblemDataType } from "../../types/apiTypes";
import { ActiveButton } from "../buttons/ActiveButton";
import { DeleteButton } from "../buttons/DeleteButton";

export const ProblemContainer = ({
  problemData,
  order,
}: {
  problemData: ProblemDataType;
  order: number;
}) => {
  const activeData = useActiveData((state) => state.activeData);

  const { id, title } = problemData;

  return (
    <article
      className={`${activeData?.id === problemData.id ? "border-solid border-[3px] border-[#00ABFF]" : ""}`}
    >
      <section className="flex items-center justify-between w-full h-[44px] pl-[28px] pr-[16px] bg-[#FAFAFA] gap-[13px]">
        <div className="flex gap-[32px]">
          <span className="leading-[24px] text-[18px] font-bold tracking-[-1%]">
            {order}
          </span>

          <span className="leading-[21px] text-[14px] font-normal tracking-[-0.2%] text-[#333333] line-clamp-1 break-all">
            {title}
          </span>
        </div>

        <div className="flex gap-[12px] min-w-fit">
          <ActiveButton problemData={problemData} />
          <DeleteButton id={id} />
        </div>
      </section>

      <Problem key={problemData.id} problemData={problemData} />
    </article>
  );
};
