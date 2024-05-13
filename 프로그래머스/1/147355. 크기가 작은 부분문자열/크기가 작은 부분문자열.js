function solution(t, p) {
    let answer = 0;
    
    for(let i=0; i<t.length; i++){
        let num = t.substr(i, p.length);
        if(num.length != p.length){break;}
        
        answer += num <= p ? 1 : 0;
    }
    return answer;
}