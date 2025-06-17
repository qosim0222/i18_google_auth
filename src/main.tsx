import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import "./i18n"
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='269975521452-8u615kfefpqn5b7io5ob5ktuv5dtpqoh.apps.googleusercontent.com'>

    {/* <App /> */}
    <Header/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
