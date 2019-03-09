---
title: "ReactJS من Class Component الى Functional Component - useState (الجزء الاول بالعربى)"
date: "2018-03-09"
categories: "technical"
author: zeyadetman
toArabic: true
---

السﻻم عليكم، فى البوست ده (متقسم على جزئين) هحول reactjs code من الـ class component للـ functional component. وهركز بشكل اساسى على `useState` و `useEffect`.
خلينا نبدأ بالجزء اﻻول واللى هنتكلم فيه عن الـ `useState`.

## State

### فى Class Component

فى الـ class component، بنعرّف `State` فى الـ `constructor` ولما نغيرها هنستخدم `setState()` وهنديها الـ `state` الجديدة، كما هو موضح فالكود التالى:

```jsx
import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Current count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

فى حاجة مهمة مفيدة فى الـ `useState` هى اننا ممكن نبعت فانكشن فى `argument` تانى كـ `callback` يعنى بحيث ان بمجرد ما يغير الـ `state` الـ `callback function` تكون معاها الـ `state` الجديدة
كما هو موضح فى الكود التالى:

```jsx
<button
  onClick={() =>
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count);
     })
  }
>
```

### فى Functional Component

فى الـ `functional component` ﻻ يوجد `constructor()` وﻻ `render()`.
فأول حاجة محتاجين نعملها هى اننا نـ `import` الـ `useState hook` من `react`.
`import React, { useState } from "react";`
`useState` تأخذ قيمة واحدة فقط، وترجع حاجتين القيمة الـ `stateful` وفانكشن عشان نغير بيها القيمة دى، فبنستخدمها زى كدة:
`const [state, setState] = useState(initialValue);`
الطريقة دى اسمها `Destructuring` ممكن تبحثوا عنها وتعرفوا عنها اكتر.
وبعد كدة هنستخدمها ببساطة زى مثال الـ `class`

```jsx
const [state, setState] = useState({
  count: 0
});

console.log(state.count); // 0
```

ونغيرها زى كدة:

```jsx
setState({ count: state.count + 1 });
```

#### لو عندنا اكتر من قيمة للـ state هنعمل ايه؟

عندنا حليين للموضوع ده

- اﻻول ببساطة هنستخدمه زى المثال اللى فات

```jsx
const [state, setState] = useState({
  count: 0,
  barcode: "1A"
});
```

بس ﻻتنسى انك بتغير القيمة اللى محتاجة تتغير وترجع الـ `state` القديم زى ما كان

```jsx
setState({
  ...state,
  barcode: "2B"
});
```

عشان لو كتبتها كدة `setState({barcode: "2B"});` هيبقى كأنك شيلت الـ `count` وجعلت الـ `state` بالـ `barcode` فقط.

- تانى حاجة وهى اننا ممكن نستخدم `useState` اكتر من مرة فى نفس الـ `component`

```jsx
const [count, setCount] = useState(0);
const [barcode, setBarcode] = useState("1A");
```

ونغيرهم زى كدة:

```jsx
setBarcode(value);
setCount(count + 1);
```

بس `useState` فيها مشكلة انها مش بتقبل `second argument/callback` يعنى لو الـ `state` متعرفش تستخدمها عشان تغير قيمة حاجة معينة معتمدة ع الـ `state`. فهنستخدم وقتها `hook` تانية اسمها `useEffect`.

قبل ما تنتهى من القراءة تركت لك مثالين ممكن تجرب فيهم اللى اتعلمته

- [useState in Functional Component](https://codesandbox.io/s/kkm2o57ky3)

  <iframe src="https://codesandbox.io/embed/kkm2o57ky3?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

- [state in Class Component](https://codesandbox.io/s/l49v8r45xq)

  <iframe src="https://codesandbox.io/embed/l49v8r45xq?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

فى الجزء التانى- هنتكلم عن الـ `useEffect`.
