function solution(phone_number) {
    let answer = '';
    let arr = [...phone_number];
    // console.log(arr);
    
    for(let i=arr.length-5; i>=0 ; i--){
        arr[i] = '*';
    }

    answer = arr.join('');
    return answer;
}