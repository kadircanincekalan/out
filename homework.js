function textCounter(str){

    let str1 = str.toLowerCase().split("");
    let count = 0;
    const setLetter = new Set();
    for(i of str1){
        count = 0;
        if(i ==  "") continue;
        for(j of str1){
            if(i === j) count++;

        }setLetter.add(`${i}:${count}`)
    }
    console.log(setLetter)
}

textCounter("ey edip")