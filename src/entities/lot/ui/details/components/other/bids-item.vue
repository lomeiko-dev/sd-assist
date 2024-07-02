<script setup lang='ts'>
import { IBid } from 'entities/lot/model';
import { formatDate } from 'shared/lib/utils/formatDate';
import { Currency } from 'shared/ui/currency-manager';


interface IProps {
    bid: IBid
    currency: Currency
    index: number
}

const props = defineProps<IProps>();
    
</script>
<template>
    <div class="flex flex-row justify-between text-sm font-normal">
        <p>Участник {{ props.index }}</p>
        <p class="mini-tablet:block hidden">{{ formatDate(props.bid.date) }}</p>
        <p class="text-sm font-bold text-primary">{{ props.bid.rate }} {{ props.currency }}</p>
    </div>
</template>