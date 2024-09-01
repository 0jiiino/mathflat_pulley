export const changeLevelToKorean = (level: number) => {
  switch (level) {
    case 1:
      return "하";

    case 2:
      return "중하";

    case 3:
      return "중";

    case 4:
      return "상";

    case 5:
      return "최상";
  }
};

export const changeTypeTokorean = (type: number) =>
  type === 1 ? "객관식" : "주관식";
