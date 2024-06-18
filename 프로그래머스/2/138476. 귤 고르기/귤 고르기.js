function solution(k, tangerine) {
    let answer = 0;
    const tanDict = {};

    tangerine.forEach((t) => tanDict[t] = tanDict[t]? tanDict[t]+1 : 0+1);

    const tanArr = Object.values(tanDict).sort((a, b) => b - a);
    
    for (const t of tanArr){
        answer++;
        if(k > t) k -= t;
        else break;
    };
    
    return answer;
}