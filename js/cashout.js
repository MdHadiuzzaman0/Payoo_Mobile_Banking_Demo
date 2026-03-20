 document.getElementById('withdraw').addEventListener('click', function () {
            const agentNumber = setValueFromInput ("agentnumber");

            const cashoutamount = setValueFromInput ("amount");

            const currentBalance = getBalance();
            const newbalance = currentBalance - parseInt(cashoutamount);

            const pinnumber = setValueFromInput ('pinnumber');

            if(agentNumber == '01234567890' && newbalance>0 && pinnumber == '1234'){
                alert(`Cashout Successful 
                    ${cashoutamount} Taka
                    from ${agentNumber} 
                    at ${new Date}`);
                setBalance(newbalance)
            }
             else{
                if(agentNumber.length !== 11){
                alert('Wrong Mobile Number');
                
                }
                else if(newbalance<0){
                    alert('Enter Right Amount');
                    
                }
                else{
                    alert("Wrong Pin");
                    
                }
            }
        })
        

// document.getElementById('withdraw').addEventListener('click', function () {
//             const agentNumber = document.getElementById('agentnumber').value;

//             const cashoutamount = document.getElementById('amount').value;
//             const oldbalance=document.getElementById('balance').innerText;
//             const newbalance=parseInt(oldbalance) - parseInt(cashoutamount);

//             const pinnumber = document.getElementById('pinnumber').value;

//             if(agentNumber == '01234567890' && newbalance>0 && pinnumber == '1234'){
//                 alert('Cashout Successful');
//                 document.getElementById('balance').innerText=newbalance;
//             }
//             else{
//                 alert('Wrong info');
//                 return;
//             }
//         })