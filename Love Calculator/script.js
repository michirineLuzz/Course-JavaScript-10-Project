function calculateLove() {

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    
    if(name1==="" || name2 ===""){
        alert("Please Enter both names.");
    }else{

        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}`;

        if (lovePercentage < 30) {
         result.innerHTML += "<br> Not A Great Match. Keep Looking!";
        }else if (lovePercentage >= 50 && lovePercentage < 90) {
    result.innerHTML += "<br> There Is Potential";
}
    }

}