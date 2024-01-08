import { Plugin, Component } from "vue";

export const animations = [
  "RotateSquare",
  "RotateSquare2",
  "RotateSquare3",
  "RotateSquare4",
  "RotateSquare5",
  "CubeShadow",
  "Grid",
  "Stretch",
  "Circle",
  "LetterCube",
] as const;

export type AnimationType = (typeof animations)[number];
export interface Props {
  active?: boolean;
  canCancel?: boolean;
  onCancel?: () => any;
  isFullPage?: boolean;
  transition?: string;
  color?: string;
  height?: number;
  width?: number;
  loader?: AnimationType | string;
  backgroundColor?: string;
  opacity?: number;
  zIndex?: number;
  enforceFocus?: boolean;
  lockScroll?: boolean;
  pauseOnHover?: boolean;
  container?: Object | HTMLElement | Function;
}

export interface Slots {
  default?: any;
  before?: any;
  after?: any;
}

export interface ActiveLoader {
  hide(): void;
}

export interface PluginApi {
  show(props?: Props, slots?: Slots): ActiveLoader;
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    readonly $loading: PluginApi;
  }
}

declare const LoadingPlugin: Plugin;
declare const Component: Component;

export declare function useLoading(
  globalProps?: Props,
  globalSlots?: Slots
): PluginApi;

export { LoadingPlugin };

export default Component;
