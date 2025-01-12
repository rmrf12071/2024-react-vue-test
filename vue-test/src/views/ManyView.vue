<script setup lang="ts">
import ListItem from '@/components/ListItem.vue';
</script>

<template>
  <ul>
    <li v-for="idx in 1000" :key="idx">
      <ListItem :idx />
    </li>
  </ul>
</template>

<style lang="css" scoped>
li {
  display: flex;
  justify-content: space-between;
}
</style>
