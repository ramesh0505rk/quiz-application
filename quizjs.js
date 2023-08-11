function score(){
    let score=0;
    var radio1=document.getElementsByName('q1');
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked){
            if(radio1[i].value=='a2'){
                score+=1;
            }
        }
    }
    var radio1=document.getElementsByName('q2');
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked){
            if(radio1[i].value=='a2'){
                score+=1;
            }
        }
    }
    var radio1=document.getElementsByName('q3');
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked){
            if(radio1[i].value=='a3'){
                score+=1;
            }
        }
    }
    var radio1=document.getElementsByName('q4');
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked){
            if(radio1[i].value=='a4'){
                score+=1;
            }
        }
    }
    var radio1=document.getElementsByName('q5');
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked){
            if(radio1[i].value=='a2'){
                score+=1;
            }
        }
    }
    var radio1=document.getElementsByName('q6');
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked){
            if(radio1[i].value=='a3'){
                score+=1;
            }
        }
    }
    var radio1=document.getElementsByName('q7');
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked){
            if(radio1[i].value=='a1'){
                score+=1;
            }
        }
    }
    var radio1=document.getElementsByName('q8');
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked){
            if(radio1[i].value=='a4'){
                score+=1;
            }
        }
    }
    var radio1=document.getElementsByName('q9');
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked){
            if(radio1[i].value=='a3'){
                score+=1;
            }
        }
    }
    var radio1=document.getElementsByName('q10');
    for(i=0;i<radio1.length;i++){
        if(radio1[i].checked){
            if(radio1[i].value=='a2'){
                score+=1;
            }
        }
    }

    alert("Your score: "+score+"/10");
}