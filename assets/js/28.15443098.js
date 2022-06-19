(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{425:function(t,e,v){"use strict";v.r(e);var n=v(56),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"멋쟁이사자처럼-x-넥슨-mod-suppoters-hackathon-4주차-회고"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#멋쟁이사자처럼-x-넥슨-mod-suppoters-hackathon-4주차-회고"}},[t._v("#")]),t._v(" 멋쟁이사자처럼 X 넥슨 MOD Suppoters Hackathon 4주차 회고")]),t._v(" "),v("h2",{attrs:{id:"event-system"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#event-system"}},[t._v("#")]),t._v(" Event System")]),t._v(" "),v("h3",{attrs:{id:"event-system-로직의-이해"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#event-system-로직의-이해"}},[t._v("#")]),t._v(" Event System 로직의 이해")]),t._v(" "),v("ul",[v("li",[v("p",[t._v('어떤 액션이 있거나 특정 일이 주어졌을 때 "무언가를" 해야 할 일이 생길 때 "행위가 일어난 주체"에서 무엇을 할 지 결정해야 action이 취해진다.')])]),t._v(" "),v("li",[v("p",[t._v("[상황] 게임 내 캐릭터가 공격받은 상황, 피격 이펙트를 추가하려면?(일반 로직)")]),t._v(" "),v("ol",[v("li",[t._v("HP감소")]),t._v(" "),v("li",[t._v("데미지 받았음을 보여줌")]),t._v(" "),v("li",[t._v("잠깐 동안 무적상태가 됨")]),t._v(" "),v("li",[t._v("피격 효과에 특별한 이벤트를 주고 싶다. 피격 이펙트를 표시한다.")])])]),t._v(" "),v("li",[v("p",[t._v('위 같은 일반적인 로직은 "행위가 일어난 주체"에서 행동을 관리한다. 이를 Event 기반으로 처리하면 조금 다른 방식으로 처리된다. Event 기반으로 로직을 구성하게 되면 기본적으로 "행동을 실행해야할 주체"에서 행동을 관리하게 된다. 행위가 일어나는 주체에서 행동을 관리하는 로직에서 행동을 실행해야할 주체로 로직이 변동되면서 먼저 제시한 로직은 이렇게 변화한다.')])]),t._v(" "),v("li",[v("p",[t._v("[상황] 게임 내 캐릭터가 공격받은 상황, 피격 이펙트를 추가할 때 Event 기반 로직이라면?")])])]),t._v(" "),v("ol",[v("li",[t._v("캐릭터가 공격받는다.")]),t._v(" "),v("li",[t._v("공격받은 상황을 공유한다. (공격받은 상황을 Event로 만들어서 보낸다)")]),t._v(" "),v("li",[t._v("공격받은 상황의 이벤트를 받았을 때(피격이벤트가 발생했을 때) 이벤트 발생에 따라 정해진 행동을 수행한다.")]),t._v(" "),v("li",[t._v("피격효과에 특별한 이벤트를 주고 싶다. 피격 이벤트 발생하는 그 상황에 피격 이펙트를 표시한다는 명령을 내려준다.")])]),t._v(" "),v("h3",{attrs:{id:"event-system의-장단점"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#event-system의-장단점"}},[t._v("#")]),t._v(" Event System의 장단점")]),t._v(" "),v("p",[t._v("개발자마다 코드를 짜는 취향이 다르기 때문에 일반 로직, 이벤트 시스템 로직 중 무엇이 더 좋다고 단정짓기 어렵다.\n그러나 장단점은 있으니 참고하길 바란다.")]),t._v(" "),v("p",[t._v("[장점]")]),t._v(" "),v("ul",[v("li",[t._v("다른 Component나 기능단위에서 결합성이 덜어지므로 의존성을 배제할 수 있고 분산시스템이 용이해진다.")]),t._v(" "),v("li",[t._v("행위에 대한 액션을 추가 하고 싶을 때 행위를 수행하는 곳을 수정 없이 편하게 추가할 수 있다.")]),t._v(" "),v("li",[t._v("다른 Component의 정보를 알 필요가 없다.")])]),t._v(" "),v("p",[t._v("[단점]")]),t._v(" "),v("ul",[v("li",[t._v("어떤 사건이 발생 시 전체적인 플로우를 찾기 힘들다. 각각 처리 하므로 실행되는 시점에서는 알 수 없어 디버깅할 때 어려울 수 있다.")]),t._v(" "),v("li",[t._v("순차적으로 행위가 일어나지 않는 경우도 있다.")])]),t._v(" "),v("h3",{attrs:{id:"event-system의-구성"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#event-system의-구성"}},[t._v("#")]),t._v(" Event System의 구성")]),t._v(" "),v("ol",[v("li",[v("code",[t._v("Event")]),t._v(" 로직 상에서 어떤 사건의 발생을 의미한다.")]),t._v(" "),v("li",[v("code",[t._v("Handler")]),t._v(" 해당 Event를 받았을 때 처리하는 행동의 주체이다. 해당 이벤트가 불렸을 때 불리는 함수이다.")]),t._v(" "),v("li",[v("code",[t._v("Sender")]),t._v(" 해당 Event를 발송하는 객체이다.")])]),t._v(" "),v("ul",[v("li",[t._v("Event라는 공지물을 Sender가 학급내 학생들(Handler)에게 전달하면 학생들은 공지물을 보고 행동한다.")])]),t._v(" "),v("h2",{attrs:{id:"entity-event-system"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#entity-event-system"}},[t._v("#")]),t._v(" Entity Event System")]),t._v(" "),v("h3",{attrs:{id:"entity-event-system이란"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#entity-event-system이란"}},[t._v("#")]),t._v(" Entity Event System이란")]),t._v(" "),v("p",[t._v("MOD에는 Event System을 쉽게 활용할 수 있도록 기본으로 제공되는 API가 있다.\nAPI를 사용하면 Event 제어를 좀 더 편리하게 할 수 있다.")]),t._v(" "),v("h3",{attrs:{id:"event-주고-받기를-위한-entity-event-system-이해"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#event-주고-받기를-위한-entity-event-system-이해"}},[t._v("#")]),t._v(" Event 주고 받기를 위한 Entity Event System 이해")]),t._v(" "),v("ul",[v("li",[t._v("Component는 Entity를 중계자로 사용할 수 있다.")]),t._v(" "),v("li",[t._v("Component 들이 Entity에 핸들러를 등록하고 Sender 역시 Entity 통해서 이벤트를 발생시킬 수 있다.")]),t._v(" "),v("li",[t._v("Entity들은 핸들러에게 해당 Event를 전송하여 동작한다. (공지물은 학생들에게 해야할 일을 알려주어 학생들이 움직이게 한다.)")])]),t._v(" "),v("h3",{attrs:{id:"이벤트-처리할-컴포넌트와-엔티티-생성"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-처리할-컴포넌트와-엔티티-생성"}},[t._v("#")]),t._v(" 이벤트 처리할 컴포넌트와 엔티티 생성")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("Workspace")]),t._v(" > "),v("code",[t._v("MyDesk")]),t._v(" > "),v("code",[t._v("Create EventType")]),t._v(" -> 번개 모양으로 이벤트가 생성되면 이름을 알맞게 붙여주고, Event에 Property나 Function을 추가해준다.")]),t._v(" "),v("li",[t._v("그 다음, "),v("code",[t._v("Component")]),t._v("를 생성하고, "),v("code",[t._v("Component")]),t._v("가 동작할 "),v("code",[t._v("Entity")]),t._v("를 생성해준다.")]),t._v(" "),v("li",[t._v("Coponent가 Entity를 중계자로 사용하기 때문에 Entity에 Component를 각각 추가해준다.")])]),t._v(" "),v("h3",{attrs:{id:"핸들러-등록하여-처리하기"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#핸들러-등록하여-처리하기"}},[t._v("#")]),t._v(" 핸들러 등록하여 처리하기")]),t._v(" "),v("ul",[v("li",[t._v("지금까지 Entity에 Component를 추가해주었다면, 두 컴포넌트의 스크립트 에디터에서 "),v("code",[t._v("Entity Event Handler")]),t._v("에 만들었던 "),v("code",[t._v("Event")]),t._v("를 등록시켜주어야 한다.")]),t._v(" "),v("li",[t._v("이때 발생되는 위치에 대한 정보를 넣어준다.\n"),v("img",{attrs:{src:"https://user-images.githubusercontent.com/81297662/171092558-9cb8454f-8de1-42ad-bafa-8d36d4d0484c.png",alt:"image"}})]),t._v(" "),v("li",[t._v("이제부터 Component는 Entity를 중계자로 삼아 Event를 받을 수 있다. 이때부터 필요한 Event를 처리하는 로직을 스크립트에 코드로 작성해보자.")]),t._v(" "),v("li",[t._v("어떤 상황에 따라(특정 키보드에 버튼을 누르면//몬스터에 부딫히면//스트리머가 알림을 쏘면) 반응하도록(스킬을 사용하도록//체력감소 이펙트가 나타나도록//알림을 보고 알림을 끄거나 스트리머 방송을 보러 가도록) 코드를 작성할 수 있다.")])]),t._v(" "),v("h2",{attrs:{id:"entity-생성과-삭제-유효성-체크"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#entity-생성과-삭제-유효성-체크"}},[t._v("#")]),t._v(" Entity 생성과 삭제, 유효성 체크")]),t._v(" "),v("h3",{attrs:{id:"entity-생성"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#entity-생성"}},[t._v("#")]),t._v(" Entity 생성")]),t._v(" "),v("ul",[v("li",[t._v("Entity 생성 -> Entity 생성 함수인 "),v("code",[t._v("SpawnByEntityTemplate")]),t._v("와 "),v("code",[t._v("SpawnByModelled")]),t._v("를 사용함.")])]),t._v(" "),v("h4",{attrs:{id:"spawnbyentitytemplate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spawnbyentitytemplate"}},[t._v("#")]),t._v(" SpawnByEntityTemplate")]),t._v(" "),v("ul",[v("li",[t._v("맵에 배치된 엔티티와 동일한 엔티티를 생성함.")]),t._v(" "),v("li",[t._v("쉽게 말해 엔티티의 복제이다.")]),t._v(" "),v("li",[t._v("맵 상에 복제 대상이 되는 템플릿 엔티티가 존재해야 한다.")])]),t._v(" "),v("h4",{attrs:{id:"spawnbymodlled"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spawnbymodlled"}},[t._v("#")]),t._v(" SpawnByModlled")]),t._v(" "),v("ul",[v("li",[t._v("워크스페이스에 추가된 모델 중 한 가지 모델을 지정하여 엔티티로 생성함.")]),t._v(" "),v("li",[t._v("대체로 모델 리스트에 있는 모델을 엔티티로 생성하고자 할 때 사용함.")]),t._v(" "),v("li",[t._v("예를 들어 원하는 모델에서 "),v("code",[t._v("마우스 우클릭")]),t._v(" > "),v("code",[t._v("Add to workspace")]),t._v("를 하여 모델을 워크스페이스에 추가해줌. 해당 모델에서 ID를 복사하고 싶다면 마우스를 우클릭하여 "),v("code",[t._v("Copy Model ID")]),t._v(" 코드를 삽입한다.")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-images.githubusercontent.com/81297662/171094308-523e4ea2-035d-426c-bf52-bc5a6b47c303.png",alt:"image"}})]),t._v(" "),v("h3",{attrs:{id:"entity-제거"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#entity-제거"}},[t._v("#")]),t._v(" Entity 제거")]),t._v(" "),v("ul",[v("li",[t._v("Entity 제거 ->"),v("code",[t._v("_EntityService:Destroy")]),t._v("와 "),v("code",[t._v("Entity:Destroy")]),t._v(" 방법을 사용함.")]),t._v(" "),v("li",[t._v("전자는 인자를 넘겨받은 엔티디를, 후자는 호출한 엔티티를 삭제한다.")])]),t._v(" "),v("h3",{attrs:{id:"entity-유효성-체크"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#entity-유효성-체크"}},[t._v("#")]),t._v(" Entity 유효성 체크")]),t._v(" "),v("ul",[v("li",[t._v("글로벌 함수 "),v("code",[t._v("isvalid")]),t._v(" 사용함.")])]),t._v(" "),v("p",[t._v("사용 예시")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('--void OnUpdate(number delta) [server only]\nif isvalid(self.SpawnedEntity) == false then return end\nif self._T.time == nil then self._T.time = 0 end\n\nself._T.time = self._T.time + delta\n\nif self._T.time >= 3 then\n    local isvalidValue = isvalid(self.SpawnedEntity)\n    log("삭제 전 : "..tostring(isvalidValue)) -- 콘솔 창에 "삭제 전: true" 출력\n    self.SpawnedEntity:Destroy()\n    isvalidValue = isvalid(self.SpawnedEntity)\n    log("삭제 후 : "..tostring(isvalidValue)) -- 콘솔 창에 "삭제 후: false" 출력\nend\n')])])]),v("ul",[v("li",[t._v("삭제 전에는 isvalid가 true이고, 삭제 후에는 isvalid가 false임.")])])])}),[],!1,null,null,null);e.default=a.exports}}]);