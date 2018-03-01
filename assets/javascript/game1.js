//Global Variables 

$(document).ready(function() {

    var yourCharacter = new Array;
    var i = 0
    var character = {
    "pikachu" : {name: "pikachu", health: "150" , initStr: "25", imageURL: "assets/images/Pikachu.png", damageIncrease: "10"},
    "bulbasaur" : {name: "bulbasaur", health: "185", initStr: "22", imageURL: "assets/images/Bulbasaur.png", damageIncrease: "8"},
    "charmander" : {name: "charmander", health: "160", initStr: "24", imageURL: "assets/images/Charmander.png", damageIncrease: "7"}
    }

    var oppoCharacter = new Array;
    var opponent = {
    "squirtle" : {name: "Squirtle", health: "180" , initStr: "23", imageURL: "assets/images/Squirtle.png", damageIncrease: "6"},
    "flareon" : {name: "Flareon", health: "130", initStr: "35", imageURL: "assets/images/flareon.svg", damageIncrease: "3"}, 
    "raikou" : {name: "Raikou", health: "120", initStr: "35", imageURL: "assets/images/raikou.svg", damageIncrease: "3"}
    }

    
    // var chosenCharacter = $('.nav-item-1').each(function() {
        
    //     chosenCharacter.name = pikachu.name;
    //     chosenCharacter.health = pikachu.health;
    //     chosenCharacter.initStr = pikachu.initStr;
    //     console.log(chosenCharacter);
    
    // })

    // var chosenOpponent = $(".nav-item-2").click(function() {
    //     chosenOpponent.name = raikou.name;
    //     chosenOpponent.health = raikou.health;
    //     chosenOpponent.initStr = raikou.initStr;
        
        
    //      console.log(chosenOpponent.name);
    
    // })

    // function characterSelect(chosenCharacter) {
    //     yourCharacter.name = chosenCharacter.name;
    //     yourcharacter.health = chosenCharacter.health;
    //     yourCharacter.initStr = chosenCharacter.initStr;
    // }

    // function opponentSelect(chosenOpponent) {
    //     oppoCharacter.name = chosenOpponent.name;
    //     oppoCharacter.health = chosenOpponent.health;
    //     oppoCharacter.initStr = chosenOpponent.initStr;
    // }

    function fight() {
        yourCharacter.health = yourCharacter.health - oppoCharacter.initStr;

        $(".container-8").append(yourCharacter.name + "   damaged:  " + yourCharacter.initStr)
        oppoCharacter.health = oppoCharacter.health - yourCharacter.initStr;
        $(".container-8").append("   " + oppoCharacter.name + "   damaged back:" + oppoCharacter.initStr);
        $(".container-8").append("   " + yourCharacter.name + "   current health:" +yourCharacter.health)
        console.log(oppoCharacter)
    }
    function updateDamage() {
        while(yourCharacter.health > 0 && oppoCharacter.health >0) {
            yourCharacter.initStr += yourCharacter.damageIncrease;
            oppoCharacter.initStr += oppoCharacter.damageIncrease;
        }
    }
    // jQuery('.nav').click(function(){
    //     $(this).data('clicked', true);
      
    //   console.log("okay")
    //  })
// choosing character and opponent function
var char = 0

var oppo = 0 

var remainingChar = character.length 

var remainingOppo = opponent.length


$("#pikachu").click(function() {
$(".container-2").hide();
$(".container-7").append('<img id="pikachu" src="assets/images/Pikachu.png" width="200" height="200" alt="" class = center/>' + "VS")
yourCharacter.push(character.pikachu)
yourCharacter.name = character.pikachu.name
yourCharacter.health = character.pikachu.health
yourCharacter.initStr = character.pikachu.initStr
yourCharacter.damageIncrease = character.pikachu.damageIncrease
console.log(yourCharacter)
alert("You have chosen Pikachu!")
})


$( "#bulbasaur").click(function() {
$(".container-2").hide();
$(".container-7").prepend('<img id="bulbasaur" src="assets/images/Bulbasaur.png" width="200" height="200" alt=""/>' + "VS")
yourCharacter.push(character.bulbasaur)
yourCharacter.name = character.bulbasaur.name
yourCharacter.health = character.bulbasaur.health
yourCharacter.initStr = character.bulbasaur.initStr
yourCharacter.damageIncrease = character.bulbasaur.damageIncrease
console.log(yourCharacter)
alert("You have chosen Bulbasaur!")
}) 

$( "#charmander" ).click(function() {
$(".container-2").hide();
$(".container-7").prepend('<img id="charmander" src="assets/images/Charmander.png" width="200" height="200" alt=""/>' + "VS")
yourCharacter.push(character.charmander)
yourCharacter.name = character.charmander.name
yourCharacter.health = character.charmander.health
yourCharacter.initStr = character.charmander.initStr
yourCharacter.damageIncrease = character.charmander.damageIncrease
console.log(yourCharacter)  
alert("You have chosen Charmander!")
  });

  $( "#squirtle" ).click(function() {
    $(".container-4").hide();
    $(".container-7").append('<img id="squirtle" src="assets/images/Squirtle.png" width="200" height="200" alt=""/>')
    oppoCharacter.push(opponent.squirtle)
    oppoCharacter.name = opponent.squirtle.name
    oppoCharacter.health = opponent.squirtle.health
    oppoCharacter.initStr = opponent.squirtle.initStr
    oppoCharacter.damageIncrease = opponent.squirtle.damageIncrease
console.log(oppoCharacter)
alert("You have chosen Squirtle!")
  });

  $( "#flareon" ).click(function() {
    $(".container-4").hide();
    $(".container-7").append('<img id="flareon" src="assets/images/flareon.svg" width="200" height="200" alt=""/>')
    oppoCharacter.push(opponent.flareon)
    oppoCharacter.name = opponent.flareon.name
    oppoCharacter.health = opponent.flareon.health
    oppoCharacter.initStr = opponent.flareon.initStr
    oppoCharacter.damageIncrease = opponent.flareon.damageIncrease
console.log(oppoCharacter)
alert("You have chosen Flareon!")
  });

  $( "#raikou" ).click(function() {
    $(".container-4").hide();
    $(".container-7").append('<img id="raikou" src="assets/images/raikou.svg" width="200" height="200" alt=""/>')
    oppoCharacter.push(opponent.raikou)
    
    oppoCharacter.name = opponent.raikou.name
    oppoCharacter.health = opponent.raikou.health
    oppoCharacter.initStr = opponent.raikou.initStr
    oppoCharacter.damageIncrease = opponent.raikou.damageIncrease
    console.log(oppoCharacter)
    alert("You have chosen Raikou!")
  });



    $("#restart").hide();
    
    $("#fight").click(function() {
               fight()
               updateDamage()
               console.log(yourCharacter.initStr)
    
        
       })
    
    // $('.nav-item-1').each(function() {
    //     $(this).one("click", function(e) {        
    //      yourCharacter.push($(this).val());
    //     console.log($(this).val());
    //     if(yourCharacter.includes(character.imageURL)) {
    //         alert("You have chosen your character")
    //     }      
    
    // }); 
    //      });

    // $('.nav-item-2').each(function() {
    //     $(this).one("click", function(e) {        
    //     oppoCharacter.push($(this).val());
    //         console.log(oppoCharacter);
    //         if(oppoCharacter.length === 1) {
    //             alert("You have chosen your opponent")
    //         }
        }); 
       
   


   
    
    // if (oppoCharacter.length = 2){ 
    //     $('.nav').click(function(event){
    //         event.stopImmediatePropagation();
    //     })

        


