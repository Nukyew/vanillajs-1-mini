var count = 0;
let element = document.getElementById("counter")
function showCount(){
    if (count === 0){
        element.innerHTML = `<mark>${count}</mark>`
    } else {
        element.innerHTML = count
    }
}
document.querySelector("#minus").addEventListener("click", () => count--)
document.querySelector("#reset").addEventListener("click", () => count = 0)
document.querySelector("#plus").addEventListener("click", () => count++)
let allbtn = document.querySelectorAll("button")
function addListen(arr){
    for (let i = 4; i <= arr.length - 1; i++){
        arr[i].addEventListener("click", showCount)
    }
}
addListen(allbtn)
function selectTheme(theme){
    document.getElementsByTagName("body")[0].className = theme;
    document.getElementsByTagName("main")[0].className = theme;
    for (let i = 0; i < allbtn.length; i++){
        allbtn[i].className = theme;
    }  
}
function assignButton(arr){
    for (let i = 0; i <= 3; i++){
        arr[i].addEventListener("click", function(e){
            selectTheme(e.target.innerText.toLowerCase())
        })
    }
}
assignButton(allbtn)

//Just re-did ALL of Vanilla JS Mini 1 without any help or looking at the solution. BOOM!