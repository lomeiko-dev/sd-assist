<script setup lang='ts'>
    import {layoutApp} from 'widgets/layouts/layout-app'
import Intro from './components/intro.vue';
import CustomerBase from './components/customer-base.vue';
import { lotListPreview } from 'widgets/lot-list';
import LotListPreview from 'widgets/lot-list/ui/preview/lot-list-preview.vue';
import { container } from 'shared/ui/container';
</script>
<template>
    <div>
        <layout-app>
            <Intro class="mt-[73px]"/>
            <container>
                <lotListPreview class="my-[100px]" title="Недавно размещенные лоты" to-all-offers="/"/>
            </container>
            <CustomerBase/>
        </layout-app>
    </div>
</template>
<style lang='scss'>
        
</style>