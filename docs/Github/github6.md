---
title: Github에 필요한 리눅스 명령어 기본
---

- 터미널 창에서 깃을 사용하기 위해서 쓰는 명령어는 리눅스 명령어와 같다.
- 깃을 다루기 위해서 필요한 기본 명령어에 대해서 알아보다.

### 디렉토리 살펴보는 명령어

- `pwd` 명령어를 입력하고 `enter`를 누르면 현재 위치의 경로가 나타난다.

```
Dori@DESKTOP-ISQ2O63 MINGW64 ~/Documents/DevelopFolder/Vuepress (main)
$ pwd
/c/Users/Dori/Documents/DevelopFolder/Vuepress
```

- `ls` 명령어를 입력하고 `enter`를 누르면 디렉토리와 파일 이름이 나타난다. 이름 뒤에 (/)가 붙어있는 것은 디렉토리이다.

```
Dori@DESKTOP-ISQ2O63 MINGW64 ~/Documents/DevelopFolder/Vuepress (main)
$ ls
docs/  node_modules/  package.json  yarn.lock
```

- 슬래쉬가 없으면 폴더(디렉토리)가 아닌 파일이다.
- 파일과 디ㅏ렉토리의 상세 정보까지 표시하는 옵션을 추가하려면 `ls` 명령어 뒤에 `-l`을 추가로 입력하면 된다.

```
Dori@DESKTOP-ISQ2O63 MINGW64 ~/Documents/DevelopFolder/Vuepress (main)
$ ls -l
total 701
drwxr-xr-x 1 Dori 197121      0  4월 28 16:23 docs/
drwxr-xr-x 1 Dori 197121      0  3월 30 13:01 node_modules/
-rw-r--r-- 1 Dori 197121    323  3월 30 15:16 package.json
-rw-r--r-- 1 Dori 197121 381951  3월 30 11:30 yarn.lock
```

- ls 명령을 사용할 때는 여러 옵션이 있는데, 자주 사용하는 ls 명령어가 있다.

  | 옵션 | 설명                                    |
  | ---- | --------------------------------------- |
  | -a   | 숨김 파일과 디렉토리까지 모두 표시      |
  | -l   | 파일이나 디렉토리 상세 정보를 함께 표시 |
  | -r   | 파일의 정렬 순서를 거꾸로 표시          |
  | -t   | 파일 작성시간 순으로 내림차순 표시함.   |

### 터미널 창에서 디렉토리 이동하기

- 터미널 창에서 디렉토리 사이를 이동할 때는 `cd` 명령어를 사용한다.
- 상위 디렉토리로 이동하기 위해서는 `cd ..`, 하위 폴더로 이동하기 위해서는 `cd [폴더명]` 을 이용한다.

### 터미널 창에서 디렉토리 만들기 및 삭제하기

- 이 부분은 리눅스 명령어보다 기존 방식대로 GUI 인터페이스를 사용하는 것이 개인적으로 더 편리하다고 생각하기는 하나, 터미널에서 할 수 있다면 더욱 편리하므로 첨부한다.
- 현재 디렉토리 안에 하위 디렉토리를 만들 때 `mkdir` 명령어를 사용한다.

```
Dori@DESKTOP-ISQ2O63 MINGW64 ~/Documents/DevelopFolder/Vuepress/docs/Github (main)
$ mkdir test

Dori@DESKTOP-ISQ2O63 MINGW64 ~/Documents/DevelopFolder/Vuepress/docs/Github (main)
$ ls
github1.md  github2.md  github3.md  github4.md  github5.md  github6.md  test/
```

- 반대로 삭제하기 위해서는 `rm` 명령어를 이용하자. `-r`은 해당 디렉토리의 파일까지 모두 삭제하라는 명령어다.

```
Dori@DESKTOP-ISQ2O63 MINGW64 ~/Documents/DevelopFolder/Vuepress/docs/Github (main)
$ rm -r test

Dori@DESKTOP-ISQ2O63 MINGW64 ~/Documents/DevelopFolder/Vuepress/docs/Github (main)
$ ls
github1.md  github2.md  github3.md  github4.md  github5.md  github6.md
```

제대로 삭제되었음이 확인됐다.

### 터미널 창 내용 지우기, 터미널창 종료하기

- 터미널 창에 `clear`를 입력하면 터미널창이 깔끔해진다.
- 현재 터미널 상태가 이렇다고 가정해보자.

```
Dori@DESKTOP-ISQ2O63 MINGW64 ~/Documents/DevelopFolder/Vuepress/docs/Github (main)
$ ls
github1.md  github2.md  github3.md  github4.md  github5.md  github6.md  test/

Dori@DESKTOP-ISQ2O63 MINGW64 ~/Documents/DevelopFolder/Vuepress/docs/Github (main)
$ rm -r test

Dori@DESKTOP-ISQ2O63 MINGW64 ~/Documents/DevelopFolder/Vuepress/docs/Github (main)
$ ls
github1.md  github2.md  github3.md  github4.md  github5.md  github6.md

Dori@DESKTOP-ISQ2O63 MINGW64 ~/Documents/DevelopFolder/Vuepress/docs/Github (main)
$
```

- `clear` 명령어만 사용하면 터미널을 깨끗하게 할 수 있다.

```

Dori@DESKTOP-ISQ2O63 MINGW64 ~/Documents/DevelopFolder/Vuepress/docs/Github (main)
$

```

- 보이다시피 아무것도 없게 된다.
- 터미널 창을 완전히 종료하고 싶다면 `exit` 명령어를 입력하자.

### 마무리

- 깃을 이용하기 위한 리눅스 명령어라고 표현했는데 대개 현재 내가 작업하고 있는 위치가 어디인지 터미널 명령어를 통해서 확인하는 작업이 대부분이다. 개발을 접하기 이전까지 아이콘과 마우스로 컴퓨터와 상호작용하는 GUI 방식으로 컴퓨터를 접해왔을 테지만, 앞으로는 터미널 창에 명령어를 통해 컴퓨터와 소통하는 CLI 방식을 많이 접하게 될 것이다. 이 명령어는 반드시 꼭 암기해두면 도움이될 것이다.
