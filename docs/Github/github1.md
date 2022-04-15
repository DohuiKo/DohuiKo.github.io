---
title: Github 시작하기(2)
---

## 원격 저장소 만들어서 로컬 저장소와 연결하기

- repository를 한 번 만들어 봅시다.
- 여러분의 깃허브 프로필에서 Repository를 눌러주세요.

  ![Untitled 1](https://user-images.githubusercontent.com/81297662/163206117-6c9a9080-0e27-4fa2-819b-e8817cb0df17.png)

- New 버튼을 볼 수 있습니다.

  ![Untitled 2](https://user-images.githubusercontent.com/81297662/163206121-e9cba0d3-4da9-46b2-933c-6d948343a4d6.png)

- New 버튼을 누르면 이런 화면이 나올거예요.

  ![Untitled 3](https://user-images.githubusercontent.com/81297662/163206125-a363500d-a0cc-4f8a-b958-97c16fca3222.png)

- repository 이름을 test라고 해볼게요. Create repository 버튼이 활성화됩니다. 아무것도 체크하지 말고 Create repository 버튼을 눌러주세요.

  ![Untitled 4](https://user-images.githubusercontent.com/81297662/163206128-54f8d16c-6263-4862-bed8-47a1f102546d.png)

- 그러면 아래와 같은 화면을 볼 수 있을 겁니다. 여기에 나오는 코드를 설명드릴게요.

  `git init` : 이 위치에 깃 저장소를 만들어 줘!

  `git add` : 이 파일을 깃에 추가해 줘!

  `git commit` : 이 파일을 가상 공간에 올려줘!

  `git push` : 이 파일을 commit message와 함께 원격 저장소로 보내줘!

  - 여기서 `git branch -M main` 에 대해서 짚고 가자면, 깃허브 repository를 만들면 기본값이 본래 master인데 main으로 바꿔주겠다는 뜻입니다. (그래서 검색했을 때 master로 설명이 돼있어서 처음에 에러를 많이 겪을 수 있어요.)
  - `git remote add origin "깃허브 원격저장소 주소"` 이것은 로컬저장소(깃)을 원격저장소(깃허브)에 추가한다는 이야기입니다. origin은 원격 저장소의 이름입니다. 보통 origin이라고 많이 부르는데, 다른 이름으로도 설정할 수 있어요. 원격 저장소는 인터넷에 저장되는 클라우드 같은 것이니, 이 곳의 주소와 연결을 해 줘야 기록들을 찾아볼 수 있겠죠?
    ![Untitled 5](https://user-images.githubusercontent.com/81297662/163206129-afc18e92-e456-4bc1-b91b-1c8fb3b7dbba.png)

- 저는 Visual Studio Code(이하 VSC)를 주로 사용합니다. 여러분들의 문서 어딘가에 test 폴더를 만들고 test폴더를 VSC 로 열어줍시다.

![Untitled 6](https://user-images.githubusercontent.com/81297662/163206131-7453886a-567e-4cd7-b044-5308ceb76624.png)

- 이 위치에서 그대로 터미널을 열어주세요.

![Untitled 7](https://user-images.githubusercontent.com/81297662/163206132-0a03e501-ab59-4228-88f7-6adf6f6850f5.png)

- 상단 탭에서 터미널 > 새 터미널을 누르면 터미널이 나옵니다. 아래 이미지처럼요.

![Untitled 8](https://user-images.githubusercontent.com/81297662/163206136-037a6de9-055d-42ed-95d9-9f2a25a5328c.png)

- 윈도우 운영체제라면 터미널 탭 우측에서 + 를 눌러 Git Bash 터미널을 새로 생성해주세요.

(Mac OS 라면 따로 terminal을 설정할 필요가 없습니다)

![Untitled 9](https://user-images.githubusercontent.com/81297662/163206085-44f65412-d65c-46b8-807f-49eb4eda6eb8.png)

![Untitled 10](https://user-images.githubusercontent.com/81297662/163206091-035a1217-ddd2-43fd-9d36-67d4daa91f6e.png)

- 이렇게 하면 git bash를 VSC에서 사용할 수 있답니다. 이제 이 위치에 아까 만들었던 원격 저장소를 가져올겁니다. 아까 repository만들었던 창으로 가서 그대로 복사해줍시다.

  ![Untitled 11](https://user-images.githubusercontent.com/81297662/163206093-d7ea7e53-2941-4518-83f6-000b9d725fc4.png)

- 복사한 것을 붙여넣기 해주세요

  ![Untitled 12](https://user-images.githubusercontent.com/81297662/163206104-0decf7c0-d719-41b7-9774-a67d2cb02219.png)

- 마지막으로 엔터까지 쳐주면

![Untitled 13](https://user-images.githubusercontent.com/81297662/163206105-012ec2e4-8f4a-4152-a03e-4e0406ca7fd3.png)

- 짜잔! 여러분의 원격 저장소에 README가 추가되었습니다 😊

![Untitled 14](https://user-images.githubusercontent.com/81297662/163206106-9df1af73-fc7f-4186-9535-04dd75f26404.png)

- 자! 이제 기본 명령어를 사용해봅시다. README.md파일에 “안녕하세요”를 추가하고 파일을 저장한 후 아래 명령어를 활용해봅시다.

  ![Untitled 15](https://user-images.githubusercontent.com/81297662/163206109-3eea57e2-b289-4f06-8d83-25bbaa57bd40.png)

- 원격저장소에 안녕하세요. 문구가 추가되었습니다
