'use strict'

let money = document.getElementById('money');

let cookbtn = document.getElementById('cook');
let cookUpgrade = document.getElementById('CookUpg');
let cookCost = document.getElementById('cookUpgCost');

let cookUpgrades = document.getElementById('cookUpgCount');

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
