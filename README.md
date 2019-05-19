# 说明

Redux 和 React 之间没有关系。Redux 支持 React、Angular、Ember、jQuery 甚至纯 JavaScript。

尽管如此，Redux 还是和 React 和 Deku 这类库搭配起来用最好，因为这类库允许你以 state 函数的形式来描述界面，Redux 通过 action 的形式来发起 state 变化。

# 项目步骤

```$bash
npm config set registry https://registry.npm.taobao.org/
npx create-react-app .
npm install

npm run start

npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools
```
