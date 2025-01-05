# @yookue/react-condition

[![NPM version](https://img.shields.io/npm/v/@yookue/react-condition.svg?style=flat)](https://npmjs.org/package/@yookue/react-condition)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE.txt)
[![NPM downloads](http://img.shields.io/npm/dm/@yookue/react-condition.svg?style=flat)](https://npmjs.org/package/@yookue/react-condition)

🏅 React 条件性渲染组件 👍

## 特性

✅ 支持 'If' 条件渲染

✅ 支持 'If'-'Then' 条件渲染

✅ 支持 'If'-'Else' 条件渲染

✅ 支持 'If'-'Then'-Else' 条件渲染

✅ 支持 'For' 条件渲染

✅ 支持 'Do' 条件渲染

✅ 支持 'While' 条件渲染

✅ 支持 'MapIterator' 条件渲染

✅ 支持 'SetIterator' 条件渲染

✅ 支持 'ObjectIterator' 条件渲染

## 快速开始

您可以在您的 React 项目中使用以下命令来安装本组件库：

```bash
$ npm install @yookue/react-condition --save
```

然后，您可以使用以下命令来导入组件：

```jsx | pure
import {If, For, Switch, Do, While} from '@yookue/react-condition';
import {MapIterator, SetIterator, ObjectIterator} from '@yookue/react-condition';
```

享受您和 `react-condition` 的编程之旅吧 ✌️

## 示例

### If

> `If.Then` 和 `If.Else` 都有一个 `render` 属性 `() => React.ReactNode`，这样您也可以通过它来返回自定义的渲染内容, 比 React 的 `children` 属性权重要高。

#### `If` 语句

```jsx | pure
import React from 'react';
import {If} from '@yookue/react-condition';

export default () => {
    const param = true;
    return (
        <If condition={param}>
            <span>Hello World</span>
        </If>
    );
}
```

#### `If`-`Then` 语句

```jsx | pure
import React from 'react';
import {If} from '@yookue/react-condition';

export default () => {
    const param = 1;
    return (
        <If condition={param}>
            <If.Then>
                <span>Hello World</span>
            </If.Then>
        </If>
    );
}
```

#### `If`-`Else` 语句

```jsx | pure
import React from 'react';
import {If} from '@yookue/react-condition';

export default () => {
    const param = false;
    return (
        <If condition={param}>
            <span>Hello World</span>
            <If.Else>
                <span>Hello Yookue</span>
            </If.Else>
        </If>
    );
}
```

#### `If`-`Then`-`Else` 语句

```jsx | pure
import React from 'react';
import {If} from '@yookue/react-condition';

export default () => {
    const param = false;
    return (
        <If condition={param}>
            <If.Then>
                <span>Hello World</span>
            </If.Then>
            <If.Else>
                <span>Hello Yookue</span>
            </If.Else>
        </If>
    );
}
```

### `For` 语句

```jsx | pure
import React from 'react';
import {For} from '@yookue/react-condition';

export default () => {
    return (
        <For
            of={['foo', 'bar']}
            render={(item, index) => {
                return (
                    <span key={index}>Hello, {item}</span>
                );
            }}
        />
    );
}
```

### `Switch` 语句

> `Switch.Case` 和 `Switch.Default` 都有一个 `render` 属性 `() => React.ReactNode`，这样您也可以通过它来返回自定义的渲染内容, 比 React 的 `children` 属性权重要高。

```jsx | pure
import React from 'react';
import {Switch} from '@yookue/react-condition';

export default () => {
    const username = 'admin';

    return (
        <Switch>
            <Switch.Case condition={username.includes('admin')}>
                <span>admin</span>
            </Switch.Case>
            <Switch.Case condition={username.includes('guest')}>
                <span>guest</span>
            </Switch.Case>
            <Switch.Default>
                <span>root</span>
            </Switch.Default>
        </Switch>
    );
}
```

### `Do` 语句

```jsx | pure
import React from 'react';
import {Do} from '@yookue/react-condition';

export default () => {
    let param = 0;
    return (
        <Do
            condition={() => {
                return param < 2;
            }}
            render={(index) => {
                param++;
                return (
                    <span key={index}>Hello, {index}</span>
                );
            }}
        />
    );
}
```

### `While` 语句

```jsx | pure
import React from 'react';
import {While} from '@yookue/react-condition';

export default () => {
    let param = 0;
    return (
        <While
            condition={() => {
                return param++ < 2;
            }}
            render={(index) => {
                return (
                    <span key={index}>Hello, {index}</span>
                );
            }}
        />
    );
}
```

### `MapIterator` 语句

```jsx | pure
import React from 'react';
import {MapIterator} from '@yookue/react-condition';

export default () => {
    const map = new Map([
        ['foo', 'bar'],
        ['hello', 'world'],
    ]);
    return (
        <MapIterator
            of={map}
            render={(value, key, index) => {
                return (
                    <span key={index}>Hooray, {key}-{value}</span>
                );
            }}
        />
    );
}
```

### `SetIterator` 语句

```jsx | pure
import React from 'react';
import {SetIterator} from '@yookue/react-condition';

export default () => {
    const set = new Set<string>([
        'foo-bar',
        'hello-world',
    ]);
    return (
        <SetIterator
            of={set}
            render={(item, index) => {
                return (
                    <span key={index}>Hooray, {item}</span>
                );
            }}
        />
    );
}
```

### `ObjectIterator` 语句

```jsx | pure
import React from 'react';
import {ObjectIterator} from '@yookue/react-condition';

export default () => {
    const param = {
        'foo': 'bar',
        'hello': 'world',
    };
    return (
        <ObjectIterator
            of={param}
            render={(value, key, index) => {
                return (
                    <span key={index}>Hooray, {key}-{value}</span>
                );
            }}
        />
    );
}
```

## 授权

本组件库授权基于 [MIT License](https://mit-license.org/) 协议

## 版权

北京攸科网络科技有限公司

## 网站

- Yookue: [https://yookue.com](https://yookue.com)
