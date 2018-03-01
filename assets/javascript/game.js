//Global Variables 

var yourCharacter= [
    c1 = {name: $("#pikachu"), health: "150" , initStr: "25"},
    c2 = {name: $("#bulbasaur"), health: "185", initStr: "22"},
    c3 = {name: $("#charmander"), health: "160", initStr: "24"}
]

var oppoCharacter= [
    c1 = {name: "Squirtle", health: "180" , initStr: "23"},
    c2 = {name: "Flareon", health: "130", initStr: "35"},
    c3 = {name: "Raikou", health: "120", initStr: "35"}
]

var char = 0

var pikachuSquirtle = $( "#pikachu" ).click(function() {
    if()



$(document).ready(function() {
    $( "#pikachu" ).click(function() {
        $(".container-2").hide();
        $(".container-3").prepend('<img id="pikachu" src="assets/images/Pikachu.png" width="70" height="70" alt=""/>')
        
      });
      $( "#bulbasaur" ).click(function() {
        $(".container-2").hide();
        $(".container-3").prepend('<img id="bulbasaur" src="assets/images/Bulbasaur.png" width="70" height="70" alt=""/>')
        
      });

      $( "#charmander" ).click(function() {
        $(".container-2").hide();
        $(".container-3").prepend('<img id="charmander" src="assets/images/Charmander.png" width="70" height="70" alt=""/>')
        
      });
    
      $( "#squirtle" ).click(function() {
        $(".container-4").hide();
        $(".container-7").append('<img id="squirtle" src="assets/images/Squirtle.png" width="70" height="70" alt=""/>')
        
      });
      $( "#flareon" ).click(function() {
        $(".container-4").hide();
        $(".container-7").append('<img id="flareon" src="assets/images/flareon.svg" width="70" height="70" alt=""/>')
        
      });

      $( "#raikou" ).click(function() {
        $(".container-4").hide();
        $(".container-7").append('<img id="raikou" src="assets/images/raikou.svg" width="70" height="70" alt=""/>')
        
      });
    
    })
