# @yookue/react-condition

[![NPM version](https://img.shields.io/npm/v/@yookue/react-condition.svg?style=flat)](https://npmjs.org/package/@yookue/react-condition)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE.txt)
[![NPM downloads](http://img.shields.io/npm/dm/@yookue/react-condition.svg?style=flat)](https://npmjs.org/package/@yookue/react-condition)

🏅 Render components conditionally for React 👍

## Features

1️⃣ Supports 'If' conditions.
2️⃣ Supports 'If'-'Then' conditions.
3️⃣ Supports 'If'-'Else' conditions.
4️⃣ Supports 'If'-'Then'-Else' conditions.
🔁 Supports 'For' conditions.
🔁 Supports 'Do' conditions.
🔁 Supports 'While' conditions.

## Quickstart

You can install react-condition package in your existing react project as follows:

```bash
$ npm install @yookue/react-condition --save
```

Then, you may import components of react-condition as follows:

```jsx | pure
import {If, For, Switch, Do, While} from '@yookue/react-condition';
```

Enjoy your journey in coding your projects with react-condition. ✌️

## Example

### If

> Both of the `If.Then` and `If.Else` have a `render` property (() => React.ReactNode), thus you can customize the rendering contents instead of the React `Children`.

#### The `If` statement

```jsx | pure
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

#### The `If`-`Then` statement

```jsx | pure
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

#### The `If`-`Else` statement

```jsx | pure
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

#### The `If`-`Then`-`Else` statement

```jsx | pure
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

## License

This project is under the [MIT](https://mit-license.org/) License (MIT)

## Website

- Yookue: [https://yookue.com](https://yookue.com)
