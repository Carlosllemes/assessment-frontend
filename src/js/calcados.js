function appendItem(item, selector) {
    const navBar = document.querySelector(selector)
    navBar.append(item)
}
// create box product and all items inside him
function createCardProduct(img, nameProduct, price, id, specialPrice, filter) {
    const box = document.createElement('div')
    const image = document.createElement('img')
    const figcaption = document.createElement('figcaption')
    const prices = document.createElement('p')
    const figure = document.createElement('figure')
    const btn = document.createElement('a')
    const priceContent = document.createElement('div')
    
    box.setAttribute('class', 'cardProduct')
    box.setAttribute('data-color', filter.toLowerCase())
    image.setAttribute('src', img)
    image.setAttribute('alt', nameProduct)
    image.setAttribute('title', nameProduct)
    btn.setAttribute('href', `calcados/${id}`)
    btn.setAttribute('alt', nameProduct)
    btn.setAttribute('title', nameProduct)
    priceContent.setAttribute('class', 'price-content')

    figcaption.textContent = nameProduct
    prices.textContent = `R$${price.toFixed(2).replace(".", ",")}`
    btn.textContent = 'Comprar'
    
    if (specialPrice){
        const specialPrices = document.createElement('p')
        specialPrices.textContent = `R$${specialPrice.toFixed(2).replace(".", ",")}`
        priceContent.append(specialPrices)
    }

    figure.append(image)
    figure.append(figcaption)
    box.append(figure)
    priceContent.append(prices)
    box.append(priceContent)
    box.append(btn)

    return box
}
// get items value of  filter of API and remove duplicates
function getFilterAPI(obj) {
    const arr = [];
    obj.items.map((item) => {
        item.filter.map((filter) => {
            arr.push(filter.color)
        })
    })
    const newArray = arr.filter(function (elem, pos, self) {
        return self.indexOf(elem) === pos;
    })
    return newArray
}

// create filter itens 
function createItemFilter(item, type){
    if (type === 'color'){
    const div = document.createElement('div');
    div.setAttribute('class', item.toLowerCase())
    return div;
    }
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.setAttribute('data-gender', item.toLowerCase())
    ul.append(li)
    
    return ul;
}

// append itens of createFilter function with element
export function createCategory(obj,selector, type) {
    const list = getFilterAPI(obj);
    list.map((item) => {
        return appendItem(createItemFilter(item, type), selector)
    })
}

// append itens of createFilter function with element
export function productsCards(obj,selector, nameFilter) {
    obj.items.map((item) => {
        const filter = `${item.filter[0]}.${nameFilter}`
        return appendItem(createCardProduct(item.image, item.name, item.price, item.id, item.specialPrice, filter), selector)
    })
}