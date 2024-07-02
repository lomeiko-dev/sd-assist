<script setup lang='ts'>
import { ILot, getCompletedLotsByUserId, lotItem } from 'entities/lot';
import { container } from 'shared/ui/container';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { accountNavigator, accountNavigatorStore, enumAccountNavigator } from 'widgets/account-navigator';
import { layoutApp } from 'widgets/layouts/layout-app';

const lots = ref<ILot[]>([])

const store = accountNavigatorStore();

onMounted(async () => {
    const result = await getCompletedLotsByUserId(1);

    if(result.status === 200){
        lots.value = result.data;
        store.handleLinkClick(enumAccountNavigator.MY_COMPLETED)
        store.setCounting(enumAccountNavigator.MY_COMPLETED, result.data.length)
    }
})
    
</script>
<template>
    <layoutApp>
        <accountNavigator/>
        <container class="mt-10 mb-10">
            <h3 class="text-2xl font-bold text-primary">Завершенные лоты:</h3>
            <div class="flex flex-col gap-5 mt-5">
                <lotItem v-for="item in lots" :data="item"/>
            </div>
        </container>
    </layoutApp>
</template>