---
title: 뷰프레스 블로그 만들기
---

## Vuepresss 설치

- 설치 명령어: `yarn create vuepress-site`

![Untitled](https://user-images.githubusercontent.com/81297662/161422621-71a2ad8b-2a4d-494f-80b8-a6768b6f0890.png)

- project name은 `docs` 로 설정한다. 
(다른 이름으로 설정해도 되지만 docs라는 이름으로 사용하는 것이 일반적이다)

![Untitled 1](https://user-images.githubusercontent.com/81297662/161422558-9f5ed7d4-2c13-4334-8387-9a3a2da61d6b.png)

- 나머지는 전부 다 enter를 하고 주르르륵 넘겨준다. 그러면 `docs`라는 폴더가 생성된다.
- 이때 파일 구조는 아래와 같다.

![Untitled 2](https://user-images.githubusercontent.com/81297662/161422560-8ce0585c-50b3-4f5d-93c3-e448d7373112.png)

![Untitled 3](https://user-images.githubusercontent.com/81297662/161422561-0cc544e0-b5e0-4633-b75a-f889febe50d3.png)


### 파일구조 개편

- 이제 파일 구조를 개편해주자.


![Untitled 4](https://user-images.githubusercontent.com/81297662/161422563-5ca9a00c-926c-46a0-9b40-d61247a00e20.png)

`.gitignore` 과 `package.json` 파일은 `docs` 와 동일한 위치에 넣어둔다.

`docs` 폴더 생성하면서 만들어주었던 `src` 폴더안에 있는 `vuepress`, `config`, `guide` 폴더를 모두 `docs` 폴더와 동일한 위치로 옮긴 뒤 비어버린 `src` 폴더는 삭제한다.

### package.json 수정하기

이때 `package.json` 에서 코드를 수정해야할 것이 있다.

기본적으로 아래와 같은 내용이 파일 안에 들어있는데

![Untitled 5](https://user-images.githubusercontent.com/81297662/161422565-c202e4f1-5098-4d0a-b595-c5c96acae84b.png)

붉은 색으로 체크가 된 저 `src` 를 `docs` 로 바꾸어주어야 한다.

아까전에 폴더 구조를 정리해줬기 때문에 그런 것이다.

이제 `yarn add -D vuepress` 명령어를 사용해서  블로그에 필요한  `package` 만 설치해보자.

또한 이  명령어는 폴더 루트 위치에 뷰프레스 패키지의 디펜던시들을 `node_modules`
에 모으게 한다.

(현재 작업하던 위치에서  바로 명령어를 사용하면 된다. 그폴더 구조를 개편하면서 package.json 파일을 docs파일과 동일한 위치로 꺼냈기 때문이다.)

![Untitled 6](https://user-images.githubusercontent.com/81297662/161422566-dd6f1cb3-f65a-4217-ae8f-afed362d6a07.png)

![Untitled 7](https://user-images.githubusercontent.com/81297662/161422567-0b865291-00a3-4c5e-9269-b973cb479361.png)


![Untitled 8](https://user-images.githubusercontent.com/81297662/161422569-b0a72ac0-1bd8-4269-91e7-4590509db20f.png)

그 결과 뷰프레스 블로그 생성 및 관리에 필요한 패키지만 모아두는  `node_modules` 폴더가 생성되었다. (뭐가 엄청 많다)

![Untitled 9](https://user-images.githubusercontent.com/81297662/161422570-c72957b3-3181-44a4-ae15-f751ee9dad90.png)

이 상태로 `yarn build` 하자.

![Untitled 10](https://user-images.githubusercontent.com/81297662/161422573-8de60f48-b664-4347-8f33-e8990af8d03a.png)

- 이런 화면이 뜨면 성공! 여기서 build가 잘 안된다면 대개 폴더 구조 정리가 잘 안되어서 생긴 문제니 위로 올라가서 다시 실행하도록 하자.

- 한 가지 궁금증  `yarn build` 는 뭘까?

이 명령어는 `docs/.vuepress` 폴더 하위에 `dist`폴더를 생성하고 마크다운 파일 및 정적 파일들도 html로 변환하게끔 만드는 명령어다. 마크다운으로 작성한 문서를 웹페이지에서 보기 좋게 만드는 작업이라고 볼 수 있다.

![Untitled 11](https://user-images.githubusercontent.com/81297662/161422574-e15879a2-13ee-44cf-9dbe-ddaa524381aa.png)

그 다음 `yarn dev`  명령어도 입력해 보자.

![Untitled 12](https://user-images.githubusercontent.com/81297662/161422575-2d874cfa-a651-46ae-be5b-5f1a6608191d.png)

이 명령어를 실행하면 로컬호스트에서 `dist`폴더 내용을 렌더링하는 작업을 하게 되어 그 결과 여러분의 컴퓨터에서 뷰프레스 블로그 기본 화면을 볼 수 있게 된다. 👏 어떻게 볼 수 있냐고? 희미하게 보호색을 띄고 있는 저 링크를 클릭하면 볼 수 있다.

![Untitled 13](https://user-images.githubusercontent.com/81297662/161422576-066572b3-5dd0-40af-a1c7-3ee4d60faacc.png)

![Untitled 14](https://user-images.githubusercontent.com/81297662/161422577-7368f540-9734-4e53-a6ad-6452d2e68306.png)

*(참고) 여기서 자꾸 `404 error` 가 뜬다면 한 가지 체크해보자.

이 블로그를 만들기 위해 생성한 repository가 자신의 깃허브 username.github.io로 잘 되어있는지.

뷰프레스 사이트 배포를 위한 레포지토리를 `<Username>.github.io` 로 생성하지 않고 개별 레포지토리로 생성했다면 반드시 `.vuepress` 폴더의 `config.js`의 `base`값을 설정해야 한다. 베이스 페이지를 설정하지 않으면 컴퓨터가 길을 잘 찾을 수 없다. (이렇게만 이해하자.)


![Untitled 15](https://user-images.githubusercontent.com/81297662/161422578-771c2504-dcaf-42ec-bee1-020b9649fb84.png)

베이스 값은 아래와 같이 설정한다.

```jsx
module.exports = {
  base: '/repositoryName/'
  //...
}
```

이제 여러분의 컴퓨터에서 뷰프레스 블로그를 만들고 수정하며 볼 수 있는 상태가 되었다. `배포` 를 해야 다른 컴퓨터에서도 이 페이지를 볼 수 있다. 배포해보자.

## Vue-press 배포

`[deploy.sh](http://deploy.sh)` 파일을 만들어주자. 파일 위치는 docs폴더 하위이다.


![Untitled 16](https://user-images.githubusercontent.com/81297662/161422579-8cc2dacf-c182-4975-a3d8-e2a29dae1dd6.png)

docs안에 [deploy.sh](http://deply.sh) 파일이 정상적으로 생성되었다.

아래 코드를 복사해서 [deploy.sh](http://deploy.sh) 파일에 붙여넣자.

```jsx
#!/usr/bin/env sh

# abort on errors
set -e

# build commands
yarn build

# navigate into the build output directory
cd .vuepress/dist

git init
git add -A
git commit -m "deploy with vuepress script"
git push -f https://github.com/<Username>/<Repository>.git main:gh-pages

cd -
```

저장 후 `sh [deploy.sh](http://deploy.sh)` 코드로 sh파일을 실행시켜 주자. (현재 명령창에서 ls했을 때 deploy파일이 보여야 함)


![Untitled 17](https://user-images.githubusercontent.com/81297662/161422580-79f79842-b8d1-4cef-9dad-d16e1b12eac7.png)

참고로 이렇게하면 되긴 되는데 뭔가 잘못된 것이 있다.

![Untitled 18](https://user-images.githubusercontent.com/81297662/161422581-8795b160-463e-4b48-b38d-6491e5f6ac8e.png)


이런 문구가 나올 것이다. 15번째 줄을 살펴 보자.


![Untitled 19](https://user-images.githubusercontent.com/81297662/161422582-7368d7f0-6d17-446a-9b35-d67b02c517b1.png)

여기에서 본인의 깃허브 이름과 연결돼있는 깃허브 레포지토리 이름을 적어주자.

나의 깃허브 이름은 DohuiKo 이고, 뷰프레스 블로그를 만든 레포지토리 이름은 Vuepress-test이다.

![Untitled 20](https://user-images.githubusercontent.com/81297662/161422583-f87bc0cc-1986-46bb-94c0-b84ec6bc3b68.png)

다시 sh 파일을 실행시켜보자.

![Untitled 21](https://user-images.githubusercontent.com/81297662/161422584-1a54e5fe-8913-4b79-ae4a-9a07dbf75a73.png)

잘 된줄 알았지만?

![Untitled 22](https://user-images.githubusercontent.com/81297662/161422585-86982ac9-bbcb-4904-860b-6496d6ccafb5.png)

push error를 접하게 될 것이다...

- 왜 그러냐면 여러분의 터미널에는 분명히 `main` 이라고 써있지만

![Untitled 23](https://user-images.githubusercontent.com/81297662/161422587-0745a11b-6cc2-462d-96ee-a357619b9de1.png)

- 퓨프레스 블로그에서는 터미널을 `master` 를 default로 이해하기 때문이다.

master에다가 push하라고 명령을 내려줘야하는데 main에다가 push를 했으니 뭐가 잘 안될 수 밖에.

![Untitled 24](https://user-images.githubusercontent.com/81297662/161422588-9a5c070f-d753-4f8d-b7a8-dd21d4e24ad8.png)
그러니 15줄의 링크옆에 main을 master로 바꿔주고 다시 deploy해보자.

![Untitled 25](https://user-images.githubusercontent.com/81297662/161422589-720a69ae-705f-4c0a-bcc9-2299cb17b72c.png)

아주 잘 된다 👏🏼

 

이제 다른 사람들도 나의 블로그를 볼 수 있게 되었다.

그런데 배포된 사이트는 어디있지...?

![Untitled 26](https://user-images.githubusercontent.com/81297662/161422592-82124c94-cac4-4e40-87c9-ffe3c7628fec.png)

체크된 곳으로 링크를 타보자.

![Untitled 27](https://user-images.githubusercontent.com/81297662/161422593-dcc9f2d4-ddac-4ba2-80c4-ca3e8d060140.png)

그러면 원격저장소로 이동이 되는데 상단 탭의 `settings` 를 눌러보자.

![Untitled 28](https://user-images.githubusercontent.com/81297662/161422594-66cafe98-b396-45ef-97b4-5fb638d87f7b.png)

좌측 탭에서 `pages` 눌러보자.

![Untitled 29](https://user-images.githubusercontent.com/81297662/161422596-6fcb7dc0-a0b3-4ae5-8d32-913978d40dbe.png)

파란색 링크가 나의 블로그 링크다 아주 뿌듯하다. 클릭하면 친구 엄마 아빠 동생 다 볼 수 있는 웹페이지가 만들어진다.

![Untitled 30](https://user-images.githubusercontent.com/81297662/161422597-4cb2fb0b-d094-4129-9ece-21959c171ca8.png)

- 그런데 이거만 하면 블로그는 의미가 없다. 카테고리를 만들고 카테고리에 내가, 다른 사람이 볼 수 있는 기록들을 유의미하게 남길 수 있어야 되지 않겠는가.
- 게시판을 만들고 연결해보자. (스크롤을 쭉 내려보자)

### 그런데 저는 뭔가 이상해요 → 본인깃허브이름.github.io로 레포 주소를 만든게 아니면 base설정을 해야한다고 아까 언급한 바 있다. ~~하라는 데는 다 이유가 있다.~~

- 문제 현상과 해결법
    
    ![Untitled 31](https://user-images.githubusercontent.com/81297662/161422598-20ebe426-b3be-4246-acc9-02aa45e7b041.png)
    
    base설정을 안해주니 아무것도 못찾는 일이 발생한 것이다.
    
    불러올 수 있는게 암것도 없다 ㅎㅎ (설정 잘 해주자)
    
    ![Untitled 32](https://user-images.githubusercontent.com/81297662/161422599-fe02fd87-ce91-4856-b45e-72fdd5ff051d.png)
    
    ![Untitled 33](https://user-images.githubusercontent.com/81297662/161422600-27fd52c0-bf6f-494c-a4c0-5105042d912f.png)
    
    등록한 base코드이다.
    
    `sh [deploy.sh](http://deploy.sh)` 명령어를 입력해주자.
    
    ![Untitled 34](https://user-images.githubusercontent.com/81297662/161422601-dd7bac37-c3f8-4b38-baa6-fdb113abcbb7.png)
    
    

## 사이드바에 게시글 만들고 글 작성하기

docs 바로 하위에 만들고 싶은 게시글 카테고리 이름을 적어 폴더를 만들어주자.


![Untitled 35](https://user-images.githubusercontent.com/81297662/161422602-6ef6a8c6-c573-449f-bc82-485d76893ac9.png)

카테고리만 있고 내용이 없으면 안되니

게시글도 하나 만들어준다. 게시글은 마크다운 언어 파일로 작성하면 된다.

![Untitled 36](https://user-images.githubusercontent.com/81297662/161422604-6b68ff4b-b9c4-4158-a499-e5e6ca20dfc4.png)

마크다운 파일 내에는 이렇게 작성해주자.

![Untitled 37](https://user-images.githubusercontent.com/81297662/161422605-e73b24ec-da9d-4eec-83f4-e6a349a702a1.png)

작성했으면 연결을 해주어야 한다.

![Untitled 38](https://user-images.githubusercontent.com/81297662/161422607-2dc71e0d-2958-43b1-bc63-88d5a5c3102e.png)

config.js로 가서 sidebar에 해당하는 코드를 고쳐주자.


![Untitled 39](https://user-images.githubusercontent.com/81297662/161422608-c95fdfd7-6b6c-452d-a4f8-5c1112c32c84.png)

- 게시글 카테고리 이름은 title에 적어주고,
- children에는 게시글의 경로를 입력해주자.
- collapasable: true로 하면 게시글이 열린 상태로 false면 닫힌 상태가 기본값이 된다.

![Untitled 40](https://user-images.githubusercontent.com/81297662/161422609-fc60eb17-6f6e-4e4d-a9ef-625c60608e11.png)

이제 sidebar생성이 끝났다. 만들고 싶은 사이드바가 있으면 언제든지 만들 수 있다.

이제 가이드는 필요없으니까 날려버리자. 방법은 guide폴더 삭제, sidebar에서 guide경로설정 삭제.

![Untitled 41](https://user-images.githubusercontent.com/81297662/161422610-9a4086b1-0146-43c6-b08d-6edcb0e52348.png)

또, index.md에서 맨 처음 시작 버튼을 눌렀을 때 보이는 페이지를 재설정해준다.

![Untitled 42](https://user-images.githubusercontent.com/81297662/161422612-f81bf98f-8f38-484f-903c-56561c8cf700.png)

intro페이지를 만들어서 연결하는 방법으로 guide를 대체하였다.

![Untitled 43](https://user-images.githubusercontent.com/81297662/161422613-2eec845f-f203-4106-9a2b-97c621bed4fe.png)

이렇게하면 intro.md에 적은 내용을 볼 수 있다.

### 블로그 이름 바꾸기

![Untitled 44](https://user-images.githubusercontent.com/81297662/161422616-5cf91bca-2048-45cf-8f3f-0afaace5d567.png)

블로그 이름을 바꿔주고 싶다면 config.js 파일에서 title부분의 코드를 바꾸어주자.

![Untitled 45](https://user-images.githubusercontent.com/81297662/161422618-793827a0-f7e4-468f-bd91-4d370c4b569e.png)

나만의 이름을 가진 블로그 완성

![Untitled 46](https://user-images.githubusercontent.com/81297662/161422620-f9226544-3882-49fd-825d-3b19ebf3b103.png)

스타트 버튼을 누르면 글을 볼 수 있다.

색을 바꿔보자.

[Overriding VuePress CSS Styles | Cody Bontecou](https://codybontecou.com/vuepress-styles.html#individual-css-elements)