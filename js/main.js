const time = document.querySelector(".utcTime");
const date = new Date().toUTCString();

time.innerHTML = `${date.slice(0, -3)} UTC`;
