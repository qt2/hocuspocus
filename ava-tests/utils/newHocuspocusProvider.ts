import { HocuspocusProvider, HocuspocusProviderConfiguration } from '@hocuspocus/provider'
import { Hocuspocus } from '@hocuspocus/server'
import WebSocket from 'ws'

export const newHocuspocusProvider = (
  server: Hocuspocus,
  options: Partial<Omit<HocuspocusProviderConfiguration, 'url'>> = {},
): HocuspocusProvider => {
  return new HocuspocusProvider({
    // We don’t need which port the server is running on, but
    // we can get the URL from the passed server instance.
    url: server.webSocketURL,
    // Just use a generic document name for all tests.
    name: 'hocuspocus-test',
    // Pass a polyfill to use WebSockets in a Node.js environment.
    WebSocketPolyfill: WebSocket,
    // Add or overwrite settings, depending on the test case.
    ...options,
  })
}
