function solution(s) {
    let num = 0;  // 변환 횟수
    let totalCount = 0;  // 제거된 모든 0의 개수

    while (s !== "1") {
        let zeroCount = 0;  // 현재 변환에서 제거된 0의 개수
        for (let char of s) {
            if (char === '0') {
                zeroCount++;
            }
        }
        totalCount += zeroCount;
        s = s.replace(/0/g, '');
        s = s.length.toString(2);
        num++; 
    }

    return [num, totalCount];
}