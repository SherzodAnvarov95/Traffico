$('.ask').on('click', function () {
    
    $('.ask').not(this).removeClass('active').next().slideUp(500)
    $(this).toggleClass('active').next().slideToggle(500)

})



let addCart = document.querySelector('.addCart')
let receipt = document.querySelector('.receipt')
let receiptWindow = receipt.querySelector('.receipt__window')
let receiptWindowOut = receipt.querySelector('.receipt__window-out')
let receiptWindowBtn = receipt.querySelector('.receipt__window-btn')

addCart.addEventListener('click', () => {
    receipt.style.display = 'flex'
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '50%'
        receiptWindow.style.transform = 'translateY(-50%)'
    }, 200);

    let menu = '<b>Your cart: \n\n </b>'
    let totalPrice = 0
    let totalKcall = 0


    for (const key in product) {

        if (product[key].amount) {
            menu += `<b>${product[key].name}</b> ${product[key].amount}x ${product[key].calcSum} sum\n`
            totalPrice += product[key].calcSum
            totalKcall += product[key].calcKcall
        }

    }

    receiptWindowOut.innerHTML = `${menu}\nTotal price: ${totalPrice} sum\nTotal calories: ${totalKcall} calories`
})
receiptWindowBtn.addEventListener('click', () => {
    // location = 'https://goo.gl/maps/TVsZ9L3UCFHDiwV4A'
    setTimeout(() => {
        location.reload()
    }, 1000);
    
})

// document.addEventListener('click', (e) => {
//     console.log(e.target);
// })

receipt.addEventListener('click', (e) => {
    // console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
        receipt.style.opacity = '0'
        receiptWindow.style.top = '-100%'
        setTimeout(() => {
            receiptWindow.style.display = 'none'
        }, 500);
    }
})

