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
let pickleUpgCost = 1000;

// mayo uograde
let mayo = document.getElementById('mayo');
let mayoUpgCost = 2500;

// upgrade buns
let buns = document.getElementById('lowtierbuns');
let bunUpgCost = 5000;

//lettuce
let lettuce = document.getElementById('lettuce')
let lettuceUpgCost = 10000;

//tomator
let tomato = document.getElementById('tomator')
let tomatoUpgCost = 25000;

//ketchup
let ketchup = document.getElementById('ketchup')
let ketchupUpgCost = 50000;

//mustard
let mustard = document.getElementById('mustard')
let mustardUpgCost = 100000;

//cheese
let cheese = document.getElementById('cheese')
let cheeseUpgCost = 250000

//extra onions
let onion = document.getElementById('onion')
let onionUpgCost = 500000

//pink jelly
let pinkJelly = document.getElementById('pinkjelly')
let pinkJellyUpgCost = 1000000

//blue jelly
let blueJelly = document.getElementById('bluejelly')
let blueJellyUpgCost = 2500000

// main clicker
function cook() {
    money.innerHTML = parseInt(money.innerHTML) + cookEfficiency;
};
cookbtn.addEventListener('click', cook);

//When the user clicks on the cook, splash the cook efficiency around the users cursor
cookbtn.addEventListener('click', function(event){
    let cookEfficiencyDisplay = document.createElement('div');
    cookEfficiencyDisplay.innerHTML = '+' + cookEfficiency;
    cookEfficiencyDisplay.style.position = 'absolute';
    cookEfficiencyDisplay.style.top = (event.clientY - 35) + 'px'; // Adjusted top position
    cookEfficiencyDisplay.style.left = event.clientX + 'px';
    cookEfficiencyDisplay.style.color = 'lime';
    cookEfficiencyDisplay.style.fontSize = '20px';
    cookEfficiencyDisplay.style.fontWeight = 'bold';
    document.body.appendChild(cookEfficiencyDisplay);
    
    setTimeout(() => {
        let position = parseInt(cookEfficiencyDisplay.style.top);
        let opacity = 1;
        let interval = setInterval(() => {
            position -= 2; // Adjust the floating speed
            opacity -= 0.02; // Adjust the fading speed
            cookEfficiencyDisplay.style.top = position + 'px';
            cookEfficiencyDisplay.style.opacity = opacity;
            if (position <= -40) { // Adjust the end position
                clearInterval(interval);
                cookEfficiencyDisplay.remove();
            }
        }, 3); // Adjust the interval duration
    }, 300);
});






//////////////////////CLICKER UPGRADES/////////////////////////

//spatular upgrades
function upgSpat(){
    if (parseInt(money.innerHTML) >= parseInt(spatUpgCost.innerHTML)){
        money.innerHTML = parseInt(money.innerHTML) - parseInt(spatUpgCost.innerHTML);
        spatUpgCost.innerHTML = parseInt(spatUpgCost.innerHTML) + parseInt(spatUpgCost.innerHTML) * 0.6;
        spatUpgCost.innerHTML = (parseInt(spatUpgCost.innerHTML)).toFixed(0);
        cookEfficiency += 2;
        SpatEff = SpatEff + 2;
        spatUpgDisplay.innerHTML = SpatEff;
    };
};
spatular.addEventListener('click', upgSpat);

//pickle upgrades
function upgPickle(){
    if (parseInt(money.innerHTML) >= pickleUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - pickleUpgCost;
        cookEfficiency += 20;
        pickles.removeEventListener('click', upgPickle);
        pickles.style.transition = 'opacity 1s';
        pickles.style.opacity = 0;
        setTimeout(() => {
            pickles.remove();
        }, 1000);
    };
};
pickles.addEventListener('click', upgPickle);

//mayo upgrades
function upgMayo(){
    if (parseInt(money.innerHTML) >= mayoUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - mayoUpgCost;
        cookEfficiency += 50;
        mayo.removeEventListener('click', upgMayo);
        mayo.style.transition = 'opacity 1s';
        mayo.style.opacity = 0;
        setTimeout(() => {
            mayo.remove();
        }, 1000);
    };
};
mayo.addEventListener('click', upgMayo);

