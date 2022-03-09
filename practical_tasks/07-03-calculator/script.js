$(document).ready(function () {

    let firstNum = '';
    let secondNum = '';
    let operator = '';
    let result = '';
    let output = $(".screen").html();

    function calculate(){

        if (operator === "+"){
            result = Number(firstNum) + Number(secondNum)
        }
                        
        else if(operator=== "-"){
            result = firstNum-secondNum;
        }
    
        else if(operator=== "*"){
            result = firstNum * secondNum; //with decimal numbers gives incorrect result - e.g. "0.8*3=2.4000000000000004"
        }
    
        else if(operator=== "/"){
            result = firstNum/secondNum;
        }
        
    }

    $("button").on("click", function () {

        let buttonClicked = $(this).html();
     
        if (buttonClicked >= '0' && buttonClicked <= '9' || buttonClicked === '.') {

            if(operator=== ''){
                firstNum = firstNum + buttonClicked;
                // console.log(firstNum);
                output = $(".screen").text($(".screen").html() + buttonClicked);
            }
            else{
                secondNum = secondNum+ buttonClicked;
                // console.log(secondNum);
                output = $(".screen").text($(".screen").html() + buttonClicked);
            }           
        }

        else if (buttonClicked === '+' || buttonClicked === '-' || buttonClicked === '*' || buttonClicked === '/') {

            if (firstNum === '') {
                $(".screen").text();
            }

            else if ( firstNum !== '' && operator===''){
                operator = buttonClicked;
                output = $(".screen").text($(".screen").html() + buttonClicked);

            }

            else if(operator!== '' && secondNum !== "") {
               calculate();
               output = $(".screen").text($(".screen").html() + "=" + result + buttonClicked);  
                // output = $(".screen").text($(".screen").html() + result);  
        firstNum = result;
        secondNum = '';
        operator = buttonClicked;
            } 
        }

        else if (buttonClicked === 'DEL') {

            // function deleteCharacter() {
            //     let currentValue = $('.inputDisplay').val();
            //     $('.inputDisplay').val(currentValue.substring(0, currentValue.length - 1));
            // }


            // output = $(".screen").text($(".screen").html().substring(0, $(".screen").text($(".screen").html().length) - 1))

            output = $(".screen").html().length - 1;

            // output = (output.length) - 1

        }

        else if (buttonClicked === 'AC') {
            firstNum = '';
            secondNum = '';
            operator ='';
            // output = '';
            $(".screen").html("");// this works OK!!
        }

else if (buttonClicked === '='){
    if(firstNum !=="" && secondNum !== "" && operator !== ""){
        
        output = $(".screen").text($(".screen").html() + "=");

calculate();

output = $(".screen").text($(".screen").html() + result);  
        firstNum = result;
        secondNum = '';
        operator = ''

            }
        }
    })
})


    

    //     function handleTotal() { switch (operator) { case '+': total = +num1 + +num2; $(".screen").text(total); break; } }
    
      
    // isNumber = function (value) {
    //     return !isNaN(value);
    // }
    // updateScreen = function (displayValue) {
    //     var displayValue = displayValue.toString();
    //     $('.first-number').html(displayValue.substring(0, 10));
    // };

