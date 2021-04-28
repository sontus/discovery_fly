// increase and decrement
function increaseHandler(ticket,isIncrease){
    const qtyInput     = document.getElementById(ticket+'_class_qty');
    const qtyCount     = parseInt(qtyInput.value);

    let newQtyCount     = qtyCount;
    if(isIncrease == true)
    {
      newQtyCount = qtyCount + 1
    }
    if(isIncrease == false && qtyCount > 0)
    {
      newQtyCount = qtyCount - 1
    }
    qtyInput.value = newQtyCount;
    // calculate total amount
    calculateTotal();
}

// calculate total
function calculateTotal() {
    const firstClassCount   = getTicketQty('first');
    const economyClassCount = getTicketQty('economy');

    const subTotal = firstClassCount * 150 + economyClassCount * 100;
    const vatTotal = subTotal * 0.1
    const grandTotal = subTotal + vatTotal;

    document.getElementById('sub_total').innerText    = '$'+subTotal;
    document.getElementById('vat').innerText          = '$'+vatTotal;
    document.getElementById('grand_total').innerText  = '$'+grandTotal;
}

// get ticket qty
function getTicketQty(ticketType){
    const ticketQtyInput  = document.getElementById(ticketType+'_class_qty');
    const ticketCount     = parseInt(ticketQtyInput.value);
    return ticketCount;
}

// Submit
function submitNow()
{

      alert('Thanks for Booking.');


}