// })

//    $("#fight").click(function() {
//        fight()
//    })

//    $("#pikachu").click(function() {
//     if (this.id == 'pikachu') {
//     $(".container-2").hide();
//     $(".container-7").append('<img id="pikachu" src="assets/images/Pikachu.png" width="200" height="200" alt="" class = center/>' + "VS")
// }})
// $( "#flareon" ).click(function() {
//     if (this.id == 'flareon') {
//         $(".row-2").hide();
//        $(".container-7").append('<img id="raikou" src="assets/images/flareon.svg" width="200" height="200" alt="" center-align/>')
//     }
// })
// $("#fight").click(function() {
//    fight()
// })
//     }
// )


    //   $( "#bulbasaur" ).click(function() {
    //     $(".container-2").hide();
    //     $(".container-3").prepend('<img id="bulbasaur" src="assets/images/Bulbasaur.png" width="70" height="70" alt=""/>')
        
    //   });

    //   $( "#charmander" ).click(function() {
    //     $(".container-2").hide();
    //     $(".container-3").prepend('<img id="charmander" src="assets/images/Charmander.png" width="70" height="70" alt=""/>')
        
    //   });
    
    //   $( "#squirtle" ).click(function() {
    //     $(".container-3").hide();
    //     $(".container-7").append('<img id="squirtle" src="assets/images/Squirtle.png" width="70" height="70" alt=""/>')
        
    //   });
    //   $( "#flareon" ).click(function() {
    //     $(".container-3").hide();
    //     $(".container-7").append('<img id="flareon" src="assets/images/flareon.svg" width="70" height="70" alt=""/>')
        
    //   });

    //   $( "#raikou" ).click(function() {
    //     $(".container-3").hide();
    //     $(".container-7").append('<img id="raikou" src="assets/images/raikou.svg" width="70" height="70" alt=""/>')
        
    //   });
    