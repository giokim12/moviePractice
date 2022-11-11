
# 영화 추천 사이트

## main, movie, random, watch, detail 페이지로 구성
---
## 영화 리스트 페이지 
* tmdb에 있는 top-rated 영화를 불러와서 cards 로 화면에 구현  
* movie card component에 담은 것들을 for문 돌면서 화면에 나타냄  

## 영화 랜덤으로 추천하기
* getters를 이용해서 원본 데이터를 수정하지 않고 뽑았다.
* Math.floor(Math.random() * state.movieList.length)
    * 리스트 길이 내에서 랜덤으로 숫자 뽑기
* return state.movieList[random];
    * 리스트에서 인덱스로 하나 뽑기

## 현재 날씨에 따른 영화 추천하기
* getters를 이용해서 원본 데이터를 수정하지 않고 뽑았다.
* RandomView에서 OpenWeather API로 받아온 서울의 날씨 정보와 영화의 장르를 사용하여 추천 영화를 출력하였다.
* OpenWeather API를 사용하여 서울의 날씨를 받아온다.
* OpenWeather API에서 제공하는 날씨 description의 종류는 8개이다.
* 8개의 경우에 switch문을 사용하여 state의 movieList에서 날씨에 적합한 장르를 반환하였다.
    * ex) thunderstorm → horor

## watch
* 보고싶은 영화 리스트를 저장할 수 있는 페이지  
* input 창에 보고싶은 영화를 입력하고 엔터를 누르면 list에 담긴다  
* 다 본 영화는 클릭하면 line-through가 생기고, 배경이 회색으로 변한다.  

## detail
* movie 페이지에서 내가 원하는 영화의 카드를 클릭하면, 해당 영화의 상세페이지로 이동할 수 있다.  
    * 상세페이지에서는 포스터를 크게 볼 수 있고,   
평점과 소개를 읽을 수 있다.


