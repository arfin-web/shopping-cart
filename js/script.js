function calcyPlus(value, f, s, price, isAdd) {
    const input1 = document.getElementById(value);
    if (isAdd == true) {
        input1.value = parseInt(input1.value) + 1;
    } 
    else if (input1.value > 1) {
        input1.value = parseInt(input1.value) - 1;
    }
    const price1 = document.getElementById(f);
    price1.innerText = price * input1.value;
    const price2 = document.getElementById(s);
    let subtotal = document.getElementById('subtotal');
    subtotal.innerText = parseInt(price1.innerText) + parseInt(price2.innerText);
    const tax = 5 / 100;
    let taxAmount = document.getElementById('tax');
    taxAmount.innerText = subtotal.innerText * tax;
    const total = document.getElementById('total');
    total.innerText = parseInt(subtotal.innerText) + parseInt(taxAmount.innerText);
}

document.getElementById('minus1').addEventListener('click', function () {
    calcyPlus('value1', 'price1', 'price2', 400, false);
})

document.getElementById('plus1').addEventListener('click', function () {
    calcyPlus('value1', 'price1', 'price2', 400, true);
})

document.getElementById('minus2').addEventListener('click', function () {
    calcyPlus('value2', 'price2', 'price1', 600, false);
})

document.getElementById('plus2').addEventListener('click', function () {
    calcyPlus('value2', 'price2', 'price1', 600, true);
})

function deleteItem(itemName) {
    const item = document.getElementById(itemName)
    item.style.display = 'none';
}

document.getElementById('delete1').addEventListener('click', function () {
    deleteItem('item1');
})

document.getElementById('delete2').addEventListener('click', function () {
    deleteItem('item2');
})