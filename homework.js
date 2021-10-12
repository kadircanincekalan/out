/* function textCounter(str){

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

textCounter("harry potter") */

//Termometre çevirme programı


function tempConventer() {
    while (true){
    let num = prompt("Enter c > f => 1, Enter f > c => 2,Enter c > k => 3,Enter f > k => 4")
    if (num == 1){
        let celfah = prompt("Please enter cel?");
        console.log(celTofahrenheit(celfah));
        break;}
    else if (num == 2){
            let fahcel = prompt("Please enter fah?");
            console.log(celTofahrenheit(fahcel));
            break;}
    else if (num == 3){
            let celkel = prompt("Please enter cel?");
            console.log(celTofahrenheit(celkel));
            break;}
    else if (num == 4){
            let fahkel = prompt("Please enter cel?");
            console.log(celTofahrenheit(fahkel));
            break;}
    }   
}
tempConventer()    