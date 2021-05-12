function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal==0)
    alert("Enter a positive number");
    else
    {
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var calculate = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    document.write("if you deposit "+principal+" at an interest rate of "+rate+" You will receive an amount of "+calculate+" in the year "+year);
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
}
        