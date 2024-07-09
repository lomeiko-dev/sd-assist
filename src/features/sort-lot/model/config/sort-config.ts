import { enumSorting, IItemSort } from "../types";

export const sortConfig: IItemSort[] = [
  {
    name: "Сначала дешевые",
    typeSort: enumSorting.LOW_COST,
  },
  {
    name: "Сначала дорогие",
    typeSort: enumSorting.EXPENSIVE,
  },
  {
    name: "Только сегодня",
    typeSort: enumSorting.TODAY,
  },
  {
    name: "Показать все",
    typeSort: enumSorting.ALL,
  },
];
