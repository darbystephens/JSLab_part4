(function(){

  var startButton = document.getElementById("startButton");
  var attackButton = document.getElementById("attackButton");
  var healbutton = document.getElementById("healButton");
  var quitButton = document.getElementById("quitButton");
  var characterHealthBar = document.getElementById("characterHealthBar");
  var characterHealCountBar = document.getElementById("characterHealCountBar")
  var characterWinBar = document.getElementById("characterWinBar");
  var grantHealthBar = document.getElementById("grantHealthBar");
  var messageEl = document.getElementById("message");
  var statEl = document.getElementById("characterStat");
  var grantStatEl =  document.getElementById("grantStat");
  var sneaky = document.getElementById("sneaky");

  startButton.onclick = function(){
    if (sneaky.style.display = "none"){
        sneaky.style.display = "block";
        startButton.style.display = "none";

    var character = {
      name: prompt("What is your name?"),
      health: 40,
      healsRemaining:2,
      wins:0,
      generateAttackDamage:function(){
        return Math.floor(Math.random() * 3 + 1);
      },
      heal:function(){
        return Math.floor(Math.random() * 10 + 1);
      }
    }

    var grant = {
      name:"Grant",
      health: 10,
      generateAttackDamage:function(){
        return Math.floor(Math.random() * 5 + 1);
      }
    }

    updateStat(character.name + "'s Stats");
    updateGrant(grant.name + "'s Stats")

    attackButton.onclick = function() {
      if(character.wins < 5 && character.health > 0){

        if( grant.health > 0) {
          character.health = character.health - character.generateAttackDamage();
          grant.health =  grant.health - grant.generateAttackDamage();
          updateDisplay();
          updateMessage(character.name + " has " + character.health + " hitpoints remaining and " + grant.name + " has " + grant.health + " hitpoints remaining");
        }
        if( grant.health < 1){
          character.wins++;
          updateDisplay();
          updateMessage(character.name + " has " + character.wins + " win(s)!");
          grant.health = 10;
        }
      }

      if(character.wins === 5 && character.health > 0){
        updateMessage(character.name + " has won!");
      }
      
      if(character.health < 1) {
        updateMessage("You lost the game");
      }
    }

    healButton.onclick = function() {
      if(character.healsRemaining > 0 && character.health > 1){
      character.health = character.health + character.heal();
      character.healsRemaining--;
      updateDisplay();
      updateMessage(character.name + " now has " + character.health + " hitpoints and " + character.healsRemaining + " heals remaining.");
      } else if (character.healsRemaining === 0){
      updateMessage("You are out of heals");
      }
    }

    quitButton.onclick = function(){
      character.health = 0;
      updateMessage("You left the game");
      attackButton.onclick = updateMessage("you left the game");
    }

    function updateDisplay() {
        characterHealthBar.value = character.health;
        characterHealCountBar.value = character.healsRemaining;
        grantHealthBar.value = grant.health;
        characterWinBar.value = character.wins;
    }
    function updateMessage(newMessage) {
        messageEl.innerText = newMessage;
    }

    function updateStat(newStat) {
      statEl.innerText = newStat;
    }

    function updateGrant(newGrant) {
      grantStatEl.innerText = newGrant;
    }

  } else {
    sneaky.style.display = "none";
  }
}


})();
