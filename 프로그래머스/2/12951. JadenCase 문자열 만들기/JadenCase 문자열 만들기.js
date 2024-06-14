function solution(s) {
    let answer = '';
    arr = s.toLowerCase().split('');
    arr.forEach((val, index) => {
        if(arr[index - 1] == ' ' || index == 0){
            answer += val.toUpperCase();
        }else{
            answer += val.toLowerCase();
        }
    })
    return answer;
}