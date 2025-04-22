function mergesort(arr){
    if (arr.length == 1){
        return;
    }else{
        let newArrLeft = [];
        let newArrRight = [];
        let newArr = [];
        if(arr.length % 2 == 0){
            newArrLeft = mergesort(arr.slice(0, arr.length/2 - 1));
            newArrRight = mergesort(arr.slice(arr.length/2, arr.length - 1));
        }else{
            newArrLeft = mergesort(arr.slice(0, Math.floor(arr.length/2)));
            newArrRight = mergesort(arr.slice(Math.floor(arr.length/2)) + 1, arr.length - 1);
        }
        let curLeftPos = 0;
        let curRightPos = 0;
        for (let i = 0; i < newArrLeft.length + newArrRight.length; i++){
            if(newArrLeft[curLeftPos] <= newArrRight[curRightPos]){
                newArr.push(newArrLeft[curLeftPos]);
                curLeftPos++;
            }else{
                newArr.push(newArrRight[curRightPos]);
                curRightPos++;
            }
        }
        return newArr;
    }
}

console.log(mergesort([3, 2, 1, 13, 8, 5, 0, 1]));