function clickHandle(){
    console.log("123");
    alert("123")
    var title = document.getElementsByClassName("title");
    title.color = blue;
    var ti = document.querySelector(".title");
    ti.innerHTML = "点击按钮，改变文字";
}
var tit=document.querySelector(".title");
console.log(tit.innerHTML);
var btn = document.querySelector("button");
console.log(btn)
btn.ontouchend =function (){
    alert("点我干嘛啊？");
    console.log("点你妹啊");
}
