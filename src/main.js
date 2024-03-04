'use strict'

let money = document.getElementById('money');

let cookbtn = document.getElementById('cook');
let cookUpgrade = document.getElementById('CookUpg');
let cookCost = document.getElementById('cookUpgCost');

let cookUpgrades = document.getElementById('cookUpgCount');

let blocker = document.getElementById("blocker");
let patrickUnlock = document.getElementById("patrickUnlock");
let buyPatrick = document.getElementById("buyPatrick");
let patrickInfo = document.getElementById("patrickInfo")
let patrickWorkerCount = document.getElementById("PatrickWorkerCount")
let PatrickCashPerSecond = document.getElementById("PatrickCashPerSecond")
let patrickCost = 50
let PatrickEffectiveness = 5;

// if cookbtn is cliecked, add 1 money;
cookbtn.addEventListener('click', function(){
    money.innerHTML = parseInt(money.innerHTML) + 1 * (parseInt(cookUpgrades.innerHTML) + 1);
});

// if cookUpgrade is clicked, subtract 10 money and add 1 to cookUpgrades
cookUpgrade.addEventListener('click', function(){
    if(parseInt(money.innerHTML) >= 10){
        // if they have money * upg count allow them to ugprade
        if (parseInt(money.innerHTML) >= 10 * (parseInt(cookUpgrades.innerHTML) + 1)){
            money.innerHTML = parseInt(money.innerHTML) - 10 * (parseInt(cookUpgrades.innerHTML) + 1);
            cookUpgrades.innerHTML = parseInt(cookUpgrades.innerHTML) + 1;
            cookCost.innerHTML = 10 * (parseInt(cookUpgrades.innerHTML) + 1);
        }

    }
});

blocker.addEventListener('click', startPatrickFarm);


function payForPatrick() {
    setInterval(function () {
        money.innerHTML = parseInt(money.innerHTML) + parseInt(PatrickCashPerSecond.innerHTML)
    }, 1000);
}

function buyPatricks() {
    if (parseInt(money.innerHTML) >= patrickCost) {
        console.log("patrick buy");
        money.innerHTML = parseInt(money.innerHTML) - patrickCost;
        patrickWorkerCount.innerHTML = parseInt(patrickWorkerCount.innerHTML) + 1;
        PatrickCashPerSecond.innerHTML = parseInt(PatrickCashPerSecond.innerHTML) + PatrickEffectiveness;
    }
}

function startPatrickFarm() {
    if (parseInt(money.innerHTML) >= 500) {
        console.log(parseInt(money.innerHTML));
        blocker.classList.remove("opacity-10");
        patrickUnlock.classList.remove("visible");
        patrickUnlock.classList.add("hidden");
        buyPatrick.classList.remove("hidden");
        patrickInfo.classList.remove("hidden");
        money.innerHTML = parseInt(money.innerHTML) - 500;
        console.log(money.innerHTML);
        blocker.removeEventListener('click', startPatrickFarm);
        buyPatrick.addEventListener('click', buyPatricks)
        payForPatrick()
    };
};