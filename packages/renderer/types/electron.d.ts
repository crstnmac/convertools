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
