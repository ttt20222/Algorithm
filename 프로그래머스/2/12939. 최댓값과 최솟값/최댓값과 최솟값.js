function solution(s) {
    let answer = '';
    let numArr = s.split(' ').map(Number);
    
    answer = Math.min(...numArr) + ' ' + Math.max(...numArr);
    return answer;
}