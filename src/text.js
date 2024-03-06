'use strict'

let money = document.getElementById('money');
let moneyPerSecond = document.getElementById('moneyPerSecond');

let cookbtn = document.getElementById('cook');
let cookUpgrade = document.getElementById('CookUpg');
let cookCost = document.getElementById('cookUpgCost');
let cookUpgrades = document.getElementById('cookUpgCount');
let cookEfficiency = 1;

//Spatular upgrade
let spatular = document.getElementById('spatular');
let spatUpgCost = document.getElementById('spatUpgCost');
let spatUpgDisplay = document.getElementById('spatUpgDisplay');
let SpatEff = 0;

//Pickle upgrade
let pickles = document.getElementById('pickles');
let pickleUpgCost = 750;



// main clicker
function cook() {
    money.innerHTML = parseInt(money.innerHTML) + cookEfficiency;
};
cookbtn.addEventListener('click', cook);



// Spatular upgrades
function upgSpat(){
    if (parseInt(money.innerHTML) >= parseInt(spatUpgCost.innerHTML)){
        money.innerHTML = parseInt(money.innerHTML) - parseInt(spatUpgCost.innerHTML);
        spatUpgCost.innerHTML = parseInt(spatUpgCost.innerHTML) + parseInt(spatUpgCost.innerHTML) * 0.6;
        spatUpgCost.innerHTML = (parseInt(spatUpgCost.innerHTML)).toFixed(0);
        cookEfficiency += 3;
        SpatEff = SpatEff + 3;
        spatUpgDisplay.innerHTML = SpatEff;
    };
};
spatular.addEventListener('click', upgSpat);

// Pickle upgrades
function upgPickle(){
    if (parseInt(money.innerHTML) >= pickleUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - pickleUpgCost;
        cookEfficiency += 10;
        pickles.removeEventListener('click', upgPickle);
        pickles.style.transition = 'opacity 1s';
        pickles.style.opacity = 0;
        setTimeout(() => {
            pickles.remove();
        }, 1000);
    };
};
pickles.addEventListener('click', upgPickle);









