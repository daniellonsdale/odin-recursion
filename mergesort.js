function mergesort(arr){
    if (arr.length <= 1){
        return arr;
    }else{
        let newArrLeft = [];
        let newArrRight = [];
        let newArr = [];
        if(arr.length % 2 == 0){
            newArrLeft = mergesort(arr.slice(0, arr.length/2));
            newArrRight = mergesort(arr.slice(arr.length/2, arr.length));
        }else{
            newArrLeft = mergesort(arr.slice(0, Math.ceil(arr.length/2)));
            newArrRight = mergesort(arr.slice(Math.ceil(arr.length/2)), arr.length);
        }
        let curLeftPos = 0;
        let curRightPos = 0;

        while(curLeftPos < newArrLeft.length && curRightPos < newArrRight.length){
            if (newArrLeft[curLeftPos] <= newArrRight[curRightPos]){
                newArr.push(newArrLeft[curLeftPos]);
                curLeftPos++;
            }else{
                newArr.push(newArrRight[curRightPos]);
                curRightPos++;
            }
        }
        while(curLeftPos < newArrLeft.length){
            newArr.push(newArrLeft[curLeftPos]);
            curLeftPos++;
        }
        while(curRightPos < newArrRight.length){
            newArr.push(newArrRight[curRightPos]);
            curRightPos++;
        }
        return newArr;
    }
}

console.log(mergesort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergesort([105, 79, 100, 110]));