import { ProblemList } from "../components/problemSection/ProblemList";
import { SimilarProblemList } from "../components/similarProblemSection/SimilarProblemList";

const MainPage = () => {
  return (
    <main
      className={
        "flex flex-row justify-center gap-[16px] my-[14px] h-[calc(100vh_-_28px)]"
      }
    >
      <SimilarProblemList />
      <ProblemList />
    </main>
  );
};

export default MainPage;
