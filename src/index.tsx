import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import { store } from './shared/store/store'
import '@ant-design/v5-patch-for-react-19'

// const rootElement = document.getElementById('root')
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement)
//   root.render(
//     <StrictMode>
//         <Provider store={store}>
//           <App />
//         </Provider>
//     </StrictMode>,
//   )
// } else {
//   console.error('Root element not found!')
// }

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
          <App dealers={params} />
        </Provider>
      </StrictMode>,
    )
  } else {
    console.error('Root element not found!')
  }
}
