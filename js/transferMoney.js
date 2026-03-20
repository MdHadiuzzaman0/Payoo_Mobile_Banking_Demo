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
                    at ${new Date()}`);
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
        })