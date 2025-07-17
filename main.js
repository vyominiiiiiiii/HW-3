var num=[2,8,59,66,5];
console.log(num);

function sum(arr){
    var store=0;
    for(var i=0;i<arr.length;i++){
        store+=arr[i]
    }
    return store;
}

var show=sum(num);
console.log(show);