function solution(ingredient) {
    let result = 0;
    const stack = [];
    
    for(let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if(stack.length >= 4) {
            const buger_ingredient = stack.slice(-4).join("");
            
            if(buger_ingredient === '1231') {
                stack.splice(-4);
                result += 1;
            }
        }
    }
    
    return result;
}