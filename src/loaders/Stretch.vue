<template>
  <div v-bind:style="styles" class="spinner spinner--stretch">
    <div v-bind:style="rectStyles" class="rect rect-1"></div>
    <div v-bind:style="rectStyles" class="rect rect-2"></div>
    <div v-bind:style="rectStyles" class="rect rect-3"></div>
    <div v-bind:style="rectStyles" class="rect rect-4"></div>
    <div v-bind:style="rectStyles" class="rect rect-5"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Stretch",
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
    rectStyles () {
      return {
        backgroundColor: this.color,
        animationDuration: "1.2s"
      }
    },
    styles() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
  },
});
</script>

<style scoped>
.spinner {
  display: flex;
  text-align: center;
  justify-content: space-evenly;
}

.spinner * {
  line-height: 0;
  box-sizing: border-box;
}
.rect {
  animation: sk-stretchdelay 1.2s ease-in-out infinite;
}
.spinner > div {
  height: 100%;
  width: 15%;
}

.spinner .rect-2 {
  animation-delay: -1.1s;
}

.spinner .rect-3 {
  animation-delay: -1s;
}

.spinner .rect-4 {
  animation-delay: -0.9s;
}

.spinner .rect-5 {
  animation-delay: -0.8s;
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>
