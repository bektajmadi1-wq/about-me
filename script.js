alert ("Добро пожаловать мой сайт! Нажми на ок чтоб продолжить")
console.log("Привет от JavaScript!")

let name="Мади";
let age = 13;
let hobby ="программирование";
let hasBrother = true;
let favoriteColor = "фиолетовый";

console.log("Имя:", name);
console.log("Возраст:", age);
console.log("Хобби:", hobby);
console.log("Есть младший брат:", hasBrother);
console.log("Любимый цвет:", favoriteColor);

const fact=document.getElementById("fact");
let darkMode= true;
fact.addEventListener("click", function(){
    alert("Я пишу левой рукой и у меня возможно аллергия на кошек");
    console.log("это правда");
    if (darkMode) {
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        fact.textContent="Ой! нажми заново, чтобы восстановить 😅";
        darkMode = false;
    } else{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        fact.textContent="Интересный факт обо мне (нажми на текст)";
        darkMode = true;
    }
});

const games = 
["Roblox", "Minecraft", "Sonic the Hedgehog", "GTA V", "Mortal Combat", "Brawl Stars", ];
console.log("Мой любимые игры:");

for(let i=0; i<games.length; i++){
    console.log(games[i]);
}

function send() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let about = document.getElementById("about").value;

  if (name === "") {
    alert("Напиши имя!");
  } else if (age === "") {
    alert("Напиши возраст!");
  } else if (about === "") {
    alert("Напиши о себе!");
  } else {
    alert("Привет, " + name + "! О тебе: " + about + ".");
  }
}

let clickCount = 0;

const counter = document.getElementById("counter");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", function() {
    clickCount++;
    counter.textContent = clickCount;
})

button2.addEventListener("click", function() {
    clickCount = 0;
    counter.textContent = clickCount;
})