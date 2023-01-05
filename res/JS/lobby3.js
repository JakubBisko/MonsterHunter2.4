
const gold = document.getElementById("gold");
const playermaxhp = document.getElementById("playermaxhp");
const playerdmg = document.getElementById("playerdmg");

const potion = document.getElementById("potion");
const weapon = document.getElementById("weapon");

let potioncount = parseInt(localStorage.getItem("potion")) || 0;
let armorcount = parseInt(localStorage.getItem("armor")) || 0;
let weaponcount = parseInt(localStorage.getItem("weapon")) || 0;

let goldcount = parseInt(localStorage.getItem("golds")) || 0;
let playerhpcount = parseInt(localStorage.getItem("zivoty")) || 200;
let playerdmgcount = parseInt(localStorage.getItem("damage")) || 100;


parseInt(localStorage.setItem("golds", goldcount));
parseInt(localStorage.setItem("zivoty", playerhpcount));
parseInt(localStorage.setItem("damage", playerdmgcount));
parseInt(localStorage.setItem("potion", potioncount));
parseInt(localStorage.setItem("armor", armorcount));
parseInt(localStorage.setItem("weapon", weaponcount));

gold.innerHTML = `Gold: ${goldcount}`;
playermaxhp.innerHTML = `Životy: ${playerhpcount}`;
playerdmg.innerHTML = `Damage: ${playerdmgcount}`;