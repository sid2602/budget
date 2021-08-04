export const convertDateToString = (date: string) => {
  const newDate = new Date(Date.parse(date));

  const dd = String(newDate.getDate()).padStart(2, "0");
  const mm = String(newDate.getMonth() + 1).padStart(2, "0");
  const yyyy = newDate.getFullYear();

  return dd + "." + mm + "." + yyyy;
};
