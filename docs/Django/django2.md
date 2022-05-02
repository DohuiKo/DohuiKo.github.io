---
title: Django 디렉토리 구조 뜯어보기
---

## 장고 자동생성 파일?

장고 프로젝트 폴더 종류 및 기능

![https://postfiles.pstatic.net/MjAyMTA3MDdfMTg4/MDAxNjI1NjY4MDcxNzE4.xCrShI-y2UF2c8JQgWaJBlBziv7Y3YU4sBbR5yOF-zog.AdipZvocFY5X557_AjDr_URbgPH-UbQFTUJO4mwE8V8g.PNG.ksder99/Untitled_(7).png?type=w580](<https://postfiles.pstatic.net/MjAyMTA3MDdfMTg4/MDAxNjI1NjY4MDcxNzE4.xCrShI-y2UF2c8JQgWaJBlBziv7Y3YU4sBbR5yOF-zog.AdipZvocFY5X557_AjDr_URbgPH-UbQFTUJO4mwE8V8g.PNG.ksder99/Untitled_(7).png?type=w580>)

**1.manage.py**

웹 애플리케이션을 배포하거나 디버깅, 실행하는데 사용한다. 장고로 기초적인 개발을 하기 위해서 필요한 magage.py의 기능은 1. 서버 켜키 2. Application 만들기 3. Database 초기화 및 변경사항 반영 4. 관리자 계정 만들기이다.

- manage.py에 사용하는 명령어는?
- `runserver`: 서버를 실행하는데 사용 `$ python manage.py runserver`
- `startapp`: 앱을 만드는데 사용 `$ python manage.py startapp [만들려는 앱 이름]`

\*유의할 점은 만든 application을 settings.py에 등록해주어야 한다. 직접 어플리케이션 이름을 써주거나, 앱스 파일안에 있는 클래스 이름을 전부 적어주거나 무관하다.

- `createsuperuser`: 관리자 계정 생성 `$ python manage.py createsuperuser`
- `migration`: models.py에 적용된 변경 사항을 데이터베이스에 적용하는데 사용
- `migrate`: 데이터베이스에 변화가 있을 때 사용한다.
- `makemigration`: 데이터 변화에 필요한 새로운 migration을 만들 때 사용한다.

**\_2. **init**\_.py**

비어있는게 정상인 폴더. django프로젝트가 패키지임을 알려주는 파일이다.

**3. settings.py**

템플릿, 데이터베이스, applications, middleware application을 관리할 수 있도록 하는 파일. 여기에 url에 path를 걸어서 웹페이지가 한 페이지에서 다른 페이지로 넘어가게 하고, 그 외 기타 django의 기능들을 추가할 때도 쓴다. settings.py 내부를 자세히 살펴보자.

- `BASE_DIR`: 프로젝트의 기본 위치
- `SECRET_KEY`: 암호를 만들어주는(해쉬 생성할 때) 문자열
- `DEBUG=TRUE`: 어떻게 서버를 킬지 결정함(개발자 모드 TRUE냐, 배포용으로 키는 FALSE냐)
- `DATABASE`: 어떤 데이터베이스 쓸 것인지, 그 데이터베이스는 어디에 있는지 (기본적으로 db.splite3을 사용하며, 다른 db로 연동 가능하다.)
- **#Internationalization** 파트, 현재 어떤 언어를 사용하는지(`LANGUAGE_CODE='en-us'`), 지금 시간은 어디를 기준으로 몇 시인지(`TIME_ZONE='UTC'`)

\*참고: 한국말이고, 서울 시간으로 하려면 이렇게 설정한다.

```
LANGUAGE_CODE = 'ko-kr;'
TIME_ZONE = 'Asia/Seoul'
```

- `STATIC_URL`: 우리가 꾸미는 웹페이지에 이미 만들어둔 CSS, JavaScript, Images파일들이 어디에 있는지 알려줌

**4. urls.py**

웹 애플리케이션의 모든 URL을 처리한다. url하나당 하나의 페이지라고 생각하면 되고, 웹페이지의 경우 링크에서 링크를 타고 이동한다. 이 말은 필요한 정보가 있는 곳으로 책의 목차를 보고 페이지를 넘기는 것과 같다.

**5. wsgi.py**

배포에 필요한 파일이다. Web Server Gateway Interface의 약자다. 서버가 웹 응용 프로그램과 상호 작용하는 방식을 설명하는 파일이라고 볼 수 있다. 우리가 이 파일을 직접 건들 일은 없으니 신경 쓰지 않아도 된다.

**6. asgi.py**

wsgi와 비슷한 기능을 한다. django의 새로운 버전이다.

위 사진에는 없지만 여기에 필요한게 또 있다.

**7.apps**

하나의 기능 구현에 필요한 코드들을 apps에 모아둔다.

app을 만들 때는 'python [manage.py] startapp 파일 이름'명령어를 사용한다. notice_board라는 app을 만든다면 'python [manage.py] startapp notice_board'를 사용한다.

![https://postfiles.pstatic.net/MjAyMTA3MDdfNTIg/MDAxNjI1NjY4MTA0NTU2.DgcrlObMLS4KjjqcBKLUeddCnb2zefeMrLWkIpdt3jsg.RDx8gmjJ_dH3FobOPI2Ho3nTF7qw8MKVaTwI1Vh9U4Mg.PNG.ksder99/Untitled_(8).png?type=w580](<https://postfiles.pstatic.net/MjAyMTA3MDdfNTIg/MDAxNjI1NjY4MTA0NTU2.DgcrlObMLS4KjjqcBKLUeddCnb2zefeMrLWkIpdt3jsg.RDx8gmjJ_dH3FobOPI2Ho3nTF7qw8MKVaTwI1Vh9U4Mg.PNG.ksder99/Untitled_(8).png?type=w580>)

\*참고

장고 앱에 포함된 파일들은?

[1.admin.py]

django 관리에 모델을 등록하는데 사용된다.

존재하는 모델에 저장되는 정보를 제어 할 수 있는 super user나 Django administration이 있다.

이 인터페이스는 이미 장고 측에서 만들어뒀기 때문에 건들지 말자.

[2.apps.py]

앱의 애플리케이션 구성을 다룬다.

[models.py]

데이터 베이스의 속성 및 필드 등에 관한 정보를 포함한다.

[4.views.py]

웹페이지를 들어갔을 때 보여지는 페이지와 직접적인 연관성이 있는 페이지다. 보여지는 화면을 어떻게 구성할지를 함수를 통해서 나타낸다. 필요한 기능은 모듈 import를 활용하며, 리턴값이 있는 함수의 형태로 사용한다. 오해하면 안되는 것은 진짜 사용자가 웹페이지를 볼 때는 html과 css코드를 보게 된다는 것이다.

views를 통해서 이동해야할 html(보여지는)파일로 이동하게 render해준다.

![https://postfiles.pstatic.net/MjAyMTA3MDdfMjc4/MDAxNjI1NjY4MTA5MzI2.oFjpCGXVgNCwD0prxV3IA-uBlwk0s0thZENJj7YywfEg.rLR3t_h0VaNsx6-DuQQ1yWNTDZ7sCuIqyD-AMuAaUfIg.PNG.ksder99/Untitled_(9).png?type=w580](<https://postfiles.pstatic.net/MjAyMTA3MDdfMjc4/MDAxNjI1NjY4MTA5MzI2.oFjpCGXVgNCwD0prxV3IA-uBlwk0s0thZENJj7YywfEg.rLR3t_h0VaNsx6-DuQQ1yWNTDZ7sCuIqyD-AMuAaUfIg.PNG.ksder99/Untitled_(9).png?type=w580>)

[5.urls.py]
이 app안에 있는 url을 처리한다. app내의 url은 전체 프로젝트에서도 관리할 수 있지만 그렇게 되면 url 에 걸린 path가 많아져 복잡하므로 app내에서 필요한 url은 여기에서 처리한다. (나중에 알게 되겠지만 url path에 views.py에 함수를 걸어주면서 페이지가 동작하게 된다.)

6.[test.py]

테스트를 할 수 있는 파일이다.
