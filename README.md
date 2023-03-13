## 시작 가이드

### Requirements

For building and running the application you need:

- [Node.js 8.15.0](https://nodejs.org/en/blog/release/v16.17.1)
- [Npm v16.17.1](https://www.npmjs.com/package/npm/v/8.15.0)
- Firebase 9.17.2

### Installation

```bash
#clone 받기
$ https://github.com/Kugods-Medic-Viz/Medic-Viz.git
$ cd Medic-Viz

#패키지 설치 후 실행
$ npm install
$ npm start
```

---

## 브랜치 전략

### 기본

**Github Flow**

1. 브랜치 생성

2. 개발 & 커밋 & 푸쉬

3. PR(Pull Request) 생성

4. 리뷰 & 토의

5. 최종 Merge

### 구조

`feature/{구현기능}`

- main
  - feature/기능1
  - feature/기능2  
    ...

## 커밋 규칙

### 형식

- ACTIVITY : 커밋 메세지

### ACTIVITY 목록

- INT: only for initial commit
- DOC: changes document or comment
- FTR: add new feature
- MOD: modify existing feature
- FIX: fix an error or issue
- RFC: refactor code
- ADD: add new file or directory
- RMV: remove existing file or directory
