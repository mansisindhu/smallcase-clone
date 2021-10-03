const alertEl = document.querySelector(".alert");

const addSignup = () => {
    const emailInputElement = document.querySelector("#email_id");
    const passwordInputElement = document.querySelector("#password_setup");
    const confirmPasswordElement = document.querySelector("#password_conf");

    if (emailInputElement.value === "" && passwordInputElement.value === "" && confirmPasswordElement.value === "") {
        alertEl.textContent = "Please fill all the details!";
        alertEl.style.visibility = "unset";
        return;
    }

    if (passwordInputElement.value !== confirmPasswordElement.value) {
        alertEl.textContent = "Password is not matched";
        alertEl.style.visibility = "unset";
        return;
    }
    fetch("/api/signup", {
        method: "post",
        body: JSON.stringify({
            "email": emailInputElement.value,
            "password": passwordInputElement.value
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                if (res.message === "Invaild email address") {
                    alertEl.textContent = "Invaild email address";
                    alertEl.style.visibility = "unset";
                } else {
                    alertEl.textContent = "User already exists";
                    alertEl.style.visibility = "unset";
                }
            } else {
                window.location.pathname = "/login"
            }
        })

}