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
.title1 {
  font-size: 4rem;
}
@media (min-width: 768px) {
  .title1 {
    font-size: 4vw;
  }
}
@media (min-width: 1024px) {
  .title1 {
    font-size: 2vw;
  }
}
@media (min-width: 1280px) {
  .title1 {
    font-size: 2vw;
  }
}
</style>
