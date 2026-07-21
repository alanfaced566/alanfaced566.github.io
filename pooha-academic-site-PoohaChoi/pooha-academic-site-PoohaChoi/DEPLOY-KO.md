# GitHub Pages 배포 방법

## 가장 쉬운 방법

1. GitHub에서 새 저장소를 만든다.
2. 개인 홈페이지 주소로 쓸 경우 저장소 이름을 `PoohaChoi.github.io`로 정한다.
3. 이 압축파일 안의 파일과 폴더를 전부 저장소 최상단에 업로드한다.
4. 저장소의 **Settings → Pages**로 이동한다.
5. **Source**에서 **Deploy from a branch**를 고른다.
6. 브랜치는 `main`, 폴더는 `/(root)`를 선택하고 저장한다.
7. 잠시 후 `https://poohachoi.github.io/`에서 사이트가 열린다.

## 글 수정

대부분의 내용은 `content.js`만 수정하면 된다.

- `heroLead`: 첫 화면 소개
- `about`: 소개 문단
- `interests`: 관심 분야 카드
- `projects`: 노트 및 프로젝트
- `links`: CV 버튼
- `socialLinks`: GitHub 등의 외부 프로필

현재 GitHub 프로필은 `https://github.com/PoohaChoi`로 연결되어 있다.

## PDF 공개

PDF를 `files` 폴더에 넣고 `content.js`에서 다음처럼 연결한다.

```js
linkHref: "files/vakil-solutions.pdf"
```

공개하지 않을 자료에는 빈 문자열을 유지한다.
