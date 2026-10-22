const avatar = document.getElementById("avatar")

document.addEventListener("scroll", (event) =>
{
    var positionY = window.scrollY;
    var maxHeight = document.body.scrollHeight - window.innerHeight;
    var maxWidth = window.innerWidth - avatar.offsetWidth;
    var progress = (positionY / maxHeight) * maxWidth;

    avatar.style.left = progress + "px";
    console.log(avatar);
    
    console.log(positionY + " / " + max + " = " + progress);
});