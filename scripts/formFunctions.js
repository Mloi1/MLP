const roundNumber = number => Math.round(number * 100) / 100

document.addEventListener("DOMContentLoaded", () => {
    //form and values
    //getting the DOM elements we are going to work with
    const goodsQuantity = document.getElementById("goodsQuantity")
    const goodsSelector = document.getElementById("goodsSelector")
    const addToCart = document.getElementById("addToCart")
    const cart = document.getElementsByClassName("cart")[0]
    const basket = {}
    const items = {
        pagoda: {
            price: 9.99,
            img: "https://cdn1.iconfinder.com/data/icons/china-4/64/mask-china-opera-chinese-512.png"
        },
        terracotta: {
            price: 19.99,
            img: "https://cdn1.iconfinder.com/data/icons/china-4/64/mask-china-opera-chinese-512.png"

        },
        nightScene: {
            price: 15.99,
            img: "https://cdn1.iconfinder.com/data/icons/china-4/64/mask-china-opera-chinese-512.png"

        },
        musicalFountain: {
            price: 20.99,
            img: "https://cdn1.iconfinder.com/data/icons/china-4/64/mask-china-opera-chinese-512.png"

        },
    }

    const populateCart = basket => {
        cart.innerHTML = ""
        let total = 0;
        Object.entries(basket).forEach(entry => {
            const itemType = entry[0]
            const quantity = entry[1]
            const unitPrice = items[itemType].price
            const imgSrc = items[itemType].img
            const subTotal = unitPrice * quantity
            total += subTotal
            const newDiv = document.createElement("div")
            newDiv.classList.add("item-row")
            newDiv.innerHTML = `<img src=${imgSrc} width="20px"> <span class="item-type">${itemType}: </span><span class="quantity">${quantity}</span><span class="price"> unit price: £${unitPrice}</span><span class="price"> total price: ${roundNumber(subTotal)}</span>`
            cart.appendChild(newDiv)
        })
        const newTotal = document.createElement("div");
        newDiv.classList.add("item-row")
        newTotal.innerHTML = total ? `<span class="grand-total">Total: ${total}</span>` : 'No Items Purchased Yet'
        cart.appendChild(newTotal)
    }
    const goodSelectorsHandler = event => {
        const currentQuantity = basket[event.target.value]
        goodsQuantity.value = currentQuantity || 0
    }
    const addToCartHandler = event => {
        event.preventDefault()
        basket[goodsSelector.value] = goodsQuantity.value
        populateCart(basket)
    }
    // goodsQuantity.addEventListener("blur", goodSelectorsHandler)
    goodsSelector.addEventListener("input", goodSelectorsHandler)
    addToCart.addEventListener("click", addToCartHandler)
})


/*function send(button.onclick) {
       alert("Thank you! Your order has been received!")
   } */
