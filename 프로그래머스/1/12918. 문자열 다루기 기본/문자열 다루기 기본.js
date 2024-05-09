function solution(s) {
    let regExp = /^[0-9]*$/;
    if(s.length === 4 && regExp.test(s) || s.length === 6 && regExp.test(s)){
        return true;
    }else{
        return false;
    }
}