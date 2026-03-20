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
                    at ${new Date().toLocaleDateString()}`);
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
        
  const transaction=document.getElementById('historybox');
  const transactionText=document.getElementById("transactionText");
  transactionText.innerHTML="";
  const element=document.createElement('div');
  element.innerHTML=`
  <div class=" bg-white border-0 rounded-2xl p-3 mb-4">
  <div class="flex items-center gap-3">
    <img src="./assets/opt-1.png" alt="">
    <p>Cash Out</p>
  </div>
  Successful <br> 
  Taka: <b>${cashoutamount}</b> <br>
  Account: <b> ${agentNumber} </b> <br>
  Time: ${new Date().toLocaleString()}</div>`;
  transaction.append(element);

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