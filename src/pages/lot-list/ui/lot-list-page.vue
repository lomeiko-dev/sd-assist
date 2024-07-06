<script setup lang='ts'>
import Container from 'shared/ui/container/ui/container.vue';
import { layoutApp } from 'widgets/layouts/layout-app';
import { lotListCommon } from 'widgets/lot-list';
import {accountNavigator, accountNavigatorStore} from 'widgets/account-navigator'
import {onMounted} from 'vue'

const store = accountNavigatorStore();

onMounted(() => {
    store.handleLinkClick(undefined);
})

</script>
<template>
    <layoutApp>
        <accountNavigator/>
        <Container>
            <lotListCommon/>
        </Container>
    </layoutApp>
</template>