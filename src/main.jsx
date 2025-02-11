import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function create() {
  window.store = Alpine.store('state')

 createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
//임시 해결책(window.store때문에) 곧 삭제
setTimeout(create, 1000)
