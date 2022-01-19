interface Window {
  /**
   * Expose Environment versions.
   * @example
   * console.log( window.versions )
   */
  readonly versions: NodeJS.ProcessVersions;
  /**
   * Safe expose node.js API
   * @example
   * window.nodeCrypto('data')
   */
  readonly nodeCrypto: { sha256sum: any };

  electronRequire?: NodeRequire;

  readonly electron: ElectronApi;
}

type ElectronApi = {
  isMinimizable: boolean;
  isMaximizable: boolean;
  isClosable: boolean;
  maximize?: Function<void>;
  minimize?: Function<void>;
  close?: Function<void>;
  devtools?: Function<void>;
};
