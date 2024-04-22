<script setup lang="ts">
import { lotCard } from "entities/lot";
import arrow_right from 'shared/assets/img/icons/arrow-right.svg'
import inlineSvg from 'vue-inline-svg'

interface IProps {
  limit?: number;
  title: string;
}

const props = withDefaults(defineProps<IProps>(), {
  limit: 6,
});

//@ts-ignore
const testData: ILot[] = [
  {
    id_lot: "124124/1",
    image_preview: "https://a.d-cd.net/84AAAgFFCOA-1920.jpg",
    seller: 'ООО "Ромашка", Москва',
    release_year: 1999,
    date_create: new Date(),
    date_deadline: new Date(2024, 3, 22, 16, 12, 20),
    mileage: 761000,
    isOpen: true,
    KPP: "АКПП",
    engine: "3.8 л | 250 л.с. | Бензин",
    default_rate: 1000000,
    title: "LADA sedan (Баклажан)",
    bids: [
      {
        userId: 1,
        rate: 1500000,
        date: "2021-01-01T12:00:00.000Z",
      },
      {
        userId: 2,
        rate: 3000000,
        date: "2021-01-01T12:00:00.000Z",
      },
      {
        userId: 3,
        rate: 3150000,
        date: "2021-01-01T12:00:00.000Z",
      },
    ],
  },
  {
    id_lot: "124124/1",
    image_preview: "https://a.d-cd.net/84AAAgFFCOA-1920.jpg",
    seller: 'ООО "Ромашка", Москва',
    release_year: 1999,
    date_create: new Date(),
    date_deadline: new Date(2024, 3, 22, 16, 12, 20),
    mileage: 761000,
    isOpen: true,
    KPP: "АКПП",
    engine: "3.8 л | 250 л.с. | Бензин",
    default_rate: 1000000,
    title: "LADA sedan (Баклажан)",
    bids: [
      {
        userId: 1,
        rate: 1500000,
        date: "2021-01-01T12:00:00.000Z",
      },
      {
        userId: 2,
        rate: 3000000,
        date: "2021-01-01T12:00:00.000Z",
      },
      {
        userId: 3,
        rate: 3150000,
        date: "2021-01-01T12:00:00.000Z",
      },
    ],
  },
  {
    id_lot: "124124/1",
    image_preview: "https://a.d-cd.net/84AAAgFFCOA-1920.jpg",
    seller: 'ООО "Ромашка", Москва',
    release_year: 1999,
    date_create: new Date(),
    date_deadline: new Date(2024, 3, 22, 16, 12, 20),
    mileage: 761000,
    isOpen: true,
    KPP: "АКПП",
    engine: "3.8 л | 250 л.с. | Бензин",
    default_rate: 1000000,
    title: "LADA sedan (Баклажан)",
    bids: [
      {
        userId: 1,
        rate: 1500000,
        date: "2021-01-01T12:00:00.000Z",
      },
      {
        userId: 2,
        rate: 3000000,
        date: "2021-01-01T12:00:00.000Z",
      },
      {
        userId: 3,
        rate: 3150000,
        date: "2021-01-01T12:00:00.000Z",
      },
    ],
  },
  {
    id_lot: "124124/1",
    image_preview: "https://a.d-cd.net/84AAAgFFCOA-1920.jpg",
    seller: 'ООО "Ромашка", Москва',
    release_year: 1999,
    date_create: new Date(),
    date_deadline: new Date(2024, 3, 22, 16, 12, 20),
    mileage: 761000,
    isOpen: true,
    KPP: "АКПП",
    engine: "3.8 л | 250 л.с. | Бензин",
    default_rate: 1000000,
    title: "LADA sedan (Баклажан)",
    bids: [
      {
        userId: 1,
        rate: 1500000,
        date: "2021-01-01T12:00:00.000Z",
      },
      {
        userId: 2,
        rate: 3000000,
        date: "2021-01-01T12:00:00.000Z",
      },
      {
        userId: 3,
        rate: 3150000,
        date: "2021-01-01T12:00:00.000Z",
      },
    ],
  },
  {
    id_lot: "124124/1",
    image_preview: "https://a.d-cd.net/84AAAgFFCOA-1920.jpg",
    seller: 'ООО "Ромашка", Москва',
    release_year: 1999,
    date_create: new Date(),
    date_deadline: new Date(2024, 3, 22, 16, 12, 20),
    mileage: 761000,
    isOpen: true,
    KPP: "АКПП",
    engine: "3.8 л | 250 л.с. | Бензин",
    default_rate: 1000000,
    title: "LADA sedan (Баклажан)",
    bids: [
      {
        userId: 1,
        rate: 1500000,
        date: "2021-01-01T12:00:00.000Z",
      },
      {
        userId: 2,
        rate: 3000000,
        date: "2021-01-01T12:00:00.000Z",
      },
      {
        userId: 3,
        rate: 3150000,
        date: "2021-01-01T12:00:00.000Z",
      },
    ],
  },
  {
    id_lot: "124124/1",
    image_preview: "https://a.d-cd.net/84AAAgFFCOA-1920.jpg",
    seller: 'ООО "Ромашка", Москва',
    release_year: 1999,
    date_create: new Date(),
    date_deadline: new Date(2024, 3, 22, 16, 12, 20),
    mileage: 761000,
    isOpen: true,
    KPP: "АКПП",
    engine: "3.8 л | 250 л.с. | Бензин",
    default_rate: 1000000,
    title: "LADA sedan (Баклажан)",
    bids: [
      {
        userId: 1,
        rate: 1500000,
        date: "2021-01-01T12:00:00.000Z",
      },
      {
        userId: 2,
        rate: 3000000,
        date: "2021-01-01T12:00:00.000Z",
      },
      {
        userId: 3,
        rate: 3150000,
        date: "2021-01-01T12:00:00.000Z",
      },
    ],
  },
];
</script>
<template>
  <div>
    <div class="flex flex-row items-center justify-between">
        <h2 class="text-[32px] font-bold">{{ props.title }}</h2>
        <RouterLink class="flex flex-row items-center gap-[10px] duration-300 hover:gap-[15px]" to="/">
            <p class="text-sm font-normal text-primary">Смотреть все предложения</p>
            <inlineSvg :src="arrow_right"/>
        </RouterLink>
    </div>
    <div class="grid-container gap-[15px] w-full max-w-[1183px] mx-auto justify-center mt-[43px]">
      <lotCard class="min-[690px]:mx-0 mx-auto" v-for="lot in testData" :data="lot" />
    </div>
  </div>
</template>
<style lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
}
</style>
