## Gatsby

### Framework vs Library

- Gatsby는 엄청나게 빠른 웹사이트와 앱을 구축할 수 있도록 도와주는 React 기반의 무료 오픈 소스 프레임워크입니다.
  동적으로 렌더링되는 사이트의 제어 및 확장성과 정적 사이트 생성 속도를 결합하여 완전히 새로운 가능성의 웹을 만듭니다
- 프레임워크는 딱 정해진 룰에따라서 작동하는것이라 빠르고 쉽게할수있지만 자유성은 좀 부족할 수 있음
- 리액트 룰 + 개츠비 룰
- Gatsby는 정적 웹사이트다 (블로그, 전자상거래 사이트 등 변하지 않고 모두에게 동일하게 보여줌, 물론 유저가 데이터를 올리지않고 변화하지않는 그런경우)
- 로딩없이 엄청 빨리 로드되는 정적 웹사이트를 빌드하는것! 그것도 최적화가 엄청 잘된 상태로

### React와 Gatsby

- react는 유저가 웹사이트로가면 브라우저가 JS다운로드해서 구동
- 즉 처음에 빈페이지를 서버에서 주고 유저쪽에서 JS다운로드해서 만듬(JS를 못쓰는 상황이거나 인터넷 상태가 안좋아서 Js파일을 로드나 다운받는데 오래걸리면 그래서 아무것도 안뜸)
- 개발자 모드에서는 개츠비도 리액트처럼 똑같지만 퍼블리셔하면 달라진다 완성된 페이지를 줌(리액트로 만든 코드를 html페이지로 짜잔)
- 개츠비는 next.js와 매우비슷
- react로 신나게 코드 짠걸 gatsby가 모든 reactJS 요소를 html로 바꿔줌 와우
- 놀라운건 reactJS가 로드된 후에는 react의 요소도 그대로 사용이 가능 State나 Dynamic Button이나 뭐 이런 것들

### install

Gatsby CLI 설치
npm i -g gatsby-cli

Gatsby 버전 확인
gatsby --version

Gatsby 프로젝트 셋업
gatsby new

Gatsby requires Node.js 18.0.0 or higher (you have v16.13.0). 오류 해결
위와 같은 오류가 뜨시는 분들은 노드 버전을 18.0.0 버전 또는 그 이상으로 설치해주셔야 합니다.
NodeJS홈페이지에서 설치 가능 (https://nodejs.org/ko) 
https://www.gatsbyjs.com/docs/upgrading-node-js/

```dart
## Yarn으로 설치하기
일단 설치되면 Yarn을 사용하여 Gatsby CLI를 전역적으로 또는 로컬로 설치할 수 있습니다. 와 같은 Gatsby CLI 명령을 사용하려면 접두어를gatsby new 사용하여 전역적으로 CLI를 설치하십시오 .global

복사코드를 클립보드에 복사
yarn global add gatsby-cli
를 사용하여 Gatsby를 로컬로 설치할 수도 있습니다 yarn add gatsby-cli. 이 방법을 사용하는 경우 Gatsby 명령 앞에 를 붙여야 합니다( yarn예: ) yarn gatsby develop.

참고: npx를 사용하여 Yarn을 설치한 경우 npx 및 Yarn 접두사를 모두 사용해야 합니다(예: ) npx yarn add gatsby-cli. globalnpx를 사용하여 설치한 경우 Yarn은 접두사를 무시합니다 .

Yarn을 Gatsby 패키지 관리자로 사용하기
gatsby new처음 실행하면 기본 패키지 관리자로 npm 또는 Yarn을 선택하라는 메시지가 표시됩니다. 그때 Yarn을 선택하거나 나중에 변경할 수 있습니다. npm에서 Yarn으로 전환하려면 에서 사용 가능한 Gatsby CLI 구성 파일을 편집하여 ~/.config/gatsby/config.json다음 줄을 추가하세요.

복사코드를 클립보드에 복사
{
  "cli": {
    "packageManager": "yarn"
  }
}
Gatsby는 Yarn을 새 프로젝트의 패키지 관리자로 사용합니다. Yarn을 사용하여 Gatsby 플러그인을 설치할 수도 있습니다. npm install또는 npm i로 교체하세요 yarn add.

Yarn을 사용하여 패키지를 설치하면 yarn.lock파일이 생성됩니다. 와 유사하게 를 yarn.lock사용하여 설치한 정확한 버전을 추적 합니다 . 프로젝트 저장소에 커밋합니다 . 이렇게 하면 팀 구성원과 컴퓨터 전체에서 종속성이 일관되게 유지됩니다
```

### Build

```react
Build
빌드는 사이트를 컴파일하는 과정을 말합니다. 빌드 중 또는 빌드 시간에 프로젝트는 컴포넌트 요소 파일에서 호스팅 공급자에 배포할 수 있는 최적화된 HTML, CSS 및 JavaScript 파일로 변환됩니다.
https://www.gatsbyjs.com/docs/glossary/build/

Gatsby 빌드 프로세스 개요
https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/

gatsby build하면 html파일로 만들어줌
그러면 JS가 있든 없든 상관이없음 완성된 html코드를 주기때문
react로 신나게 코드 짠걸 gatsby가 모든 reactJS 요소를 html로 바꿔줌 와우

```

### Layout

```react
Layout Components
Gatsby는 기본적으로 레이아웃을 페이지에 자동으로 적용하지 않습니다
Layout Component를 사용하면 전체 머리글 및 바닥글, 그리고 일부 페이지에서는 사이드바를 사용하거나 레이아웃과 페이지 컴포넌트 간에 데이터를 전달할 수 있습니다.
https://www.gatsbyjs.com/docs/how-to/routing/layout-components/

Gatsby Head API
Gatsby에는 페이지의 문서 헤드에 요소를 추가할 수 있는 내장 head가 포함되어 있습니다.
react-helmet 또는 기타 유사한 솔루션과 비교할 때 Gatsby Head는 사용하기 쉽고 성능이 우수하며 번들 크기가 더 작고 최신 React 기능을 지원합니다.
ex) export const Head = () => < title>Home Page< /title>
https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
```

