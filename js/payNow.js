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
                    at ${new Date()}`);
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
        })