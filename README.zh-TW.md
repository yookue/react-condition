# @unikue/react-condition

[![NPM version](https://img.shields.io/npm/v/@unikue/react-condition.svg?style=flat)](https://npmjs.org/package/@unikue/react-condition)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE.txt)
[![NPM downloads](http://img.shields.io/npm/dm/@unikue/react-condition.svg?style=flat)](https://npmjs.org/package/@unikue/react-condition)

🏅 React 條件性渲染組件 👍

## 特性

✅ 支持 'If' 條件渲染

✅ 支持 'If'-'Then' 條件渲染

✅ 支持 'If'-'Else' 條件渲染

✅ 支持 'If'-'Then'-Else' 條件渲染

✅ 支持 'For' 條件渲染

✅ 支持 'Do' 條件渲染

✅ 支持 'While' 條件渲染

✅ 支持 'MapIterator' 條件渲染

✅ 支持 'SetIterator' 條件渲染

✅ 支持 'ObjectIterator' 條件渲染

## 快速開始

您可以在您的 React 項目中使用以下命令來安裝本組件庫：

```bash
$ npm install @unikue/react-condition --save
```

然后，您可以使用以下命令來導入組件：

```jsx | pure
import {If, For, Switch, Do, While} from '@unikue/react-condition';
import {MapIterator, SetIterator, ObjectIterator} from '@unikue/react-condition';
```

享受您和 `react-condition` 的編程之旅吧 ✌️

## 示例

### If

> `If.Then` 和 `If.Else` 都有一個 `render` 屬性 `() => React.ReactNode`，這樣您也可以通過它來返回自定義的渲染內容, 比 React 的 `children` 屬性權重要高。

#### `If` 語句

```jsx | pure
import React from 'react';
import {If} from '@unikue/react-condition';

export default () => {
    const param = true;
    return (
        <If condition={param}>
            <span>Hello World</span>
        </If>
    );
}
```

#### `If`-`Then` 語句

```jsx | pure
import React from 'react';
import {If} from '@unikue/react-condition';

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

#### `If`-`Else` 語句

```jsx | pure
import React from 'react';
import {If} from '@unikue/react-condition';

export default () => {
    const param = false;
    return (
        <If condition={param}>
            <span>Hello World</span>
            <If.Else>
                <span>Hello Unikue</span>
            </If.Else>
        </If>
    );
}
```

#### `If`-`Then`-`Else` 語句

```jsx | pure
import React from 'react';
import {If} from '@unikue/react-condition';

export default () => {
    const param = false;
    return (
        <If condition={param}>
            <If.Then>
                <span>Hello World</span>
            </If.Then>
            <If.Else>
                <span>Hello Unikue</span>
            </If.Else>
        </If>
    );
}
```

### `For` 語句

```jsx | pure
import React from 'react';
import {For} from '@unikue/react-condition';

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

### `Switch` 語句

> `Switch.Case` 和 `Switch.Default` 都有一個 `render` 屬性 `() => React.ReactNode`，這樣您也可以通過它來返回自定義的渲染內容, 比 React 的 `children` 屬性權重要高。

```jsx | pure
import React from 'react';
import {Switch} from '@unikue/react-condition';

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

### `Do` 語句

```jsx | pure
import React from 'react';
import {Do} from '@unikue/react-condition';

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

### `While` 語句

```jsx | pure
import React from 'react';
import {While} from '@unikue/react-condition';

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

### `MapIterator` 語句

```jsx | pure
import React from 'react';
import {MapIterator} from '@unikue/react-condition';

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

### `SetIterator` 語句

```jsx | pure
import React from 'react';
import {SetIterator} from '@unikue/react-condition';

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

### `ObjectIterator` 語句

```jsx | pure
import React from 'react';
import {ObjectIterator} from '@unikue/react-condition';

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

## 授權

本組件庫授權基于 [MIT License](https://mit-license.org/) 協議

## 版權

北京攸科網絡科技有限公司

## 網站

- Unikue: [https://unikue.cn](https://unikue.cn)
