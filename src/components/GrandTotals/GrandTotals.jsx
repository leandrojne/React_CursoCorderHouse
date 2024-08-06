function GrandTotals(itemsInCart) {
    let totals = 0
    itemsInCart.forEach((item)=>{
        const subtotal = item.qty * item.price
        totals += subtotal
    })
    return totals.toLocaleString()
}

export default GrandTotals
