<script setup lang='ts'>
    import {layoutApp} from 'widgets/layouts/layout-app'
import Intro from './components/intro.vue';
import CustomerBase from './components/customer-base.vue';
import { lotListPreview } from 'widgets/lot-list';
import { container } from 'shared/ui/container';
</script>
<template>
    <div>
        <layout-app>
            <Intro class="tablet:mt-[73px] mt-[41px]"/>
            <container is-mobile-padding>
                <lotListPreview class="tablet:my-[100px] my-[41px]" title="Недавно размещенные лоты" to-all-offers="/"/>
            </container>
            <CustomerBase/>
        </layout-app>
    </div>
</template>
<style lang='scss'>
        
</style>