## 개요

함수형 프로그래밍(FP)과 객체지향 프로그래밍(OOP)이 상당히 닮아있으며

두 패러다임의 특정한 패턴에 대한 추론을 배우면 두가지를 깊이 이해할 수 있다.

이 글에서는 **커링함수**를 주로 살펴볼 예정이다.

## 사실 커링을 매일 쓰고있다.

커링된 함수는 일반적으로 여러개의 매개변수를 받지 않는다.

대신 각 함수는 하나의 매개변수를 받고, 매개변수가 더 필요한 경우라면 함수는 두 번째 또는 그 이상의 매개변수들을 받기 위해 또 다른 내부 함수를 반환해야 한다.

```jsx
// 전형적인 함수
const sum = (n1,n2,n3)=> n1+n2+n3
sum(1,2,3) // 6

// 커링된 함수
const sum = (n1) => (n2) => (n3) => n1+n2+n3
sun(1)(2)(3) // 6
```

특히 자바스크립트에는 커링을 위한 문법적 설탕이 없기 때문에 예쁘게 보이지는 않는다. 

그리고 코드가 조금 별로이다. 하지만 이 방식은 훌륭하며 객체지향 프로그래밍에서 의미만 다르게 동일한 패턴을 사용하고 있다.

커링을 통해 무엇을 얻을 수 있을까?

### 함수형 프로그래밍을 살펴보자,

```jsx
const user = {
	userName:'lala',
	firstName:'kim',
}

const fullName = (user) => `${user.userName} ${user.fullName}`
```

이 두가지 기능만으로만 복잡한 표현을 생성한다고 가정해보자,

모든 곳에 전역값을 두지 않고 어떤 인스턴스가 더 이상 필요하지 않은지 걱정하지 않으면서 여러 유저를 인스턴스화하고 작업하는 것이 얼마나 힘들고 중복이 많을까?

이러한 데이터 가방을 각 기능과 컨텍스트 또는 데이터의 상태와 암시적으로 연결하여 컨텍스트에 맞게 생성한다면 더 직관적이지 않을까?

이것이 바로 객체를 컨텍스트에 그리고 덜 바보같이 만들고자 객체지향을 설계한 이유이다.

데이터 가방 콘텐츠의 대부분을 추상화하여 현실 세계의 객체처럼 컨텍스트에 맞는 동작을 갖기 위해서이다.

### 객체지향 프로그래밍을 살펴보자

객체지향 프로그래밍에서는 객체 라는 추상화에 데이터와 기능을 결합할 수 있다.

```jsx
class User {
	constructor(username,firstName,lastName,email){
		this.username = username
		this.firstName = firstName
		this.lastName = lastName
		this.email = email
	}

	fullName = () => "${this.userName} ${this.firstName}"
}
```

fullName은 더이상 매개변수를 받지 않는다. 컨텍스트 에 바인딩되기 때문이다. 

그리고 각 User객체의 인스턴스는 각자만의 컨텍스트와 데이터 필드를 가질 필요없이 대부분의 복잡한 객체와 동작을 모방할 수 있는 추상화를 향한 첫 단계이다.

### 함수형 프로그래밍 또는 커링과 어떤 관련이 있을까?

커링은 함수에서 장기적인 컨텍스트를 정의하여 밀접하게 연관된 다른 함수에서 암시적으로 사용할 수 있도록 하는 방법이다.

```jsx
class NumberScaler {
	constructor (value) {
		this.field = value
	}
	scaledBy = (factor) => this.field * factor
}
const five = new NumberScaler(5)
const fiveScaledBy2 = five.scaledBy(2)  // 10
const fiveScaledBy14 = five.scaledBy(14)  // 70
```

위 코드에서 5의 값을 가지는 NumberScaler 객체를 생성했다.

이제 이 객체를 느리게 사용하여 전달한 초깃값에 대해 더 많은 연산을 수행하여 객체 내 데이터의 값을 증가시킬 수 있다.

### 함수만을 사용한 예제

```jsx
const numberScaler = (value,factor) =>value*factor

const fiveScaledBy2 = numberScaler(5,2) // 10
const fiveScaledBy14 = numberScaler(5,14 // 70
```

결과값은 같지만, 숫자 5의 값을 조정할 때마다 함수에 컨텍스트를 열심히 제공해야 한다는 것을 알 수 있다. 

만약 더 많은 매개변수를 전달해야 하는 복잡한 예시였다면, 매번 모든 매개변수를 전달하거나 매개변수를 담는 가방을 만들어 작업하는 것은 아주 성가신 일일 것이다.

실제 우리가 한 작업을 객체지향 프로그래밍 방식으로 나타내면 다음과 같다.

```jsx
class NumberScaler(){
	constructor(value,factor){
		this.field = value
    this.factor = factor
	}
	scaled = () => this.field*this.factor
}
const fiveScaledBy2 = new NumberScaler(5, 2).scaled(); // 10
const fiveScaledBy14 = new NumberScaler(5, 14).scaled(); // 70
```

차이점과 문제점은 객체를 생성한 후에는 더이상 객체에서 로직의 일부를 재사용할 수 없다.

크기를 조정하려면 매번 새로 만들어야 한다

이방법은 틀리지는 않지만 제한적이며 객체로 많은 일을 할 수 없게된다. 

### 함수형 프로그래밍 (커링)

```jsx
const numberScaler = (value) => (factor) => value * factor;

const fiveScaler = numberScaler(5); // factor 매개변수를 받아 5를 곱하는 새로운 함수를 반환
const fiveScaledBy2 = fiveScaler(2); // 10
const fiveScaledBy14 = fiveScaler(14); // 70
```

숫자 5의 크기를 조정하기 위해 제공한 factor를 취하는 다른 함수의 팩토리 함수인 것처럼, 매개변수를 하나만 가지는 numberScaler함수를 부분적으로 적용했다

이를 커링된함수의 부분적용이라고한다.

## 결과

많은 변경사항 없이 유용하고 재사용할 수 있는 작업을 위해 두가지 모델을 사용할 수 있습니다.

```jsx
// OOP
const doubler = new NumberScaler(2)
doubler.scaledBy(5) // 10
doubler.scaledBy(6) // 12
doubler.scaledBy(7) // 14

// FP
const doubler = numberScaler(2)

doubler(5) //10
doubler(6) //12
doubler(7) //14
```

사용자 정의 코드를 작성하지 않고도 자체적으로 많은 작업을 수행할 수 있다.

가장 중요한 것은 객체지향 프로그래밍과 함수형 프로그래밍 모두에서 이를 달성할 수 있다는 점이다.