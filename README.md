# BYHAND

#### 프로젝트 소개

핸드메이드 상품 거래가 가능한 커머스 플랫폼입니다.

#### 프로젝트 진행기간

2024.04 ~ 2024.05 (4주)

#### 프로젝트 배포
[🌍 BYHAND 배포링크 🌍](https://byhand-wjstjdus96s-projects.vercel.app/)


###### 테스트 계정

| 판매자                                   | 구매자                                  |
| ---------------------------------------- | --------------------------------------- |
| ID : seller@test.com <br/>PW : 123qweQWE | ID : buyer@test.com <br/>PW : 123qweQWE |

<br/>

## 🛠 기술스택

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/Tailwindcss-06B6D4?style=flat&logo=tailwindcss&logoColor=white">

<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white">

<img src="https://img.shields.io/badge/Zustand-1E4CC9?style=flat&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=flat&logo=reacthookform&logoColor=white">

<img src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white"> <img src="https://img.shields.io/badge/Testing Library-E33332?style=flat&logo=testinglibrary&logoColor=white"> 

<img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=netlify&logoColor=white">

<br/>

## 🏗 아키텍쳐



## 🗂 폴더구조

```
폴더구조
```

## 📌 주요기능
#### <details><summary>로그인 / 회원가입</summary> <br/> <p>로그인</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/f12d75ce-d43a-4d36-9179-8dcee4e89a9f" width="600" /> <br/> <br/> <p>회원가입</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/6f1fd225-d95f-4ba6-9c1a-2fffdd57cdae" width="600" /> <br/></details>
- 폼 유효성 검증
- 로그인 후 전역상태로 회원정보 관리
#### <details><summary>전체 상품 조회</summary> <br/> <p>전체상품 - 결과 필터링</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/e9c5366a-fcf0-4115-b274-e91dd7707802" width="600" /> <br/> <br/> <p>전체상품 - 무한스크롤</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/a6697ac9-49fc-4461-96aa-1cb8d1b92e12" width="600" /> <br/></details>
- 카테고리, 검색어, 정렬옵션에 따른 조회 결과 필터링 기능
- 무한스크롤을 활용한 페이지네이션
#### <details><summary>상품 상세 조회</summary><br/> <p>상품 상세정보</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/4e13159e-d267-43e9-b28e-f9bad1d0ddb4" width="600" /><br/></details>
- 상품 수량 선택 -> 장바구니 추가 혹은 상품 주문
- 이미지 캐러셀을 통한 다량의 상품 이미지 자동 전환
#### <details><summary>장바구니</summary><br/> <p>장바구니 - 상품선택,수량변경</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/ab88a2c2-2a66-4d6b-89e1-00f239aa64b5" width="600" /> <br/> <br/> <p>장바구니 - 부분삭제,부분결제</p> <img src="https://github.com/wjstjdus96/byhand/assets/77755620/7b7b9161-5ca3-4717-be6d-74492e897a8f" width="600" /></details>
- 장바구니 상품 수량 수정 기능
- 선택한 상품 금액 및 개수 계산
- 상품 전체/부분선택 -> 부분적인 주문 및 삭제 기능

#### <details><summary>[구매자] 선택 상품 주문</summary> _Write here!_</details>
- 카카오 우편번호 api를 활용한 배송 정보 입력 기능
- 포트원 SDK를 활용한 결제 기능
#### <details><summary>[구매자] 주문 내역 조회 및 주문 취소</summary> _Write here!_</details>
- 날짜별 주문 내역 조회 기능
- 상품별 주문 취소 기능
#### <details><summary>[판매자] 판매상품관리</summary> _Write here!_</details>
- 판매 상품 조회, 등록, 수정, 삭제 기능
- 등록 시 상품 이미지 개수 5개 제한


<br/>

## 📚 Docs

#### 기술적 의사결정

선언적 에러처리를 활용한 에러 핸들링<br/>
컴파운트 컴포넌트를 활용하여 공통 컴포넌트 재사용성 향상

#### 트러블 슈팅

input 이미지 다중 선택 시 발생하는 초기화 이슈 해결 <br/>
상세 상품 prefetch로 인한 중복적인 네트워크 요청 해결

#### 성능 최적화

번들 사이즈 축소로 초기 로딩 속도 개선 <br/>
렌더링 성능 최적화로 퍼포먼스 점수 향상
