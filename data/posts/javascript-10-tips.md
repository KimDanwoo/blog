## 개요

자바스크립트는 각력하고 다재다능한 프로그래밍 언어니며 보다 효율적이고 유지보수가 용이하며, 가독성이 높은 코드를 작성하는 데 도움이 되는 기능들을 많이 내장하고 있습니다.

## Debounce

### debounce란 무엇일까?

debounce는 전자 공학에서 온 용어입니다.

예를들어 리모컨에 버튼을 누를때 버튼에서 손을 떼려고 하기도 전에 신호는 아주 빠르게

리모컨의 마이크로칩으로 흐르고, 이것이 디바운스 되어 마이크로칩은 이렇게 여러번 클릭한것으로 등록됩니다.

이 과정을 줄이려면 일단 버튼으로 부터 신호를 받았다면 마이크로칩은 물리적으로 다시 버튼을 누르는 것이 불가능한 약 몇 마이크로초 동안 버튼으로부터 신호를 처리하지 않습니다.

### JavaScript에서 debounce

javaScript에서의 사용 예도 비슷합니다. 사용 사례에 따라 **오직 한 번만 함수**를 실행하고 싶습니다.

방문자가 타이핑을 끝내고 난 뒤에만 검색질의에 대한 제안 옵션을 보여주고 싶다고 해봅시다.

아니면 양식의 내용을 저장하고자 하지만 매번 저장이 발생한다면 데이터베이스를 거쳐야 하니 사용자가 해당 내용을 적극적으로 변경하지 않을 때만 이를 하고싶다고 해봅시다.

아래는 debounce를 구현한 함수입니다.

```jsx
function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}
```

- timer값의 스코프를 할당합니다.
- 함수가 지정된 시간에 작동되도록 스케줄링합니다.

## Throttle

### throttle이란 무엇일까?

throttle이란 용어는 다양한 의미가 있지만 일반적으로는 제어,조절,제한하는것을 의미합니다.

### JavaScript에서의 throttle

무한스크롤링 구현을 위해 스크롤 이벤트를 받는 경우를 생각해봅시다.

1px스크롤 할때마다 스크롤에 걸린 이벤트 콜백을 다 수행하고 있을 필요는 없습니다.

함수를 일정시간동안 한번씩만 실행시키도록 하는게 throttel입니다.

아래는 throttle을 구현한 함수입니다.

```jsx
function throttle(func, delay) {
  let wait = false

  return (...args) => {
    if (wait) {
      return
    }

    func(...args)
    wait = true
    setTimeout(() => {
      wait = false
    }, delay)
  }
}
```

- wait변수를 true로 갱신한 후에 타이머를 시작합니다.
- delay만큼의 시간이 흐르면 wait파라미터를 다시 초기화합니다.
- 만약 throttle함수가 다시 실행된다면 wait 파라미터가 true라면 그냥 리턴하고
- 아니라면 주어진 함수를 다시 호출합니다.

## Once

### javascript에서의 once

once함수는 이미 호출된 함수가 다시 실행되지 않도록 하는 메서드입니다. 이 메서드는 특히 이벤트 리스너를 이용하여 작업하는 동안 오직 한 번만 실행해야 하는 함수가 자주 있는 경우 유용합니다.

```jsx
function once(func) {
  let ran = false
  let result
  return function () {
    if (ran) return result
    result = func.apply(this, arguments)
    ran = true
    return result
  }
}
```

- 최초 요청시 함수를 실행하고 ran을 true로 변환한뒤
- 다음요청은 무시합니다.

## Memoize

### memoize 란 무엇일까?

컴퓨터 프로그램이 동일한 계산을 반복해야 할 때 이전에 계산한 값을 메모리에 저장함으로써

동일한 계산의 반복 수행을 제거하여 프로그램 실행속도를 빠르게 하는 기술입니다.

### javascript의 memoize

