document.getElementById("bonusBtn").addEventListener("click", function () {
  const couponCode = setValueFromInput("couponCode");
  const BALance = getBalance();
  const NEWbalance = BALance + 500;
  if (couponCode === "dead") {
    alert(`Get Bonus 500 Taka through "${couponCode}" code`);
    setBalance(NEWbalance);
  }

  const transaction = document.getElementById("historybox");
  const element = document.createElement("div");
  element.innerHTML = 
         
    `<div class=" bg-white border-0 rounded-2xl p-3 mb-3">
         
        Get Bonus 500 Taka through "${couponCode}" code
         
        </div>`;
  transaction.append(element);
});
