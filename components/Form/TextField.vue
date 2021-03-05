<template>
  <input class="form-control text-field" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'TextField',
}
</script>

<style>

.text-field {
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  width: 400px;
}
</style>
