function solution(s) {
    
    if(s.length % 2 !== 0){
        index = (s.length-1)/2
        return s[index];
    }else{
        index = s.length/2
        return s.slice(index-1,index+1);
    }
}