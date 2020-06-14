// ===============================================================================================
// COUNTDOWN =====================================================================================
const countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
const x = setInterval(function () {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    const d = document.querySelector('#days .num');
    const h = document.querySelector('#hours .num');
    const m = document.querySelector('#minutes .num');
    const s = document.querySelector('#seconds .num');

    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;


    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        d.innerHTML = 0;
        h.innerHTML = 0;
        m.innerHTML = 0;
        s.innerHTML = 0;
        const text = document.querySelector('#new-year-text');
        text.innerHTML = `HAPPY NEW YEAR!!!`;

    }
}, 1000);