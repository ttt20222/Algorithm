function solution(n) {
    let answer;
    
    let arr = [...String(n)];
    let map1 = arr.map(x => x * 1);
    map1.sort((a,b) => b - a);

    let map2 = map1.map(String).join("");
    
    answer = Number(map2);
    return answer;
}