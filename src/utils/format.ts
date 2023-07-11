export const format = (time: string) => {
  const options = { month: "short", day: "2-digit", year: "numeric" } as const;
  const date = new Date(+time * 1000);
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
