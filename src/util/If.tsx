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


export type IfProps = {
    condition: boolean | number | string | null | undefined;
}

export type IfThenProps = {
    render?: () => React.ReactNode;
}

export type IfElseProps = IfThenProps

export const If: any = (props: React.PropsWithChildren<IfProps>) => {
    // return props?.condition ? (props?.render ? props?.render() : props?.children) : null;
    if (!props?.children) {
        return null;
    }
    let thenCount = 0, elseCount = 0;
    React.Children.forEach(props.children, (child: React.ReactNode) => {
        const childType = (child as React.ReactElement).type;
        if (childType === If.Then) {
            thenCount++;
        }
        if (childType === If.Else) {
            elseCount++;
        }
    });
    if (thenCount > 1 || elseCount > 1) {
        throw SyntaxError(`Each statement of 'If.Then/If.Else' for [If condition='${props.condition}'] must be a single one!`);
    }

    return React.Children.map(props.children, (child: React.ReactNode) => {
        const isElse = (child as React.ReactElement).type === If.Else;
        return ((props.condition && !isElse) || (!props.condition && isElse)) ? child : null;
    });
}

If.Then = (props?: React.PropsWithChildren<IfThenProps>): React.ReactNode => {
    return props?.render ? props?.render() : props?.children;
}

If.Else = (props?: React.PropsWithChildren<IfElseProps>): React.ReactNode => {
    return props?.render ? props?.render() : props?.children;
}
