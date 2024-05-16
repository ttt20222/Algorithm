function solution(array, commands) {
    let answer = [];
    
    answer = commands.map((x) => {
        const slicedArray = array.slice(x[0]-1, x[1]);
        slicedArray.sort((a,b) => a-b);
        return slicedArray[x[2]-1];
    })
    
    return answer;
}