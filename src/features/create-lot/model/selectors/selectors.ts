import { IOption } from "../types";

export const objectsAuction: IOption[] = [
  {
    title: "Транспортное средство",
    value: "ts",
  },
];

export const insurances: IOption[] = [
  {
    title: "ОСАГО",
    value: "osago",
  },
  {
    title: "КАСКО",
    value: "kasko",
  },
];

export const typeAuction: IOption[] = [
  {
    title: "Открытый",
    value: true,
  },
  {
    title: "Закрытый",
    value: false,
  },
];

export const offerPeriods: IOption[] = [
  {
    title: "44",
    value: "44",
  },
  {
    title: "45",
    value: "45",
  },
  {
    title: "46",
    value: "46",
  },
];

export const typeCar: IOption[] = [
  {
    title: "Легковые",
    value: "lungs",
  },
  {
    title: "Легкие коммерческие",
    value: "light-com",
  },
  {
    title: "Седельные тягачи",
    value: "com",
  },
  {
    title: "Тягачи",
    value: "truck",
  },
  {
    title: "Грузовики",
    value: "cargo",
  },
  {
    title: "Прицепы",
    value: "trailers",
  },
  {
    title: "Мотоциклы",
    value: "mot",
  },
];

export const carBody: IOption[] = [
  {
    title: "Седан",
    value: "sedan",
  },
  {
    title: "Хэтчбек",
    value: "hatchback",
  },
  {
    title: "Универсал",
    value: "universal",
  },
  {
    title: "Внедорожник",
    value: "wagon",
  },
  {
    title: "Купе",
    value: "coupe",
  },
  {
    title: "Кабриолет",
    value: "cabriolet",
  },
  {
    title: "Кроссовер",
    value: "crossover",
  },
  {
    title: "Минивэн",
    value: "minivan",
  },
  {
    title: "Пикап",
    value: "pickup",
  },
];

export const damageClassification: IOption[] = [
  {
    title: "Без повреждений",
    value: "no-damage",
  },
  {
    title: "Малые повреждения",
    value: "small-damage",
  },
  {
    title: "Умеренные повреждения",
    value: "moderate-damage",
  },
  {
    title: "Средние повреждения",
    value: "middle-damage",
  },
  {
    title: "Сильные повреждения",
    value: "strong-damage",
  },
  {
    title: "Очень сильные повреждения",
    value: "very-strong-damage",
  },
];

export const typePassportPTS: IOption[] = [
  {
    title: "Бумажный",
    value: "paper",
  },
  {
    title: "Электронный",
    value: "electronic",
  },
];

export const typeEngine: IOption[] = [
  {
    title: "Бензиновый",
    value: "petrol",
  },
  {
    title: "Дизельный",
    value: "diesel",
  },
  {
    title: "Гибридный",
    value: "hybrid",
  },
  {
    title: "Электрический",
    value: "electric",
  },
];

export const typeDrive: IOption[] = [
  {
    title: "Передний",
    value: "front",
  },
  {
    title: "Задний",
    value: "back",
  },
  {
    title: "Полный",
    value: "full",
  },
];

export const typeTransmission: IOption[] = [
  {
    title: "Механическая",
    value: "mechanic",
  },
  {
    title: "Автоматическая",
    value: "automatic",
  },
  {
    title: "Роботизированная",
    value: "robotic",
  },
];
