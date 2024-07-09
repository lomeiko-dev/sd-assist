<script setup lang='ts'>
import { sortForm } from 'features/sort-lot';
import Container from 'shared/ui/container/ui/container.vue';
import { layoutApp } from 'widgets/layouts/layout-app';
import { lotListCommon } from 'widgets/lot-list';
</script>
<template>
    <layoutApp is-show-navigator>
        <Container is-mobile-padding>
            <h3 class="text-[32px] font-bold text-black mt-[32px]">Все предложения</h3>
            <sortForm class="mt-[18px]"/>
            <lotListCommon/>
        </Container>
    </layoutApp>
</template>