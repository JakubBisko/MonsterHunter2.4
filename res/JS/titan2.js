const playerhp = document.getElementById("playerhp");
const playenemyhpermaxhp = document.getElementById("enemyhp");
const attack = document.getElementById("attack");
const enemyhp = document.getElementById("enemyhp");
const text = document.getElementById("text");
const enemy = document.getElementById("enemy");
const exit = document.getElementById("exit");



let goldcount = parseInt(localStorage.getItem("golds"));
let playerhpcount = parseInt(localStorage.getItem("zivoty"));
let playerdmgcount = parseInt(localStorage.getItem("damage"));

let enemyhpcount = 150000;

parseInt(localStorage.setItem("golds",goldcount));
parseInt(localStorage.setItem("Damage", playerdmgcount));
parseInt(localStorage.setItem("zivoty", playerhpcount));

attack.onmousedown = () => {
  if (playerhpcount > 0 && enemyhpcount > 0);
  enemyhpcount -= playerdmgcount; 
  player.style.left = "700px";
  enemyhp.innerHTML = `HP: ${enemyhpcount}`;
  
};
if (enemyhpcount <= 0) {
    
  goldcount += 100;
  goldcount.setInterval("goldcount", goldcount)
}
attack.onmouseup = () => {
  player.style.left = "300px";
  
};

const enemyAttackInterval = setInterval(() => {
  playerhpcount -= 1500;

  playerhp.innerHTML = `HP: ${playerhpcount}`;
  if (playerhpcount <= 0) {
    clearInterval(enemyAttackInterval);
    text.innerHTML = "Zemřel jsi";
    window.location.href = "/lobby2.html";
  }
  if (enemyhpcount <= 0) {
    text.innerHTML = "You have defeated the enemy <br>+800 Gold";
    clearInterval(enemyAttackInterval);
    goldcount += 800;
    parseInt(localStorage.setItem("golds",goldcount));
    enemy.style.display ="none";
    enemyhp.style.display ="none";  
    player.style.display ="none";
    playerhp.style.display ="none";
    attack.style.display ="none";
    exit.style.display ="block";
    
    
  }
}, 1000);