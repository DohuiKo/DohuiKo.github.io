---
title: 멋쟁이사자처럼 X 넥슨 MOD Suppoters Hackathon 2주차 회고
---
### 멋쟁이사자처럼 X 넥슨 MOD Suppoters Hackathon 1주차 회고

## 기본 컴포넌트 이해
### 1. `TransformComponent`

- 트랜스폼 컴포넌트는 월드 상에서 엔티티들이 어디에 어떻게 위치하는지 나타내는, 무조건 있어야하는 컴포넌트다. 대부분 가지고 있다.
- 특징: 위치 정보 가지고 있다.
- Property:
    - position: 정보를 가지고 있다. 어떤 좌표를 가지느냐. 스토리 베이스 게임이라 X,Y가지고 있습니다. 이 값을 바꿔주면 이동한다. (좌표 정보 나타냄)
    - Scale: 물체의 크기를 나타낸다. (조정하면 늘어남) 1이하로도 나타낼 수 있다. (크기가 작아짐) 그 다음에 로테이션은 회전값인데, 물체를 회전시키는 것이다. 각 축에 회전할 수 있는데 2D 게임은 Z축으로 회전하는데 Z축으로 회전하면 와이퍼형으로 회전한다. (각도 별-360도면 원래대로 돌아옴) 연동 잘되어 있어서 잡고 움직이면 움직여진다. 마우스로 잡고 늘리기 가능함. 대각선은 동일한 비율 그 외에는 동일하지 않은 비율이다. 회전값은 모서리에서 회전 아이콘 떴을 때 회전 가능하다.
    - Entity는 계층 트리구조로 되어있어서 부모와 자식의 형태가 있다. 두 가지 엔티티를 합쳐서 합치고 싶다면? 하나의 object에 다른 object를 자식으로 넣는다. scale 바꾸면 자식도 같이 영향 받는다. 단, 하위 entity는 부모 좌표 기준으로 상대좌표를 나타낸다. world 기준으로 좌표는 자신의 좌표+부모 좌표라고 보면 된다.  `world position`은 **절대 좌표**라고 생각하면 편하고 `position`은 **상대 좌표**라고 생각하자. 각자 메이커에서 이동할 떄 계산이 되어서 알아서 계산이 될 것이다. World position은 절대 location, 그 외에는 상대 location이라고 생각하자.
        
        ![절대좌표 상대좌표.png]!(https://user-images.githubusercontent.com/81297662/169676494-890d5e4e-0040-4b90-8d5c-11b9c6a3294d.png)
        

### 2. `SpriteRendererComponent`

- `SpriteRendererComponent`는 Sprite를 설정하고 월드 상에 이미지를 표시한다. `TransformComponent`와 다르게 필수적으로 사용하지 않을 수도 있다. 여러가지 자식들을 통합하기 위해 중간 매개체처럼 쓰인다.
- 이것을 어떻 게임 이미지로 표시할 것인가? 수 많은 프로퍼티가 있는데 중요한 것은 `SpriteRUID` 이다. `RUID`는 이미지를 관리하는 ID이다. `RUID`는 기본적으로 수많은 모델들이 있다. 기본적으로 메이플 리소스 RUID를 뒀는데 그것만 알면 편리하게 어떤 형태의 리소스를 찾을 지 편하게 알 수 있다(`Models`). 발급된 `RUID`를 붙여넣기만 한다면 쉽게 사용할 수 있다. `RUID`는이미지 자체의 ID를 정의한다는 점을 알아두시면 좋다.
    
    ** RUID란 스프라이트, 애니메이션, 사운드 등 다양한 리소스가 가진 고유한 아이디 값이다.
    
- `RUID`는 가령 예를 들어서 이런 불길이 있다고 가정해 보자. 불길이 움직이고 있다. 이 ID를 그대로 복사해서 붙여넣으면 계속 움직인다. 선택했을 때 움직이지 않은 이유는 조작 쉽게하려고 멈춰있는 것이고 마우스로 선택하면 움직인다. 왜 움직일까? 이는 `RUID` 자체에 `animaion`을 가지고 있어서 그런 것이다. 몇 개의 프로퍼티는 어떤 주제를 가지고 동작한다. 예를 들어 `playrate`는 불꽃이 더 빠르게 움직이도록, 느리게 움직이도록 조정할 수 있다. (이때 plates라는 property는 숫자가 높을 수록 빨라진다)
    
    ![Untitled](https://user-images.githubusercontent.com/81297662/169676501-85be7853-2e5f-4d4a-93a4-1b22dadd1512.png)
    
- 다른 `property`도 살펴보자. `EndFrameIndex`, `StartFrameIndex` 를 살펴보면, 모두 애니메이션과 관련되어있다.
- `FlipX`, `FlipY`는 좌우 반전을 의미한다.
- `IgnoreMapLayer`는 다음 강의 지형의 이해쪽에서 충분히 설명해줄 예정. 개략적으로 설명하면 2D이다보니 물체가 겹치면 어떤 것을 먼저 보여주느냐를 정의하는 것이 Layer라고 볼 수 있다.
- `Color`는 색을 입히는 것. 색을 바꿔서 새로운 느낌을 줄 수 있다.
- `Draw`: 심플, 단순한 상태
- `DrawMode`: Tiled로 설정하면 Tyling된다. 타일로 됐을 때 사이즈가 TiledSize이다. 타일 사이즈 조절하면 크기가 바뀐다. (개수가 변동됨) ex. 던전에서 벽에 등불이 걸린 것 처럼 연출하거나 나무가 일정 간격으로 떨어져있는 것을 표현할 때 사용할 수 있다.
- 이상으로 TransformComponent와 Sprite컴포넌트에 대해서 알아보았다.

ex. 예를 들어 baseTree하나를 설정해서 다른 entity들을 하위 항목으로 묶어서 넣고 필요하면 애니메이션도 넣는다.

![Untitled 2](https://user-images.githubusercontent.com/81297662/169676496-93daba7d-5b8a-4655-87c1-e7387a730dbd.png)

## 지형과 레이어의 이해

---

- 타일은 `ModelList`에서 선택할 수 있다. 레이어별로 하나의 타일만 사용가능하다.
- Scene을 먼저 보자. **직사각형 그리드**로 되어있다. 모서리 클릭하면 작게 그려지고 가운데는 크게 그려진다. 클릭 위치에 따라서 달라진다는 점을 이용해서 디테일한 맵 구현을 할 수 있다. 잘못 그려진 타일은 마우스 우클릭하면 삭제할 수 있다.
- 상단 UI 옆 네모버튼 누르고나서 드래그하면 드래그한 영역에 타일 설정을 편리하게 할 수 있다. 마찬가지로 드래그+우클릭이면 삭제할 수 있다.

![Untitled 3](https://user-images.githubusercontent.com/81297662/169676497-562b00b4-e53c-4c27-bd94-96fbf22e7f48.png)

- Scene Maker를 보자. TileMap을 보면 해당 Entity의 컴포넌트 구성 활용할 수 있다.
- `TileMapComponent` 프로퍼티를 살펴보자.
    - `Color`: 색바꿀 수 있음!
    - `FootholdForce`: 타일 셋: 리소스 아이디 선택. 몬스터들이 밟고 다니는 발판 정보. 씬메이커 상에서 발판 정보 확인 위해서 file>setting>만들기 발판 정보 볼 수 있다. (빨간색) 이 길을 따라서 몬스터가 이동한다. 자유롭게 생성됨을 확인할 수 있다.
    - `FootholdWalk`: foothold는 다양한 모델들을 확인할 수 있다. foothold정보 포함하는 모듈임. 모델 안에 foothold적혀져 있는거 확인 가능. model에 확인된 foothold는 해당 버튼 눌러보시면 각 라인들 포인트 확인할 수 있고, foothold위치 옮길 수 있다. (자유롭게) 해당 포인트 마우스 우클릭 > delete통해서 삭제가능하다. entity이동하면 foothold도 함께 이동한다. 프로퍼티 편집기에서 foothold를 편집할 수 있다. 예를 들어서 CustomFootholdComponent에서 EdgeLists를 변경할 수 있다. foothold(점 개수) 정보가 있어서 Scene maker에서 property자세히 살펴보면 여기에 여러가지 정보 설정할 수 있다. 캐릭터 마찰력, 캐릭터 속력 등 설정하면 해당 foothold밟으면 property영향 받아서 마찰값, 이동속도가 달라진다거나 할 수 있다. 타일맵과 foothold설명하며 지형 구성 설명해줬는데 다음에는 레이어 개념 설명하겠다.
    - `IgnoreMapLay`
    - `IsOddGridPosition`
    - `OrderInLayer`
    - `SortingLayer`
    - `TileSerRUID`: 눈 버튼 클릭하면 스프라이트 피커에 들어간다. 원하는 것 선택하면 그것으로 바뀐다. 리소스들 마우스 우클릭 통해 카피 RUID 해서 설정하면 리소스가 변경됨 확인할 수 있다.

![Untitled](2%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%203b72d7d458be4e9b9edfed80741fabb3/Untitled%203.png)

- Layer Panner  `+` 누르면 편리하게 Layer설정 가능하다. 한 개의 맵에는 최대 10개까지 레이어를 추가할 수 있다. 해당 레이어 활성화할 수 있다. 해당 레이어에서 아까 그렸던 타일들이 존재한다. 레이어에서 우클릭하면 다양한 옵션 확인 가능하다. property 편집기에서 SpriteRendererComponent에서도 원하는 레이어로 위치를 바꿀 수 있다.

## 자주사용하는 컴포넌트

---

## `TwinComponent`

- MOD 에서는 세 가지 기본 `TWinComponent`들을 제공하고 있다.
- `TwinLineComponent` : entity를 좌우로 움직이게 한다. 간단하고 디테일한 애니메이션이 아닌 경우 사용함. 시작점, 목적점을 보관해주는 것이 twin 이라고 볼 수 있다. 사이 속도값을 어떻게 주느냐에 따라서 다른 느낌으로 사용할 수 있다. 엄청나게 다양한 옵션이 있다.

ex. Elastic하면 탄성력이 있을 것 같다. 탄성력있게 움직인다. 아까와 동일하게 시작점-끝점을 왔다갔다할 뿐이다. SignEasy 는 빨라졌다 느려졌다 한다. 나중에는 충돌하면 체력이 감소하는 식으로 응용할 수 있다.

- 사다리를 불러보자. 여기에 Twin을 추가하면 사다리도 좌우로 움직인다. 사다리를 탄 채로 움직일 수 있다. 동기화 방식을 `ClientOnly` 로 한다면 사다리, 캐릭터 위치가 달라보인다. 서로 사다리가 어긋난 채로 엉망진창으로 동기화된다.
- `TwinCircularComponent` : 뱅글뱅글 회전(회전 반경을 따라서). 회전 반경 따라서 회전하도록 한다. 속도도 조절해줄 수 있다. 진폭을 설정하면 위아래로 왔다갔다하도록 연출할 수 있다.
- 강체 ↔ 육체 // 형질의 변하는 것이 육체, 강체는 일반적으로 고체. 형태가 바뀌지 않는다고 볼 수 있고 물체들의 물리적인 속성들을 컨트롤할 수 있는 것이 `RigidbodyComponent` 이다. MOD는 물리엔진 법칙을 완벽하게 구현하기는 어렵다. 객체와 다른 점은 하늘에서 떨어진다 Gravity때문이다. Sprite가 가지고 있는 원점을 잘 보자. 일반적으로는 센터에 원점이 있다. 몬스터는 보통 중앙 하단에 설정이 되어 타일을 밟고 있는 것처럼 보이게 떨어진다.
- 수직으로 타일을 설정하면 앞으로 지나갈 수 있다. 옆에 다른 타일을 세워보자. 이럴 때 VerticalLineBlock을 켜주면 막히는 걸 확인할 수 있어요.발판 정보를 보고 기본적인 플레이어들의 룰에 따라서 해주면 된다.(개인적으로 잘 이해 안감)

![Untitled 4](https://user-images.githubusercontent.com/81297662/169676498-c4ae338b-fc12-4b17-bee9-2fe9d95c6392.png)

- 맵에 따라서 쿼터뷰가 자연스럽게 될 수 있다. (둥둥떠다님) 기본적으로 횡스크롤 에셋들을 대부분 제공하지만, 종종 쿼터류 스러운 맵도 제공을 하고 있다. 이런 곳에서 다른 성격의 쿼터뷰 모드를 제공하려면 `BaseEnvironment` 컴포넌트에서 쿼터뷰 옵션을 키면 된다.

![Untitled 5](https://user-images.githubusercontent.com/81297662/169676499-8c33baad-5aea-4ce8-9e4e-d47c4421d732.png)

- 이런 맵에서는 쿼터뷰 이동이 자연스럽다. `QuaterViewAcce` 에서 밑에 다른 옵션들을 선택해줄 수 있다. 이번에는 `MovementComponent` 에 대해서 알아보자.
- `MovementComponent` 마찬가지로 Default 프레이머에 `MovementComponent`가 있음을 확인할 수 있다. `InputSpeed` 를 조정하면 빨라진다. 체크박스를 해지하면 조작이 완전히 불가능하다. (점프는 점프가 증폭됨)
    - 몬스터에 적용시켜보자. 기본적인 이동 속도 굉장히 빠르게된다. (스피드 올리면) 또 자주 사용하는 컴포넌트를 보자.
- `TriggerComponent`는 객체간의 콘텐츠가 있는, 객체 간 충돌 발생했을 때 알려주는 컴포넌트이다. 물리적인 특성이 있는 것은 아님. 충돌한다고 뭔가 바로 발생하는 것은 아니지만 스크립트에서 이벤트를 따서 추후에 처리를 직접 해주면 되는 것이다. (프레이머에 triggerCoponent가 있다는 것)
- 기본적으로 제공하는 Trap을 하나 설치해 봅시다. `TriggerComponent` 추가하면 박스 사이즈가 자동으로 설치돼있을 것이다. 충돌이 끝났을 때에 따라서 이벤트를 활용하기도 한다. (여기는 코드 활용함. → 충돌 발생 → log 뱉기) 충돌했으니까 myplayer에서 `rigidbodycomponent`, 물리적인 속성 가진다. 속도, 중력도 가진다.  `AddForce` 통해서 힘 줄 수 있다. 간단하게 오른 쪽으로 5만큼 이이동해 보자. 충돌이 발생했을 때 보시다시피 back이 발생한 것 처럼 자연스럽게 구현되어있다.
- 움직이는 트랙 구현 → `TweenLineComponent` 움직이는 트랩을 간단하게 구현할 수 있다.
- 움직이는 트랙!에 필요한 코드
    
    ```jsx
    MyPlayer {
      Property:  +
      Function:
      Entity Event Handler
        HandleTriggerEnterEvent(TriggerEnterEvent event) :
        {
          local TriggerBodyEntity = event.TriggerBodyEntity
          -------------------------------------------------
          self.Entity.RigidbodyComponent:AddForce(Vector2(5,0))
        }
    }
    ```
    
- `DefaultPlayer` 하위 에서 `PlayerComponent` 를 찾을 수 있다.
- `PlayerComponent` 사용해보자. → 게임 시작할 때 닉네임을 출력하는 식으로 응용할 수 있다.
- 코드
    
    ```jsx
    MyPlayer {
      Property:  +
      Function:
        void OnBeginPlay() :
        {
          log(self.Entity.PlayerComponent.NickName)
        }
    }
    ```
    
- Model List 에서 `HK바` 를 만들어서 넣어 보자. 그러면 Property에 `UIMyInfo` 라는 것이 추가된다. 플레이어의 hp를 표현하는 코드가 들어가 있다. 아까 해봤던 함정 같은 것을 같이 만들어 볼 수 있다.
- 장애물에 부딫혔을 때 체력 깎기
    
    ```jsx
    self.Entity.PlayerComponent.Hp = self.Entity.PlayerComponent.Hp - 100
    ```
    
- `PlayerComponent` 말고도 `PlayerControlComponent` 라는게 있다. → 플레이어의 전반적인 컨트롤과 연관성있다. 여기에 있는 `LookDirectionX` 에 따라서 캐릭터가 바라보고 있는 방향을 조정할 수 있다. 예를 들어, 한 방향만을 바라보도록 조정하여 슈팅게임에 활용할 수 있다.