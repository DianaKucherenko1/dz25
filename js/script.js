function ourSum (num){

    function newSum(sum){
        num += sum
        return num;
    }

    return newSum;
};

let sum = ourSum(3);
console.log(sum(5));
console.log(sum(20));
console.log(sum(30));
