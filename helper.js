document.addEventListener("scroll", (event) =>
{
    const avatar = document.getElementById("avatar")
    var positionY = window.scrollY;
    var max = document.body.clientHeight;
    var progress = positionY / max;

    avatar.style.left = positionY + "px";
    console.log(avatar);
    
    console.log(positionY + " / " + max + " = " + progress);

});