<script setup>
   import { ref, computed } from "vue";
  
const bar = defineProps(["barPercentage"])

//console.log(bar.barPercentage)

const percentage = computed(() => `${bar.barPercentage/3 * 100}`)
</script>

<template>
    <header>
        <div class=" ">
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" :style="{ 'width': percentage + '%' }"
                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    </header>
</template>
