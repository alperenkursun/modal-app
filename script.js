document.getElementById("close").addEventListener("click",function(){
    document.getElementById("modal").style.opacity="0";
    document.getElementById("black").style.opacity="0";
    document.getElementById("modal").style.zIndex="-1";
    document.getElementById("black").style.zIndex="-1";
});

document.getElementById("open").addEventListener("click",function(){
    document.getElementById("modal").style.opacity="1";
    document.getElementById("black").style.opacity="0.4";
    document.getElementById("modal").style.zIndex="100";
    document.getElementById("black").style.zIndex="50";
})