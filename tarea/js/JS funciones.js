
    /*catalogo de funciones*/
    function fibo(n){// n es entero
        i = 1;
        a = 0; b = 1;//string
        res = "";
        while(i<=n){
            res += a + " ,";
            c = a + b;
            a = b;
            b = c;
            i++;
        }
        return res;
    }
    function primos(n){// n es entero
        res = "";
        primo = 0;
        for(i = 2; primo < n; i++){
            ep = true;
            for(j = 2; j * j <= i;j++){
             if(i % j === 0){
                ep = false;
                break;
             }   
            }
            if(ep){
                res += i + ',';
                primo ++;
            }
        }
        return res;
    }