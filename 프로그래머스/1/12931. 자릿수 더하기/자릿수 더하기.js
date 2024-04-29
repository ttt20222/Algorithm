function solution(n)
{   
    let answer = 0;
    let str = String(n);
    let arr =  Array.from(str);
    console.log(arr);
    for(i=0; i<arr.length; i++){
        answer += Number(arr[i]);
    }

    return answer;
}