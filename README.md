# BYHAND

#### 프로젝트 소개

핸드메이드 상품 거래가 가능한 커머스 플랫폼입니다. 


#### 프로젝트 진행기간

2024.04 ~ 2024.05 (4주)

#### 프로젝트 배포링크
[🌍 BYHAND 배포링크 🌍](https://byhand-wjstjdus96s-projects.vercel.app/)


##### 테스트 계정
> 구매자   
> ID: seller@test.com   
> PW: 123qweQWE
>
> 판매자   
> ID: buyer@test.com   
> PW: 123qweQWE
<br/>

## 📋 실행방법
1. 레포지토리 복제 후 의존성 설치
```
$ git clone https://github.com/wjstjdus96/byhand.git
$ cd byhand
$ npm install
```
2. 개발 서버 가동
```
$ npm run dev
```
3. 브라우저에서 실행
```
http://localhost:5173/
```



## 🛠 기술스택

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/Tailwindcss-06B6D4?style=flat&logo=tailwindcss&logoColor=white">

<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white">

<img src="https://img.shields.io/badge/Zustand-1E4CC9?style=flat&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=flat&logo=reacthookform&logoColor=white">

<img src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white"> <img src="https://img.shields.io/badge/Testing Library-E33332?style=flat&logo=testinglibrary&logoColor=white"> 

<img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=netlify&logoColor=white">

<br/>

## 📌 주요기능
##### 토글을 열면 시연영상을 확인하실 수 있습니다
#### <details><summary>로그인 / 회원가입</summary> <br/> <p>로그인</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/f12d75ce-d43a-4d36-9179-8dcee4e89a9f" width="600" /> <br/> <br/> <p>회원가입</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/6f1fd225-d95f-4ba6-9c1a-2fffdd57cdae" width="600" /> <br/></details>
- 폼 유효성 검증
- 로그인 후 전역상태로 회원정보 관리
#### <details><summary>전체 상품 조회</summary> <br/> <p>전체상품 - 결과 필터링</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/e9c5366a-fcf0-4115-b274-e91dd7707802" width="600" /> <br/> <br/> <p>전체상품 - 무한스크롤</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/a6697ac9-49fc-4461-96aa-1cb8d1b92e12" width="600" /> <br/></details>
- 카테고리, 검색어, 정렬옵션에 따른 조회 결과 필터링 기능
- 무한스크롤을 활용한 페이지네이션
#### <details><summary>상품 상세 조회</summary><br/> <p>상품 상세정보</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/4e13159e-d267-43e9-b28e-f9bad1d0ddb4" width="600" /><br/></details>
- 상품 수량 선택 -> 장바구니 추가 혹은 상품 주문
- 이미지 캐러셀을 통한 다량의 상품 이미지 자동 전환
#### <details><summary>[구매자] 장바구니</summary><br/> <p>장바구니 - 상품선택,수량변경</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/ab88a2c2-2a66-4d6b-89e1-00f239aa64b5" width="600" /> <br/> <br/> <p>장바구니 - 부분삭제,부분결제</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/7b7b9161-5ca3-4717-be6d-74492e897a8f" width="600" /></details>
- 장바구니 상품 수량 수정 기능
- 선택한 상품 금액 및 개수 계산
- 상품 전체/부분선택 -> 부분적인 주문 및 삭제 기능

#### <details><summary>[구매자] 선택 상품 주문</summary> <br/> <p>주문-배송정보입력</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/4f5b4468-0edc-4aae-8dc1-20e5a2d4b015" width="600" />  <br/> <br/> <p>주문-결제</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/50c1c1e2-74ce-4a49-aafa-3ded7825be24" width="600" /></details>
- 카카오 우편번호 api를 활용한 배송 정보 입력 기능
- 포트원 SDK를 활용한 결제 기능
#### <details><summary>[구매자] 주문 내역 조회 및 주문 취소</summary><br/> <p>주문 정보 조회 및 주문 취소</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/953a3f66-18f7-4dd8-8aa1-da815ccf1fab" width="600" /></details>
- 날짜별 주문 내역 조회 기능
- 상품별 주문 취소 기능
#### <details><summary>[판매자] 판매상품관리</summary> <br/> <p>판매상품관리 - 상품 등록,수정</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/42e80267-58e8-494c-8e95-9d58e6035ad9" width="600" />  <br/> <br/> <p>판매상품관리 - 상품 삭제</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/c2b12fdf-3fd1-43a6-89b0-67059eff7fa3" width="600" /></details>
- 판매 상품 조회, 등록, 수정, 삭제 기능
- 등록 시 상품 이미지 개수 5개 제한


<br/>

## 📚 Docs

### 성능 최적화

번들 사이즈 축소로 초기 로딩 속도 개선    
렌더링 성능 최적화로 퍼포먼스 점수 향상

### 트러블 슈팅

input 이미지 다중 선택 시 발생하는 초기화 이슈 해결     
상세 상품 prefetch로 인한 중복적인 네트워크 요청 해결

### 기술적 의사결정

선언적 에러처리를 활용한 에러 핸들링    
컴파운트 컴포넌트를 활용하여 공통 컴포넌트 재사용성 향상

<br/>

## 🏗 아키텍쳐
![바이핸드아키테쳐](https://github.com/wjstjdus96/byhand/assets/77755620/fa74af48-df72-4b3c-9fb8-6699ba9c5972)
<br/>

## 🗂 폴더구조

```
┣ 📁__mocks__
┣ 📁__test__
┣ 📁public
┣ 📁src
  ┣ 📁api
  ┣ 📁assets
  ┣ 📁components
      ┣ 📁admin
      ┣ 📁auth
      ┣ 📁cart
      ┣ 📁common
      ┣ 📁home
      ┣ 📁myPage
      ┣ 📁payment
      ┣ 📁productDetail
      ┣ 📁products
      ┣ 📁ui
  ┣ 📁consts
  ┣ 📁hooks
      ┣ 📁auth
      ┣ 📁cart
      ┣ 📁form
      ┣ 📁home
      ┣ 📁myPage
      ┣ 📁payment
      ┣ 📁productDetail
      ┣ 📁products
      ┣ 📁seller
  ┣ 📁layout
  ┣ 📁lib
  ┣ 📁pages
      ┣ 📁error
  ┣ 📁router
  ┣ 📁store
  ┣ 📁styles
  ┣ 📁types
  ┣ 📁utils
```
- `__mocks__` : 테스트 환경에서 사용되는 mock data 저장
- `__test__` : 단위 테스트 파일 저장
- public : 정적 파일 저장 (svg 파일, SEO 관련 파일 포함)
- src : 소스코드 파일 저장
