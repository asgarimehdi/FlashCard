<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">راهنمای اینوری</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <Avatar />
      من متن باز شونده از سمت چپ هستم
    </div>
  </div>
</template>
<script setup>
import Avatar from '../components/Avatar.vue'
</script>