let defaultArr = generateArray();
let filteredArr = [];
let div;

function func() {
    div = document.getElementById('content');
    const randomNumber = Math.floor((Math.random() * defaultArr.length));
    if (defaultArr.length === 0) {
        document.getElementById('confirmWindow').style.display = 'block'
        document.getElementById('confirmWindow').classList.add('bb')
        return
    }
    filteredArr.push(defaultArr[randomNumber]);
    defaultArr.splice(randomNumber, 1)
    div.innerHTML = filteredArr;
}

function generateArray() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(i + 1)
    }
    return arr
}

function retry() {
    defaultArr = generateArray();
    filteredArr = [];
    div.innerHTML = filteredArr;
    document.getElementById('confirmWindow').style.display = 'none'
}

function cancel() {
    document.getElementById('confirmWindow').style.display = 'none'
}
            
            
            
        
        
        
        

    







//document.getElementById("demo").innerHTML = fruits.valueOf();