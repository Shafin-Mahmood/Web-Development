import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = 
{
    type : 'a',
    props :{
       
        href : "https://github.com/Shafin-Mahmood",
        target : '_blank',
    },
   

    children: "click for see" 

     
}

function Myapp ()
{
  return  <div>
       <h1>Custom reactapp</h1>
  </div>
}

const AnotherElement = (
  <a href="https://github.com/Shafin-Mahmood" target = '_blank'>Click me</a>
)

const areactElement = React.createElement(

    'a',
    {
       href : "https://github.com/Shafin-Mahmood" , target:"_blank"
    },
    'Please Visit'
)

ReactDOM.createRoot(document.getElementById('root')).render
(
  
  areactElement
 
)




