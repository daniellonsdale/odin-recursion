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
        //Replace this for loop with while loops to fix issue when one array runs out of elements
        for (let i = 0; i < newArrLeft.length + newArrRight.length; i++){
            if (curLeftPos == newArrLeft.length - 1){
                newArr.push(newArrRight[curRightPos]);
                curRightPos++;
            }else if(curRightPos == newArrRight.length - 1){
                newArr.push(newArrLeft[curLeftPos]);
                curLeftPos++;
            }else if(newArrLeft[curLeftPos] <= newArrRight[curRightPos]){
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