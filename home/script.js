const invite = document.querySelector(".earn");
const help = document.querySelector(".help");
const cmd = document.querySelector(".cmds");

cmd.addEventListener("click", function () {
  window.location = "http://glory.vercel.app/cmds";
});
invite.addEventListener("click", function () {
  window.location = "http://glory.vercel.app/buy";
});
help.addEventListener("click", function () {
  window.location = "http://glory.vercel.app/help";
});
