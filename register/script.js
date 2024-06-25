//bot token
let telegram_bot_id = "7305433064:AAFF6raNcjLMKVT5QR3Il3sIGpzCBFzh-xM"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
let chat_id = 1889969457; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
let u_name, address, age, phone;
let ready = function() {
    u_name = document.getElementById("name").value;
    lname = document.getElementById("lname").value;
    phone = document.getElementById("phone").value;
    message = "\nIsmi: " + u_name + "\nFamilya: " + lname +"\nTelefon raqam: " + phone;
};
function sendtelegram() {   
    event.preventDefault();
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        window.location.href = 'ok.html';
    });
    document.getElementById("name").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";
    
    return false;
    
};


// Function to check if all required fields are filled
function checkForm() {
    let name = document.getElementById("name").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Regular expression to check if name and lname contain only letters
    let nameRegex = /^[a-zA-Z]+$/;
    
    // Check if all fields are filled and meet criteria
    if (
        name.length >= 3 && name.length <= 20 && name.match(nameRegex) &&
        lname.length >= 3 && lname.length <= 20 && lname.match(nameRegex) &&
        phone !== "" && phone.length >= 9 && phone.length <= 13
    ) {
        document.getElementById("submitButton").removeAttribute("disabled");
    } else {
        document.getElementById("submitButton").setAttribute("disabled", "disabled");
    }
}
    


// Event listeners for input fields to check on input change
document.getElementById("name").addEventListener("input", checkForm);
document.getElementById("lname").addEventListener("input", checkForm);
document.getElementById("phone").addEventListener("input", checkForm);