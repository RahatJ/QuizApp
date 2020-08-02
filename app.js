function check(){
    var score=0;
    var Q1rightAns= document.getElementById('MQ1');
    var Q1w1Ans= document.getElementById('MQ2');
    var Q1w2Ans= document.getElementById('MQ3');
    var Q1w3Ans= document.getElementById('MQ4');
    if (Q1rightAns.checked == true){
            score++
            alert('Q1 answer is right')
    }
    else{
        alert('Q1 answer is wrong')
    }

    var Q2rightAns= document.getElementById('PQ3');
    var Q2w1Ans= document.getElementById('PQ1');
    var Q2w2Ans= document.getElementById('PQ2');
    var Q2w3Ans= document.getElementById('PQ4');
    if (Q2rightAns.checked == true){
            score++
            alert('Q2 answer is right')
    }
    else{
        alert('Q2 answer is wrong')
    }

    var Q3rightAns= document.getElementById('CQ4');
    var Q3w1Ans= document.getElementById('CQ1');
    var Q3w2Ans= document.getElementById('CQ2');
    var Q3w3Ans= document.getElementById('CQ3');
    if (Q3rightAns.checked == true){
            score++
            alert('Q3 answer is right')
    }
    else{
        alert('Q3 answer is wrong')
    }

    var Q4rightAns= document.getElementById('IQ1');
    var Q4w1Ans= document.getElementById('IQ2');
    var Q4w2Ans= document.getElementById('IQ3');
    var Q4w3Ans= document.getElementById('IQ4');
    if (Q4rightAns.checked == true){
            score++
            alert('Q4 answer is right')
    }
    else{
        alert('Q4 answer is wrong')
    }
    alert("Your score is "+score)
    
}