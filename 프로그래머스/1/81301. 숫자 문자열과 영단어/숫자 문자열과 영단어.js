function solution(s) {

    const word = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    
    word.forEach((x,index) => s = s.replaceAll(x, index))
    return Number(s);
}