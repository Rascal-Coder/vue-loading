<template>
  <div v-bind:style="styles" class="spinner spinner--rotate-square-6">
    <div v-bind:style="outerStyles" class="inner-square inner-square-1"></div>
    <div v-bind:style="innerStyles" class="inner-square inner-square-2"></div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "RotateSquare5",
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
    outerWidth() {
      let size = parseInt(Math.max(this.width, this.height));
      return this.calcWidth(size);
    },
    outerStyles() {
      let size = this.outerWidth + "px";
      return {
        border: "2px solid " + this.color,
        width: size,
        height: size,
      };
    },
    innerStyles() {
      let size = this.calcWidth(this.outerWidth) + "px";
      return {
        border: "2px solid " + this.color,
        width: size,
        height: size,
      };
    },
    styles() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
  },
  methods: {
    calcWidth(outerWidth) {
      let r = (45 * Math.PI) / 180;
      let s = Math.abs(Math.cos(r));
      let c = Math.abs(Math.sin(r));
      return (
        (outerWidth * c - outerWidth * s) / (Math.pow(c, 2) - Math.pow(s, 2))
      );
    },
  },
});
</script>
<style scoped>
.spinner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner-square {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
}
.inner-square-1 {
  animation: spinner--rotate-square-6 2.5s linear infinite;
}
.inner-square-2 {
  width: 44px;
  height: 44px;
  animation: spinner--rotate-square-6 2.5s linear infinite;
  animation-direction: reverse;
}
@keyframes spinner--rotate-square-6 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
