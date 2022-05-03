const cursor=document.querySelector("#cursor");
console.log(cursor)
document.addEventListener("mousemove",moveCursor);
function moveCursor(evt){
    console.log(evt)
    cursor.style.left=evt.pageX+"px";
    cursor.style.top=evt.pageY+"px";
}
