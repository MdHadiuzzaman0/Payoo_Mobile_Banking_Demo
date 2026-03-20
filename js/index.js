 document.getElementById('loginbtn').addEventListener("click", function(){
        const loginMobile = document.getElementById('login-mobile').value;
        const loginPin = document.getElementById('login-pin').value;

        if(loginMobile=="01234567890" && loginPin=="1234"){
            alert('Login Success');
            window.location.assign("./home.html");
        }
        else{
            if(loginMobile.length !== 11 || loginMobile !== "01234567890"){
            alert("Enter Correct Mobile Num")
            }
            else{
                alert('Enter Correct Pin')
            }
        }
    })