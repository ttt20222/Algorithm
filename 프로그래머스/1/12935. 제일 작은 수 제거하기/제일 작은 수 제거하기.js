function solution(arr) {

    let num = 0;
    if(arr.length !== 1){
        num = Math.min(...arr);
        arr = arr.filter(x => x !== num);
        return arr;
    }else{
        return [-1];
    }   
}