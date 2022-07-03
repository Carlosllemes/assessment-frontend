import menu from '../../mock-api/V1/categories/list.json' assert { type: "json" }; 

function createNavbar(item, selector){
    const navBar =  document.querySelector(selector)
    navBar.append(item)
}


function createNavlink(name, path){
 const navItem = document.createElement('li')
 navItem.setAttribute('class', 'nav-item')
 const navLink = document.createElement('a')
 navLink.setAttribute('href', `${path}.html`,)
 navLink.setAttribute('alt', name,)
 navLink.setAttribute('class', 'nav-link',)
 navLink.innerHTML = name
 navItem.append(navLink)

 return navItem;
}


export function asideItem(selector){
    createNavbar(createNavlink('Página Inicial', 'index'), selector)
    menu.items.map((item)=>{
       return createNavbar(createNavlink(item.name,item.path), selector)
    })
    createNavbar(createNavlink('Contato', 'contato'),selector)
}



