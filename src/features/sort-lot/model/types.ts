export enum enumSorting {
  LOW_COST = "LOW-COST", // дешевые
  EXPENSIVE = "EXPENSIVE", // дорогие
  TODAY = "TODAY", // только сегодня
  ALL = "ALL",
}

export interface IItemSort {
    name: string,
    typeSort: enumSorting
}
