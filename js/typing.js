const content = "매일매일 성장하는 개발자 남정욱입니다!";
const text = document.querySelector(".title h1");
let textIdx = 0;
function typing(){
let txt = content[textIdx++];
text.innerHTML += txt;
if (textIdx > content.length) {
   text.textContent = "";
   textIdx = 0;
  }
    }
setInterval(typing, 200);