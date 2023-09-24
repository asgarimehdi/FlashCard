<script setup>
   import { ref, computed } from "vue";
  
const bar = defineProps(["barPercentage"])
//const barPercentage1=20
console.log(bar.barPercentage)
//const percentage=bar.barPercentage * 33
const percentage = computed(() => `${bar.barPercentage/3 * 100}`)
</script>

<template>
    <header>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" :style="{ 'width': percentage + '%' }"
                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </header>
</template>
