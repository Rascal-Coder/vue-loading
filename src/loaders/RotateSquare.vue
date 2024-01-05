<template>
  <div
    v-bind:style="styles"
    style="animation-duration: 1.2s"
    class="spinner spinner--rotate-square"
  ></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RotateSquare",
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
  display: inline-block;
  animation: rotateplane 1.2s infinite ease-in-out;
}
@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>
