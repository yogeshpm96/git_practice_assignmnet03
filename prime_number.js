let num=5;

let count=0;
   
for(let i=1; i<=num; i++)
   
 	{
        
        if(num%i==0)
        	
		{
            
            count++;
		}
  
	}
    
    
if(count==2)

        {
            console.log("Yes Prime Number")
        }

        else
        {
            console.log("Not Prime Number")
        }