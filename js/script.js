document.getElementById('minus1').addEventListener('click', function () {
    const input1 = document.getElementById('value1');
    if (input1.value > 1) {
        input1.value = input1.value - 1;
        const price1 = document.getElementById('price1');
        price1.innerText = 400 * input1.value;
        const price2 = document.getElementById('price2');
        let subtotal = document.getElementById('subtotal');
        subtotal.innerText = parseInt(price1.innerText) + parseInt(price2.innerText);
        const tax = 5 / 100;
        let taxAmount = document.getElementById('tax');
        taxAmount.innerText = subtotal.innerText * tax;
        const total = document.getElementById('total');
        total.innerText = parseInt(subtotal.innerText) + parseInt(taxAmount.innerText);
    }
})

document.getElementById('plus1').addEventListener('click', function () {
    const input1 = document.getElementById('value1');
    input1.value = parseInt(input1.value) + 1;
    const price1 = document.getElementById('price1');
    price1.innerText = 400 * input1.value;
    const price2 = document.getElementById('price2');
    let subtotal = document.getElementById('subtotal');
    subtotal.innerText = parseInt(price1.innerText) + parseInt(price2.innerText);
    const tax = 5 / 100;
    let taxAmount = document.getElementById('tax');
    taxAmount.innerText = subtotal.innerText * tax;
    const total = document.getElementById('total');
    total.innerText = parseInt(subtotal.innerText) + parseInt(taxAmount.innerText);
})

document.getElementById('minus2').addEventListener('click', function () {
    const input2 = document.getElementById('value2');
    if (input2.value > 1) {
        input2.value = input2.value - 1;
        const price2 = document.getElementById('price2');
        price2.innerText = 600 * input2.value;
        const price1 = document.getElementById('price1');
        let subtotal = document.getElementById('subtotal');
        subtotal.innerText = parseInt(price1.innerText) + parseInt(price2.innerText);
        const tax = 5 / 100;
        let taxAmount = document.getElementById('tax');
        taxAmount.innerText = subtotal.innerText * tax;
        const total = document.getElementById('total');
        total.innerText = parseInt(subtotal.innerText) + parseInt(taxAmount.innerText);
    }
})

document.getElementById('plus2').addEventListener('click', function () {
    const input2 = document.getElementById('value2');
    input2.value = parseInt(input2.value) + 1;
    const price2 = document.getElementById('price2');
    price2.innerText = 600 * input2.value;
    const price1 = document.getElementById('price1');
    let subtotal = document.getElementById('subtotal');
    subtotal.innerText = parseInt(price1.innerText) + parseInt(price2.innerText);
    const tax = 5 / 100;
    let taxAmount = document.getElementById('tax');
    taxAmount.innerText = subtotal.innerText * tax;
    const total = document.getElementById('total');
    total.innerText = parseInt(subtotal.innerText) + parseInt(taxAmount.innerText);
})