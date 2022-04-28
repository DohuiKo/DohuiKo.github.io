---
title: Django 프로젝트를 처음 만들 때
---

### 장고 실행단계

- `$ python -m venv myvenv` 가상환경 생성
- `$ pip install django` 장고 설치
- `$ pip freeze` 설치된 앱 확인

### 장고 프로젝트 시작

- `$ django-admin startproject helloworld`

### 실행

- `$ python manage.py runserver`

### 장고 앱 생성

- `$ python manage.py startapp myapp` 프로젝트 내부에 앱 생성
- 이때 주의할 점 → settings.py파일에 반드시 앱 경로(`myapp.apps.MyappConfig`)를 연결해줄 것.

### 보여지는 페이지 생성

- 앱 안에 templates 폴더 생성
- templates 폴더 안에 index.html 생성.

- index.html을 보여주게끔 만드는 파일의 위치는 `views.py`

\*주의사항: 페이지가 보여지게끔 views.py에 함수 작성, urps.py파일에 path도 반드시 걸어주어야 함.

```
from django.shortscuts import render

def home(request):
    return render(request, 'index.html') #index.html을 띄워주는 함수
```

```
from django.contrib import admin
from django.urls import path
import myapp.views

urlpatterns = [
   path('admin/', admin.site.urls),
   path('', myapp.views.home, name='hello_world'), #myapp에 views파일의 home함수를 호출함
]
```
