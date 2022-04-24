---
title: React 주요 개념 정리해보기
---

### 1) 프래그먼트(Fragment) 불필요한 div태그 남발을 막을 수 있음.

### 2) JSX에서 중괄호를 이용하여 화면에 값을 출력하는 것이 가능함.

```
reactDOM.render(
  <h1>나만의{product}주문하기</h1>
  document.getElementById('root')
)
```

### 3) 리액트에서 이벤트 핸들러 사용하기 (버튼 클릭해서 동작하게 만들기)

- JSX 문법에서 태그에 속성을 지정하자!

`<button onClick ={handleClick}> 가위 </button>`

1. 이때, 속성 이름은 카멜케이스로 작성한다.

- 자주 쓰는 속성: `onClick`,`onBlur`, `onFocus`, `onMouseOver`

2.  data-\* 속성은 예외이다.

### 4) JSX 사용시, 자바스크립트 예약어(for, class)을 사용할 수 없음.

- `for` 는 자바스크립트 반복문 키워드와 겹치므로 `htmlFor` 로, `class`도 마찬가지로 자바스크립트 반복문 키워드와 겹치기 때문에 `className`으로 작성해주어야 한다.

### 5) 리액트 앨리먼트

- JSX문법으로 작성한 요소는 자바스크립트 객체가 된다.

```
import ReactDom from 'react-dom';
const element = <h1> 안녕 리액트 </h1>;
ReactDom.render(element, document.getElementById('root));
```

- 위와 같은 객체를 리액트 앨리먼트라고 부른다.
- 리액트 앨리먼트를 reactDom.render 함수의 아규먼트로 전달하게 되면 리액트가 객체 형태의 값을 해석해서 HTML 형태로 브라우저에 띄워준다.

### 6) 리액트 컴포넌트

- 리액트 앨리먼트를 보다 더 자유롭게 다루기 위한 문법이다. (Js 함수를 활용하여)

```
function Hello() {
  return <h1> 안녕 리액트 <h1>
}
const element = (
  <>
    <Hello/> // 1. 컴포넌트 함수 이름을 통해 하나의 태그처럼 활용한다. 2. 모듈 문법으로 활용하여 보다 독립적으로 컴포넌트 특성에 집중해 코드를 작성할 수 있다.
  </Hello>
);
```

- 화면에 주사위를 만든다고 가정하고 리액트 컴포넌트를 사용해보자.

[Dice.js]

```
import dice from 이미지파일 경로
function Dice () {
  return <img src = {dice} alt="주사위"/>;
}
export default Dice;
```

[App.js]

```
import Dice from './Dice';
function App() {
  return (
    <div>
      <Dice/> //컴포넌트 함수 이름을 통해 하나의 태그처럼 활용
    </div>
  )
}
export default App;
```
