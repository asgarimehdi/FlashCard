<script setup>
   import { ref, computed } from "vue";
  
const bar = defineProps(["barPercentage"])

console.log(bar.barPercentage)

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
