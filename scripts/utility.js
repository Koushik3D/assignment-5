function hideElementByID(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-primary-color');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-primary-color');
}

function setInnerTextById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function setTotalPriceById(elementId, value) {
    const totalPrice = document.getElementById(elementId).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + value;
    setInnerTextById(elementId, sum);
}

function setDiscountedPrice() {
    const coupon = document.getElementById('coupon-code');
    const couponCode = coupon.value;

    if (couponCode === 'NEW15') {
        const totalCost = document.getElementById('total-price').innerText;
        const convertedTotalCost = parseInt(totalCost);
        const discountedPrice = convertedTotalCost * 15 / 100;
        setInnerTextById('discounted-price', discountedPrice);
    }

    else if (couponCode === 'Couple 20') {
        const totalCost = document.getElementById('total-price').innerText;
        const convertedTotalCost = parseInt(totalCost);
        const discountedPrice = convertedTotalCost * 20 / 100;
        setInnerTextById('discounted-price', discountedPrice);
    }

    else {
        alert('Invalid Coupon Code')
    }
}
