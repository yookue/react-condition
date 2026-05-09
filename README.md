# @unikue/react-condition

[![NPM version](https://img.shields.io/npm/v/@unikue/react-condition.svg?style=flat)](https://npmjs.org/package/@unikue/react-condition)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE.txt)
[![NPM downloads](http://img.shields.io/npm/dm/@unikue/react-condition.svg?style=flat)](https://npmjs.org/package/@unikue/react-condition)

🏅 Render components conditionally for React 👍

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
$ npm install @unikue/react-condition --save
```

Then, you may import components as follows:

```tsx | pure
import {If, For, Switch, Do, While} from '@unikue/react-condition';
import {MapIterator, SetIterator, ObjectIterator} from '@unikue/react-condition';
```

Enjoy your coding journey with `react-condition`. ✌️

## Example

### If

> Both of the `If.Then` and `If.Else` have a `render` property (() => React.ReactNode), thus you can customize the rendering contents instead of the React `children`.

#### If

```tsx | pure
import React from 'react';
import {If} from '@unikue/react-condition';

export default () => {
    const param: boolean = true;
    return (
        <If condition={param}>
            <span>Hello World</span>
        </If>
    );
}
```

#### If-Then

```tsx | pure
import React from 'react';
import {If} from '@unikue/react-condition';

export default () => {
    const param: number = 1;
    return (
        <If condition={param}>
            <If.Then>
                <span>Hello World</span>
            </If.Then>
        </If>
    );
}
```

#### If-Else

```tsx | pure
import React from 'react';
import {If} from '@unikue/react-condition';

export default () => {
    const param: boolean = false;
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

#### If-Then-Else

```tsx | pure
import React from 'react';
import {If} from '@unikue/react-condition';

export default () => {
    const param: boolean = false;
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

### For

```tsx | pure
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

### Switch

> Both of the `Switch.Case` and `Switch.Default` have a `render` property (() => React.ReactNode), thus you can customize the rendering contents instead of the React `children`.

```tsx | pure
import React from 'react';
import {Switch} from '@unikue/react-condition';

export default () => {
    const username: string = 'admin';

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

```tsx | pure
import React from 'react';
import {Do} from '@unikue/react-condition';

export default () => {
    let param: number = 0;
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

```tsx | pure
import React from 'react';
import {While} from '@unikue/react-condition';

export default () => {
    let param: number = 0;
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

```tsx | pure
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

### SetIterator

```tsx | pure
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

### ObjectIterator

```tsx | pure
import React from 'react';
import {ObjectIterator} from '@unikue/react-condition';

export default () => {
    const param: object = {
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

## Copyright

Beijing Unikue Network Technology Ltd.

## Website

- Unikue: [https://unikue.cn](https://unikue.cn)
