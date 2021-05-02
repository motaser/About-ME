'use strict';
let user =' to My site';
let name = prompt ('Hello... What is Your name  ?');
alert ('Welcome '+ name+ user);
alert (name+'.. you will be asked five Qusetions, Answer by Yes or No PLZ.')
let ask1 = prompt('The current is mesuerd by ambir  ?  y/n or yes/no').toLowerCase();

function Qusetion1 (Qu1)
{
    switch (Qu1) {
    case 'yes' :
      alert("your answer is correct" );
  
 break;

 case 'y' :
    alert("your answer is correct" );
  
break;

    case 'no' :
        alert("your answer is not correct" );
    
  
     break;

     case 'n' :
        alert("your answer is not correct");
      
        break;


        default:
            alert("plz answer by yes or no ");
            break;

}
}


let ask2 = prompt('The Voltage is equal to (Current * Power)  ?  y/n or yes/no').toLowerCase();
function Qusetion2 (Qu2){
    switch (Qu2) {
        case 'no' :
          alert("your answer is correct" );
     
     break;
    
     case 'n' :
        alert("your answer is correct" );
      
    break;
    
        case 'yes' :
            alert("your answer is not correct" );
         
      
         break;
    
         case 'y' :
            alert("your answer is not correct");
            console.log('incorrect');
            break;
    
    
            default:
                alert("plz answer by yes or no ");
                break;
                 
    
    
    }
}


let ask3 = prompt('Can we use the sun power in producing the Energy  ?  y/n or yes/no').toLowerCase();
function Qusetion3(Qu3){
    switch (Qu3) {
        case 'yes' :
          alert("your answer is correct" );
        
     break;
    
     case 'y' :
        alert("your answer is correct" );
 
    break;
    
        case 'no' :
            alert("your answer is not correct" );
        
      
         break;
    
         case 'n' :
            alert("your answer is not correct");
           
            break;
    
    
            default:
                alert("plz answer by yes or no ");
                break;
                
    
    
    
    }
}


let ask4 = prompt(' are the electcity cables made from Iron   ?  y/n or yes/no').toLowerCase();
function Qusetion4 (Qu4){
    switch (Qu4) {
        case 'no' :
          alert("your answer is correct" );
       
     break;
    
     case 'n' :
        alert("your answer is correct" );
  
    break;
    
        case 'yes' :
            alert("your answer is not correct" );
      
      
         break;
    
         case 'y' :
            alert("your answer is not correct");
       
            break;
    
    
            default:
                alert("plz answer by yes or no ");
                break;
                
    
    
    
    }
}

let ask5 = prompt('The Power is mesuerd by Volt ?  y/n or yes/no').toLowerCase();
 function Qusetion5 (Qu5){
    switch (Qu5) {
        case 'no' :
          alert("your answer is correct" );
      
     break;
    
     case 'n' :
        alert("your answer is correct" );
 
    break;
    
        case 'yes' :
            alert("your answer is not correct" );
           
      
         break;
    
         case 'y' :
            alert("your answer is not correct");
     
            break;
    
    
            default:
                alert("plz answer by yes or no ");
                break;
                
    
    
    
    }
    
 }
 Qusetion1 (ask1)
 Qusetion2 (ask2)
 Qusetion3 (ask3)
 Qusetion4 (ask4)
 Qusetion5 (ask5)

function Qusetion6(){
    for(let i=1; i<=4 ; i++){

        let num1 = parseInt(prompt('what is the frequency of Jordan electricity? you have four opportunities')) ;
        if(num1 <= 59)
        alert('your answer is  low !!' );
    
         else if (num1 == 60){
        alert ('your answer is correct ');
        break;
    }
        else
         alert('your answer is high !!');
        
    
    
    }  

}
Qusetion6()

let arr = ['voltage','current','power','resistance'];
function Qusetion7 ( q7)
{
    for(let i=1; i<=6 ; i++){

        let num2 = prompt(' the main concept in the electrical field ..? you have six opportunities,,');
        if(num2 == arr[0] || num2== arr[1] || num2==arr[2] ||num2 == arr[3]){
            alert ('you answer is correct ');
            break;
            }
            else
            alert('your answer is incorrect !!')
    
}

}
    Qusetion7(arr)


