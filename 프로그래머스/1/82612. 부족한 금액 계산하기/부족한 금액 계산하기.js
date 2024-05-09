function solution(price, money, count) {
    let answer = 0;
    let totalPrice = 0;
    for(let i =1; i<=count; i++){
        totalPrice += (price * i);
    }
    answer = totalPrice - money;
    if(answer > 0){
        return answer;
    }else{
        return 0;
    }
}