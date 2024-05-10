function solution(s) {
    let arr = s.split(" ");
    
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].split("");
    }

    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(j%2 === 0){//짝수
                arr[i][j] = arr[i][j].toUpperCase();
            }else{//홀수
                arr[i][j] = arr[i][j].toLowerCase();
            }
        }
    }
    
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].join("");
    }
    
    return arr.join(" ");
}

