---
title: 장고 기본 활용: URL mapping
---

# url mapping

- url사이를 자유자재로 왔다갔다하려면 어떻게 해야 할까?

1. 이해를 돕기 위해 practice_url이라는 프로젝트를 설치하고, practice_url폴더 안에 myapp, board, product 세 개의 폴더를 생성하였다.

![Untitled (9)](https://user-images.githubusercontent.com/81297662/166924286-6480b966-7ae7-43ef-aa84-3ccaa74af66d.png)

- (1. 에 대한 참고 및 부연설명 ) 장고에서 프로젝트와 앱 생성하는 방법
- 장고에서 프로젝트를 생성하는 명령어는 `django-admin startproject [생성할 프로젝트 이름]` 이다.
- 프로젝트를 생성하면 practice_url이라는 프로젝트가 생성되면서 프로젝트와 동일한 이름의 폴더도 한 개 생성된다.
- 이 상태에서 `python manage.py startapp [생성할 앱 이름]` 명령어를 사용하여 앱을 만들 수 있다. python manage.py안에서 앱을 생성할 수 있는 것이므로, ls명령어를 통해 manage.py가 있는 위치에서 실행하도록 한다.
- url mapping을 연습하기 위해서 앱 생성 명령어 활용해서 세 개의 폴더를 만들어 둔 상태가 위의 이미지이다.

2. 가장 먼저 살펴보아야 할 것은 프로젝트 이름과 동일한 폴더 안에 있는 urls.py파일이다. 웹페이지에서는 특정 기능을 구현하기 위해서 여러 개의 앱을 사용하며, 앱단위로 url을 관리하므로 앱 단위로 url을 관리할 수 있도록 `from django.urls import path, include` 코드와 urlpatterns = []안에 `path(’지정하려는 urls이름 마음대로 설정/’, include('url포함하려는 앱 이름.urls'))` 코드를 넣어준다. 위 디렉토리에 따르면, product앱과 board앱을 설치했다. 따라서 product앱에 필요한 urls와 board앱에 필요한 urls를 include시켜주었다.

```
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

3. 각각의 app안에 templates폴더를 만들고, 그 안에 html파일을 두 개씩 만들고, 해당 앱의 views.py파일에서 request가 있을 때 html파일을 render해주는 함수를 만들어준다.

- board 앱 디렉토리 구조
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af5a47f4-b740-47a0-838e-9a810543e247/Untitled.png)
- myapp 앱 디렉토리 구조
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/61c13703-2933-4631-aad8-c6f765e12d50/Untitled.png)
- product 앱 디렉토리 구조
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8bc99250-a09d-4bbc-b5a7-e82e24ab949e/Untitled.png)

4. product 앱 안에 있는 코드를 살펴 보자. 이 앱 안에서 중요하게 살펴볼 요소는 `[views.py](http://views.py) 파일`, `urls.py 파일` , `templates폴더` 이다. Django에서 사용자에게 페이지를 보여주기 위해서는 urls.py에 url을 띄울 때 (reuqest가 있을 때) html파일을 화면에 띄우는(render 하는) views.py의 함수를 부른다. 그러면 아래처럼 `#127.0.0.1:8000/products/` 경로에서 `productlist.html` 파일을 띄울 수 있다.

![Untitled (10)](https://user-images.githubusercontent.com/81297662/166924428-7aac67e3-9228-4d6a-baf0-9ee3888ac549.png)

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
    아래 토글을 열어 `path('products/', include('product.urls'))` 코드를 다시 한 번 확인해 보자.

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

  - 따라서 아래 코드 `path('', views.productlist)` 에서는 달리 url을 지정해주지 않았으므로 이 path에 대한 경로는 `#http://127.0.0.1:8000/products/` 이다.

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
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c293271-6ab9-41c8-a1f0-d1c91bb51d57/Untitled.png)
  - productfirst.html
    ```html
    <h1>
      productfirst.html 파일을 띄어보자. 파일 경로는
      #http://127.0.0.1:8000/products/first/ 이다.
    </h1>
    ```
  - productlist.html
    ```html
    <h1>
      productlist.html 파일을 띄어보자. 파일 경로는 #
      http://127.0.0.1:8000/products/이다.
    </h1>
    ```

5. 4에서는 product 앱 안에 있는 코드를 예시로 들었지만 다른 앱의 작동 원리도 동일하다. 다른 앱 templates안에 있는 html파일도 동일한 원리로 동작시킬 수 있다.
