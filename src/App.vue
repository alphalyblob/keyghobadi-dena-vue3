<script setup>

import {RouterView} from 'vue-router'

import TheNav from './components/TheNav.vue'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
import NotFoundView from './views/NotFoundView.vue'

</script>

<template>
  <TheNav />
  <TheHeader/>
  <RouterView></RouterView>
  <TheFooter />
</template>

<style scoped></style>
