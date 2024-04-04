function myvalidation()
{
    var name = document.getElementById("uname").value
    var email = document.getElementById("uemail").value
    var address = document.getElementById("uadd").value
    var feedback = document.getElementById("ufeed").value

    if(name == "")
    {
        document.getElementById("demo1").innerHTML=("Enter Your Name")
    }
    else if(email == "")
    {
        document.getElementById("demo2").innerHTML=("Enter Your Email")
        document.getElementById("demo1").innerHTML=("")
    }
    else if(address == "")
    {
        document.getElementById("demo3").innerHTML=("Enter Your Address")
        document.getElementById("demo2").innerHTML=("")
    }
    else if(feedback == "")
    {
        document.getElementById("demo4").innerHTML=("Enter Your Feedback")
        document.getElementById("demo3").innerHTML=("")
    }
    else
    {
        document.getElementById("demo4").innerHTML=("")
    }
}

function Jordans(){
    document.getElementById("Card 1").style.display = "block"
    document.getElementById("Card 2").style.display = "none"
    document.getElementById("Card 3").style.display = "none"
}

function Airmax(){
    document.getElementById("Card 1").style.display = "none"
    document.getElementById("Card 2").style.display = "block"
    document.getElementById("Card 3").style.display = "none"
}

function Nikedunk(){
    document.getElementById("Card 1").style.display = "none"
    document.getElementById("Card 2").style.display = "none"
    document.getElementById("Card 3").style.display = "block"
}

function every(){
    document.getElementById("Card 1").style.display = "block"
    document.getElementById("Card 2").style.display = "block"
    document.getElementById("Card 3").style.display = "block"
}