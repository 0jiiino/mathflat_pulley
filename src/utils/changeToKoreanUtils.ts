export const changeLevelToKorean = (level: number) => {
  switch (level) {
    case 1:
      return {
        title: "하",
        color: "#5C5C5C",
      };

    case 2:
      return {
        title: "중하",
        color: "#00ABFF",
      };

    case 3:
      return {
        title: "중",
        color: "#54C0B1",
      };

    case 4:
      return {
        title: "상",
        color: "#FFC64D",
      };

    case 5:
      return {
        title: "최상",
        color: "#FD5354",
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
