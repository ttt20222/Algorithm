function solution(sizes) {

    sizes.forEach(x => {
        if(x[0] < x[1]){
            let tmp = 0;
            tmp= x[0];
            x[0] = x[1];
            x[1] = tmp;
        }
    })
    
    let xArray = sizes.map(subArray => subArray[0]);
    let yArray = sizes.map(subArray => subArray[1]);
    
    let x = Math.max(...xArray);
    let y = Math.max(...yArray);
    
    return x*y;
}