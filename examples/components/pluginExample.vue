<template>
  <div class="card vld-parent mb-3" ref="formContainer">
    <div class="card-body">
      <h5 class="card-title">Use as plugin</h5>

      <div class="form-group m-0">
        <label>Loader shape</label>
        <select class="form-control-sm text-capitalize" v-model="loader">
          <option v-for="(item, index) in loadersList" :key="index">
            {{ item }}
          </option>
        </select>
      </div>

      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="input-full-page-2"
          v-model="fullPage"
        />
        <label class="custom-control-label" for="input-full-page-2"
          >Full page?</label
        >
      </div>

      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="input-cancel-2"
          v-model="canCancel"
        />
        <label class="custom-control-label" for="input-cancel-2"
          >User can cancel?</label
        >
      </div>

      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="input-slot-2"
          v-model="useSlot"
        />
        <label class="custom-control-label" for="input-slot-2"
          >Use slot? (replace shape)</label
        >
      </div>

      <div class="form-group m-0">
        <label>Color</label>
        <input type="color" v-model="color" />
      </div>

      <div class="form-group m-0">
        <label>Background color</label>
        <input type="color" v-model="bgColor" />
      </div>

      <div class="form-group">
        <label>Height</label>
        <input
          type="range"
          min="10"
          step="5"
          max="256"
          v-model.number="height"
        />
        <span class="text-muted">{{ height }}</span>
      </div>

      <div class="form-group">
        <label>Width</label>
        <input
          type="range"
          min="10"
          step="5"
          max="256"
          v-model.number="width"
        />
        <span class="text-muted">{{ width }}</span>
      </div>

      <div class="form-group mt-3">
        <button
          class="btn btn-outline-primary btn-sm"
          @click.prevent="simulate"
        >
          Show loader
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { h, defineComponent } from "vue";
let timer = null;
import { loadersList } from "./loadersList";
export default defineComponent({
  data() {
    return {
      loadersList:loadersList,
      fullPage: true,
      canCancel: true,
      useSlot: false,
      loader: "RotateSquare",
      timeout: 3000, //ms
      color: "#00ab00",
      bgColor: "#4b4b4b",
      height: 64,
      width: 64,
    };
  },
  mounted() {},
  methods: {
    simulate() {
      let loader = this.$loading.show(
        {
          container: this.fullPage ? null : this.$refs.formContainer,
          canCancel: this.canCancel,
          onCancel: this.whenCancelled,
          color: this.color,
          backgroundColor: this.bgColor,
          height: this.height,
          width: this.width,
          loader: this.loader,
          opacity: 0.3,
          lockScroll: true,
        },
        this.exampleSlots
      );

      // simulate async call
      timer = setTimeout(() => {
        loader && loader.hide();
      }, this.timeout);
    },
    whenCancelled() {
      clearTimeout(timer);
      console.log("User cancelled the loader.");
    },
  },
  computed: {
    exampleSlots() {
      return this.useSlot
        ? {
            default: h(
              "h3",
              {
                class: "custom-slot",
              },
              "Please Wait ..."
            ),
          }
        : {};
    },
  },
});
</script>