뜻과 동일하게 동일한 인수로 연산 비용이 많이 드는 루틴을 여러번 호출하는 것을 발지하기 위해 특정 함수의 결과를 캐싱하는 용도로 사용됩니다.

```jsx
function memoize(func) {
  const cache = new Map()
  return function () {
    const key = JSON.stringify(arguments)
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = func.apply(this, arguments)
    cache.set(key, result)
    return result
  }
}
```

```jsx
function fibonacci(n) {
  if (n < 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// 메모화된 함수 생성
const memoizedFibonacci = memoize(fibonacci)

// 여러 입력 값으로 메모화된 함수 호출
console.time('total')
console.time('sub1')
const result1 = memoizedFibonacci(30)
console.timeEnd('sub1')
console.time('sub2')
const result2 = memoizedFibonacci(29)
console.timeEnd('sub2')
console.time('sub3')
const result3 = memoizedFibonacci(30)
console.timeEnd('sub3')
console.timeEnd('total')
```

- 세번째 result는 두번째 값인29 보다 크지만
- 첫번째실행에 대한 memoize에 캐싱된 값을 사용해서 더 빠릅니다.

## Curry

### Curry 란 무엇일까?

커링은 함수의 재사용성을 높이기 위해 함수 자체를 return 하는 함수입니다.

함수를 하나만 사용할 때는 필요한 모든 파라미터를 한번에 넣어줘야합니다.

커링을 사용하면 함수를 분리할 수 있으므로 파라미터도 나눠 전달할 수 있습니다.

```jsx
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) return func(...args)
    return (...moreArgs) => {
      return curried(...args, ...moreArgs)
    }
  }
}

function phonePrefix(item, name) {
  return item + name
}

const phoneNumber = curry(phonePrefix)('010')

const d1 = phoneNumber('12342345')
```

- phone함수는 curry함수에 첫번째 인수로 넘겨지고
- 두번째 인수로 전화번호 뒷자리를 함께 넘겨 커리된 함수로 생성했습니다.
- 또한 커리된 함수와 함께 ‘010’ 인수를 전달하여 호출합니다.
- 결과적으로 생성된 phoneNumber함수는 두 개의 인수만을 필요로 하는 새로운 함수가 되었고 첫번째는 항상 010으로 시작합니다.

## Partial

### Partial이란 무엇일까?

partial함수는 curry함수와 유사합니다. 하지만 curry함수는 커링 체인에서 다른 함수를 반환하고, partial함수는 결과를 즉시 반환한다는 큰 차이가 있습니다.

```jsx
function partial(func, ...args) {
  return function partiallyApplied(...moreArgs) {
    return func(...args, ...moreArgs)
  }
}

// 계산하는 함수 정의
function calculate(x, y, z) {
  return (x + y) * z
}

// 마지막 인수(z)만 필요로 하도록 parital이 적용된 함수 버전으로 생성
const multiply5By = partial(calculate, 2, 3)

// 반복 횟수 값을 전달하여 partial이 적용된 함수를 호출
const result = multiply10By(2) //10
```

- 함수와 인자값을 받은 뒤
- 인자값을 미리 적용한 버전으로 생성합니다.
- 이를 통해 코드의 가독성과 이해도를 더 향상할 수 있습니다.

## Pipe

### pipe란 무엇일까?

pipe는 뜻 그대로 여러개의 함수를 연결하고 그 연결고리에서 어떤 함수의 결과를 다음함수로 전달하고 싶을 때 사용하는 유틸리티 함수입니다. Unix pipe 연산자와 유사하며 자바스크립트의

reduce() 함수를 사용하여 모든 함수를 왼쪽에서 오른쪽으로 적용합니다.

