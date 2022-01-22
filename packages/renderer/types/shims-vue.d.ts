declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface AppProps {
    theme: string;
    platform: string;
    showTitle: boolean;
    showIcon: boolean;
    isMaximizable: () => boolean;
    isMinimizable: () => boolean;
    isClosable: () => boolean;
    menu: unknown[];
  }

  interface ElectronApi {
    versions: NodeJS.ProcessVersions;
    maximize: () => void;
    minimize: () => void;
    close: () => void;
    isMinimizable: () => boolean;
    isMaximizable: () => boolean;
    isClosable: () => boolean;
    devtools: () => void;
  }
}
