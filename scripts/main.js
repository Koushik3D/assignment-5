function redirectHomepage() {
    hideElementByID('my_modal_5');
    window.location.reload();
}

function ticketPurchaseSection() {
    const ticketPurchase = document.getElementById('ticket-purchase');
    ticketPurchase.scrollIntoView();
}

const seatNumbers = document.getElementsByClassName('seat-number');

let totalSeat = 40;
let seatReserved = 0;

for (const seatNumber of seatNumbers) {
    seatNumber.addEventListener('click', seatNumberCount);
    
    function seatNumberCount(event) {

        totalSeat = totalSeat - 1;
        const seatBooking = setConvertedValueById('seat-booking');

        if (seatBooking + 1 > 4) {
            alert('You can reserved maximum 4 seats');
            return;           
        }

        
        setInnerTextById('seat-count', totalSeat);
        seatReserved = seatReserved + 1;
        setInnerTextById('seat-booking', seatReserved);
        seatNumber.disabled = true;
        seatNumber.style.backgroundColor = '#1DD100';
        seatNumber.style.color = 'white';

        

        const selectedSeatNumber = event.target.parentNode.childNodes[0].innerText;
        const seatSelected = document.getElementById('seat-selected');
        const div = document.createElement('div');
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');

        div.classList.add('flex', 'justify-between', 'p-2');

        div1.innerText = selectedSeatNumber;
        div2.innerText = 'Economy';
        div3.innerText = 550;

        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        seatSelected.appendChild(div);

        setTotalPriceById('total-price', 550);
        setDiscountedPrice();

        const applyButton = document.getElementById('apply-btn');
        if (seatBooking + 1 === 4) {
            applyButton.removeAttribute('disabled');
            
        }
    }
}



        
// function successPage() {
    // seatReserved === 1 && convertedPhoneNumber.toString().length > 0
    // const pname = passengerName.value;
    // console.log(pname);
    // typeof passengerName === 'string' && 
    // && convertedPhoneNumber.toString().length > 0
// }



       
        

        

        const phoneNumber = document.getElementById('phone-number');
        const checkPhoneNumber = phoneNumber.value;
        const convertedPhoneNumber = parseInt(checkPhoneNumber);
        const nextButton = document.getElementById('next-btn');
        if (seatReserved === 1) {
            nextButton.removeAttribute('disabled');
        }
        // console.log(convertedPhoneNumber.toString().length);
        // console.log(typeof convertedPhoneNumber);
        