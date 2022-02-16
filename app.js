document.getElementById('detail-submit-btn').addEventListener('click',function(){
    const buyerDetails = document.getElementById('buyer-details-input');
    document.getElementById('buyer-info').innerText = buyerDetails.value;
    buyerDetails.value = '';
})
document.getElementById('add-details-btn').addEventListener('click',function(){
    const itemName = input('item-name-input');
    const itemPrice = input('item-price-input');
    const itemQuantity = input('item-quantity-input');
    const infoTable = input('info-table');
    
    const tr = tableElement('tr')
    const th = tableElement('th');
    const td1 = tableElement('td');
    const td2 = tableElement('td');
    const td3 = tableElement('td');
    td3.classList.add('item-total');

    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    infoTable.appendChild(tr);

    const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);
    console.log(td3.innerText);

    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;
    totalCalculation();
})
function tableElement(param) {
    return document.createElement(param);
}

function input(inputField) {
    return document.getElementById(inputField);
}

function totalCalculation() {
    const subTotal = calculateSubTotal();
    const subTotalToDisplay = document.getElementById('sub-total');
    subTotalToDisplay.innerText = subTotal;

    const tax = subTotal * .2;
    document.getElementById('tax-total').innerText=tax.toFixed(2);
    document.getElementById('grand-total').innerText=subTotal+tax;
    document.getElementById('grand-total-2').innerText=subTotal+tax;
}

function calculateSubTotal( ) {
    let subTotal = 0;
    const cost = document.getElementsByClassName('item-total');
    for (let i = 0; i < cost.length; i++) {
        const element = cost[i];
        const price = parseInt(element.innerText);
        subTotal = subTotal + price;
    }
    return subTotal;
}

 
