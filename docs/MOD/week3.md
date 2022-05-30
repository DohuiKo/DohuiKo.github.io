---
title: 멋쟁이사자처럼 X 넥슨 MOD Suppoters Hackathon 3주차 회고
---

### 멋쟁이사자처럼 X 넥슨 MOD Suppoters Hackathon 3주차 회고

## 스크립트의 이해

### MOD 에서 프로퍼티란

---

프로퍼티는 컴포넌트 멤버 변수로써, 엔티티별로 다른 값을 가질 수 있다. 루아의 변수와는 달리 MOD의 프로퍼티는 선언 시 타입을 설정하고, 타입에 따른 값을 대입받거나 참조할 수 있다. 프로퍼티는 컴포넌트 내 외부에서 접근할 수 있고, 각 함수 내에서 값을 읽거나 쓰기가 가능하다. MOD 에서는 동기화 설정을 통해 서버와 클라이언트 간 동기화 여부를 설정할 수 있다.

### 프로퍼티 선언

---

아래 이미지를 보자. 워크스페이스 밑에 myDesk라는 폴더가 있는데 여기에 나만의 스크립트 만들어서 관리할 수 있다.

![Untitled](https://user-images.githubusercontent.com/81297662/169948025-34c16edc-54e8-4244-861c-127fe0728c63.png)

이 팝업 메뉴를 이용해 작성했던 스크립트를 삭제하거나 다른 크레에이터가 제작한 컴포넌트를 추가하는 것이 가능하다. 로그를 간단히 찍어보면 아래 console창에 어떤 메세지가 뜬다. 아직 console창에 뜨는 메세지를 이해할 필요가 없다. 이제부터는 스크립트로 코딩하여 MOD 콘텐츠 만들기를 시작할 것이다. MOD 콘텐츠를 만들기 위해서는 Lua와 비슷하지만 약간은 다른 문법을 익혀야한다. MOD 스크립트의 아주 기본적인 문법을 알아보자!

![Untitled 1](https://user-images.githubusercontent.com/81297662/169948008-7ae50537-44ae-4968-889f-381b070da251.png)

- `MyDesk` 에서 우클릭 > Create Scripts-Create Component를 선택해 스크립트 컴포넌트 생성
- 컴포넌트 이름을 입력하고, 생성된 컴포넌트를 더블클릭하면 스크립트 에디터를 오픈할 수 있다.

![Untitled 2](https://user-images.githubusercontent.com/81297662/169948010-60889c54-b9c4-45a2-8044-bd1a70b08427.png)

- `Property:` 우측에 있는 `+` 버튼을 눌러 프로퍼티를 생성할 수 있고, 프로퍼티 이름과 프로퍼티의 타입, 초깃값, 그리고 서버-클라이언트 간 동기화 여부를 설정해준다.

![Untitled 3](https://user-images.githubusercontent.com/81297662/169948013-894b649d-bacb-41b0-b3db-5355529ac22d.png)

- 우측의 점 세개 메뉴 버튼을 눌러 메뉴 목록이 나타나면 `Remove` 를 선택해 프로퍼티를 제거하는 것이 가능하다.

### 프로퍼티 타입

---

MOD의 프로퍼티는 타입 설정이 필요하다. (내부적인 프로퍼티의 값 전달과 동기화를 위함)

![Untitled 4](https://user-images.githubusercontent.com/81297662/169948017-d01c258d-6cd7-416e-8ed2-fb922cefda7f.png)

프로퍼티 이름 왼쪽의 타입을 선택하면 선택 가능한 타입 메뉴가 나타난다. 타입 종류는 화면에 보이다시피, `string`, `number`, `boolean`, `table` , `table< v >` , `table< k, v>` , `Vector2` `Vector3` , `Vector4` , `Entity/EntityRef` , `Component/ComponentRef` , `any` 같이… 여러 종류가 있다.  `Ref` 가 붙는 변수 명은 참조 변수라는 사실을 알아두자.

### 반복문 만들어보기

---

- Lua 문법 이용해서 1부터 10까지 더해보자.

```jsx
local sum = 0

for count =1, 10, 1 do
    sum = sum+count
end
```

- 1부터 10까지 짝수만 더하는 코드를 짜보자.

```jsx
local sum = 0
for count =1, 10, 1 do
    if count % 2 == 0 then
         sum = sum + count
    end
    
end

log(sum)
```

반복문의 형태가 상당히 특이하다는 인상을 받았다. 😮

### 함수 만들어보기

---

- 1부터 10까지 더하는 함수

```jsx
void Sum()
{
  local sum = 0
  for count = 1, 10, 1 do
      sum = sum + count
  end
  log(sum)
}
```

- MOD는 컴포넌트 내에서 기본적으로 제공하는 function이 있다. 그 종류는 여러가지이지만 가장 대표적인 function인 `OnBeginPlay`, `OnEndPlay` 두 가지에 대해서 다뤄보도록 하자. 이때, 프로퍼티 접근은 (.)으로 한다.

```jsx
MyFirstComponent {
  Property:    +
    [Sync]
    number sum = 0  :(menu)
 
    Function:    +
      server only
    void OnBeginPlay()   :(menu)
    {
      local MyEntityPosition = self.Entity.TransformComponent.Position
    }

   Entity Event Handler:    +
}
```

- 위 코드를 보면 self라는 키워드에 .을 찍어서 프로퍼티를 사용한다. sum도 사용할 수 있고 값도 대입할 수 있다. 프로퍼티는 동적으로 바꿀 수 있다. 이제 위 코드를 조금 더 응용해보자. 1초에 0.5씩 x와 y 모두 이동시키고, 크기도 키우는 코드다.

```jsx
MyFirstComponent {
  Property:    +
    [Sync]
    number sum = 0  :(menu)
 
    Function:    +
      server only
    void OnBeginPlay()   :(menu)
    {
      local MyEntityPosition = self.Entity.TransformComponent.Position
      log(MyEntutyPosition)

      for count = 1, 3, 1 do
        myEntityPosition.x = myEntityPosition.x = 0.5
        myEntityPosition.y = myEntityPosition.y = 0.5
      end

      self.Entity.TransformComponent.Scale.x = 2
      self.Entity.TransformComponent.Scale.y = 2
    }

   Entity Event Handler:    +
}
```

간단하게 요약해보자. 스크립트의 종류는 Component와 여러 타입이 있지만 가장 자쥬 사용하는 것은 Logic이고, 나머지는 Entity별로 돌아가게 된다. 컴포넌트는 Entity에 부착을 해야만 이런 형태로 사용할 수 있다. 오늘 알아둘 것은 접근할 때 self를 통해 안쪽으로 접근해나간다고 이해하면 된다.

## 네트워크의 이해

- MOD 에서는 네트워크의 기본만 이해하면 쉽게 사용할 수 있다.

### 서버와 클라이언트

---

- 클라이언트는 게임을 플레이하는 유저들의 모바일이나 PC, 또는 해당 기기에서 개별적으로 돌아가는 프로그램을 의미한다. 주로 유저의 입력을 처리하거나, 서버가 보내온 정보를 내부적으로 처리하여 유저에게 가시적으로 출력하는 역할을 수행한다.
- 서버는 다수의 클라이언트가 연결된 단일 컴픁퍼 또는 해당 컴퓨터에서 돌아가는 프로그램을 의미한다. 일바적으로 각 클라이언트에서 보내온 요청에 대한 응답을 주기도 하지만, 게임 진행에 대한 주요 기능과 시스템을 서버에 구축함으로써 모든 클라이언트가 동일한 진행 상황이 될 수 있도록 할 수 있다.

![Untitled 5](https://user-images.githubusercontent.com/81297662/169948019-e770e0e0-184d-43e8-a974-7b2f8841d728.png)

### 서버와 클라이언트의 관계

---

- `서버 클라이언트 모델`에서 클라이언트는 다른 클라이언트와 통신하지 않으며, 오직 서버하고만 정보를 주고 받는다.
- `클라이언트` : 유저의 입력을 받고, 입력된 내용에 따라 서버에게 정보를 요청하거나 현재 클라이언트의 상황을 서버에게 알린다.
- 특정 클라이언트로부터 정보를 받은 서버는 클라이언트에게 다시 정보를 보내 주거나, 혹은 전송한 내용을 게임 진행 상황에 업데이트 시키고, 업데이트된 내용을 다시 모든 클라이언트에게 전송함으로써 게임을 이용하는 모든 유저가 동일한 상황이 될 수 있도록 맞춰준다.

![Untitled 6](https://user-images.githubusercontent.com/81297662/169948020-615305ef-6665-4bc6-ada3-ced2d84ce857.png)

- `서버` : 클라이언트 간 처리 구조는 제작자의 의도에 따라 자유롭게 설계할 수 있지만, 클라이언트에서 모든 로직과 시스템을 구축하고 서버는 동기화를 위한 통신용으로만 사용하도록 설계한다면 해킹에 상당히 취약한 구조가 된다.
- `MOD의 서버와 클라이언트` : MOD에서는 게임의 전반적인 로직과 시스템을 서버에서 구현하고, 클라이언트는 유저의 입력을 받아 서버로 전달하거나, 게임 진행 상황을 내려받아 유저에게 전달하는 역할로 구조를 가져간다. 즉, 서버는 **게임의 전반적인 흐름** 을 가져가고, 클라이언트는 **유저와 게임의 사이 중계자 역할** 을 한다.

### 동기화와 실행제어

---

메소드는 부르는 위치에따라서 동작하는 방법이 다르다. 함수는 어디에서 불릴지 모르니까 불안한 측면도 있겠죠. 그래서 `Method Setting` 이라는 것을 해준다. 이 메소드의 속성을 정의해줘서, 이것을 공간이라는 말을 써서 공간과 실행제어라는 말을 써요. 이 메소드가 가진 속성이 `Server Only` 와 `Client Only` , `Server`, `Client` , `Multicase` 5개가 있다. 이 내용들을 각각 살펴보자. 

![Untitled 7](https://user-images.githubusercontent.com/81297662/169948021-a457ca4e-dff8-4da7-be2b-ddb0c4770e9f.png)

함수별로 6가지의 실행 제어를 설정할 수 있으며 [옵션]에서 설정을 변경할 수 있다. 각각의 옵션들이 어떤 기능을 하는지 아래 이미지를 참고해보자. 알아두어야할 것은 대부분의 로직이 `Server`에서 `Server`를 기준으로 처리하는 경우가 `Client`를 통해 처리하는 경우보다 훨씬 많을 것이라는 점을 알아두면 좋을 것 같고, `multicase` 의 경우 `server`와 `client` 양쪽 다 실행하게 되는 경우라고 이해하면 된다. (부연설명 나중에 첨부 예정)

![Untitled 8](https://user-images.githubusercontent.com/81297662/169948022-c636d6f1-8718-4bc5-901b-6a232ae7fe27.png)

### 실행제어 표시

---

실행제어는 아래와 같이 표시된다.

![Untitled 9](https://user-images.githubusercontent.com/81297662/169948024-36a5391e-63cb-41d1-9c5a-46428f79da10.png)

`server` 나 `client` 통신 실행제어를 어떻게 설정하는 것이 좋을지에 대해서 시간이될 때 실습을 해보면 좋을 것 같다.

### 활동 소감

---

앞으로 `매주 월요일` 마다 Google meet 화상 채팅에서 MOD 운영진 Peer Group끼리 소통하는 시간을 가지려고 한다. 이 시간에는 강의를 함께 들어도 TIL을 함께 작성하여도 좋다. MOD 행사를 잘 운영하겠다는 공동의 목표를 가지고 모인 사람들, 각 학교에서 운영진으로 활동하며 이미 바쁜 일상 속에서도 해야할 일을 다들 너무 열심히 하고 있어서 나또한 열심히 해야겠다는 생각을 하는 중이다. `server` - `client` 통신과 관련된 것은 재미는 있지만 아직 이해도는 조금 부족하다는 생각이 들어서 가능하다면 이 부분은 복습을 조금 더 하고, 나중에 개발자 페이지의 문서를 꼼꼼히 읽어보는 시간을 가지면 좋을 것 같다.