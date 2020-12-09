// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//     alert('Ouch! stop poking me!');
// }
// let myHTML = document.querySelector('html')
// myHTML.onclick = function() {
//     alert('Ouch! stop poking me11!');
// }

let myimg = document.querySelector('img')
//  img 태그를 myimg에 가져온다.//요소에 대한 참조를 저장합니
myimg.onclick = function() {
    // myimg를 클릭하면 함수 발생//
    //다음으로 이 변수의 onclick 이벤트 핸들러 프로퍼티에 이름이 없는 함수("익명" 함수)를 할당합니다.
    // 이제, 매번 이미지 요소가 클릭될 때:
    let mySrc = myimg.getAttribute('src');
    // img요소에 대한 참조를 변수에 저장하고
    if (mySrc === 'images/그림1.jpg') {
        // mrsrc가 images에 참조를 그림 1.jpg이 아니면
        myimg.setAttribute('src', 'images/그림1.png');
        // 다른 그림으로 myimg의 src속성에 값을 설정한다.
    } else {
        myimg.setAttribute('src', 'images/그림1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        // prompt()는 사용자에게 어떤 데이터를 입력하길 요청하고, 사용자가 OK 를 누른 후에 그 값을 변수에 저장합니다
        localStorage.setItem('name', myName);
        //브라우저에 데이터를 저장하고 나중에 불러올 수 있도록 해주는 localStorage라는 API 를 부릅니다. 우리는 'name' 라는 데이터 항목을 생성하고 저장하기 위해 localStorage 의 setItem()함수를 사용합니다
        // 그리고 사용자가 입력한 이름을 포함하는 그 값을 myName  변수에 저장합니다
        myHeading.innerHTML = 'Mozilla is cool,' + myName;
        //. 마지막으로, 헤딩의 textContent를 유저의 이름을 포함한 스트링으로 설정합니다.
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
    //이 구문은 먼저 name 데이터 아이템이 존재하는지 확인하기 위해
    // 부정 연산자 (논리적 NOT, !로 표현되는) 를 사용합니다. 존재하지 않는다면 값을 생성하기 위해 setUserName() 함수를 실행합니다.
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool,' + storedName;
}//존재한다면 (예로, 이전 방문을 통해 사용자가 세팅되었음), 우리는 getItem() 을 사용해 저장된 이름 값을 얻고, 헤딩의 textContent  을 setUserName() 안에서 작업한 것과 같은 
//사용자의 이름을 포함한 문자열로 세팅합니다.

myButton.onclick = function() {
    setUserName();
}