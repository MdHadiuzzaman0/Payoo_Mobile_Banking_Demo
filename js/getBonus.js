document.getElementById("bonusBtn").addEventListener("click", function () {
  const couponCode = setValueFromInput("couponCode");
  const BALance = getBalance();
  const NEWbalance = BALance + 500;
  if (couponCode === "dead") {
    alert(`Get Bonus 500 Taka through "${couponCode}" code`);
    setBalance(NEWbalance);
  }

  const transaction = document.getElementById("historybox");
  const transactionText=document.getElementById("transactionText");
  transactionText.innerHTML="";
  const element = document.createElement("div");
  element.innerHTML = 
         
    `<div class=" bg-white border-0 rounded-2xl p-3 mb-3">
        <div class="flex items-center gap-3 mb-2">
        <img src="./assets/opt-4.png" alt="">
        <p>Get Bonus</p>
        </div>
        500 Taka 
    </div>`;
  transaction.append(element);

});
