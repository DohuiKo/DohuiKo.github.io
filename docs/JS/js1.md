---
title: 자바스크립트 입문 핵심 개념
---

### 객체

자바스크립트의 객체는 생성 방법이나 삭속 방식 등에서 C++이나 자바와 다르다. 자바에서는 클래스를 정의하고, 클래스의 인스턴스를 생성하는 과정에서 객체가 만들어진다. 그러나 자바스크립트에서는 클래스대신 객체 리터럴이나 생성자 함수 등 별도의 생성 방식으로 객체를 생성한다.

자바스크립트에서 객체를 생성하는 방법은 다음과 같다.

1. 기본 제공 Object() 객체 생성자 함수를 이용하기.
2. 객체 리터럴을 이용하기
3. 생성자 함수를 이용하는 방법

이에 대해서 자세한 설명은 생략한다.

<참고>
자바스크팁트의 데이터 타입인 `boolean`, `number`, `string`, `null`, `underdefined`이 다섯 가지를 제외한 나머지는 모두 객체로 이루어져있다.

### 함수

자바스크립트에서는 **함수도 객체로 취급**하며 심지어 함수는 값으로 취급된다. 자바스크립트에서 함수는

1. 리터럴에 의해서 생성됨
2. 변수나 배열 요소, 객체의 프로퍼티 등에 할당 가능함
3. 함수의 인자로 전달 가능함
4. 함수의 리턴값으로 리턴 가능함
5. 동적으로 프로퍼티를 생성 및 할당 가능함

위 같은 특징이 있다. 이러한 특성 덕분에 자바스크립트는 **함수형 프로그래밍**이 가능하다.

함수형 프로그래밍이란, 함수의 조합으로 작업을 수행하는 프로그래밍의 여러 가지 패러다임 중 하나이다.

### 프로토타입

자바스크립트는 기존의 객체지향 프로그래밍 언어와는 다른 **프로토타입 기반의 객체지향 프로그래밍**을 지원한다. 자바같은 객체지향 프로그래밍에서는 클래스를 정의하고 이를 통해 객체를 생성하지만, 자바스크립트에서는 이러한 클래스 개념이 없다. 대신에 객체 리터럴이나 *생성자 함수*로 객체를 생성한다. 이렇게 생성된 객체의 부모 객체가 *프로토타입 객체*이다. 자식 객체는 부모 객체가 가진 프로퍼티 접근이나 메서드를 상속받아 호출하는 것이 가능하다.

<주의사항>
자바스크립트의 모든 객체는 자신의 부모인 프로토타입 객체를 가리키는 참조 링크 형태의 숨겨진 프로퍼티가 있다. ECMAScript에서는 *부모인 프로토타입 객체를 가리키는 참조 링크 형태의 프로퍼티*를 *암묵적 프로토타입 링크*라고 부른다.

### 실행 컨텍스트와 클로저

자바스크립트는 실행 컨텍스트를 만들고 그 안에서 실행이 이루어진다. 실행 컨텍스트는 **실행 가능한 코드를 형상화하고 구분하는 추상적인 개념**이다. 실행 가능한 코드 블록이란 대부분의 경우 함수가 된다. 클로저는 **생명 주기가 끝난 외부 함수의 변수를 참조하는 함수**이다. 기초 수준에서 이해하기 어려운 개념이니 이런게 있다 정도만 알아 두자.

<참고>
ECMAScript에서는 실행 컨텍스트가 형성되는 경우를 `전역 코드`, `eval()함수로 실행되는 코드`, `함수 안의 코드를 실행할 경우` 세 가지로 정의한다.

---
