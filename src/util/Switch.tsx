/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import React from 'react';


export type SwitchCaseProps = {
    condition: boolean | number | string | null | undefined;
    render?: () => React.ReactNode;
}

export type SwitchDefaultProps = {
    render?: () => React.ReactNode;
}

export const Switch: any = (props: React.PropsWithChildren<any>) => {
    let caseCount = 0, defaultCount = 0;
    React.Children.forEach(props.children, (child: React.ReactNode) => {
        const childType = (child as React.ReactElement).type;
        if (childType === Switch.Case) {
            caseCount++;
        }
        if (childType === Switch.Default) {
            defaultCount++;
        }
    });
    if (caseCount === 0 && defaultCount === 0) {
        throw SyntaxError(`[Switch] must has any statements of 'Switch.Case/Switch.Default' at least!`);
    }
    if (defaultCount > 1) {
        throw SyntaxError(`Statement of 'Switch.Default' for [Switch] must be a single one at most!`);
    }

    let caseValue: React.ReactNode = null, defaultValue: React.ReactNode = null;
    React.Children.forEach(props?.children, child => {
        const childType = (child as React.ReactElement).type;
        if (childType === Switch.Case && child?.props?.condition) {
            caseValue = child;
        }
        if (childType === Switch.Default) {
            defaultValue = child;
        }
    });
    return caseValue || defaultValue;
}

Switch.Case = (props: React.PropsWithChildren<SwitchCaseProps>): React.ReactNode => {
    return props?.condition ? (props?.render ? props?.render() : props?.children) : null;
};

Switch.Default = (props?: React.PropsWithChildren<SwitchDefaultProps>): React.ReactNode => {
    return props?.render ? props?.render() : props?.children;
};
