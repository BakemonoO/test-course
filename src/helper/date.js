export const getDayMonthYear = (date) => {
  return date
    .toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })
    .replace(" г.", "");
};

export const getFullTime = (date) => {
  return (
    date.toLocaleTimeString("ru-RU", {
      hour: "numeric",
      minute: "numeric"
    }) + " мск"
  );
};
