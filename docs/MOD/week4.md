---
title: 멋쟁이사자처럼 X 넥슨 MOD Suppoters Hackathon 4주차 회고
---

### 멋쟁이사자처럼 X 넥슨 MOD Suppoters Hackathon 4주차 회고

## Event System

### Event System 로직의 이해
- 어떤 액션이 있거나 특정 일이 주어졌을 때 "무언가를" 해야 할 일이 생길 때 "행위가 일어난 주체"에서 무엇을 할 지 결정해야 action이 취해진다.

- [상황] 게임 내 캐릭터가 공격받은 상황, 피격 이펙트를 추가하려면?(일반 로직)
  1. HP감소
  2. 데미지 받았음을 보여줌
  3. 잠깐 동안 무적상태가 됨
  4. 피격 효과에 특별한 이벤트를 주고 싶다. 피격 이펙트를 표시한다.

- 위 같은 일반적인 로직은 "행위가 일어난 주체"에서 행동을 관리한다. 이를 Event 기반으로 처리하면 조금 다른 방식으로 처리된다. Event 기반으로 로직을 구성하게 되면 기본적으로 "행동을 실행해야할 주체"에서 행동을 관리하게 된다. 행위가 일어나는 주체에서 행동을 관리하는 로직에서 행동을 실행해야할 주체로 로직이 변동되면서 먼저 제시한 로직은 이렇게 변화한다.

- [상황] 게임 내 캐릭터가 공격받은 상황, 피격 이펙트를 추가할 때 Event 기반 로직이라면?
1. 캐릭터가 공격받는다.
2. 공격받은 상황을 공유한다. (공격받은 상황을 Event로 만들어서 보낸다)
3. 공격받은 상황의 이벤트를 받았을 때(피격이벤트가 발생했을 때) 이벤트 발생에 따라 정해진 행동을 수행한다.
4. 피격효과에 특별한 이벤트를 주고 싶다. 피격 이벤트 발생하는 그 상황에 피격 이펙트를 표시한다는 명령을 내려준다.

### Event System의 장단점
개발자마다 코드를 짜는 취향이 다르기 때문에 일반 로직, 이벤트 시스템 로직 중 무엇이 더 좋다고 단정짓기 어렵다.
그러나 장단점은 있으니 참고하길 바란다.

[장점]
- 다른 Component나 기능단위에서 결합성이 덜어지므로 의존성을 배제할 수 있고 분산시스템이 용이해진다.
- 행위에 대한 액션을 추가 하고 싶을 때 행위를 수행하는 곳을 수정 없이 편하게 추가할 수 있다.
- 다른 Component의 정보를 알 필요가 없다.

[단점]
- 어떤 사건이 발생 시 전체적인 플로우를 찾기 힘들다. 각각 처리 하므로 실행되는 시점에서는 알 수 없어 디버깅할 때 어려울 수 있다.
- 순차적으로 행위가 일어나지 않는 경우도 있다.

### Event System의 구성
1. `Event` 로직 상에서 어떤 사건의 발생을 의미한다.
2. `Handler` 해당 Event를 받았을 때 처리하는 행동의 주체이다. 해당 이벤트가 불렸을 때 불리는 함수이다.
3. `Sender` 해당 Event를 발송하는 객체이다.
- Event라는 공지물을 Sender가 학급내 학생들(Handler)에게 전달하면 학생들은 공지물을 보고 행동한다.


## Entity Event System
### Entity Event System이란
MOD에는 Event System을 쉽게 활용할 수 있도록 기본으로 제공되는 API가 있다.
API를 사용하면 Event 제어를 좀 더 편리하게 할 수 있다.

### Event 주고 받기를 위한 Entity Event System 이해
- Component는 Entity를 중계자로 사용할 수 있다.
- Component 들이 Entity에 핸들러를 등록하고 Sender 역시 Entity 통해서 이벤트를 발생시킬 수 있다.
- Entity들은 핸들러에게 해당 Event를 전송하여 동작한다. (공지물은 학생들에게 해야할 일을 알려주어 학생들이 움직이게 한다.)


