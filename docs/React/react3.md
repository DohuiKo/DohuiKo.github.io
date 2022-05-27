---
title: JSX문법
---

### **JSX란?**

JSX는 자바스크립트의 확장 문법이다. JSX 문법을 활용하면 훨씬 더 편리하게 화면에 나타낼 코드를 작성할 수 있따.

```
import ReactDOM from 'react-dom/client';

ReactDOM.render(<h1> Hello 리액트 </h1>, document.getElementById('root'));

```

### **JSX 문법**

JSX는 자바스크립트로 HTML과 같은 문법을 사용할 수 있도록 만들어주는 편리한 문법이다.
JSX문법 만의 규칙이 몇 가지 있다.

### **HTML과 다른 속성명**

### 1. 속성명은 카멜 케이스로 작성한다.

JSX 문법에서도 태그에 속성을 지정해 줄 수 있다. 여러 단어가 조합된 몇몇 속성들을 사용할 때는 반드시 카멜 케이스(Camel Case)로 작성해야 한다.
예를 들면 **`onclick`**, **`onblur`**, **`onfocus`** 등과 같은 이벤트 속성이나, **`tabindex`** 같은 속성들을 카멜 케이스로 작성해야 한다. (다행히 이런 경우가 흔치는 않다!)

```
import ReactDOM from 'react-dom/client';

ReactDOM.render(
  <button onClick= ... >클릭!</button>,
  document.getElementById('root')
);

```

예외적으로 **`data-*`** 속성은 카멜 케이스(Camel Case)가 아니라 기존의 HTML 문법 그대로 작성하셔야 합니다.
HTML 요소의 **`data-*`**로 시작하는 속성을 `데이터 속성` 이라고 한다.
브라우저가 (임의로 지정한) 데이터 속성에 관여하기 않기 때문에 특정한 데이터를 저장하고 싶은 경우 데이터 속성을 활용한다.
<span style = "font-size: 0.2rem;"> 엄밀히 따지면 HTML 태그 사용하면서 data-라는 이름을 사용하지 않아도 태그에 없는 속성을 사용하는 경우를 모두 비표준 속성이라고 할 수 있다. 그러나 아무런 규칙도 없다면 코드가 엉망이 될 가능성이 크기 때문에 개발자 편의를 위해 사용하는 비표준 속성은 속성명을 작성할 때 data- 코드를 앞에 붙이는 것이 일종의 룰이라고 볼 수 있겠다. </span>

```
import ReactDOM from 'react-dom/client';

ReactDOM.render(
  <div>
    상태 변경:
    <button className="btn" data-status="대기중">대기중</button>
    <button className="btn" data-status="진행중">진행중</button>
    <button className="btn" data-status="완료">완료</button>
  </div>,
  document.getElementById('root')
);

```

### 2. 자바스크립트 예약어와 같은 속성명은 사용할 수 없고, 프래그넌트를 적극 활용하자!

- 프래그넌트(Fragment)는 React v16에 추가된 기능이다.
- JSX는 컴포넌트가 여러 앨리먼트(element)를 하나의 태그로 묶어서 return해주어야 한다. (그렇지 않으면 인식을 못한다. 왜 그런지는.... 문법으로 받아들이기로 하자.) 원래는 아래처럼 div태그를 달아서 여러 앨리먼트를 하나의 태그로 묶어주었으나

```
import Header from '../Header';
import GoodsCard from '../GoodsCard';

function MainContent() {
  return (
    <div>
    <Header />
    <GoodsCard />
    </div>
  );
}

export default MainContent;

```

이제는 div태그를 남발하지 않아도 된다!

```
import Header from '../Header';
import GoodsCard from '../GoodsCard';

function MainContent() {
  return (
    <>
    <Header />
    <GoodsCard />
    </>
  );
}

export default MainContent;
```

## **자바스크립트 표현식 넣기**

JSX 문법에서 **중괄호({})**를 활용하면 자바스크립트 표현식을 넣을 수 있다.

```
import ReactDOM from 'react-dom/client';

const product = '맥북';

ReactDOM.render(
  <h1>나만의 {product} 주문하기</h1>,
  document.getElementById('root')
);

```

중괄호 문법을 잘 활용한다면 변수에 이미지 주소를 할당해서 **`img`** 태그의 **`src`** 속성값을 전달해 줄 수 있다.
(이벤트 핸들러 사용하기도 편리하고, 중괄호에 다른 문자 조합하는 것도 가능하다.)

```
import './style/style.css';
import userIcon from './assets/userIcon.svg';
import searchIcon from './assets/searchIcon.svg';
import bellIcon from './assets/bellIcon.svg';
import hggLogo from './assets/hggLogo.png';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={hggLogo} alt="흒로고" />
      <div className="header__icons">
        <img className="header__icons-bell" src={bellIcon} alt="알림아이콘" />
        <img className="header__icons-user" src={userIcon} alt="유저이미지" />
        <img className="header__icons-search" src={searchIcon} alt="돋보기아이콘" />
      </div>
    </div>
  );
}

export default Header;

```

단, 중괄호 안에서 for, if문 등의 문장은 다룰 수 없다.
그렇다면 어떻게 조건문과 반복문을 사용할까?

조건문의 경우 삼항연산자, AND연산자, 즉시발동함수를 사용하고,
반복문의 경우 `map()`을 사용하거나 일반 함수를 새로 만들어서 중괄호{}안에 그 함수를 넣는 방식을 사용해야한다.

\*\*React에서 js와 같은 for 문을 사용하고 싶다면 따로 `함수`를 만들어 사용해야한다.
