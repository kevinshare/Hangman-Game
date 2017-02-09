
var wordBank = ['swagger', 'swag', 'homie', 'sauce'];

// grab random word from array when user clicks start

function startGame() {
    ("#start").click(function(){
    var word = wordBank[Math.floor(Math.random() * wordBank.length)];
	var wordLength = word.length;
	var underscores = "";
	for(i=0; i<wordLength; i++) {
    	underscores = underscores + "_ "
	}
	console.log(underscores);
	document.getElementByClassName('display').innerHTML = underscores;
	});
};





document.onkeyup = function() {
var letter = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementByClassName('choice') = letter;
    
if(letter=){
   
    
}
else if(letter=){
    
    }



