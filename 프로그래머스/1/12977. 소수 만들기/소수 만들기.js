function solution(nums) {
    const output = [];
    const result = [];
    
    const combination = (comb, rests, output) => {
    if (comb.length == 3) {
        const sum = comb.reduce((acc,cum) => acc+cum,0);
        output.push(sum);
        return;
    }
    rests.forEach((v,idx) => {
        const rest = rests.slice(idx+1);
        combination([...comb,v], rest, output);
    })
    }
    
    const isPrimeNumber = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
        return true;
    };
    
    combination([],nums,output);
    
    output.forEach((x) => {
        if(isPrimeNumber(x)){
        result.push(x);
        }
    });
    return result.length;
}

