document.getElementById("addmoneybtn").addEventListener("click", function () {
  const bank = setValueFromInput("bank");
  const bankAccountNum = setValueFromInput("bankAccountNum");
  const addMoneyAmount = setValueFromInput("addMoneyAmount");
  console.log(typeof(addMoneyAmount));
  
  const Balance = getBalance();
  const Newbalance = Balance + parseInt(addMoneyAmount);

  const bankpin = setValueFromInput("bankpin");

  if (
    bank !== "Select Bank" &&
    bankAccountNum == "01234567890" &&
    bankpin == "1234"
  ) {
    alert(`Add Money Successful 
  Taka: ${addMoneyAmount}
  Account: ${bankAccountNum} 
  Time: ${new Date().toLocaleString()}`);
    setBalance(Newbalance);
  } 
  else {
    if (bank === "Select Bank") {
      alert("Select a bank");
    } 
    else if (bankAccountNum.length !== 11 || isNaN(bankAccountNum) === true ) {
      alert("Wrong Account Number");
    } 
    else if (addMoneyAmount <= 0) {
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
    <img src="./assets/opt-1.png" alt="">
    <p>Add Money</p>
  </div>
  Successful <br> 
  Taka: <b>${addMoneyAmount}</b> <br>
  Account: <b> ${bankAccountNum} </b> <br>
  Time: ${new Date().toLocaleString()}</div>`;
  transaction.append(element);

});
