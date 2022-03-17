    
    // var 사용
    function calcSum(n){
        // console.log(n);
        var sum = 0;

        for(var i=1; i<=10; i++){
            console.log(i);
            sum += i;
        }
        console.log(sum);
        // console.log(sum += i);
    }
    calcSum(10);

    console.log('=========================');

    //let 사용

    function calcSum1(n){
        // console.log(n);
        let sum1 = 0;

        for(let a=1; a<=10; a++){
            console.log(a);
            sum1 += a;
        }
        console.log(sum1);
        console.log(a);
        // console.log(sum += i);
    }
    calcSum1(10);
