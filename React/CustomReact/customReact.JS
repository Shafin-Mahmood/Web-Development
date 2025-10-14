function customRender(reactElement , container)
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props)
    {
        if(prop === 'children')
            continue
        domElement.setAttribute(prop,reactElement.props[prop])

    } 
    container.appendChild(domElement)
}

const reactElement = 
{
    type : 'a',
    props :{
       
        href : "https://github.com/Shafin-Mahmood",
        target : '_blank',
    },
   

    children: "click for see" 

     
}
 

const mainContainer = document.querySelector('#root')


customRender(reactElement,mainContainer)