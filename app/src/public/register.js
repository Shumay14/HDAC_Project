"use strict";

const account_id = document.querySelector("#account-id"),
  name_str = document.querySelector("#name"),
  password = document.querySelector("#password"),
  confirmPassword = document.querySelector("#confirm-password"),
  emali = document.querySelector("#email"),
  profile_image = document.querySelector("#profile-image"),
  wallet_address = document.querySelector("#wallet-address"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if (!account_id.value) return alert("Please enter account ID.");
  if (password.value !== confirmPassword.value)
    return alert("Incorrect password.");

  const req = {
    account_id: account_id.value,
    name: name_str.value,
    password: password.value,
    email: emali.value,
    profile_image: profile_image.value,
    wallet_address: wallet_address.value
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
}
