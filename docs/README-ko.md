# comfortable-log.js
NODE.js 에서 내용이 많은 object 의 log 를 찍으면 보기 힘들기 때문에 Chrome devtools 의 console 처럼 보여주기 위한 로그 라이브러리 입니다.  

## 개발 이유
보통의 상황에선 Chrome Inspect 를 활용하는게 더 유리하지만 inspect 를 사용 못하는 상황에서 log 를 쉽게 보기 위해 개발했습니다.

## 개발 컨셉
ComfortableLog 를 실행시 electron 창과 웹서버가 띄워지고
로그를 찍기 원하는 프로그램에서 웹서버에 접속해서 log를 request 하면
electron 창에 띄워지게
(vue-devtools 에서 영감받은 방식.)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
