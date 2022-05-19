---
title: Django URL mapping과 Static
---

## url mapping

- url사이를 자유자재로 왔다갔다하려면 어떻게 해야 할까?
### 1. 이해를 돕기 위해 practice_url이라는 프로젝트를 설치하고, practice_url폴더 안에 myapp, board, product 세 개의 폴더를 생성하였다.

![Untitled 1](https://user-images.githubusercontent.com/81297662/169216414-5fcfa335-4c91-4880-88d7-94b2b0e8178d.png)

- (1. 에 대한 참고 및 부연설명 ) 장고에서 프로젝트와 앱 생성하는 방법
- 장고에서 프로젝트를 생성하는 명령어는 `django-admin startproject [생성할 프로젝트 이름]` 이다.
- 프로젝트를 생성하면 practice_url이라는 프로젝트가 생성되면서 프로젝트와 동일한 이름의 폴더도 한 개 생성된다.
- 이 상태에서 `python manage.py startapp [생성할 앱 이름]` 명령어를 사용하여 앱을 만들 수 있다. python manage.py안에서 앱을 생성할 수 있는 것이므로, ls명령어를 통해 manage.py가 있는 위치에서 실행하도록 한다.
- url mapping을 연습하기 위해서 앱 생성 명령어 활용해서 세 개의 폴더를 만들어 둔 상태가 위의 이미지이다.

### 2. 가장 먼저 살펴보아야 할 것은 프로젝트 이름과 동일한 폴더 안에 있는 urls.py파일이다.
- 웹페이지에서는 특정 기능을 구현하기 위해서 여러 개의 앱을 사용하며, 앱단위로 url을 관리하므로 앱 단위로 url을 관리할 수 있도록 `from django.urls import path, include` 코드와 urlpatterns = []안에  `path(’지정하려는 urls이름 마음대로 설정/’, include('url포함하려는 앱 이름.urls'))` 코드를 넣어준다. 위 디렉토리에 따르면, product앱과 board앱을 설치했다. 따라서 product앱에 필요한 urls와 board앱에 필요한 urls를 include시켜주었다.

```python
from django.contrib import admin
from django.urls import path, include
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.first),
    path('second/', views.second),
    path('products/', include('product.urls')),
    path('boards/', include('board.urls')),
]

# 상품 관련 url
    # 127.0.0.1:8000/product/1
    # 127.0.0.1:8000/product/2
    # 127.0.0.1:8000/product/3
#구매 후기 관련 url
    # 127.0.0.1:8000/board/1
    # 127.0.0.1:8000/board/2
    # 127.0.0.1:8000/board/3
```

- 해당 앱에서 url을 작성한다면 자연스럽게 `127.0.0.1:8000/[지정한 path이름]/` 에서 url이 시작된다.

### 3. 각각의 app안에 templates폴더를 만들고, 그 안에 html파일을 두 개씩 만들고, 해당 앱의 views.py파일에서 request가 있을 때 html파일을 render해주는 함수를 만들어준다.

- board 앱 디렉토리 구조
    
![Untitled 2](https://user-images.githubusercontent.com/81297662/169216418-3ccd9952-3a2b-45cd-8eab-5f72f02b6eaf.png)
    
- myapp 앱 디렉토리 구조
    
![Untitled 3](https://user-images.githubusercontent.com/81297662/169216390-ef586c38-9ed9-4d0b-b7cf-7a0445d4b75d.png)
    
- product 앱 디렉토리 구조
    
![Untitled 4](https://user-images.githubusercontent.com/81297662/169216398-32a2ea95-323a-41b6-b529-0a8feea023e3.png)
    

### 4. product 앱 안에 있는 코드를 살펴 보자. 이 앱 안에서 중요하게 살펴볼 요소는 `[views.py]- (http://views.py) 파일`, `urls.py 파일` , `templates폴더` 이다.
- Django에서 사용자에게 페이지를 보여주기 위해서는 urls.py에 url을 띄울 때 (reuqest가 있을 때) html파일을 화면에 띄우는(render 하는) views.py의 함수를 부른다. 그러면 아래처럼 `#127.0.0.1:8000/products/` 경로에서 `productlist.html` 파일을 띄울 수 있다.

![Untitled 5](https://user-images.githubusercontent.com/81297662/169216400-54035099-996d-4314-80e1-e6a450b12d94.png)

- views.py코드
    
    ```python
    from django.shortcuts import render
    
    # Create your views here.
    def board(request):
        return render(request, 'board.html')
    
    def boardfirst(request):
        return render(request, 'boardfirst.html')
    ```
    
- urls.py코드
    - 앞서 Django에서 프로젝트를 생성하면, 프로젝트 이름과 동일한 이름을 가진 폴더가 생성한다고 언급한 바 있다. (현재 프로젝트 이름과 동일한) 즉, practice_url폴더 내의 urls.py에서 product앱의 urls를 import 해주었으므로, product앱 내에서 동작되는 urls의 경로는 `#127.0.0.1:8000/products/...` 에서 시작된다.
    
    * product 앱의 urls를 어떻게 import했는지 기억이 안난다면?
    
    아래 토글을 열어  `path('products/', include('product.urls'))` 코드를 다시 한 번 확인해 보자.
    
    - practuce_url 폴더 내의 urls.py
        
        ```python
        from django.contrib import admin
        from django.urls import path, include
        from myapp import views
        
        urlpatterns = [
            path('admin/', admin.site.urls),
            path('', views.first),
            path('second/', views.second),
            path('products/', include('product.urls')),
            path('boards/', include('board.urls')),
        ]
        ```
        
    
    - 따라서 아래 코드 `path('', views.productlist)` 에서는 달리 url을 지정해주지 않았으므로 이 path에 대한 경로는  `#http://127.0.0.1:8000/products/` 이다.
    
    ```python
    from django.urls import path
    from product import views
    
    urlpatterns = [
        path('', views.productlist), #http://127.0.0.1:8000/products/
        path('first/', views.productfirst), #http://127.0.0.1:8000/products/first/
    ]
    
    #127.0.0.1:8000/products/first에 대해서 productfirst함수가 실행된다.
    ```
    
- templates폴더
    
    ![Untitled 6](https://user-images.githubusercontent.com/81297662/169216404-c13f8e06-be55-4639-8d61-4ebbd977693e.png)
    
    - productfirst.html
        
        ```html
        <h1>productfirst.html 파일을 띄어보자. 파일 경로는 #http://127.0.0.1:8000/products/first/ 이다.</h1>
        ```
        
    - productlist.html
        
        ```html
        <h1>productlist.html 파일을 띄어보자. 파일 경로는 # http://127.0.0.1:8000/products/이다. </h1>
        ```
        

### 4. 4에서는 product 앱 안에 있는 코드를 예시로 들었지만 다른 앱의 작동 원리도 동일하다. 다른 앱 templates안에 있는 html파일도 동일한 원리로 동작시킬 수 있다.

## static이란?

### static의 정의
- 웹 서비스 내부 데이터는 Static과 Media 두 가지가 있다.
- Static은 웹 서비스 내부에서 사용자를 위해서 미리 준비한 데이터
- Media는 사용자가 업로드한, 사용자에 의한 데이터라고 보시면 됩니다.


### 장고의 static
- 장고에서는 settings.py의 STATICFILES_DIRS, STATIC_URL, STATIC_ROOT 파일에서 static파일들을 관리한다.
- `STATICFILES_DIRS`: static파일들의 경로 작성
- `STATIC_ROOT`: static 파일들을 복사하여 모아 놓을 경로를 설정
ex) `STATIC_ROOT = os.path.join(BASE_DIR, ‘staticfiles’)`
- 참고) 배포시 `python manage.py collectstatic` 명령어 활용해서 static파일들을 모두 모을 수 있음
- `STATIC_URL`: static파일을 제공할 url
ex) `STATIC_URL = ‘/static/’`

(사용 예시)

```python
from pathlib import Path
import os

#... 생략

STATIC_URL = '/static/'

STATICFILES_DIRS = [
    BASE_DIR / 'static',
    os.path.join(BASE_DIR, 'staticapp', 'static'), 
    #base디렉토리 안에 static앱이라는 디렉토리 그 안에 static요소를 관리해준다는 뜻
]

STATIC_ROOT = os.path.join('staticfiles')
```

*장고의 최상의 폴더 → 베이스 디렉토리라고 부른다.

- 정적 media들을 static 파일에 넣어서 관리할 때는 프로젝트의 규모에 따라서 베이스 디렉토리 하위 디렉토리로 static파일을 만들어 관리하거나, 앱 단위로 static 파일을 만들어 관리할 수 있다.

![Untitled 7](https://user-images.githubusercontent.com/81297662/169216407-885ea971-e8db-428e-b642-71a94c81085a.png)

- 이렇게 해서 만든 static파일 속에 있는 자료들을 불러오기 위해서는 **템플릿 문법**을 사용해야한다. 템플릿 문법 사용 예시는 다음과 같다.

```html
{% load static %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="{% static 'css/style.css' %}">
    <link rel="stylesheet" type="text/css" href="{% static 'style2.css' %}">
    <title>Static Practice</title>
</head>
<body>
    <div>Hello static!!</div>
    <img src="{% static 'img/logo.png' %}" width="50%">
</body>
</html>
```

- css를 불러올 html 코드 상단에 `{% load static %}`
- html에 css를 불러오는 link 태그의 href속성에 `<link rel ="stylesheet" type="text/css" href="{% static ‘css/style.css’ %}">`
- body태그 img 태그에 `<img src="{% static ‘img/logo.png’ %}">`

- 배포시 `python manage.py collectstatic` 명령어를 사용하면 `STATIC_ROOT`에 지정해준 이름으로 static파일이 한 곳으로 모이게 된다.

(사용 예시)

- `STATIC_ROOT = os.path.join('staticfiles')` → settings.py에 작성
- `python manage.py collectstatic` → manage.py 명령어 사용
- staticfiles폴더 생성됨
![Untitled 8](https://user-images.githubusercontent.com/81297662/169216411-62a1586d-f426-45ec-9f36-0520195c802e.png)