<script>
export default {
  props: {
    isFullWidth: Boolean,
    isOutlined: Boolean,
  },
};
</script>

<template>
  <!-- FALLTHROUGH ATTRIBUTE WILL BE USED -->
  <button
    class="text-white bg-blue-100 p-3 h-[45px] text-heading-4 font-label font-bold rounded-md flex justify-center items-center"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.fullWidth {
  width: 100%;
}

.outlined {
  background-color: #ffffff;
  border: 1px solid rgb(16 83 183);
  color: rgb(16 83 183);
}
</style>
