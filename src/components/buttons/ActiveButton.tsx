import { useMemo } from "react";
import { useActiveData } from "../../store/useActiveData";
import AddCircleIcon from "../icons/AddCircleIcon";
import { ProblemDataType } from "../../types/apiTypes";

export const ActiveButton = ({
  problemData,
}: {
  problemData: ProblemDataType;
}) => {
  const { activeData, setActiveData } = useActiveData();

  const circleColor = useMemo(
    () => ({
      icon: activeData?.id === problemData.id ? "#00ABFF" : "#C0C0C0",
      text: activeData?.id === problemData.id ? "#00ABFF" : "#959595",
    }),
    [activeData?.id]
  );

  const handleChangeActive = (newData: ProblemDataType) =>
    setActiveData(newData);

  return (
    <div
      className="flex gap-[4px] items-center min-w-fit"
      onClick={() => handleChangeActive(problemData)}
    >
      <AddCircleIcon backgroundColor={circleColor.icon} />
      <span
        className={`leading-[18px] text-[12px] font-normal text-[${circleColor.text}]`}
      >
        유사문제
      </span>
    </div>
  );
};
