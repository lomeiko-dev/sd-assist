<script setup lang='ts'>
import Container from 'shared/ui/container/ui/container.vue';
import { layoutApp } from 'widgets/layouts/layout-app';
import { lotListCommon } from 'widgets/lot-list';
</script>
<template>
    <layoutApp is-show-navigator>
        <Container>
            <lotListCommon/>
        </Container>
    </layoutApp>
</template>