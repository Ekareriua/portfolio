import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PrivacyPage } from './components/PrivacyPage'

// Entry point for the separate privacy notice page (privacy.html)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivacyPage />
  </StrictMode>,
)
