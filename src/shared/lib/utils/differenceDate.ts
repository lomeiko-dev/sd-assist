interface IResultDate {
  days: number;
  minutes: number;
  hours: number;
}

export const differenceDate = (date1: Date, date2: Date): IResultDate => {
  const result = Number(date1) - Number(date2);
  const hour = 1000 * 60 * 60;
  const day = hour * 24;
  const days = Math.floor(result / day + 1);
  const hours = Math.floor((result % day) / (1000 * 60 * 60) + 1);
  const minutes = Math.floor((result % hour) / (1000 * 60));

  return {
    days,
    minutes,
    hours,
  };
};
