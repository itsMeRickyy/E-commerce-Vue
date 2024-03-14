<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <div v-if="show">
    <h2>Warning!</h2>
    <p>Are you sure you want to remove all items from the cart?</p>
    <button @click="$emit('confirm')">Yes</button>
    <button @click="$emit('cancel')">No</button>
  </div>
</template>
