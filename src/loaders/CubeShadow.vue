<template>
  <div v-bind:style="styles" class="spinner spinner--cube-shadow"></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CubeShadow",
  props: {
    color: {
      type: String,
      default: "#000",
    },
    height: {
      type: Number,
      default: 40,
    },
    width: {
      type: Number,
      default: 40,
    },
  },
  computed: {
    styles() {
      return {
        backgroundColor: this.color,
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
  },
});
</script>

<style scoped>
.spinner {
  animation-duration: 1.8s;
  animation: cube-shadow-spinner 1.8s cubic-bezier(0.75, 0, 0.5, 1) infinite;
}
@keyframes cube-shadow-spinner {
  50% {
    border-radius: 50%;
    transform: scale(0.5) rotate(360deg);
  }
  100% {
    transform: scale(1) rotate(720deg);
  }
}
</style>
