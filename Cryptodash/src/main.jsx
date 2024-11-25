import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider}from "./components/ui/provider.jsx"
import "@fontsource/ubuntu"; // Defaults to weight 400
import { Global } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react'

const globalStyles = `
  body {
    font-family: 'Ubuntu', sans-serif;
    
  }
`;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
     <Global styles={globalStyles}/>
    <App />
    
    </Provider>
  </StrictMode>
)
