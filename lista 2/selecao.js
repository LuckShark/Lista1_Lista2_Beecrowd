
    //Primos de 1 a 1000
    
    function isPrime(num) {
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }
    
    function display(n) {
        var arr = [2];
        for ( var i = 3; i < n; i+=2 ) {
            if ( isPrime(i) ) {
                arr.push(i);
            }
        }
        console.log(arr); 
    }
    
    display(1000);

    ////Somando os primos
   
      function sumPrimes(num) {
        var answer = 0;
            
        for(var i=2; i <= num; i++){   
      
          
          if(isPrime(i)){
            answer += i;
          }
        }
        return answer;
      }
      
      console.log(sumPrimes(1000)); 