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

function setConvertedValueById(elementId) {
    const value = document.getElementById(elementId).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function setTotalPriceById(elementId, value) {
    const totalPrice = setConvertedValueById(elementId);
    const sum = totalPrice + value;
    setInnerTextById(elementId, sum);
}

function setDiscountedPrice(status) {
    const coupon = document.getElementById('coupon-code');
    const couponCode = coupon.value;
    const couponBox = document.getElementById('coupon-box');
    const applyButton = document.getElementById('apply-btn');
    const totalPrice = setConvertedValueById("total-price");

    if (status === undefined) {
        setInnerTextById('grand-total', totalPrice);
    }

    else {
        if (couponCode === 'NEW15') {
            const totalCost = document.getElementById('total-price').innerText;
            const convertedTotalCost = parseInt(totalCost);
            const discountedPrice = convertedTotalCost * 15 / 100;
            setInnerTextById('discounted-price', discountedPrice);
            const grandTotal = convertedTotalCost - discountedPrice;
            setInnerTextById('grand-total', grandTotal);
            applyButton.disabled = true;
        }

        else if (couponCode === 'Couple 20') {
            const totalCost = document.getElementById('total-price').innerText;
            const convertedTotalCost = parseInt(totalCost);
            const discountedPrice = convertedTotalCost * 20 / 100;
            setInnerTextById('discounted-price', discountedPrice);
            const grandTotal = convertedTotalCost - discountedPrice;
            setInnerTextById('grand-total', grandTotal);
            applyButton.disabled = true;
        }

        else {
            couponBox.classList.add('hidden');
        }
    }
}
