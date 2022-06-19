(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{423:function(t,e,a){"use strict";a.r(e);var o=a(56),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"멋쟁이사자처럼-x-넥슨-mod-suppoters-hackathon-2주차-회고"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#멋쟁이사자처럼-x-넥슨-mod-suppoters-hackathon-2주차-회고"}},[t._v("#")]),t._v(" 멋쟁이사자처럼 X 넥슨 MOD Suppoters Hackathon 2주차 회고")]),t._v(" "),a("h2",{attrs:{id:"기본-컴포넌트-이해"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기본-컴포넌트-이해"}},[t._v("#")]),t._v(" 기본 컴포넌트 이해")]),t._v(" "),a("h3",{attrs:{id:"_1-transformcomponent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-transformcomponent"}},[t._v("#")]),t._v(" 1. "),a("code",[t._v("TransformComponent")])]),t._v(" "),a("ul",[a("li",[t._v("트랜스폼 컴포넌트는 월드 상에서 엔티티들이 어디에 어떻게 위치하는지 나타내는, 무조건 있어야하는 컴포넌트다. 대부분 가지고 있다.")]),t._v(" "),a("li",[t._v("특징: 위치 정보 가지고 있다.")]),t._v(" "),a("li",[t._v("Property:\n"),a("ul",[a("li",[a("p",[t._v("position: 정보를 가지고 있다. 어떤 좌표를 가지느냐. 스토리 베이스 게임이라 X,Y가지고 있습니다. 이 값을 바꿔주면 이동한다. (좌표 정보 나타냄)")])]),t._v(" "),a("li",[a("p",[t._v("Scale: 물체의 크기를 나타낸다. (조정하면 늘어남) 1이하로도 나타낼 수 있다. (크기가 작아짐) 그 다음에 로테이션은 회전값인데, 물체를 회전시키는 것이다. 각 축에 회전할 수 있는데 2D 게임은 Z축으로 회전하는데 Z축으로 회전하면 와이퍼형으로 회전한다. (각도 별-360도면 원래대로 돌아옴) 연동 잘되어 있어서 잡고 움직이면 움직여진다. 마우스로 잡고 늘리기 가능함. 대각선은 동일한 비율 그 외에는 동일하지 않은 비율이다. 회전값은 모서리에서 회전 아이콘 떴을 때 회전 가능하다.")])]),t._v(" "),a("li",[a("p",[t._v("Entity는 계층 트리구조로 되어있어서 부모와 자식의 형태가 있다. 두 가지 엔티티를 합쳐서 합치고 싶다면? 하나의 object에 다른 object를 자식으로 넣는다. scale 바꾸면 자식도 같이 영향 받는다. 단, 하위 entity는 부모 좌표 기준으로 상대좌표를 나타낸다. world 기준으로 좌표는 자신의 좌표+부모 좌표라고 보면 된다.  "),a("code",[t._v("world position")]),t._v("은 "),a("strong",[t._v("절대 좌표")]),t._v("라고 생각하면 편하고 "),a("code",[t._v("position")]),t._v("은 "),a("strong",[t._v("상대 좌표")]),t._v("라고 생각하자. 각자 메이커에서 이동할 떄 계산이 되어서 알아서 계산이 될 것이다. World position은 절대 location, 그 외에는 상대 location이라고 생각하자.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/81297662/170292515-d276ba95-8512-41da-8a69-ea57100a1e46.png",alt:"절대좌표_상대좌표"}})])])])])]),t._v(" "),a("h3",{attrs:{id:"_2-spriterenderercomponent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-spriterenderercomponent"}},[t._v("#")]),t._v(" 2. "),a("code",[t._v("SpriteRendererComponent")])]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("SpriteRendererComponent")]),t._v("는 Sprite를 설정하고 월드 상에 이미지를 표시한다. "),a("code",[t._v("TransformComponent")]),t._v("와 다르게 필수적으로 사용하지 않을 수도 있다. 여러가지 자식들을 통합하기 위해 중간 매개체처럼 쓰인다.")])]),t._v(" "),a("li",[a("p",[t._v("이것을 어떻 게임 이미지로 표시할 것인가? 수 많은 프로퍼티가 있는데 중요한 것은 "),a("code",[t._v("SpriteRUID")]),t._v(" 이다. "),a("code",[t._v("RUID")]),t._v("는 이미지를 관리하는 ID이다. "),a("code",[t._v("RUID")]),t._v("는 기본적으로 수많은 모델들이 있다. 기본적으로 메이플 리소스 RUID를 뒀는데 그것만 알면 편리하게 어떤 형태의 리소스를 찾을 지 편하게 알 수 있다("),a("code",[t._v("Models")]),t._v("). 발급된 "),a("code",[t._v("RUID")]),t._v("를 붙여넣기만 한다면 쉽게 사용할 수 있다. "),a("code",[t._v("RUID")]),t._v("는이미지 자체의 ID를 정의한다는 점을 알아두시면 좋다.")]),t._v(" "),a("p",[t._v("** RUID란 스프라이트, 애니메이션, 사운드 등 다양한 리소스가 가진 고유한 아이디 값이다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("RUID")]),t._v("는 가령 예를 들어서 이런 불길이 있다고 가정해 보자. 불길이 움직이고 있다. 이 ID를 그대로 복사해서 붙여넣으면 계속 움직인다. 선택했을 때 움직이지 않은 이유는 조작 쉽게하려고 멈춰있는 것이고 마우스로 선택하면 움직인다. 왜 움직일까? 이는 "),a("code",[t._v("RUID")]),t._v(" 자체에 "),a("code",[t._v("animaion")]),t._v("을 가지고 있어서 그런 것이다. 몇 개의 프로퍼티는 어떤 주제를 가지고 동작한다. 예를 들어 "),a("code",[t._v("playrate")]),t._v("는 불꽃이 더 빠르게 움직이도록, 느리게 움직이도록 조정할 수 있다. (이때 plates라는 property는 숫자가 높을 수록 빨라진다)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/81297662/170292544-7aca065b-9e6a-445f-baef-019809965d2a.png",alt:"Untitled 1"}})])]),t._v(" "),a("li",[a("p",[t._v("다른 "),a("code",[t._v("property")]),t._v("도 살펴보자. "),a("code",[t._v("EndFrameIndex")]),t._v(", "),a("code",[t._v("StartFrameIndex")]),t._v(" 를 살펴보면, 모두 애니메이션과 관련되어있다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("FlipX")]),t._v(", "),a("code",[t._v("FlipY")]),t._v("는 좌우 반전을 의미한다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("IgnoreMapLayer")]),t._v("는 다음 강의 지형의 이해쪽에서 충분히 설명해줄 예정. 개략적으로 설명하면 2D이다보니 물체가 겹치면 어떤 것을 먼저 보여주느냐를 정의하는 것이 Layer라고 볼 수 있다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Color")]),t._v("는 색을 입히는 것. 색을 바꿔서 새로운 느낌을 줄 수 있다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Draw")]),t._v(": 심플, 단순한 상태")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("DrawMode")]),t._v(": Tiled로 설정하면 Tyling된다. 타일로 됐을 때 사이즈가 TiledSize이다. 타일 사이즈 조절하면 크기가 바뀐다. (개수가 변동됨) ex. 던전에서 벽에 등불이 걸린 것 처럼 연출하거나 나무가 일정 간격으로 떨어져있는 것을 표현할 때 사용할 수 있다.")])]),t._v(" "),a("li",[a("p",[t._v("이상으로 TransformComponent와 Sprite컴포넌트에 대해서 알아보았다.")])])]),t._v(" "),a("p",[t._v("ex. 예를 들어 baseTree하나를 설정해서 다른 entity들을 하위 항목으로 묶어서 넣고 필요하면 애니메이션도 넣는다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/81297662/170292552-ea147398-5c0d-452c-9875-e1fdafe4ddf4.png",alt:"Untitled 2"}})]),t._v(" "),a("h2",{attrs:{id:"지형과-레이어의-이해"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#지형과-레이어의-이해"}},[t._v("#")]),t._v(" 지형과 레이어의 이해")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[t._v("타일은 "),a("code",[t._v("ModelList")]),t._v("에서 선택할 수 있다. 레이어별로 하나의 타일만 사용가능하다.")]),t._v(" "),a("li",[t._v("Scene을 먼저 보자. "),a("strong",[t._v("직사각형 그리드")]),t._v("로 되어있다. 모서리 클릭하면 작게 그려지고 가운데는 크게 그려진다. 클릭 위치에 따라서 달라진다는 점을 이용해서 디테일한 맵 구현을 할 수 있다. 잘못 그려진 타일은 마우스 우클릭하면 삭제할 수 있다.")]),t._v(" "),a("li",[t._v("상단 UI 옆 네모버튼 누르고나서 드래그하면 드래그한 영역에 타일 설정을 편리하게 할 수 있다. 마찬가지로 드래그+우클릭이면 삭제할 수 있다.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/81297662/170292553-71ec57a4-ac18-41b6-8fc7-5c73419a6787.png",alt:"Untitled 3"}})]),t._v(" "),a("ul",[a("li",[t._v("Scene Maker를 보자. TileMap을 보면 해당 Entity의 컴포넌트 구성 활용할 수 있다.")]),t._v(" "),a("li",[a("code",[t._v("TileMapComponent")]),t._v(" 프로퍼티를 살펴보자.\n"),a("ul",[a("li",[a("code",[t._v("Color")]),t._v(": 색바꿀 수 있음!")]),t._v(" "),a("li",[a("code",[t._v("FootholdForce")]),t._v(": 타일 셋: 리소스 아이디 선택. 몬스터들이 밟고 다니는 발판 정보. 씬메이커 상에서 발판 정보 확인 위해서 file>setting>만들기 발판 정보 볼 수 있다. (빨간색) 이 길을 따라서 몬스터가 이동한다. 자유롭게 생성됨을 확인할 수 있다.")]),t._v(" "),a("li",[a("code",[t._v("FootholdWalk")]),t._v(": foothold는 다양한 모델들을 확인할 수 있다. foothold정보 포함하는 모듈임. 모델 안에 foothold적혀져 있는거 확인 가능. model에 확인된 foothold는 해당 버튼 눌러보시면 각 라인들 포인트 확인할 수 있고, foothold위치 옮길 수 있다. (자유롭게) 해당 포인트 마우스 우클릭 > delete통해서 삭제가능하다. entity이동하면 foothold도 함께 이동한다. 프로퍼티 편집기에서 foothold를 편집할 수 있다. 예를 들어서 CustomFootholdComponent에서 EdgeLists를 변경할 수 있다. foothold(점 개수) 정보가 있어서 Scene maker에서 property자세히 살펴보면 여기에 여러가지 정보 설정할 수 있다. 캐릭터 마찰력, 캐릭터 속력 등 설정하면 해당 foothold밟으면 property영향 받아서 마찰값, 이동속도가 달라진다거나 할 수 있다. 타일맵과 foothold설명하며 지형 구성 설명해줬는데 다음에는 레이어 개념 설명하겠다.")]),t._v(" "),a("li",[a("code",[t._v("IgnoreMapLay")])]),t._v(" "),a("li",[a("code",[t._v("IsOddGridPosition")])]),t._v(" "),a("li",[a("code",[t._v("OrderInLayer")])]),t._v(" "),a("li",[a("code",[t._v("SortingLayer")])]),t._v(" "),a("li",[a("code",[t._v("TileSerRUID")]),t._v(": 눈 버튼 클릭하면 스프라이트 피커에 들어간다. 원하는 것 선택하면 그것으로 바뀐다. 리소스들 마우스 우클릭 통해 카피 RUID 해서 설정하면 리소스가 변경됨 확인할 수 있다.")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/81297662/170292559-bfec45a9-4813-4097-bb33-8d0a2753d8d7.png",alt:"Untitled 4"}})]),t._v(" "),a("ul",[a("li",[t._v("Layer Panner  "),a("code",[t._v("+")]),t._v(" 누르면 편리하게 Layer설정 가능하다. 한 개의 맵에는 최대 10개까지 레이어를 추가할 수 있다. 해당 레이어 활성화할 수 있다. 해당 레이어에서 아까 그렸던 타일들이 존재한다. 레이어에서 우클릭하면 다양한 옵션 확인 가능하다. property 편집기에서 SpriteRendererComponent에서도 원하는 레이어로 위치를 바꿀 수 있다.")])]),t._v(" "),a("h2",{attrs:{id:"자주사용하는-컴포넌트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자주사용하는-컴포넌트"}},[t._v("#")]),t._v(" 자주사용하는 컴포넌트")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"twincomponent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#twincomponent"}},[t._v("#")]),t._v(" "),a("code",[t._v("TwinComponent")])]),t._v(" "),a("ul",[a("li",[t._v("MOD 에서는 세 가지 기본 "),a("code",[t._v("TWinComponent")]),t._v("들을 제공하고 있다.")]),t._v(" "),a("li",[a("code",[t._v("TwinLineComponent")]),t._v(" : entity를 좌우로 움직이게 한다. 간단하고 디테일한 애니메이션이 아닌 경우 사용함. 시작점, 목적점을 보관해주는 것이 twin 이라고 볼 수 있다. 사이 속도값을 어떻게 주느냐에 따라서 다른 느낌으로 사용할 수 있다. 엄청나게 다양한 옵션이 있다.")])]),t._v(" "),a("p",[t._v("ex. Elastic하면 탄성력이 있을 것 같다. 탄성력있게 움직인다. 아까와 동일하게 시작점-끝점을 왔다갔다할 뿐이다. SignEasy 는 빨라졌다 느려졌다 한다. 나중에는 충돌하면 체력이 감소하는 식으로 응용할 수 있다.")]),t._v(" "),a("ul",[a("li",[t._v("사다리를 불러보자. 여기에 Twin을 추가하면 사다리도 좌우로 움직인다. 사다리를 탄 채로 움직일 수 있다. 동기화 방식을 "),a("code",[t._v("ClientOnly")]),t._v(" 로 한다면 사다리, 캐릭터 위치가 달라보인다. 서로 사다리가 어긋난 채로 엉망진창으로 동기화된다.")]),t._v(" "),a("li",[a("code",[t._v("TwinCircularComponent")]),t._v(" : 뱅글뱅글 회전(회전 반경을 따라서). 회전 반경 따라서 회전하도록 한다. 속도도 조절해줄 수 있다. 진폭을 설정하면 위아래로 왔다갔다하도록 연출할 수 있다.")]),t._v(" "),a("li",[t._v("강체 ↔ 육체 // 형질의 변하는 것이 육체, 강체는 일반적으로 고체. 형태가 바뀌지 않는다고 볼 수 있고 물체들의 물리적인 속성들을 컨트롤할 수 있는 것이 "),a("code",[t._v("RigidbodyComponent")]),t._v(" 이다. MOD는 물리엔진 법칙을 완벽하게 구현하기는 어렵다. 객체와 다른 점은 하늘에서 떨어진다 Gravity때문이다. Sprite가 가지고 있는 원점을 잘 보자. 일반적으로는 센터에 원점이 있다. 몬스터는 보통 중앙 하단에 설정이 되어 타일을 밟고 있는 것처럼 보이게 떨어진다.")]),t._v(" "),a("li",[t._v("수직으로 타일을 설정하면 앞으로 지나갈 수 있다. 옆에 다른 타일을 세워보자. 이럴 때 VerticalLineBlock을 켜주면 막히는 걸 확인할 수 있어요.발판 정보를 보고 기본적인 플레이어들의 룰에 따라서 해주면 된다.(개인적으로 잘 이해 안감)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/81297662/170292561-e993b3a2-fa1b-42b1-852e-a9fbdde22776.png",alt:"Untitled 5"}})]),t._v(" "),a("ul",[a("li",[t._v("맵에 따라서 쿼터뷰가 자연스럽게 될 수 있다. (둥둥떠다님) 기본적으로 횡스크롤 에셋들을 대부분 제공하지만, 종종 쿼터류 스러운 맵도 제공을 하고 있다. 이런 곳에서 다른 성격의 쿼터뷰 모드를 제공하려면 "),a("code",[t._v("BaseEnvironment")]),t._v(" 컴포넌트에서 쿼터뷰 옵션을 키면 된다.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/81297662/170292565-53bd18dc-1664-40a0-8c63-2cb5a21335bb.png",alt:"Untitled"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("이런 맵에서는 쿼터뷰 이동이 자연스럽다. "),a("code",[t._v("QuaterViewAcce")]),t._v(" 에서 밑에 다른 옵션들을 선택해줄 수 있다. 이번에는 "),a("code",[t._v("MovementComponent")]),t._v(" 에 대해서 알아보자.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("MovementComponent")]),t._v(" 마찬가지로 Default 프레이머에 "),a("code",[t._v("MovementComponent")]),t._v("가 있음을 확인할 수 있다. "),a("code",[t._v("InputSpeed")]),t._v(" 를 조정하면 빨라진다. 체크박스를 해지하면 조작이 완전히 불가능하다. (점프는 점프가 증폭됨)")]),t._v(" "),a("ul",[a("li",[t._v("몬스터에 적용시켜보자. 기본적인 이동 속도 굉장히 빠르게된다. (스피드 올리면) 또 자주 사용하는 컴포넌트를 보자.")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("TriggerComponent")]),t._v("는 객체간의 콘텐츠가 있는, 객체 간 충돌 발생했을 때 알려주는 컴포넌트이다. 물리적인 특성이 있는 것은 아님. 충돌한다고 뭔가 바로 발생하는 것은 아니지만 스크립트에서 이벤트를 따서 추후에 처리를 직접 해주면 되는 것이다. (프레이머에 triggerCoponent가 있다는 것)")])]),t._v(" "),a("li",[a("p",[t._v("기본적으로 제공하는 Trap을 하나 설치해 봅시다. "),a("code",[t._v("TriggerComponent")]),t._v(" 추가하면 박스 사이즈가 자동으로 설치돼있을 것이다. 충돌이 끝났을 때에 따라서 이벤트를 활용하기도 한다. (여기는 코드 활용함. → 충돌 발생 → log 뱉기) 충돌했으니까 myplayer에서 "),a("code",[t._v("rigidbodycomponent")]),t._v(", 물리적인 속성 가진다. 속도, 중력도 가진다.  "),a("code",[t._v("AddForce")]),t._v(" 통해서 힘 줄 수 있다. 간단하게 오른 쪽으로 5만큼 이이동해 보자. 충돌이 발생했을 때 보시다시피 back이 발생한 것 처럼 자연스럽게 구현되어있다.")])]),t._v(" "),a("li",[a("p",[t._v("움직이는 트랙 구현 → "),a("code",[t._v("TweenLineComponent")]),t._v(" 움직이는 트랩을 간단하게 구현할 수 있다.")])]),t._v(" "),a("li",[a("p",[t._v("움직이는 트랙!에 필요한 코드")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("MyPlayer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Property")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  Entity Event Handler\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleTriggerEnterEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TriggerEnterEvent event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      local TriggerBodyEntity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TriggerBodyEntity\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n      self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RigidbodyComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddForce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Vector2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("DefaultPlayer")]),t._v(" 하위 에서 "),a("code",[t._v("PlayerComponent")]),t._v(" 를 찾을 수 있다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("PlayerComponent")]),t._v(" 사용해보자. → 게임 시작할 때 닉네임을 출력하는 식으로 응용할 수 있다.")])]),t._v(" "),a("li",[a("p",[t._v("코드")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("MyPlayer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Property")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnBeginPlay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PlayerComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NickName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Model List 에서 "),a("code",[t._v("HK바")]),t._v(" 를 만들어서 넣어 보자. 그러면 Property에 "),a("code",[t._v("UIMyInfo")]),t._v(" 라는 것이 추가된다. 플레이어의 hp를 표현하는 코드가 들어가 있다. 아까 해봤던 함정 같은 것을 같이 만들어 볼 수 있다.")])]),t._v(" "),a("li",[a("p",[t._v("장애물에 부딫혔을 때 체력 깎기")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PlayerComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PlayerComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("PlayerComponent")]),t._v(" 말고도 "),a("code",[t._v("PlayerControlComponent")]),t._v(" 라는게 있다. → 플레이어의 전반적인 컨트롤과 연관성있다. 여기에 있는 "),a("code",[t._v("LookDirectionX")]),t._v(" 에 따라서 캐릭터가 바라보고 있는 방향을 조정할 수 있다. 예를 들어, 한 방향만을 바라보도록 조정하여 슈팅게임에 활용할 수 있다.")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);