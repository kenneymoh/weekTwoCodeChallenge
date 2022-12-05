const votes1=0, votes2=0, votes3=0, votes4=0, votes5=0
function showVotes(){
    if (document.getElementById("radio1").checked == true){
      votes1++
      document.getElementById("votes1").innerHTML = votes1
    }
    if (document.getElementById("radio2").checked == true){
      votes2++
      document.getElementById("votes2").innerHTML = votes2
     }
    if (document.getElementById("radio3").checked == true){
      votes3++
      document.getElementById("votes3").innerHTML = votes3
    }
    if (document.getElementById("radio4").checked == true){
        votes2++
        document.getElementById("votes4").innerHTML = votes4
    }
    if (document.getElementById("radio5").checked == true){
            votes2++
            document.getElementById("votes5").innerHTML = votes5
    }
}
function showResult(){
    let sum = votes1+votes2+votes3+votes4+votes5
    const message = "Total number of votes: "+sum
    message += "\nMr. Cute: "+votes1/sum.toFixed(2)*100 + "%"
    message += "\nMx. Monkey: "+votes2/sum.toFixed(2)*100 + "%"
    message += "\nMs. Zebra: "+votes3/sum.toFixed(2)*100 + "%"
    message += "\nDr. Lion: "+votes3/sum.toFixed(2)*100 + "%"
    message += "\nMme.Panda: "+votes3/sum.toFixed(2)*100 + "%"
    alert(message)
  }