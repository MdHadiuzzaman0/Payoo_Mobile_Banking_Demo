document.getElementById("sendNowbtn").addEventListener("click", function () {
            const transferAccountNum = setValueFromInput("transferAccountNum");
            const transferAmount = setValueFromInput("transferAmount");

            const BAlance = getBalance();
            const NEwbalance = BAlance - parseInt(transferAmount);

            const transferpin = setValueFromInput("transferpin");

            if (
                transferAccountNum == "01234567890" &&
                transferpin == "1234" && 
                NEwbalance>0
            ) {
                alert(`Send money Successful 
                    ${transferAmount} Taka
                    from ${transferAccountNum} 
                    at ${new Date().toLocaleDateString()}`);
                setBalance(NEwbalance);
            } else {
                if (transferAccountNum.length !== 11 || isNaN(transferAccountNum) === true) {
                    alert("Wrong Account Number");
                }
                else if (NEwbalance<0) {
                    alert("Enter Right Amount");
                }
                else {
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
    <img src="./assets/opt-3.png" alt="">
    <p>Transfer Money</p>
  </div>
  Successful <br> 
  Taka: <b>${transferAmount}</b> <br>
  Account: <b> ${transferAccountNum} </b> <br>
  Time: ${new Date().toLocaleString()}</div>`;
  transaction.append(element);

});

      