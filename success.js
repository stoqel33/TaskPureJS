import { route } from "./router";

route("/success", "success", function () {
  this.title = "Congrats! :)";
});

route("*", "404", function () {
  window.location.href = "./home.html";
});
