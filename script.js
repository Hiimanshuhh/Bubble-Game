var timer = 60;
var score = 0;

function incScore(){
  score += 10;
  document.querySelector(".scores").textContent = score;
}
function getNewHit(){
  var val = Math.floor(Math.random()*10);
  document.querySelector("#box").textContent = val
}
function makeBubble(){
  var cluster = " "
for(var i = 1; i<=133;i++){
  var rn = Math.floor(Math.random()*10);
  cluster += `<div id="bubble">${rn}</div>`;
}
document.querySelector("#p-bottom").innerHTML = cluster;  
}
function runTimer(){
  var intvl = setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector(".time").textContent = timer;
    }
    else{
      clearInterval(intvl);
      document.querySelector('#p-bottom').innerHTML = `<h1 style="color:black">Game Over<h1>`
    }
  },1000)
}
document.querySelector("#p-bottom").addEventListener("click",function(dets){
  var target = dets.target.textContent;
  if(target === document.querySelector("#box").textContent){
    incScore();
    makeBubble();
    getNewHit();
  }
})

makeBubble();
getNewHit();
runTimer();

