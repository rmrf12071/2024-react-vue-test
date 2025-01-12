<script setup lang="tsx">
import { computed, ref } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import { addTest, TestComponent, TestFuncComponent } from '@/components/TestComponents';

const router = useRouter();
const route = useRoute();
const count = ref(0);
const countUp = () => count.value++;
const v = computed(() => {
  console.log('compute', count.value);
  return <TestComponent count={count.value} />;
});
const Render = () => <TestComponent count={count.value} />;
const onNav = () => router.push('/');

onBeforeRouteLeave(async (to, from) => {
  console.log(to, from, count.value);
  console.log(addTest());
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(addTest());
  return count.value > 10;
});
onBeforeRouteUpdate(async (to) => {
  console.log(to);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  count.value = 0;
});
</script>

<template>
  <div>
    <span>{{ route.params.pathMatch[0] }}</span>
    <!-- <v /> is not working -->
    <component :is="v" />

    <TestFuncComponent :count />
    <Render />
    <button @click="countUp">Click Me</button>
    <button @click="onNav">Click Me (2)</button>
  </div>
</template>

<style lang="css" scoped>
div {
  display: flex;
  flex-direction: column;
}
span {
  color: green;
}
button {
  background-color: yellow;
}
</style>
