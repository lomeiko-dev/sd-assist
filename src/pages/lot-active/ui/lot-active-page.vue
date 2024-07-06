<script setup lang='ts'>
import { ILot, getActiveLotsByUserId, lotItem } from 'entities/lot';
import { container } from 'shared/ui/container';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { accountNavigator, accountNavigatorStore, enumAccountNavigator } from 'widgets/account-navigator';
import { layoutApp } from 'widgets/layouts/layout-app';
import {useRouter} from 'vue-router'
import {Routes} from 'shared/config/routes'

const lots = ref<ILot[]>([])
const store = accountNavigatorStore()

const router = useRouter();

onMounted(async () => {
    const result = await getActiveLotsByUserId(1);

    if(result.status === 200){
        store.handleLinkClick(enumAccountNavigator.MY_ACTIVITY)
        store.setCounting(enumAccountNavigator.MY_ACTIVITY, result.data.length)
        lots.value = result.data
    }
})

const goLotHandler = (id: number) => {
    router.push({path: `${Routes.LOT_DETAILS.name}/${id}`})
}
    
</script>
<template>
    <layoutApp>
        <accountNavigator/>
        <container class="mt-10">
            <h3 class="text-2xl font-bold text-primary mt-5">Активные лоты:</h3>
            <div class="flex flex-col gap-5 mt-5">
                <lotItem v-for="item in lots" :data="item">
                    <template #features>
                        <button @click="goLotHandler(item.id || 0)" class="bg-primary rounded-md py-[6px] text-base font-normal text-white w-full">Перейти к лоту</button>
                    </template>
                </lotItem>
            </div>
        </container>
    </layoutApp>
</template>