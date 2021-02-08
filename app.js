import { route } from "./router";

route("/", "redirect", function () {
  window.location.href = "./templates/home.html";
});
