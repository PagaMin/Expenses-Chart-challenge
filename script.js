// VALUES //

const monValue = document.querySelector(".value-mon");
const tueValue = document.querySelector(".value-tue");
const wedValue = document.querySelector(".value-wed");
const thuValue = document.querySelector(".value-thu");
const friValue = document.querySelector(".value-fri");
const satValue = document.querySelector(".value-sat");
const sunValue = document.querySelector(".value-sun");


// STATS //


const monStats = document.querySelector(".stats-mon");
const tueStats = document.querySelector(".stats-tue");
const wedStats = document.querySelector(".stats-wed");
const thuStats = document.querySelector(".stats-thu");
const friStats = document.querySelector(".stats-fri");
const satStats = document.querySelector(".stats-sat");
const sunStats = document.querySelector(".stats-sun");


// FUNCTIONS //

monStats.addEventListener("mouseenter", () => {
    monValue.style.visibility = "visible"
});

monStats.addEventListener("mouseleave", () => {
    monValue.style.visibility = "hidden";
});

// FUNCTION TUE

tueStats.addEventListener("mouseenter", () => {
    tueValue.style.visibility = "visible"
});

tueStats.addEventListener("mouseleave", () => {
    tueValue.style.visibility = "hidden";
});


// FUNCTION WED

wedStats.addEventListener("mouseenter", () => {
    wedValue.style.visibility = "visible"
});

wedStats.addEventListener("mouseleave", () => {
    wedValue.style.visibility = "hidden";
});


// FUNCTION THU

thuStats.addEventListener("mouseenter", () => {
    thuValue.style.visibility = "visible"
});

thuStats.addEventListener("mouseleave", () => {
    thuValue.style.visibility = "hidden";
});


// FUNCTION FRIDAY

friStats.addEventListener("mouseenter", () => {
    friValue.style.visibility = "visible"
});

friStats.addEventListener("mouseleave", () => {
    friValue.style.visibility = "hidden";
});


// FUNCTION SAT

satStats.addEventListener("mouseenter", () => {
    satValue.style.visibility = "visible"
});

satStats.addEventListener("mouseleave", () => {
    satValue.style.visibility = "hidden";
});

// FUNCTION SUN

sunStats.addEventListener("mouseenter", () => {
    sunValue.style.visibility = "visible"
});

sunStats.addEventListener("mouseleave", () => {
    sunValue.style.visibility = "hidden";
});

