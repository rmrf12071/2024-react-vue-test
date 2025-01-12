<script setup lang="ts">
import { ref } from 'vue';

const { idx } = defineProps<{ idx: number }>();
const checked = ref(false);
</script>

<template>
  <span>{{ `No. ${idx}` }}</span>
  <input type="checkbox" v-model="checked" />
  <input type="checkbox" v-model="checked" />
  <input type="checkbox" v-model="checked" />
</template>