```jsx
function pipe(...funcs) {
  return function piped(...args) {
    return funcs.reduce((result, func) => [func.call(this, ...result)], args)[0]
  }
}
// 문자열에 추가하는 함수들 정의
function addPrefix(str) {
  return 'hi-' + str
}

function addSuffix(str) {
  return str + '-bye'
}

function toUppercase(str) {
  return str.toUpperCase()
}

// 세 가지 함수를 올바른 순서로 적용한 파이프된 함수를 생성
const decorated1 = pipe(addPrefix, addSuffix, toUppercase)
const decorated2 = pipe(toUppercase, addPrefix, addSuffix)

// 입력 문자열로 파이프된 함수 호출
const result1 = decorated1('hello') // HI-HELLO-BYE
const result2 = decorated2('hello') // hi-HELLO-bye
```

- 함수들을 받아서 reduce함수를 통해 정령해줍니다.
- pipe는 주어진 순서대로 적용합니다.
- 파이프함수에 전달된 순서가 다르기 때문에 결과값으로 나온 문자도 달라집니다.

## Compose

compose함수는 pipe함수와 같지만 주어진 함수들을 모두 적용하기 위해 reduceRight를

사용한다는 차이점이 있습니다.

```jsx
function compose(...funcs) {
  return function composed(...args) {
    return funcs.reduceRight(
      (result, func) => [func.call(this, ...result)],
      args
    )[0]
  }
}
```

- pipe와 같지만 reduceRight를 사용한다.

## Pick

### pick이란 무엇일까?

객체의 값들중 노출하고싶은 값을 선택 해서 새로운 객체를 반환할 수 있습니다.

```jsx
function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key]
    }
    return acc
  }, {})
}

const obj = {
  id: 1,
  name: 'danwoo',
  email: 'danwoo@naver.com',
  role: 'admin',
  website: 'https://github.com/KimDanwoo',
}

const selected = pick(obj, ['name', 'website']) //{ name: 'danwoo', website: 'https://github.com/KimDanwoo' }
```

- 원복객체와 새로운 객체로 선택할 키의 배열을 받아서
- 새객체를 생성하기 위해 reduce함수를 사용해 키를 반복하고 원본 객체의프로퍼티와 비교합니다.
- reduce함수가 끝나면 누산기 객체는 새로운 객체가 되고 그 객체는 keys배열에 있던 특정 프로퍼티들만 갖게 됩니다.

## Omit

### Omit이란 무엇일까?

pick함수와 정반대로 어떤 객체에서 특정한 프로퍼티들을 제거하고 싶은때 사용합니다.

```jsx
function omit(obj, keys) {
  return Object.keys(obj)
    .filter((key) => !keys.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key]
      return acc
    }, {})
}

const obj = {
  id: 1,
  name: 'danwoo',
  email: 'danwoo@naver.com',
  role: 'admin',
  website: 'https://github.com/KimDanwoo',
}

const selected = pick(obj, ['name', 'website', 'email']) //{ id: 1, role: 'admin' }
```

- 객체와 객체에서 제외할 키의 배열을 받아서
- 키의 배열과 일치하지 않은값을 구해
- 새로운 배열로 반환합니다.

## Zip

### zip이란 무엇일까?

던달받은 배열을 다른 배열의 요소와 결합하는 함수이며 여러배열을 하나의 튜플 배열로 결합하는 데 사용됩니다.

```jsx
function zip(...arrays) {
  const maxLength = Math.max(...arrays.map((array) => array.length))
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, j) => arrays[j][i])
  })
}

// 좌표를 포함하는 세 배열을 정의
const xCoordinates = [1, 2, 3, 4]
const yCoordinates = [5, 6, 7, 8]
const zCoordinates = [3, 6, 1, 7]

// 각 좌표의 배열을 zip된 배열로 만들기
const points = zip(xCoordinates, yCoordinates, zCoordinates) // [[1, 5, 3], [2, 6, 6], [3, 7, 1], [4, 8, 7]]
```

- 배열을 받아서 배열의 총 갯수를 확인한뒤
- 각 배열의 자릿수의 값을 합쳐 새로운 배열을 생성합니다.
