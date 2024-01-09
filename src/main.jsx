import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hed from './hed'
import Body from './body'
import Foot from './foot'

function Hammasi(){
  return(
    <div>
      <Hed/>
      <Body/>
      <Foot/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hammasi/>
  </React.StrictMode>,
)
