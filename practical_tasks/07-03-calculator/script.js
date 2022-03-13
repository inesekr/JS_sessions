
$(document).ready(function () {

    let firstNum = '0';
    let secondNum = '';
    let operator = '';
    let result = '';
    let output = $(".screen").html();

    function calculate() {

        if (operator === "+") {
            result = Number(firstNum) + Number(secondNum)
        }

        else if (operator === "-") {
            result = firstNum - secondNum;
        }

        else if (operator === "*") {
            result = firstNum * secondNum; //with decimal numbers can give incorrect result - e.g. "0.8*3=2.4000000000000004"
        }

        else if (operator === "/") {
            if (secondNum === "0") {
                result = firstNum / secondNum;
                alert("You can not divide by zero! Please press AC and try anything else...")
            }
            else {
                result = firstNum / secondNum;
            }
        }
    }

    $("button").on("click", function () {

        let buttonClicked = $(this).html();

        if (buttonClicked >= '0' && buttonClicked <= '9') {

            if (operator === '' && firstNum !== result) {
                if (firstNum === "0") {
                    firstNum = buttonClicked;
                    output = $(".screen").text(buttonClicked);
                }
                else {
                    firstNum = firstNum + buttonClicked;
                    output = $(".screen").text($(".screen").html() + buttonClicked)
                }
            }

            else if (operator === '' && firstNum === result) {
                alert("You can't modify the result!")
                firstNum = result;
                $(".screen").text($(".screen").html());
            }
            else if (operator !== '') {
                secondNum = secondNum + buttonClicked;
                output = $(".screen").text($(".screen").html() + buttonClicked);
            }
        }


        else if (buttonClicked === '.') {

            if (operator === '') {

                if (firstNum === result) {
                    alert("sorry, you can't modify the result");
                    firstNum = result;
                    $(".screen").text($(".screen").html())
                }

                else {
                    if (firstNum.includes('.')) {
                        firstNum = firstNum;
                        alert("You can't use dot now");
                        output = $(".screen").text($(".screen").html());
                    }
                    else {
                        firstNum = firstNum + buttonClicked;
                        output = $(".screen").text($(".screen").html() + buttonClicked);
                    }
                }
            }

            else {

                if (secondNum.includes('.')) {
                    secondNum = secondNum;
                    alert("You can't use dot now");
                    output = $(".screen").text($(".screen").html());
                }
                else {
                    secondNum = secondNum + buttonClicked;
                    output = $(".screen").text($(".screen").html() + buttonClicked);
                }
            }
        }


        else if (buttonClicked === '+' || buttonClicked === '-' || buttonClicked === '*' || buttonClicked === '/') {

            if (firstNum === '') {
                $(".screen").html("0");
            }

            else if (firstNum !== '' && operator === '') {
                operator = buttonClicked;
                output = $(".screen").text($(".screen").html() + buttonClicked);
            }

            else if (operator !== '' && secondNum !== "") {
                calculate();
                output = $(".screen").text($(".screen").html() + "=" + result + buttonClicked);

                firstNum = result;
                secondNum = '';
                operator = buttonClicked;
            }
        }


        else if (buttonClicked === 'DEL') {

            if (operator === '' && firstNum !== '' && firstNum !== result) {
                firstNum = firstNum.substring(0, firstNum.length - 1);
                $(".screen").text($(".screen").html().substring(0, ($(".screen").html().length) - 1));
            }

            else if (operator === '' && firstNum === result) {
                alert("sorry, you can't modify the result");
                firstNum = result;
                $(".screen").text($(".screen").html());
            }

            else if (secondNum !== '') {
                secondNum = secondNum.substring(0, secondNum.length - 1);
                $(".screen").text($(".screen").html().substring(0, ($(".screen").html().length) - 1));
            }

            else if (secondNum === '' && operator !== '') {
                operator = '';
                $(".screen").text($(".screen").html().substring(0, ($(".screen").html().length) - 1));
            }
            else if (operator === '' && firstNum === '') {
                $(".screen").html("0");
            }

        }

        else if (buttonClicked === 'AC') {
            firstNum = '';
            secondNum = '';
            operator = '';
            $(".screen").html("0");// this works OK!!
        }

        else if (buttonClicked === '=') {
            if (firstNum !== "" && secondNum !== "" && operator !== "") {

                output = $(".screen").text($(".screen").html() + "=");

                calculate(); //calculating is correct for numbers of up to 16 digits including.

                output = $(".screen").text($(".screen").html() + result);
                firstNum = result;
                secondNum = '';
                operator = ''
            }
        }
    })
})
