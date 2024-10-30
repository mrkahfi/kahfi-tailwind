import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import ChatCard from './components/ChatCard'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChatCard />
  </StrictMode>,
)