### 이벤트 처리할 컴포넌트와 엔티티 생성
- `Workspace` > `MyDesk` > `Create EventType` -> 번개 모양으로 이벤트가 생성되면 이름을 알맞게 붙여주고, Event에 Property나 Function을 추가해준다.
- 그 다음, `Component`를 생성하고, `Component`가 동작할 `Entity`를 생성해준다.
- Coponent가 Entity를 중계자로 사용하기 때문에 Entity에 Component를 각각 추가해준다.

### 핸들러 등록하여 처리하기
- 지금까지 Entity에 Component를 추가해주었다면, 두 컴포넌트의 스크립트 에디터에서 `Entity Event Handler`에 만들었던 `Event`를 등록시켜주어야 한다.
- 이때 발생되는 위치에 대한 정보를 넣어준다.
![image](https://user-images.githubusercontent.com/81297662/171092558-9cb8454f-8de1-42ad-bafa-8d36d4d0484c.png)
- 이제부터 Component는 Entity를 중계자로 삼아 Event를 받을 수 있다. 이때부터 필요한 Event를 처리하는 로직을 스크립트에 코드로 작성해보자.
- 어떤 상황에 따라(특정 키보드에 버튼을 누르면//몬스터에 부딫히면//스트리머가 알림을 쏘면) 반응하도록(스킬을 사용하도록//체력감소 이펙트가 나타나도록//알림을 보고 알림을 끄거나 스트리머 방송을 보러 가도록) 코드를 작성할 수 있다.

## Entity 생성과 삭제, 유효성 체크
### Entity 생성
- Entity 생성 -> Entity 생성 함수인 `SpawnByEntityTemplate`와 `SpawnByModelled`를 사용함.

#### SpawnByEntityTemplate
- 맵에 배치된 엔티티와 동일한 엔티티를 생성함.
- 쉽게 말해 엔티티의 복제이다.
- 맵 상에 복제 대상이 되는 템플릿 엔티티가 존재해야 한다.

#### SpawnByModlled
- 워크스페이스에 추가된 모델 중 한 가지 모델을 지정하여 엔티티로 생성함.
- 대체로 모델 리스트에 있는 모델을 엔티티로 생성하고자 할 때 사용함.
- 예를 들어 원하는 모델에서 `마우스 우클릭` > `Add to workspace`를 하여 모델을 워크스페이스에 추가해줌. 해당 모델에서 ID를 복사하고 싶다면 마우스를 우클릭하여 `Copy Model ID` 코드를 삽입한다.

![image](https://user-images.githubusercontent.com/81297662/171094308-523e4ea2-035d-426c-bf52-bc5a6b47c303.png)

### Entity 제거
- Entity 제거 ->`_EntityService:Destroy`와 `Entity:Destroy` 방법을 사용함.
- 전자는 인자를 넘겨받은 엔티디를, 후자는 호출한 엔티티를 삭제한다.


### Entity 유효성 체크
- 글로벌 함수 `isvalid` 사용함.

사용 예시
```
--void OnUpdate(number delta) [server only]
if isvalid(self.SpawnedEntity) == false then return end
if self._T.time == nil then self._T.time = 0 end

self._T.time = self._T.time + delta

if self._T.time >= 3 then
    local isvalidValue = isvalid(self.SpawnedEntity)
    log("삭제 전 : "..tostring(isvalidValue)) -- 콘솔 창에 "삭제 전: true" 출력
    self.SpawnedEntity:Destroy()
    isvalidValue = isvalid(self.SpawnedEntity)
    log("삭제 후 : "..tostring(isvalidValue)) -- 콘솔 창에 "삭제 후: false" 출력
end
```
- 삭제 전에는 isvalid가 true이고, 삭제 후에는 isvalid가 false임.