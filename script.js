
//Selecting Elements
var inputBox = document.getElementById("input")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
var noofguess = 3

//Generate Random Number from 1 to 5 
var randomnumber = Math.floor(Math.random()*10)+1
if(randomnumber>5)
{
    randomnumber = randomnumber-5
}
//Event handler function
function checkthenumber()
{

    if(inputBox.value == randomnumber)
    {
        alert("You Got it Right,Congratulation")
        result.textContent = "You are Right"
    }
    else{
        noofguess = noofguess-1
        if(noofguess==0)
        {
            alert("You Lost,generated random number is :"+ randomnumber)
        }
        guesscount.textContent="Available guesses : "+noofguess
        result.textContent = "You are wrong!"
    }

}
