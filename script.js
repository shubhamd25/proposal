document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btn');
    const myImg = document.getElementById("myImg");
    const myButton = document.getElementById("myButton");
    const onyes = document.getElementById("onyes");
    const onyes1 = document.getElementById("onyes1");
    const namesList = document.getElementById("namesList");

    // Ensure all elements are present
    if (!btn || !myImg || !myButton || !onyes || !namesList) {
        console.error("Some HTML elements are missing!");
        return;
    }

    // Button to move randomly on mouseover
    btn.addEventListener('mouseover', function () {
        btn.style.left = `${Math.ceil(Math.random() * 90)}%`;
        btn.style.top = `${Math.ceil(Math.random() * 90)}%`;
    });

    // Change image and hide elements on button click
    myButton.addEventListener("click", function() {
        myImg.src = "https://media.tenor.com/RO4xfVyooqQAAAAi/cute.gif";
        myButton.style.display = "none";
        btn.style.display = "none";
        onyes.style.display = "block";
        onyes1.style.display = "block";
        onyes1.innerHTML = "Lets Fix A Date On Whatsapp";
    });

    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const number = params.get('number');

    if (name && number) {
        const message = "Hello, I am ready to go on date would you like to go with me?";
        const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        onyes.href = whatsappLink; 
        namesList.textContent = name;
    }
});
