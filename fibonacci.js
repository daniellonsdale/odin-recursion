//iterative implementation
function fibs(num){
    if (num == 0){
        return [0];
    }else if (num == 1){
        return [0, 1];
    }else{
        let arr = [0, 1];
        for (let i = 2; i < num; i++) {
            arr[i] = arr[i-2] + arr[i-1];
        }
        return arr;
    }
}

console.log("Calling the iterative funtion on 8:")
console.log(fibs(8));

//Recursive implementation
function fibsRec(num, arr){
    if(arr.length <= 2){
        arr = [0, 1];
    }if(arr.length >= num){
        return arr;
    }else{
        let next = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(next);
        return fibsRec(num, arr);
    }
}

console.log("Calling the recursive funtion on 8:")
console.log(fibsRec(8, []));