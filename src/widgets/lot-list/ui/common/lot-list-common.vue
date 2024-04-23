<script setup lang='ts'>
import { lotItem } from 'entities/lot';
import { pagination } from 'shared/ui/pagination';


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
        <div class="flex flex-col">
          <div v-for="item in testData" class="w-full max-w-[904px] border-y border-solid border-primary/20 py-[23px]">
            <lotItem :data="item"/>
          </div>
          <pagination class="my-10" :total-count="10"/>
        </div>
    </div>
</template>
<style lang='scss'>
        
</style>