import { useQueryClient } from "@tanstack/react-query";

import { useActiveData } from "../../store/useActiveData";
import AddCircleIcon from "../icons/AddCircleIcon";
import { ProblemDataType } from "../../services/problemMapper";

export const ActiveButton = ({
  problemData,
}: {
  problemData: ProblemDataType;
}) => {
  const { activeData, setActiveData } = useActiveData();

  const circleColor = {
    icon: activeData?.id === problemData.id ? "#00ABFF" : "#C0C0C0",
    text: activeData?.id === problemData.id ? "#00ABFF" : "#959595",
  };

  const queryClient = useQueryClient();

  const handleChangeActive = (newData: ProblemDataType) => {
    if (activeData) {
      queryClient.invalidateQueries({ queryKey: ["similarList"] });
    }

    setActiveData(newData);
  };

  return (
    <div
      className="flex gap-[4px] items-center min-w-fit cursor-pointer"
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
