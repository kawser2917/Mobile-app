// Cash out
document.getElementById("btn-cash-out").addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('cash-out-amount').value;
    const pinNumber = document.getElementById('cash-pin-number').value;
    if(pinNumber==="1234"){
        const balance = document.getElementById("balance").innerText;
        const newBalance = parseFloat(balance) - parseFloat(amount);
        document.getElementById("balance").innerText = newBalance;
    }
    else{
        alert("Something went wrong.. Please try again")
    }
})