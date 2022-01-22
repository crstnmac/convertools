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
    readonly nodeCrypto: { sha256sum: any; };
    readonly electron: { versions: NodeJS.ProcessVersions; maximize: () => void; minimize: () => void; close: () => void; isMinimizable: () => any; isMaximizable: () => any; isClosable: () => any; devtools: () => void; };
}
