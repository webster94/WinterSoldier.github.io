let myHTML= document.querySelector('html')
let myUL = document.querySelector('ul')
myHTML.onclick = function() {
    let myli = document.createElement('li')
    //만듦
    //입력을 받자.
    let content = prompt('텍스트를 입력하시오')
    myli.innerText = content
    // console.log(myli)
    myUL.appendChild(myli)

}
let myli = document.querySelector('li')
myli.onclick = function() {
    document.getElementById(myli).value = 'textarea';
}