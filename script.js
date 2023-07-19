var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
var resultArea = document.querySelector(".comment");

var modal = document.getElementById("myModal");
var modalText = document.querySelector("#modalText");
var span = document.getElementsByClassName("close")[0];

function calculate() {
    if (height.value === '' || weight.value === '' || (male.checked === false && female.checked === false)) {
        showModal(" Masi ada yang belum diisi ");
    } else {
        countBmi();
    }
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  
function countBmi() {
    var p = [height.value, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }

    var bmi = Number(p[1]) / (Number(p[0]) / 100 * Number(p[0]) / 100);

    var result = '';
    if (bmi < 18.5) {
        result = 'Kurus';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = 'Ideal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        result = 'Gemuk';
    } else if (bmi >= 30 && bmi <= 34.9) {
        result = 'Obesitas';
    } else if (bmi >= 35) {
        result = 'Obesitas Extreme';
    }

    showResult(result, bmi.toFixed(2));
}

function showResult(result, bmiValue) {
    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = ` Kamu <span id="comment">${result}</span>`;
    document.querySelector("#result").innerHTML = bmiValue;
}

function showModal(message) {
    modal.style.display = "block";
    modalText.innerHTML = message;
}

function resetForm() {
    height.value = "";
    weight.value = "";
    male.checked = false;
    female.checked = false;
    resultArea.style.display = "none";
}

// Close the modal when the user clicks on <span> (x)
span.onclick = function () {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

