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
    alert(`Add money Successful 
                    ${addMoneyAmount} Taka
                    from ${bankAccountNum} 
                    at ${new Date()}`);
    setBalance(Newbalance);
  } else {
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
  const element=document.createElement('div');
  element.innerHTML=`<div class=" bg-white border-0 rounded-2xl p-3 mb-3">Add money Successful 
                    ${addMoneyAmount} Taka
                    from ${bankAccountNum} 
                    at ${new Date()}</div>`;
  transaction.append(element);

});
