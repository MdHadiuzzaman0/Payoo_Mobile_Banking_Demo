function setValueFromInput (id){
    const input=document.getElementById(id);
    const value = input.value;
    return value;
}


function getBalance(){
    const oldbalance=document.getElementById('balance');
    const balance=Number(oldbalance.innerText);
    return balance;

}


function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText=value;
}


function showOnly(id){
    const selected=document.getElementById(id);
    // selected.classList.toggle('hidden');
    const active=selected.classList.contains("hidden")
    document.querySelectorAll("#details .card").forEach(detail=>{detail.classList.add('hidden')})

    if(active){
        selected.classList.remove("hidden")
        // selected.classList.add("block")
    }
}


function changeColor(id){
    const selected=document.getElementById(id);
    const active=selected.classList.contains('border-blue-700'); 
      document.querySelectorAll(".menu .flex").forEach(btn=>{
        btn.classList.remove('border-blue-700', 'text-blue-700', 'bg-blue-800/5', 'font-bold');
        selected.classList.add('border-base-300')
    })

      
      if(!active){
        selected.classList.add("border-blue-700", "border-2", 'text-blue-700', 'bg-blue-800/5', 'font-bold')
      }
    }