# @yookue/react-condition

[![NPM version](https://img.shields.io/npm/v/@yookue/react-condition.svg?style=flat)](https://npmjs.org/package/@yookue/react-condition)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE.txt)
[![NPM downloads](http://img.shields.io/npm/dm/@yookue/react-condition.svg?style=flat)](https://npmjs.org/package/@yookue/react-condition)

🏅 Render components conditionally for react 👍

## Features

✅ Supports 'If' conditions

✅ Supports 'If'-'Then' conditions

✅ Supports 'If'-'Else' conditions

✅ Supports 'If'-'Then'-Else' conditions

✅ Supports 'For' conditions

✅ Supports 'Do' conditions

✅ Supports 'While' conditions

✅ Supports 'MapIterator' conditions

✅ Supports 'SetIterator' conditions

✅ Supports 'ObjectIterator' conditions

## Quickstart

You can install this package in your React project as follows:

```bash
$ npm install @yookue/react-condition --save
```

Then, you may import components as follows:

```jsx | pure
import {If, For, Switch, Do, While, MapIterator, SetIterator, ObjectIterator} from '@yookue/react-condition';
```

Enjoy your coding journey with `react-condition`. ✌️

## Example

### If

> Both of the `If.Then` and `If.Else` have a `render` property (() => React.ReactNode), thus you can customize the rendering contents instead of the React `Children`.

#### `If` statement

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

#### `If`-`Then` statement

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

#### `If`-`Else` statement

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

#### `If`-`Then`-`Else` statement

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

### For

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

### Switch

> Both of the `Switch.Case` and `Switch.Default` have a `render` property (() => React.ReactNode), thus you can customize the rendering contents instead of the React `Children`.

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

### Do

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

### While

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

### MapIterator

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

### SetIterator

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

### ObjectIterator

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

## License

This project is under the [MIT License](https://mit-license.org/).

## Website

- Yookue: [https://yookue.com](https://yookue.com)
