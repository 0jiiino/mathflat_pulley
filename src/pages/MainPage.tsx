import { useQuery } from "@tanstack/react-query";

import { getProblemList } from "../services/problemApi";

const MainPage = () => {
  const { isLoading } = useQuery({
    queryKey: ["problemList"],
    queryFn: () => getProblemList(),
  });

  if (isLoading) return null;

  return (
    <main
      className={
        "flex flex-row justify-center gap-[16px] my-[14px] h-[calc(100vh_-_28px)]"
      }
    ></main>
  );
};

export default MainPage;
