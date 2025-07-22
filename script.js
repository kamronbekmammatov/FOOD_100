const products = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        amount: 0,
        kcall: 400,
        calcKcal() {
            return this.amount * this.kcall
        },
        calcSum() {
            return this.amount * this.price
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        amount: 0,
        kcall: 600,
        calcKcal() {
            return this.amount * this.kcall
        },

        calcSum() {
            return this.amount * this.price
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        amount: 0,
        kcall: 800,
        calcKcal() {
            return this.amount * this.kcall
        },

        calcSum() {
            return this.amount * this.price
        }
    }
}

// console.log(product);

let btn = document.querySelectorAll('.main__product-btn')


for( let i = 0; i < btn.length; i++) {

    let btnI = btn[i]

    btnI.addEventListener('click', function() {
        prepare(this);

    })
}

function prepare(el) {
    let section = el.closest('.main__product')
    let sectionId = section.getAttribute('id')
    // console.log(sectionId);
    let num = section.querySelector('.main__product-num')
    let price = section.querySelector('.main__product-price span')
    let kcall = section.querySelector('.main__product-kcall span')


    let sym = el.getAttribute('data-symbol')

    // console.log(sym);

//     if(sym == '+') {
//         num.innerHTML++
//     }else if(sym == '-'){ 
//         num.innerHTML--
//     }


let amount = products[sectionId].amount

if(sym == '+' && amount < 10) {
    amount++
}else if(sym == '-' && amount > 0) {
    amount--
}
 
num.innerHTML = amount

products[sectionId].amount = amount

    price.innerHTML = products[sectionId].calcSum()
    kcall.innerHTML = products[sectionId].calcKcal()
}


let addCart = document.querySelector('.addCart')
let receipt = document.querySelector('.receipt')
let receiptwindow = document.querySelector('.receipt__window')
let receiptWindowOut = document.querySelector('.receipt__window-out')
// let receiptwindowbtn = document.querySelector('.receipt__window-btn')

addCart.addEventListener('click', function() {
    
    receipt.style.display = 'flex'

    setTimeout(() => {
        receipt.style.opacity = 1
        receiptwindow.style.top = '10%'
    }, 200)

    
    let cart = `Your cart:\n\n `
    let totalPrice = 0
    let totalKcall = 0

    for(const key in products) {
        cart += `${products[key].name}, ${products[key].amount} dona \n`
        totalPrice += products[key].calcSum()
        totalKcall += products[key].calcKcal()
    }

    receiptWindowOut.textContent = `${cart}\n Total price: ${totalPrice} \n Colories: ${totalKcall}`
    

    document.getElementById("pay-btn").addEventListener("click", function() {
        location.reload(); // sahifani yangilaydi
      });

    
})