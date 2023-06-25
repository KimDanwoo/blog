## Factory Pattern이란

팩토리 패턴은 생성될 정확한 클래스를 지정하지 않고 객체를 생성할 수 있는 설계 접근 방식이다.

팩토리 패턴의 기본 아이디어는 객체 생성을 위한 인터페이스 또는 추상 클래스를 정의 한 다음 하위 클래스가 인스턴스 화할 클래스를 결정하도록 하는 것이다.

펙토리 패턴은 공장에서 제품을 만드는 방식과 유사한 방식으로 객체를 생성하는 데 사용되는 패턴이기 때문에 제조 비유에서 이름을 따왔으며 중앙집중적이고 조직적인 방식으로 객체를 생성하는 것을 강조한다.

공장에서는 전문 작업자와 기계를 통해 원자재를 가공하고 완제품으로 조립한다.

완성된 제품은 포장되어 고객에게 배포된다. 마찬가지로 펙토리 패턴에서 객체는 입력 매개변수를 가져와 완성된 객체로 어셈블하는 특수 코드에 의해 생성된다.

## TypeScript Example

이 패턴에서 팩토리 메서드는 다양한 유형의 객체 생성을 담당하는 인터페이스 또는 추상 클래스에서 정의됩니다. 팩토리 메소드의 구체적인 구현은 제공된 입력을 기반으로 특정 유형의 객체를 생성합니다. 여기에서 추상적인 광고 클래스를 살펴보는 것으로 시작하겠습니다.

```tsx
abstract class Advertisement {
  abstract calculate(): number;
}
```

이 추상 클래스는 팩토리 패턴을 사용하여 생성하려는 다양한 유형의 광고에 대한 인터페이스를 정의합니다. 이 추상 클래스를 확장하는 구체적인 광고 클래스에 의해 구현될 단일 추상 메서드 계산이 있습니다. 이 메서드는 광고 비용을 나타내는 숫자를 반환합니다. 

이제 두 가지 구체적인 광고 클래스를 살펴보겠습니다.

```tsx
class BasicAdvertisement extends Advertisement {
  calculate(): number {
    return 100;
  }
}

class CostPerClickAdvertisement extends Advertisement {
  calculate(): number {
     return 90;
  }
}
```

이러한 클래스는 광고 인터페이스의 구체적인 구현입니다. 그들은 광고 비용이 계산될 때 클라이언트 코드에 의해 호출될 계산 방법의 자체 구현을 제공합니다. 다음으로, AdvertisementFactory 클래스를 살펴보겠습니다.

```tsx
class AdvertisementFactory {
  static create(type: 'basic' | 'cpc'): Advertisement {
    switch (type) {
      case "basic":
        return new BasicAdvertisement();
      case "cpc":
         return new CostPerClickAdvertisement();
      default:
        throw new Error("Invalid advertisement type");
    }
  }
}
```

이 클래스는 광고를 만드는 팩터리입니다. 생성할 광고 유형을 나타내는 유형을 취하는 정적 메소드 create가 있습니다. 이 메서드는 switch 문을 사용하여 생성할 광고 유형을 결정하고 해당하는 구체적인 광고 클래스의 인스턴스를 반환합니다. 마지막으로 클라이언트 코드를 살펴보겠습니다.

```tsx
const basicAd = AdvertisementFactory.create("basic");

basicAdCost = basicAd.calculate(); //basicAdCost is 100

const cpcAd = AdvertisementFactory.create("cpc");

cpcAdCost = cpcAd.calculate(); // cpcAdCost is 90
```

## 👍 언제 사용하나요?

팩토리 패턴은 생성할 객체의 정확한 유형을 컴파일 타임에 알 수 없는 상황에서 유용합니다. 클라이언트 코드를 개체 생성 프로세스에서 분리하여 더 많은 유연성을 허용할 수 있습니다. 팩토리 메서드는 생성 코드를 단순화하는 데 도움이 될 수 있으므로 유사한 생성 프로세스를 가진 객체가 많은 경우에도 유용합니다.

```tsx
class AdvertisementFactory {
  static create(type: AdvertisementType): Advertisement {
    switch (type) {
      case "basic":
        return new BasicAdvertisement();
      case "cpc":
        return new CostPerClickAdvertisement();
      case "gov":
        return new GovernmentSponsoredAdvertisement();
      case "summer":
        return new SummerSpecialAdvertisement();
      // ... more cases ...
      default:
        throw new Error("Invalid advertisement type");
    }
  }
}
```

## 👎 사용하지 않을 때는?

그러나 경우에 따라 Factory Pattern을 사용하는 것이 바람직하지 않을 수 있습니다. 우리 공장에서 특정 제품 라인을 생산하지 않는 것이 더 나은 경우를 상상할 수 있습니다(공장 관리자인 경우). 생성해야 하는 개체 유형이 몇 가지 뿐이고 생성 프로세스가 간단하거나 팩토리 클래스를 생성하는 오버헤드가 패턴 사용의 이점을 능가하는 경우에는 패턴을 사용하기에 가장 좋은 시기가 아닙니다. 또한 생성 프로세스가 복잡하고 각 객체에 대한 사용자 정의가 필요하여 일반적인 팩토리 메서드를 생성하기 어려울 때 이 패턴을 사용하는 것은 좋지 않습니다. 

`

## 🧹 결론 요컨대,

항상 필요하거나 바람직한 것은 아니지만, 특히 생성할 간단한 객체가 몇 개만 있거나 생성 프로세스가 복잡하고 사용자 정의가 필요한 경우 팩토리 패턴은 객체를 동적으로 생성하고 생성 프로세스에서 클라이언트 코드를 분리하는 데 유용합니다. .