---
title: django 프로젝트 생성하기(초기세팅 원페이지 정리)
---

## 프로젝트 시작하기
### 가상환경 생성하기
- `$ python -m venv myvenv` 가상환경 생성
  - 가상환경이란? 독립적인 개발환경을 생성하는 것.
- `$ source myvenv/Scripts/activate`로 가상환경을 실행하기.
- `$ pip install django` 장고 설치
** 가상환경 생성 후 장고를 설치해야 한다.
- `$ pip freeze` 설치된 앱 확인

### 장고 프로젝트 생성하기
`django-admin startproject [생성할 프로젝트 이름]`
- 이 명령어를 입력하면 프로젝트 폴더와 `manage.py`가 생성된다.

### 서버 실행하기
`python manage.py runserver`
- 로컬 호스트에서 서버를 실행해서 코드 결과물을 볼 수 있다.



## 데이터베이스에 관리자 계정 생성하기
### 관리자 계정 생성하기
`python manage.py createsuperuser` 명령어를 사용해서 웹 페이지의 관리자 계정을 생성한다.
- 관리자 계정을 생성하면서 아용자명과 이메일 주소도 꼭 입력한다. 비밀번호는 두 번 입력한다.
- 만든 관리자 페이지는 `127.0.0.1:8000/admin/`으로 속해서 확인할 수 있다. 여기에 `creatsuperuser`로 생성한 username과 password를 입력해서 관리자 페이지에 접속할 수 있다.


### 데이터베이스 생성하기
`python manage.py migrations` 명령어를 입력하면 데이터베이스를 생성할 수 있다.

`python manage.py migrate` 명령어를 사용하면 데이터베이스 변화사항을 반영한다.

** 장고는 SQLite3를 사용한다. SQLite3의 특징은 파일 하나로 관리하는 데이터베이스라는 점이다. 오라클, MySQL, MongoDB, PostgreSQL 등 다른 데이터베이스는 따로 복잡한 설치 과정을 거쳐야 한다. 그러나 SQLite3는 파일 하나만 관리하면 된다. 단, 확장성이 좋지 못하다.

### 마이그레이션(migration)
- 장고에서 마이그레이션이란 데이터베이스에 적용시켜야 하는 변화에 대한 기록이다.
- 블로그에 댓글 기능을 추가하기 위해서는 데이터베이스에 댓글을 저장하기 위한 공간(테이블)이 필요하다.

### 깃에서 데이터베이스를 버전 관리하지 않도록 등록하기
- `.gitignore` 파일에 `db.sqlite3`를 추가한다.
- db.sqlite3를 깃에 올리면 테스트를 위해서 올린 코드까지 모두 깃허브에 올라가서 언젠가 오류가 발생할 확률이 크다.


## App만들고 첫페이지 띄우기
### App만들기
`python manage.py startapp [만들려는 앱 이름]` 명령어를 사용해서 앱을 만들어서 사용하자.

** 모든 장고 프로젝트는 1개 이상의 앱으로 구성된다. '앱'은 '특정한 기능을 수행하는 단위 모듈'이다. 예를 들어 블로그와 갤러리 2 가지 기능이 있으면 앱을 두 개 쓴다.

### App만들고 첫 페이지 띄우기
- settings.py 파일에 app 등록해주기
- views.py에 메인 페이지 띄우는 함수 만들기
- app안에 templates 폴더 만들고 index.html 파일만들기
- urls에 views.py 파일의 함수 띄우기