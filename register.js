document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const location = document.getElementById("location").value.trim();
    const address = document.getElementById("address").value.trim();

    if (name === "" || email === "" || mobile === "" || location === "" || address === "") {
        alert("Please fill in all the details.");
        return;
    }

    const customer = {
        name: name,
        email: email,
        mobile: mobile,
        location: location,
        address: address
    };

    localStorage.setItem("customer", JSON.stringify(customer));

    alert("Registration successful!");

    window.location.href = "dashboard.html";

});