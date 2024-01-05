<template>
  <div v-bind:style="styles" class="spinner spinner--rotate-square-2"></div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "RotateSquare2",
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
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
  },
});
</script>

<style scoped>
.spinner {
  position: relative;
}

.spinner * {
  line-height: 0;
  box-sizing: border-box;
}

.spinner:before {
  content: "";
  width: 100%;
  height: 20%;
  min-width: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  bottom: 0%;
  left: 0;
  border-radius: 50%;
  animation: rotate-square-2-shadow 0.5s linear infinite;
}

.spinner:after {
  content: "";
  width: 100%;
  height: 100%;
  background: v-bind(color);
  animation: rotate-square-2-animate 0.5s linear infinite;
  position: absolute;
  bottom: 40%;
  left: 0;
  border-radius: 3px;
}

@keyframes rotate-square-2-animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(20%) rotate(22.5deg);
  }
  50% {
    transform: translateY(40%) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 50%;
  }
  75% {
    transform: translateY(20%) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes rotate-square-2-shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>
