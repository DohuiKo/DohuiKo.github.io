---
title: React 주요 개념 정리해보기
---

### 1) 프래그먼트(Fragment)를 사용하여 불필요한 div태그 남발을 막을 수 있음.

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

### 7) Props

- 리액트에서 컴포넌트에 지정한 속성들을 `Props`라고 부른다.

만약 App.js 파일과 Button.js 파일이 있다고 가정해 보자.

[App.js]

```
function App() {
  return (
    <div>
      <Button color = "purple" /> // 리액트에서는 이런 식으로 컴포넌트에 속성 지정이 가능하다.
    </div>
  );
}
```

[Button.js]

```
import btnPurple from './assets/btnPurple';
function Button(purple) {
  return <img src = {btnPurple} alt="보라색 헤더">
}
```

- App 함수에서 사용하는 Button 컴포넌트에 color라는 속성을 purple로 지정해주고, App함수 내부에서 props 라는 파라미터를 만들어 보라색 버튼을 출력한 것이다.
- props 파라미터를 활용해서 똑같은 컴포넌트이지만 전달된 속성 값에 따라서 원하는대로 다른 모습을 화면에 그릴 수 있다. 이해가 가지 않는다면 예시를 살펴보자!
- 가위바위보를 예시를 들어보자.

[App.js]

```
import handIcon from './HandIcon';
function App() {
  return (
    <div>
      <handIcon value="rock" />
      <handIcon value="scissor" />
      <handIcon value="paper" />
    </div>
  );
}

export default App;
```

[HandIcon.js]

```
import rockImg from './assets/rock.png';
import scissorImg from './assets/scissor.png';
import paperImg from './assets/paper.png';

const IMAGES = { //전달받은 값에 따라 서로 다른 이미지를 보여주기 위해 만든 객체.
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcom {{value}} { //전달받은 값에 따라 서로 다른 이미지를 보여주는 코드
  const src = IMAGES[value]; //매번 다른 이미지를 불러오는 코드를 작성하는 것 보다 IMAGES 객체를 만들어서 간소화하여 코드를 작성하는 것이 편리함.
  return <img src={src} alt={value} />;
}
```

- 이런 식으로 코드를 작성하면 handIcon 컴포넌트를 한 번만 만들어두면 매번 이미지파일을 직접 다루지 않더라도 컴포넌트의 value prop만 정해주면 되니 편리하다는 이점이 있다.

[!다시 정리!]

- 리액트에서는 컴포넌트에 데이터를 전달해주기 위해서 props를 활용한다.
- JSX 문법으로 코드를 작성할 때 HTML 태그에 속성을 지정하듯이 컴포넌트 태그에 속성을 지정해주면 컴포넌트를 정의하는 함수의 첫 번째 파라미터로 이 속성들이 하나의 객체 형태로 모여서 전달이 되는 원리이다.
- 컴포넌트 내부에서 props 값을 활용하려면 컴포넌트를 정의한 함수에 첫 번째 파라미터를 작성해서 이 값을 객체처럼 활용해야 한다.
