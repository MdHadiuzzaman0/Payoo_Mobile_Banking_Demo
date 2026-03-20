document.getElementById("paynowbtn").addEventListener("click", function () {
            const paybillAccountNum = setValueFromInput("paybillAccountNum");
            const paybillAmount = setValueFromInput("paybillAmount");

            const BALAnce = getBalance();
            const NEWBalance = BALAnce - parseInt(paybillAmount);

            const paybilpin = setValueFromInput("paybilpin");

            if (
                paybillAccountNum === "01234567890" &&
                paybilpin === "1234" && 
                NEWBalance>0
            ) {
                alert(`Pay Successful 
                    ${paybillAmount} Taka
                    from ${paybillAccountNum} 
                    at ${new Date().toLocaleDateString()}`);
                setBalance(NEWBalance);
            } else {
                if (paybillAccountNum.length !== 11 || isNaN(paybillAccountNum) === true) {
                    alert("Wrong Account Number");
                }
                else if (NEWBalance<0) {
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
    <img src="./assets/opt-5.png" alt="">
    <p>Pay Bill</p>
  </div>
  Successful <br> 
  Taka: <b>${paybillAmount}</b> <br>
  Account: <b> ${paybillAccountNum} </b> <br>
  Time: ${new Date().toLocaleString()}</div>`;
  transaction.append(element);

});

       