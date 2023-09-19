<script setup>
import TheNav from './components/TheNav.vue';
import TheOffcanvas from './components/TheOffcanvas.vue';


</script>

<template>
<TheNav/>
<TheOffcanvas/>


  <RouterView />
</template>

<style>
.vazir {
  font-family: Vazirmatn;
  font-variation-settings: "wght" 400;
}
</style>
