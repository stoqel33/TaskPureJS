import "focus-visible";
import { route } from "./router";

route("/", "home", function () {
  this.$on("#btn-submit", "click", (e) => {
    e.preventDefault();
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username.value.length && password.value.length) {
      const name = username.value;
      const pass = password.value;
      const req = { name, password: pass };

      fetch("https://zwzt-zadanie.netlify.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      })
        .then((res) => res.json())
        .then(() => {
          window.location.href = "./success.html#/success";
        });
    } else if (username.value.length && !password.value.length) {
      const req = { name: "zwzt", password: "error" };
      fetch("https://zwzt-zadanie.netlify.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            alert("Brak hasła");
            this.$refresh();
          }
        });
    } else if (!username.value.length && password.value.length) {
      const req = { name: "zwzt", password: "error" };
      fetch("https://zwzt-zadanie.netlify.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            alert("Brak loginu");
            this.$refresh();
          }
        });
    } else {
      const req = { name: "zwzt", password: "error" };
      fetch("https://zwzt-zadanie.netlify.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            alert("Wprowadź poprawnie wszystkie dane");
            this.$refresh();
          }
        });
    }
  });
});

route("*", "404", function () {
  window.location.href = "./home.html";
});
