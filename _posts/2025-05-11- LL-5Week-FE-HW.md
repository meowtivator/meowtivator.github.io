---
title: 멋사 5주차 프론트엔드 세션 과제
date: 2025-05-11 13:13:51 +0900
description: 멋쟁이사자처럼 동아리의 프론트엔드 세션 React 과제를 정리하였습니다.
categories: [WEB, Frontend]
tags: [web, basic, frontend, react, 멋사, 과제]
---

## 과제 개요
### React의 Props 과제
`Button.jsx` 컴포넌트를 수정하고, `App.jsx`에서 Props를 전달하여 버튼을 예시 사진과 같이 표현하여라.
![img-description](frontend/5week_hw/5week_hw_ex.png)
_과제 예시 사진_

## 과제 수행
### Button.jsx 코드
```jsx
const Button = ({text, backgroundColor}) => {
    const style = {
        color : "white",
        backgroundColor : backgroundColor,
        boxShadow : "10px",
        padding : "10px",
        margin : "5px",
        borderRadius : "20px",
    }
    return (
        <button style={style}>{text}</button>
    )
}

export default Button
```

### App.jsx 코드
```jsx
import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx'

function App() {
  return (
    <>
        <Button text={"메일"} backgroundColor={"red"}/>
        <Button text={"카페"} backgroundColor={"orange"}/>
        <Button text={"블로그"} backgroundColor={"green"}/>
    </>
  )
}

export default App

```
### 실행 결과
![img-description](/frontend/5week_hw/HW_result.png)
_코드 실행 화면_


## 코드 설명
jsx에서는 Props를 통해서 각 컴포넌트의 세부 설정을 해줄 수 있다는 성질을 이용하여, text와 backgroundColor 변수를 통해 버튼의 스타일을 설정해주었다.   

이렇게 5주차 프론트엔드 세션 과제를 완료했다.   
jsx 파일에서 컴포넌트를 통해 직접 css를 다루고 수정할 수 있는 부분이 매력적으로 느껴졌다. 조금 더 익숙해지면 웹페이지를 구축하는 것이 굉장히 편해질 것으로 예상된다.