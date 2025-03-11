import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import React, { StrictMode } from 'react'
import { PersistGate } from 'redux-persist/integration/react'

import '@ant-design/v5-patch-for-react-19'

import { App } from './app'
import { persistor, store } from './shared/store/store'

declare global {
  interface Window {
    startApp: (params: string[]) => void
  }
}

let root: ReactDOM.Root | null = null

window.startApp = (params: string[]) => {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    if (!root) {
      root = ReactDOM.createRoot(rootElement)
    }
    root.render(
      <StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App dealers={params} />
          </PersistGate>
        </Provider>
      </StrictMode>,
    )
  } else {
    console.error('Root element not found!')
  }
}
