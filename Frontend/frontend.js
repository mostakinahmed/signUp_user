const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(name, email, password);

  const userInfo = {
    name,
    email,
    password,
  };

  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
});
