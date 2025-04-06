// join.js


document.addEventListener("DOMContentLoaded", function() {
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        const currentDate = new Date();
        timestampField.value = currentDate.toISOString(); 
    }
});


const form = document.getElementById('membership-form');
if (form) {
    form.addEventListener('submit', function(event) {
    x
        const email = document.getElementById('email').value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault(); 
        }
    });
}