//Buns upgrades
function upgBuns(){
    if (parseInt(money.innerHTML) >= bunUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - bunUpgCost;
        cookEfficiency += 100;
        buns.removeEventListener('click', upgBuns);
        buns.style.transition = 'opacity 1s';
        buns.style.opacity = 0;
        setTimeout(() => {
            buns.remove();
        }, 1000);
    };
};
buns.addEventListener('click', upgBuns);

//lettuce upgrade
function upgLettuce(){
    if (parseInt(money.innerHTML) >= lettuceUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - lettuceUpgCost;
        cookEfficiency += 200;
        lettuce.removeEventListener('click', upgLettuce);
        lettuce.style.transition = 'opacity 1s';
        lettuce.style.opacity = 0;
        setTimeout(() => {
            lettuce.remove();
        }, 1000);
    };
};
lettuce.addEventListener('click', upgLettuce);

//tomato upgrade
function upgTomato(){
    if (parseInt(money.innerHTML) >= tomatoUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - tomatoUpgCost;
        cookEfficiency += 500;
        tomato.removeEventListener('click', upgTomato);
        tomato.style.transition = 'opacity 1s';
        tomato.style.opacity = 0;
        setTimeout(() => {
            tomato.remove();
        }, 1000);
    };
};
tomato.addEventListener('click', upgTomato);

//ketchup upg
function upgKetchup(){
    if (parseInt(money.innerHTML) >= ketchupUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - ketchupUpgCost;
        cookEfficiency += 1000;
        ketchup.removeEventListener('click', upgKetchup);
        ketchup.style.transition = 'opacity 1s';
        ketchup.style.opacity = 0;
        setTimeout(() => {
            ketchup.remove();
        }, 1000);
    };
};
ketchup.addEventListener('click', upgKetchup);

//mustard upg
function upgMustard(){
    if (parseInt(money.innerHTML) >= mustardUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - mustardUpgCost;
        cookEfficiency += 2000;
        mustard.removeEventListener('click', upgMustard);
        mustard.style.transition = 'opacity 1s';
        mustard.style.opacity = 0;
        setTimeout(() => {
            mustard.remove();
        }, 1000);
    };
};
mustard.addEventListener('click', upgMustard);

//cheese upgrade
function upgCheese(){
    if (parseInt(money.innerHTML) >= cheeseUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - cheeseUpgCost;
        cookEfficiency += 5000;
        cheese.removeEventListener('click', upgCheese);
        cheese.style.transition = 'opacity 1s';
        cheese.style.opacity = 0;
        setTimeout(() => {
            cheese.remove();
        }, 1000);
    };
};
cheese.addEventListener('click', upgCheese);

//xtra onions
function upgOnion(){
    if (parseInt(money.innerHTML) >= onionUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - onionUpgCost;
        cookEfficiency += 10000;
        onion.removeEventListener('click', upgOnion);
        onion.style.transition = 'opacity 1s';
        onion.style.opacity = 0;
        setTimeout(() => {
            onion.remove();
        }, 1000);
    };
};
onion.addEventListener('click', upgOnion);

//pink jelly upgrade
function upgPinkJelly(){
    if (parseInt(money.innerHTML) >= pinkJellyUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - pinkJellyUpgCost;
        cookEfficiency += 20000;
        pinkJelly.removeEventListener('click', upgPinkJelly);
        pinkJelly.style.transition = 'opacity 1s';
        pinkJelly.style.opacity = 0;
        setTimeout(() => {
            pinkJelly.remove();
        }, 1000);
    };
};
pinkJelly.addEventListener('click', upgPinkJelly);

//blue jelly upgrade
function upgBlueJelly(){
    if (parseInt(money.innerHTML) >= blueJellyUpgCost){
        money.innerHTML = parseInt(money.innerHTML) - blueJellyUpgCost;
        cookEfficiency += 50000;
        blueJelly.removeEventListener('click', upgBlueJelly);
        blueJelly.style.transition = 'opacity 1s';
        blueJelly.style.opacity = 0;
        setTimeout(() => {
            blueJelly.remove();
        }, 1000);
    };
};
blueJelly.addEventListener('click', upgBlueJelly);

////////////////IDLE UPGRADES//////////////////