alert("Let's do some Math!");

getFirstNumber();

function getFirstNumber() {
    let number1 = this.prompt("please give me one number");
    // if (typeof number1 !== ('number' && !isNaN(number1)))

    // isNumberKey();
    // function isNumberKey(evt) {
    //     var charCode = (evt.which) ? evt.which : evt.keyCode;
    //     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    //         alert("please enter only numbers!")
    //     }
    //     else getSecondNumber();
    // }

    

            if (number1 == null) {
                alert("why did you cancel operation?");
                getFirstNumber();
            }

            else if (number1.length <= 0) {
                alert("you didn't input anything");
                getFirstNumber();
            }

            else checkInp();
            function checkInp() {
                // var x=document.forms["myForm"]["age"].value;
                var regex = '[^0-9]$';

               
                if (number1.match(regex)) {
                    alert("you must enter numbers only");         
                    getFirstNumber();
                }

                else if (isNaN(number1)){
                        alert("please provide a number!");
                        getFirstNumber();
                    }

                    else{
                        getSecondNumber();
                    function getSecondNumber() {
                        let number2 = this.prompt("please give me second number");
                        // if (typeof number2 !== "number") {
                            if (number2 == null) {
                                alert("why did you cancel operation?");
                                getSecondNumber();
                            }
            
                            else if (number2.length <= 0) {
                                alert("you didn't input anything");
                                getSecondNumber();
                            }

                            else checkInp2();
                            function checkInp2() {
                                // var x=document.forms["myForm"]["age"].value;
                                var regex = '[^0-9]$';

                                if (number2.match(regex)) {
                                    alert("please provide numbers only");
                                    getSecondNumber();
                                }
                                else if (isNaN(number2)) {
                                    alert("please provide a number!");
                                    getSecondNumber();
                                }
                                    else {
                                    
                                    getOperator();
            
                                    function getOperator() {
            
                                        let action = this.prompt("please give me math operator");
                                        let result = 0;
            
                                        if (action == "+") {
                                            result = Number(number1) + Number(number2);
                                            alert(`The result for your operation of ${number1} ${action} ${number2} is ${result}`);
                                        }
                                        else if (action == "-") {
                                            result = (Number(number1) - Number(number2));
                                            alert(`The result for your operation of ${number1} ${action} ${number2} is ${result}`);
                                        }
                                        else if (action == "*") {
                                            result = (Number(number1) * Number(number2));
                                            alert(`The result for your operation of ${number1} ${action} ${number2} is ${result}`);
                                        }
                                        else if (action == "/") {
                                            result = (Number(number1) / Number(number2));
                                            alert(`The result for your operation of ${number1} ${action} ${number2} is ${result}`);
                                        }
                                        else {
                                            alert('Please provide valid math operator - "+", "-", "*", "/"');
                                            getOperator();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
}

            

                
    


            // else if (number1.keyCode == 32) {
            //     alert("Space bar detected");
            // }


            // if (typeof (number1) !== 'number') 



            // This was NEEDED
            // else if (isNaN(number1)){
            //     alert("please provide a number!");
            //     getFirstNumber();
            // }


            // else if (isNaN(number2)) {
            //     alert("please provide a number!");
            //     getSecondNumber();
            // }


        




