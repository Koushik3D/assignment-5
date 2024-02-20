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

for(const seatNumber of seatNumbers) {
    seatNumber.addEventListener('click', function(event){
        totalSeat = totalSeat - 1;
        setInnerTextById('seat-count', totalSeat);
        seatReserved = seatReserved + 1;
        setInnerTextById('seat-booking', seatReserved);
        seatNumber.classList.add('bg-primary-color');
        
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
    })
}

const passengerName = document.getElementById('passenger-name');
const phoneNumber = document.getElementById('phone-number');
const nextButton = document.getElementById('next-btn');

function successPage() {
    if (passengerName === 'string' && phoneNumber === 'number') {
        // nextButton.removeAttribute(disabled);
        nextButton.disabled = false;
    }
}
