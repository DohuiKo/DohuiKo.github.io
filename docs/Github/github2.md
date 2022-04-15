---
title: Github 시작하기(1)
---

## GitHub 저장소 생성 및 개발 환경

- 로컬 시스템에서 사용할 사용자 이름과 이메일을 설정하시고 Github저장소를 이용해주세요.

```
$ git config --global user.name "Your Name"  //본인 이름
$ git config --global user.email you@example.com //본인 이메일
```


## Git repository처음 생성하고 연결하기

깃허브 repository를 readme.md파일을 만들지 않고 처음 생성했을 때 나오는 코드에 대해서 설명드립니다.

![Untitled](https://user-images.githubusercontent.com/81297662/162625219-68103f76-a7a2-4310-9994-bd1d7b542170.png)

```
echo "# HUFS_Missing_GithubClass" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/DohuiKo/HUFS_Missing_GithubClass.git
git push -u origin main
```

### 설명

첫째, `git init`명령어를 사용해서 현지 위치에 지역 저장소를 만듭니다.

`git init` 명령어를 사용하시면 여러분의 로컬 저장소 즉, 여러분의 컴퓨터에 `.git 디렉터리`가 생성됩니다. `.git 디렉터리` 안에 여러분들이 작업하시는 작업물들의 **“버전”**이 기록됩니다. 아직 여러분들에게 **버전**이라는 개념이 생소하실 것이라고 생각하지만 괜찮습니다. 곧 이어서 **녹화강의 내용 보충** 챕터에서 자세히 설명 드릴 테니 지금은 이 정도만 이해하셔도 충분합니다. 

둘째, `README.md`파일을 등록합니다. 여기에 `git add` 명령어와 `git commit` 명령어도 쓰였습니다. 이 명령어들이 의미하는 바가 무엇일까요? 이를 이해하기 위해서는 Github의 **버전**이 무엇인지에 대해서 이해하셔야하기 때문에 이 또한 녹화강의 내용 보충 챕터에서 다시 설명드리겠습니다.

셋째,  `git branch -M main`은 현재 사용하는 컴퓨터의 브랜치 이름 master를 main으로 바꾼다는 뜻입니다. 이는 2020년부터 Github에서 `master`보다 `main`이라는 표현을 사용할 것을 권장하기 때문에 자동으로 포함되는 코드입니다. 따라서 여러분들이 `master` 라는 이름으로 여러분이 작업할 때 가장 기본이 되는 branch를 만드시려면 이 코드를 복사 붙여 넣기해서 사용하시면 안됩니다. 단, `master` 라는 명칭보다 `main` 이라는 명칭을 사용하도록 Github에서 권장한 이유가 인종차별적인 언어사용을 지양하기 위한 점을 감안한다면 기본 branch 이름을  `main` 으로 설정하는 것이 더 바람직할 것입니다.

넷째,`git remote` 입니다. git remote는 원격 저장소를 관리할 수 있는 명령어입니다. **원격 저장소는 인터넷이나 네트워크**, 즉 Github 웹페이지에서 볼 수 있는 저장소인 것 알고 계시죠? 그래서 여기 보이는 명령어를 통해서 여러분의 원격 저장소 이름을 지어주고 생성하면서 Github repository 링크와 연결하는 것입니다. 참고로 별다른 설정이 없다면 원격 저장소의 default name은 `origin` 이니 참고해두시기 바랍니다.

- `git remote add <원격 저장소 이름> 본인 깃허브 repo링크` (기본 명령어: 참고)

 *원격 저장소 이름은 일반적으로 origin을 사용하지만 다른 이름으로 바꿀 수도 있습니다.

[! 기본 origin으로 만들어진 원격저장소 이름을 바꾸고 싶어요 !](http://minsone.github.io/git/github-managing-remotes-renaming-a-remote)

정리하자면 맨 처음 나오는 이 코드를 복사 붙여넣기함을 통해서 origin으로 원격 저장소 이름이, main이 현재 사용하는 컴퓨터의 브랜치 이름으로 설정되는 것입니다. `README.md` 파일도 생성되고요.

*이 과정에서 만약에 아래와 같은 에러가 발생한다면?

```
//에러메세지 : ‘원격에 로컬에 없는 작업이 포함되어 업데이트가 거부되었습니다’
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

- force push를 통해서 해결할 수 있습니다.

`git push -f origin main`