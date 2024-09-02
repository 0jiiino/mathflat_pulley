export const changeLevelToKorean = (level: number) => {
  switch (level) {
    case 1:
      return {
        title: "하",
        color: "text-gray",
      };

    case 2:
      return {
        title: "중하",
        color: "text-blue",
      };

    case 3:
      return {
        title: "중",
        color: "text-green",
      };

    case 4:
      return {
        title: "상",
        color: "text-yellow",
      };

    case 5:
      return {
        title: "최상",
        color: "text-red",
      };

    default:
      return {
        title: "",
        color: "",
      };
  }
};

export const changeTypeTokorean = (type: number) =>
  type === 1 ? "객관식" : "주관식";
