function solution(arr1, arr2) {
    let row = arr1.length;
    let col = arr1[0].length;
    let answer = new Array(row);

    for (let i = 0; i < answer.length; i++) {
        answer[i] = new Array(col);
    }
    
    for(let i=0; i<answer.length; i++){
        for(let j=0; j<answer[0].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}