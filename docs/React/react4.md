---
title: state
---

## state 정의

리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미함.
props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있음.
두 가지 종류가 있음.

- 클래스형 컴포넌트가 지니고 있는 state
- 함수형 컴포넌트에서 useState 함수 통해 사용하는 state

## 클래스형 컴포넌트의 state

- 예제 코드를 살펴보자.

```
import React, {Component} from 'react';

class Counter extends Component {
  constructor(props)  {
    super(props)l
    //
    this.state = {
      number:0
    };
  }
  render() {
    const {number} = this.state;
    return (
      <div>
        <h1> {number} </h1>
        <button
          onClick={() => {
            this.setState({number:number+1});
          }}
        > +1
        </button>
      </div>
    );
  }
}

export default Counter;
```

이 코드는 버튼을 클릭할 때마다 화면상에 숫자가 1씩 + 되는 코드다.

코드를 살펴 보자.

1. 컴포넌트에 state를 설정할 때는 다음과 같이 생성자(constructor) 메서드를 작성하여 설정한다.

```
constructor(props) {
  super(props);
  this.state = {
    number:0
  };
}
```

이때, 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해주어야 한다. `this.state` 로하여 초깃값을 설정해줄 수 있다.

2. render함수에서 현재 state를 조회할 때는 `this.state`를 조회하면 된다.

```
render() {
  const { number } = this.state; // state를 조회할 때는 this.state를 이용함
  return (
    <div>
      <h1>{ number }</h1>
      <button
        onClick = {()=> {
          this.setState({ number:number+1 });
        }}
      > +1
      </button>
    </div>
  );
}
```

위 코드에서는 button안에 onClick 값을 props로 넣어주어 버튼이 클릭될 때 호출되는 함수를 설정해주었다.
다시 말하면 이 코드는 onClick 값을 button안에 props로 넣었으므로 해당 버튼을 클릭하면 button의 값이 1씩 증가할 수 있는 것이다.
\*\*참고: 이벤트를 설정할 때는 arrow function을 사용한다.

## 함수형 컴포넌트에서 useState 사용하기

useState함수를 사용하여 함수형 컴포넌트에서 state를 사용할 수 있다.

이를 이해하기 위해서 선행 지식으로 **배열 비구조화 할당**이 무엇인지 알아야 한다.

이제 코드를 보자.

```
import React, { useState } from 'react;

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  return (
    <div>
      <button onClick= {onCLickEnter}>입장</button>
      <button onClick= {onClickLeave}>퇴장</button>
      <h1> {message} </h1>
    </div>

    export default Say;
  );
}
```

- `useState 함수`를 호출하면 배열이 반환된다.
- 배열의 첫 번째 원소`[message]`는 현재 상태이고, 두 번째 원소[`setMessage`]는 상태를 바꾸어 주는 함수이다. (이 함수의 명칭은 setter이다)
- 배열 비구조화 할당을 통해 이름을 자유롭게 정해줄 수 있다. `[message, setMessage]`
