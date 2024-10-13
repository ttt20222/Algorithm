function solution(array, commands) {
    let result = [];
    
    commands.forEach((arr) => {
        let a = array.slice(arr[0]-1, arr[1]);
        a.sort((a,b) => a-b);
        result.push(a[arr[2]-1]);
    });
    
    return result;
}