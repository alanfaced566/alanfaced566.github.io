# Pooha Choi - Personal Website

최푸른하늘(Pooha Choi)의 학술 개인 홈페이지입니다. 별도의 프로그램 설치 없이
`index.html`과 `styles.css` 두 파일만 수정하면 됩니다.

## 가장 쉬운 수정 방법

1. GitHub 저장소에서 수정할 파일을 클릭합니다.
2. 오른쪽 위의 연필 아이콘 **Edit this file**을 누릅니다.
3. 원하는 글자만 바꿉니다.
4. 아래의 **Commit changes**를 누르면 홈페이지가 자동으로 갱신됩니다.

보통 1분 이내에 [poohachoi.github.io](https://poohachoi.github.io/)에 반영됩니다.

## 무엇을 어디서 바꾸나요?

| 바꾸고 싶은 내용 | 파일 | 찾을 문구 |
| --- | --- | --- |
| 이름과 소속 | `index.html` | `Pooreunhaneul Choi`, `Mathematics · KAIST` |
| 자기소개 | `index.html` | `ABOUT / 자기소개` 주석 |
| 연구 관심 분야 | `index.html` | `RESEARCH INTERESTS` 주석 |
| CV 링크 | `index.html` | `CV / 이력서` 주석 아래의 `href` |
| 이메일 | `index.html` | `CONTACT / 연락처` 주석 |
| 색상과 글자 크기 | `styles.css` | 파일 위쪽의 `기본 색상` 주석 |

HTML 파일 안에는 각 영역의 시작점마다 한국어 주석이 있습니다. 주석은
`<!--`로 시작하고 `-->`로 끝나며, 홈페이지 화면에는 표시되지 않습니다.

## 배너 사진 교체

새 사진의 파일명을 `pooha-riemann-roch-banner.jpg`로 바꾼 뒤 저장소 루트에
업로드하여 기존 파일을 교체하면 됩니다. 가로로 긴 사진이 가장 잘 맞습니다.

## 수정할 때 주의할 점

- `<h1>`, `<p>`, `<a>` 같은 꺾쇠 태그는 그대로 두고 그 사이의 글자만 바꾸면 안전합니다.
- `class="..."`와 `id="..."`는 디자인과 메뉴 이동에 쓰이므로 가능하면 바꾸지 마세요.
- CV와 이메일은 화면에 보이는 글자뿐 아니라 `href="..."` 주소도 함께 수정하세요.
- 문제가 생기면 GitHub의 커밋 기록에서 이전 버전으로 되돌릴 수 있습니다.

## 주요 파일

- `index.html`: 홈페이지 내용과 구조
- `styles.css`: 색상, 간격, 글자 크기, 모바일 화면
- `pooha-riemann-roch-banner.jpg`: 메인 배너
- `og-pooha-choi.png`: 카카오톡과 SNS 링크 미리보기 이미지
