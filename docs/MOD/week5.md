---
title: 멋쟁이사자처럼 X 넥슨 MOD Suppoters Hackathon 5주차 회고
---

### 멋쟁이사자처럼 X 넥슨 MOD Suppoters Hackathon 5주차 회고
- 5주차는 실습 위주로 수업이 진행되었다.
- 실습 위주로 강의 수강하였기에 MOD 공식 문서를 참고하며 학습하였다.

## 컴포넌트의 활용

### 캐릭터의 움직임과 관련된 컴포넌트
#### MovementComponent
- DefaultPlayer에 기본적으로 탑재된 컴포넌트.

#### RigidBodyComponent
- 일반적인 세계(World Entity)에서 영향을 받는 컴포넌트.
- 강의에서 설명한 속성 값에 ㄷ해서 메모해보자.

```
DownJumpSpeed: 하단 점프 속도
Gravity: 중력값, 점프를 했을 때 떨어지는 속도
IsBlockVerticalLine: 활성화 시 기둥을 뚫고 지나갈 수 없다.
IsolatedMove: 활성화 시 낭떠러지 등 발판이 이어져 있지 않을 때 그 지점에서 더 이상 앞으로 갈 수 없다.
Mass: 질량이 커지면 속도를 내기까지 시간이 오래걸린다. (가속이 붙기까지의 시간)
```
- 낭떠러지에서 더 이상 전진이 불가능하다든가 하는 부분은 RigidBodyComponent안의 속성 값들은 게임을 해본 사람이면 충분히 이해가 가능하다. 나머지 속성도 직관적으로 이해할 수 있다. 중력이나 질량같은 경우는 특히 그러하다.

#### TriggerComponent
- 충돌이란 충돌체를 포함하고 있는 엔티티의 충돌 영역이 서로 교차했을 때를 의미한다.
- 충돌체는 TriggerComponent 또는 HitComponent와 같은 컴포넌트를 엔티티에 추가하면 자동으로 생성된다.

![image](https://user-images.githubusercontent.com/81297662/174484206-9e644988-2716-4059-a4fe-bfed973efb1b.png)

- TriggerComponent 이벤트를 가지고 있다.
```
TriggerEnterEvent: 충돌이 시작됐을 때
TriggerLeaveEvent: 충돌이 끝났을 때
TriggerStayEvent: 충돌이 진행중일 때
```
- Event에 맞게 효과를 주면 된다.
- 주로 사용하는 것은 Enter와 Leave이다. Stay는 계속 지속되기 때문에 남발하면 좋지 않다.

#### WebSpriteCoponent
- 웹에 있는 이미지를 가져와서 표시해주는 컴포넌트
- 이미지를 띄워서 뭔가를 할 수 있다.
- 여러 개의 이미지가 번갈아가면서 나오게도 할 수 있음. (Animation Url이용해서)

#### YoutubePlayerWorldComponent
- 유튜브 동영상도 가져와서 world상에 띄울 수 잇다.

#### AvatarRendererComponent & CostumeManagerComponent
- 캐릭터를 커스텀해서 월드맵상에 나타내고 싶을 때 쓴다.
- 게임 중 랭킹에 등극된 캐릭터 외형을 그대로 따서 전시할 때 사용할 수 있을듯하다.

### 입력/조작/연출에 관하여
#### 입력 관련 컴포넌트
- KeyDownEvent, KeyHoldEvent, KeyReleaseEvent, KeyUpEvent 네 가지가 있다.
- KeyDownEvent: 키를 1번 눌렀을 때 발생
- KeyHoldEvent: 키를 누르는 동안 발생
- KeyReleaseEvent: 키를 길게 눌렀다 뗐을 때 발생
- KeyUpEvent: 키를 1번 눌렀을 때 발생

사용할 때는 `Keyboard.(누르고 싶은 키)` 로 이용한다.
`ScreenTouchEvent`, `ScreenTouchHoldEvent`, `ScreenTouchReleaseEvent`...
같은 다른 이벤트도 있다.

- keyboard의 특정 키를 눌렀을 때 특정 물체가 반응하게 만들 수 있다.
- 예를 들면, 공격 키인 ctrl키를 누르면 스킬 이펙트가 발현되게 하는 식으로 응용 가능하다.

#### SoundComponent
- 사운드도 하나의 컴포넌트이다.
- 거리를 기준으로 볼륨이 설정된다.

#### CameraComponent
- 목적지가 어디인지 보여주고 다시 원위치로 돌아간다.
- 목적지 보여주고 목적지까지 뭔가를 안내하고 싶을 때 사용할 수 있음.

#### PortalComponent
- 특정 키를 눌렀을 때 특정 위치로 이동시키는 컴포넌트.

#### 사다리Component
- 사다리 Entity가 기본적으로 가지고 있는 컴포넌트인데,
- `ClimbableSpriteRendererComponent`를 이용하면 사다리가 아닐 때도 사다리인 것 처럼 기어오르게 만들 수 있다.
- 사다리의 경우 Entity가 head와 tail두 자식을 가지고 있고 이 두가지를 활용해서 A사다리의 tail을 B사다리의 head로 이어서 사용할 수 있다. (응용 가능)


#### 마무리
우선, 시험이 끝나고 다른 일들을 하며 MOD 강의를 듣고 있다.
추후 실습하면서 추가할 내용이 있으면 추가해서 보완하기 좋은 것이 5주차 강의 내용인 것 같다. 강의는 참고사항이고 실습이 중요할 텐데... 언젠가 실습 공부를 해야하지 않을까 싶다?