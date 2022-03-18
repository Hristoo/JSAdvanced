let input = 7;

function print(input){
    let k = input + 1, m = (input - 4)*6;
    let output ='';
    for(i=1; i<=input; i++)
    {
        for(j=1; j<=input; j++)
        {
            if(i == 1){
                output += j + '  ';
            }
            else if(i > 1 &&  i < input ){  
                if(i > 1 && j == input){
                    output += k++ +' ';
                } else if( j == 1){ 
                    output += m-- +' ';
                }   
                else{
                    output += '   ';
                }                          
            }
            else if(i == input){ 
                output += k-- + input - 1 +' ';
            }  
        }
        console.log(output);
        output = '';
    }
}

print(input);
