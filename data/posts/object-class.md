## 객체(Object)

JavaScript에서 객체(Object)는 데이터와 해당 데이터를 조작하는 동작(메서드)을 포함하는 자료 구조입니다. 객체는 중괄호 **`{}`**를 사용하여 생성하며, 키-값 쌍의 속성(properties)을 포함합니다. 각 속성은 키와 값으로 구성되며, 키는 문자열이어야 합니다.

아래는 JavaScript 객체의 예시입니다:

```jsx
let person = {
  name: 'John',
  age: 30,
  sayHello: function () {
    console.log('Hello!')
  },
}
```

위의 예제에서 **`person`**은 객체입니다. 객체는 중괄호로 감싸진 키-값 쌍으로 구성되어 있습니다. **`name`**과 **`age`**는 객체의 속성이며, **`'John'`**과 **`30`**은 해당 속성의 값입니다. **`sayHello`**는 객체의 메서드로, 함수를 값으로 가지고 있습니다.

객체의 속성에 접근하려면 **`.`** 연산자를 사용하거나 **`[ ]`**를 통해 속성 이름을 문자열로 전달하여 접근할 수 있습니다.

```jsx
console.log(person.name) // 출력: 'John'
console.log(person['age']) // 출력: 30

person.sayHello() // 출력: 'Hello!'
```

또한 객체는 동적으로 속성을 추가하거나 수정할 수 있습니다.

```jsx
person.city = 'New York'
person.age = 35

console.log(person.city) // 출력: 'New York'
console.log(person.age) // 출력: 35
```

JavaScript의 객체는 유연하며 다양한 용도로 사용될 수 있습니다. 객체는 데이터와 해당 데이터를 다루는 동작을 하나로 묶을 수 있어 코드의 구조와 모듈화에 유용합니다.

## 클래스 (class)

JavaScript 클래스(Class)는 객체 지향 프로그래밍을 지원하기 위해 ES6(ECMAScript 2015)에서 도입된 개념입니다. 클래스는 객체를 생성하기 위한 템플릿이며, 객체의 속성과 메서드를 정의하는 데 사용됩니다.

클래스를 사용하여 객체를 생성하려면 다음과 같은 구문을 사용합니다:

```jsx
class MyClass {
  constructor(name) {
    this.name = name
  }

  sayHello() {
    console.log(`Hello, ${this.name}!`)
  }
}
```

위의 예제에서 **`MyClass`**는 클래스의 이름이며, **`constructor`**는 클래스의 생성자입니다. 생성자는 클래스로부터 객체를 생성할 때 호출되며, 해당 객체의 초기화를 담당합니다. **`this.name = name;`**은 생성자 내에서 객체의 속성을 정의합니다.

**`sayHello()`**는 클래스의 메서드로, 객체가 가지는 동작을 정의합니다. 이 메서드는 **`this.name`** 속성을 사용하여 인사 메시지를 출력합니다.

클래스를 사용하여 객체를 생성할 때는 **`new`** 연산자를 사용합니다:

```jsx
let myObject = new MyClass('John')
myObject.sayHello() // 출력: 'Hello, John!'
```

위의 예제에서 **`new MyClass('John')`**은 **`MyClass`** 클래스의 인스턴스를 생성하고, **`myObject`** 변수에 할당합니다. **`myObject.sayHello()`**를 호출하여 해당 객체의 메서드를 실행할 수 있습니다.

클래스는 객체 지향 프로그래밍의 다양한 개념을 지원합니다.

상속, 다형성, 캡슐화 등의 개념을 활용하여 코드를 구조화하고 재사용성을 높일 수 있습니다. ES6 이전에는 프로토타입 기반으로 객체를 생성하고 상속하는 방식이 주로 사용되었지만, 클래스를 도입함으로써 객체 지향 프로그래밍을 보다 편리하게 구현할 수 있게 되었습니다.

아래는 클래스 상속을 구현하는 예시입니다:

```jsx
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} makes a sound.`)
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }

  speak() {
    console.log(`${this.name} barks.`)
  }
}

let dog = new Dog('Buddy')
dog.speak() // 출력: 'Buddy barks.'
```

위의 예제에서 **`Animal`** 클래스는 기본 클래스이며, **`Dog`** 클래스는 **`Animal`** 클래스를 상속받은 하위 클래스입니다.

**`extends`** 키워드를 사용하여 상속 관계를 선언합니다.

**`super(name)`**은 하위 클래스의 생성자에서 상위 클래스의 생성자를 호출합니다.

하위 클래스인 **`Dog`**는 상위 클래스의 **`speak()`** 메서드를 오버라이드하여 동작을 변경할 수 있습니다. 이를 통해 개(Dog) 클래스는 독자적인 **`speak()`** 동작을 가집니다.

**`dog.speak()`**를 호출하면 하위 클래스의 **`speak()`**가 실행되며, **`'Buddy barks.'`**가 출력됩니다.

상속을 사용하면 기존 클래스를 확장하고 기능을 추가하거나 재정의하여 코드의 재사용성과 확장성을 높일 수 있습니다. 상위 클래스의 속성과 메서드를 하위 클래스가 상속받으므로 중복된 코드를 줄이고 유지보수를 용이하게 할 수 있습니다.
