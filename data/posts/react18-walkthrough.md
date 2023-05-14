## 웹 접근성이란

장애인, 특히 인지 장애나 신체 장애가 있는 사람들이

**쉽게 사용할 수 있는 웹사이트**와 **웹 앱을 구축하는 기술을 웹 접근성**이라고 한다.

많은 장애인이 스크린 리더나 점자 디스플레이와 같은 보조 기술을 사용하여 인터넷을 검색한다.

따라서 웹 접근성은 이러한 보조 기술을 웹사이트에 통합하는 데 필요한 도구 와 자산을 배치하여

**모든 사람이 디지털 컨텐츠에 접근하고 상호 작용할 수 있도록 하는것을 의미한다.**

## 웹 접근성이 중요한 이유

웹 접근성은 능력이나 장애에 관계없이 **모든 사람이 웹에 접근**해서 사용할 수 있도록 보장하기 떄문에 중요하다. 또한 정보와 기술에 대해 장벽을 제거하여 포용성 다양성 평등을 증진하는 데에도 도움이 된다.

## 웹 접근성을 고려한 웹사이트를 만드는 방법

### **시멘틱 HTML을 사용한다.**

- 목적을 정확하게 설명한다.

```html
//
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#"> About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

- 메인섹션은 메인으로 감싸준다.

```html
<main>
  <h1>Welcome to My Website!</h1>
  <p>Here is some information about my website...</p>
</main>
```

- 주요 콘텐츠와 부분적으로 연관된 부분을 aside로 감싸준다.

```html
<main>
  <h1>Welcome to My Website!</h1>
  <p>Here is some information about my website...</p>
  <aside>
    <h2>Related News</h2>
    <ul>
      <li><a href="#">Article 1</a></li>
      <li><a href="#">Article 2</a></li>
      <li><a href="#">Article 3</a></li>
    </ul>
  </aside>
</main>
```

### 접근성을 고려한 색상 및 대비 사용

### 색상을 신중하게 선택해야 한다.

### 읽기 쉬운 글꼴을 사용해야한다.

### ARIA 속성을 사용한다. (Accessible Rich Internet Applications)

html태그에 추가하여 요소의 역할 및 속성에 대한 자세한 정보를 제공할 수 있는 추가 속성이다.

이러한 속성은 스크린 리더가 읽어 사용자 경험을 개선하는데 사용될 수 있다.

허나 경우에 따라 접근성에 이점을 제공할 수 있지만 다른 접근성 도구 및 전략이 불충분한 경우에만 최후의 수단으로 활용해야 한다. ARIA를 과도하게 사용하거나 오용하면 장애인 경험을 개선하기 보다는 오히려 더 많은 장벽을 만들 수 있다.

```html
<div>
  <button aria-label="Search">
    <i class="fa fa-search"></i>
  </button>
  <div role="tabpanel" aria-labelledby="tab1">
    <p>Tab panel content goes here.</p>
  </div>
  <button aria-expanded="false" aria-controls="collapse1">Show More</button>
  <div id="collapse1" aria-hidden="true">
    <p>Additional content goes here.</p>
  </div>
</div>
```

**aria-expended**

연결된 div 요소의 콘텐츠가 확장 또는 축소 되는지 여부를 나타내는데 사용된다.

**aria-controls**

연결된 div ID 를 참조하는 데 사용되며 ,

**aria-hidden**

콘텐츠가 접혀있을때 숨겨져 있음을 나타내는 데 사용된다.

## **웹사이트의 접근성 테스트**

- WAVE: 웹사이트의 접근성을 검사하고 그 결과에 대한 보고서를 생성하는 무료 도구입니다. [WAVE에 대해 자세히 알아보세요.](https://wave.webaim.org/)
- AXE: 자동화된 테스트를 사용하여 웹 접근성을 테스트하고 개선하기 위한 무료 Chrome 확장 프로그램입니다. [AXE에 대해 자세히 알아보세요.](https://chrome.google.com/webstore/detail/axe-devtools-web-%20%0Aaccessib/lhdoppojpmngadmnindnejefpokejbdd)
- Lighthouse: Lighthouse는 개발자가 웹사이트의 성능과 접근성을 테스트하는 데 사용하는 인기 있는 오픈 소스 도구입니다. [여기](https://developer.chrome.com/docs/lighthouse/overview/#:~:text=Lighthouse%20is%20an%20open%2Dsource,apps%2C%20SEO%2C%20and%20more)에서 사용할 수 있습니다.
- NVDA: NVDA(NonVisual Desktop Access)는 시각 장애인이 웹은 물론 컴퓨터의 다른 애플리케이션과 소프트웨어에 액세스하고 탐색할 수 있도록 지원하는 무료 오픈 소스 스크린 리더입니다. 이를 다운로드하여 웹사이트와 상호 작용하고 접근성을 개선할 수 있는 부분에 대한 더 많은 인사이트를 얻을 수 있습니다. [여기](https://www.nvaccess.org/)에서 다운로드할 수 있습니다.
