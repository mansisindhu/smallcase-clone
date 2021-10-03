const alertEl = document.querySelector(".alert");

const login = () => {
    let user_id = document.getElementById('userid');
    let password = document.getElementById('password');

    if (user_id.value === "" && password.value === "") {
        alertEl.textContent = "Please fill all the details";
        alertEl.style.visibility = "unset";
        return;
    }

    fetch("/api/login", {
        method: "post",
        body: JSON.stringify({
            "email": user_id.value,
            "password": password.value
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                if (res.message === "Wrong password") {
                    alertEl.textContent = "Invalid credentials";
                    alertEl.style.visibility = "unset";
                } else {
                    alertEl.textContent = "Login failed";
                    alertEl.style.visibility = "unset";
                }
            } else {
                window.location.pathname = "/";
            }
        })
}