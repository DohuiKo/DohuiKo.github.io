---
title: Django에 필요한 python문법
---

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5710915329895675"
     crossorigin="anonymous"></script>

# 수강노트: Django사용을 위해 필요한 Python

## 필수 개념

- 자료형 (딕셔너리)
- 예외처리
- 클래스와 객체
- 모듈, 패키지, 라이브러리

### 장고 개발하려면 어느 정도의 파이썬 지식이 필요한가?

- 웹 프레임워크 = 웹서비스를 **쉽게** 만들어주는 기계 = 사용법이 **정형화** 되어 있는 기계

## 딕셔너리 자료형

- 딕셔너리 = 사전 자료형

**Q1. 아래 데이터들을 “1000번째 학생”이라는 데이터로 묶는다면?**

이름 강민철 컴퓨터과학 주전공 정보보호학과 1001045 학번 1.22/4.5 학점 복수전공

**Q2. 아래 데이터들을 “운동선수”라는 데이터로 묶는다면?**

김연아 마이클조던 피겨스케이팅 손흥민 야구 농구 축구 박찬호

**Q3. 아래 데이터들을 “성적”이라는 데이터로 묶는다면?**

영어 국어 한국사 90 80 100 물리 74

- 대응이 되는 데이터를 표현해주고 싶다 → 딕셔너리 자료형을 사용하기
- 딕셔너리 자료형은 탐색의 기준을 통해서 찾고자 하는 값을 찾는다
  EX) Apple의 뜻을 찾으려면 A를 기준으로 찾는다.
- 탐색의 기준, 키워드 = Key
- 탐색의 기준에 대응되는, 찾고자 하는 값 = Value

즉, Key를 통해 Value를 통해 값을 찾는다.

**Q. 딕셔너리 언제 써요?**

- 표로써 데이터를 표현하고 싶을 때 딕셔너리 자료형을 쓴다.

↓ 딕셔너리 사용 예시 (Key는 중복되어서도, 변해서도 안된다.)

```python

```

## 예외처리

- Python 오류 종류는? → 문법 에러(파싱 에러)와 예외
- 파싱 에러는 실행 자체에 영향을 주는 치명적인 오류임.

![Untitled](https://user-images.githubusercontent.com/81297662/167301163-9296bd47-b90e-48de-98f7-62d8b723f06a.png)

- 예외: 프로그램 실행 자체를 멈추는 에러는 아님, 실행 중 감지되는 오류

![Untitled 1](https://user-images.githubusercontent.com/81297662/167301161-bbe12684-8512-4619-afca-0952806b3f6b.png)

- 오류를 핸들링하려면? try, except, finally를 사용한다. (프로그램을 멈춤 없이 실행 할 수 있다)

```python
try:
   #일단 시도해 볼 것
   #오류가 생길 여지가 있는 코드
except 발생 오류:
   #발생 오류가 발생했을 경우 실행할 코드
finally:
   #예외가 발생했든 안 했든
   #최종적으로 무조건 실행할 코드

------

try:
   4/0
except: ZeroDivisionError:
   print("0으로 나눌 수 없습니다.")
finally:
   print("계산 끝")
```

- 예외처리와 관련된 문서

[8. Errors and Exceptions - Python 3.10.2 documentation](https://docs.python.org/ko/3/tutorial/errors.html)

## 객체지향 프로그래밍

- 객체와 클래스는 왜 생기게 되었나?

→ 세상에 있는 모든 것들을 프로그래밍하고 싶다는 욕구에서

- 세상에 있는 모든 다른 대상(객체)들을 관찰
- 객체를 프로그래밍 할 수 있다면, 세상이 있는 다른 대상들도 프로그래밍할 수 있음.
- 이 세상에 있는 모든 객체들은 무엇으로 구성되어 있을까?

→ 이 세상에 있는 모든 대상들은 상태와 동작으로 구분할 수 있다.

→ 상태와 동작은 변수와 함수로 프로그래밍한다.

```python
name = "panda"
weight = 120
age = 20

def sleepy():
   if 졸리면:
      잔다

def hungry();
   if 배고프면:
      먹는다
```

```python
life = 2
bullet = 100

def attack():
   if 스페이스바:
      공격
```

- 한계: 세상에 있는 모든 대상들은 무수히 많다. → 변수와 함수로 나타낸 상태와 동작을 여러 개 만들 수 있어야 한다.
- 상태와 동작을 한번에 여러 개 정의할 수 있는 방법이 필요하다. == 객체 지향 프로그래밍
- 객체 지향 프로그래밍 방식에 따르면, 변수와 함수들로 틀(클래스)을 만들고, 달고나(객체)들을 찍어낼 수 있다.

게임을 할 때 적군을 100마리 만들고 싶다면?

```python
class Enemy():
   hp = 10

   def move():
      좌우로움직임
   def attacked():
      if(총맞으면):
         죽음

----
enemy1 = Enemy()
enemy2 = Enemy()
enemy3 = Enemy()
...
```

## 모듈, 패키지, 라이브러리

### 모듈

- A module is a file containing Python definitions and statements. → 파이썬으로 정의된 파일(가장 작은 단위)
- 예를 들어 a.py라는 파일, b.py라는 파일이 있다면 a모듈, b모듈이 있다고도 할 수 있다.
- 만약 a.py내용을 b.py안에서 쓰고 싶다면? 어떻게 해야할까? 즉, a에 있는 모듈을 b에서 쓰고 싶다면? 파이썬에서는 `import` 를 사용하면 가능하다.

### 패키지

- Packages are a way of structuring Python’s module namespace by using “dotted module names” : 모듈의 집합, 모듈의 계층 단위
- 네 개의 파이썬 파일이 있다고 가정해 보자. 만약 Myproject라는 폴더 안의 Data라는 폴더 속에 [`save.py`](http://save.py) [`get.py`](http://get.py) `[delete.py](http://delete.py)` 가 있다면? Data라는 폴더가 패키지가 된다.

![Untitled 2](https://user-images.githubusercontent.com/81297662/167301162-a4ab724c-3bc4-405f-a24d-488ba595cdea.png)

### 라이브러리

- 쓸 만한 기능들을 미리 모듈/패키지로 만들어 놓은 것 → 미리 준비된 모듈 및 패키지

Ex) Python Standard Library(파이썬에서 기본 제공), Python Package Index(사람들이 업로드, PyPI)

- 사람들이 만들어둔 PyPI를 사용하려면

`$ pip install SomePackage` , `$ pip search SomePackage` , `$ pip uninstall SomePackage` 같은 코드 사용해야 함.

- 지금 내 파일에 무엇이 깔려있는지 조회 하려면? `$ pip freeze`
