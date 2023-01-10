console.log("connected");

let charSet = "abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWX";
let numberSet = "0123456789";
let specialCharSet = "!@#$%^&*()";

const handleViewChange = () => {
    const check = document.getElementById("check-box");
    if (check.checked) {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("check-icon").innerHTML = `<i class="fa-solid fa-eye text-white"></i>`;

    }
    else {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("check-icon").innerHTML = `<i class="fa-solid fa-eye-slash text-white"></i>`;
    }
}

const handleChar=() => {
    const numberCheck = document.getElementById("number");
    const specialCheck = document.getElementById("special");
    if (numberCheck.checked) {
        charSet += "1234567890";
    }
    else {
        charSet = charSet.replace(/0123456789/g, "");
    }
    if (specialCheck.checked === "true") {
        charSet += "!@#$%^&()";
    } else {
        charSet = charSet.replace(/[^\w ]/g, "");
    }
}

const handleSlider = (val) => {
    document.getElementById("char-count").innerText = val;
    regenerate();
}

const regenerate = () => {
    const temp = document.getElementById("char-count").innerText;
    const number = parseInt(temp);
    let password = "";
    for (let i = 0; i < number; i++) {
        const val = Math.floor(Math.random() * charSet.length);
        password += charSet.substring(val, val + 1);

    }
    document.getElementById("password").value = password;
}

regenerate();

const copy = () => {
    const copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");


}
