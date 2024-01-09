import {createComponent} from './helpers';
import LoadingComponent from './Component.vue';

export function useLoading(globalProps = {}, globalSlots = {}) {
  let instance
  return {
    show(props = globalProps, slots = globalSlots) {
      const forceProps = {
        programmatic: true,
        lockScroll: true,
        isFullPage: false,
        active: true,
      }

      const propsData = {...globalProps, ...props, ...forceProps};
      let container = propsData.container;

      if (!propsData.container) {
        container = document.body;
        propsData.isFullPage = true;
      }

      const mergedSlots = {...globalSlots, ...slots};
      instance = createComponent(LoadingComponent, propsData, container, mergedSlots);

      return {
        hide: instance.ctx.hide
      }
    },
    hide(){
      instance.ctx.hide()
    }
  }
}
