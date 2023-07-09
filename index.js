// input elements
const years = document.getElementsByClassName("years")[0];
const months = document.getElementsByClassName("months")[0];
const days = document.getElementsByClassName("days")[0];

// output elements
let yearsResult = document.getElementsByClassName("yearsResult")[0];
let monthsResult = document.getElementsByClassName("monthsResult")[0];
let daysResult = document.getElementsByClassName("daysResult")[0];




const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
    // preventing the page from automatically reloading after clicking on the button
    e.preventDefault()
    let validator = false;

    // getting current date
    const present = new Date();
    const presentYear = present.getFullYear();
    const presentMonth = present.getMonth() +1;
    const presentDay = present.getDate()

    const inputs = document.querySelectorAll("input")
    inputs.forEach((i) => {
        // the "+" is used to make the i.value a string, if you do not want to make use of "+", 
            // you could make use of "==" instead of "==="
            if (+i.value === 0) {
                i.parentElement.querySelector("p").innerHTML = "This field is required"
                i.style.borderColor = "hsl(0, 100%, 67%)"
                i.parentElement.querySelector("label").style.color = "hsl(0, 100%, 67%)"
                validator = false;
                return;
            } else {
                validator = true;
                i.parentElement.querySelector("p").innerHTML = ""
                i.style.borderColor = "hsl(0, 0%, 86%)"
                i.parentElement.querySelector("label").style.color = "hsl(0, 0%, 8%)"
            }
            if (days.value > 31) {
                days.parentElement.querySelector("p").innerHTML = "Must be a valid date"
                days.style.borderColor = "hsl(0, 100%, 67%)"
                days.parentElement.querySelector("label").style.color = "hsl(0, 100%, 67%)"
                validator = false;
                return;
            } else {
                validator = true;
                days.parentElement.querySelector("p").innerHTML = ""
                days.style.borderColor = "hsl(0, 0%, 86%)"
                days.parentElement.querySelector("label").style.color = "hsl(0, 0%, 8%)"
            }
            if (months.value > 31) {
                months.parentElement.querySelector("p").innerHTML = "Must be a valid month"
                months.style.borderColor = "hsl(0, 100%, 67%)"
                months.parentElement.querySelector("label").style.color = "hsl(0, 100%, 67%)"
                validator = false;
                return;
            } else {
                validator = true;
                months.parentElement.querySelector("p").innerHTML = ""
                months.style.borderColor = "hsl(0, 0%, 86%)"
                months.parentElement.querySelector("label").style.color = "hsl(0, 0%, 8%)"
            }
            if (years.value > presentYear) {
                years.parentElement.querySelector("p").innerHTML = "Must be a valid year"
                years.style.borderColor = "hsl(0, 100%, 67%)"
                years.parentElement.querySelector("label").style.color = "hsl(0, 100%, 67%)"
                validator = false;
                return;
            } else {
                validator = true;
                years.parentElement.querySelector("p").innerHTML = ""
                years.style.borderColor = "hsl(0, 0%, 86%)"
                years.parentElement.querySelector("label").style.color = "hsl(0, 0%, 8%)"
            }
    })
    if (validator) {
        // Display results
        yearsResult.innerHTML = presentYear - years.value
        monthsResult.innerHTML = presentMonth - months.value;
        daysResult.innerHTML = presentDay - days.value;
        if (days.value > presentDay) {
            presentDay = presentDay + daysInMonth[presentMonth - 1]
            presentMonth = presentMonth - 1
        }
        if (months.value > presentMonth) {
            presentMonth = presentMonth + 12;
            presentYear = presentYear - 1
        }
    } 
    console.log(validator);

})
