const avatar = document.getElementById("avatar")
const root = document.documentElement
var pastProgress = 0

document.addEventListener("scroll", (event) =>
{
    var positionY = window.scrollY;
    var maxHeight = root.scrollHeight - window.innerHeight;
    var maxWidth = window.innerWidth - avatar.offsetWidth;
    var progress = (positionY / maxHeight) * maxWidth;

    if (progress < pastProgress)
        avatar.classList.add("face-right");
    else if (progress > pastProgress)
        avatar.classList.remove("face-right");

    avatar.style.left = progress + "px";

    pastProgress = progress;
});