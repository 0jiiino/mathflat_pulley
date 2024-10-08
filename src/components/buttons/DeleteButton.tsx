import { useQueryClient } from "@tanstack/react-query";

import { useActiveData } from "../../store/useActiveData";
import DeleteIcon from "../icons/DeleteIcon";
import {
  ProblemMapperInterface,
  problemMapper,
} from "../../services/problemMapper";

export const DeleteButton = ({ problemId }: { problemId: number }) => {
  const queryClient = useQueryClient();

  const { activeData, setActiveData } = useActiveData();

  const handleDeleteClick = (id: number) => {
    if (id === activeData?.id) {
      setActiveData(null);
    }

    const { problemData } = queryClient.getQueryData([
      "problemList",
    ]) as ProblemMapperInterface;

    const newData = problemData.filter((problem) => problem.id !== id);

    queryClient.setQueryData(["problemList"], () => problemMapper(newData));
  };

  return (
    <div
      className="flex gap-[4px] items-center min-w-fit cursor-pointer"
      onClick={() => handleDeleteClick(problemId)}
    >
      <DeleteIcon />
      <span className="leading-[18px] text-[12px] font-normal text-[#959595]">
        삭제
      </span>
    </div>
  );
};
