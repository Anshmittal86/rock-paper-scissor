function loader(){let e=0,r=document.querySelector(".btn"),o=document.querySelector(".game-loader");r.addEventListener("click",()=>{o.style.display="none",startGame()}),setInterval(()=>{e<=100&&(e=Math.min(e+Math.ceil(8*Math.random()),100),document.querySelector(".timer").textContent=`${e}%`,100===e&&(document.querySelector(".timer").style.display="none",document.querySelector(".btn").style.display="block"))},100)}function startGame(){let e={computerChoiceDisplay:document.getElementById("computer-choice"),userChoiceDisplay:document.getElementById("user-choice"),resultDisplay:document.getElementById("result"),possibleChoices:document.querySelectorAll("button"),userScoreDisplay:document.getElementById("score")},r=0,o,t,s;function i(e,r){r.innerHTML=`<img src="./images/${e}-icon.png" alt="${e} gesture image" width="80px"></img>`}e.possibleChoices.forEach(l=>{l.addEventListener("click",l=>{i(t=l.target.id,e.userChoiceDisplay),function r(){let t=["rock","paper","scissor"];i(o=t[Math.floor(Math.random()*t.length)],e.computerChoiceDisplay)}(),o===t?s="It's Draw...":(s=({rock:{paper:"\uD83D\uDE05 You lose ! \uD83D\uDE05",scissor:"\uD83C\uDF89 You win \uD83C\uDF89"},paper:{scissor:"\uD83D\uDE05 You lose ! \uD83D\uDE05",rock:"\uD83C\uDF89 You win \uD83C\uDF89"},scissor:{rock:"\uD83D\uDE05 You lose ! \uD83D\uDE05",paper:"\uD83C\uDF89 You win \uD83C\uDF89"}})[t][o]).includes("win")&&r++,e.resultDisplay.innerHTML=s,e.userScoreDisplay.innerHTML=r})})}loader();