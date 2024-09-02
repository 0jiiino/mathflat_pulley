import { useQuery } from "@tanstack/react-query";

import { ProblemContainer } from "./ProblemContainer";
import { getProblemList } from "../../services/problemApi";

export const ProblemList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["problemList"],
    queryFn: () => getProblemList(),
  });

  if (isLoading) return null;

  return (
    <section className="w-[480px] pc:w-[712px] bg-[#5C5C5C] rounded-[12px] flex flex-col gap-[16px] px-[16px] pt-[17px] relative">
      <span className="flex tracking-[-1%] leading-[24px] text-[16px] font-bold text-white">
        학습지 상세 편집
      </span>

      {!data?.problemData.length ? (
        <div className="flex items-center justify-center text-center h-[calc(100%_-_85px)]">
          <p className="leading-[21px] text-[14px] font-normal tracking-[-0.2%] text-white flex">
            학습지 문제수가 없습니다.
            <br />
            다음단계로 넘어가기 위해 문제를 추가해주세요.
          </p>
          <p className="leading-[21px] text-[14px] font-normal tracking-[-0.2%] text-white flex"></p>
        </div>
      ) : (
        <section className="customScrollBar w-full flex flex-col gap-[16px] overflow-x-hidden overflow-y-scroll pb-[70px]">
          {data?.problemData?.map((problem, index) => (
            <ProblemContainer
              key={problem.id}
              problemData={problem}
              order={index + 1}
            />
          ))}
        </section>
      )}

      <footer className="absolute bottom-0 bg-[#5C5C5C] flex justify-end py-[20px] pr-[24px] tracking-[-1%] w-[calc(100%_-_32px)]">
        {!data?.problemData.length ? (
          <span className="leading-[24px] text-[16px] font-bold text-[#FD5354]">
            문제 수 0개
          </span>
        ) : (
          <span className="leading-[24px] text-[16px] font-normal text-white">
            <span className="text-[12px] opacity-50">
              {`하${data?.levelData[1]} · 중하${data?.levelData[2]} · 중${data?.levelData[3]} · 상${data?.levelData[4]} · 최상${data?.levelData[5]}`}
            </span>
            <span className="opacity-50">{" | "}</span>
            {`문제 수 ${data?.problemData.length} 개`}
          </span>
        )}
      </footer>
    </section>
  );
};
