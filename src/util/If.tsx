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


/**
 * Properties for react `If`
 *
 * @author David Hsing
 *
 * @ignore
 */
export type IfProps = React.PropsWithChildren<{
    /**
     * The condition to be checked
     */
    condition: boolean | number | string | undefined | null;

    /**
     * Whether to validate the children nodes
     */
    validation?: boolean;
}>;


/**
 * Properties for react `If.Then`
 *
 * @author David Hsing
 *
 * @ignore
 */
export type IfThenProps = IfProps & {
    /**
     * The render function to be executed
     */
    render?: () => React.ReactNode;
};


/**
 * Properties for react `If.Else`
 *
 * @author David Hsing
 *
 * @ignore
 */
export type IfElseProps = IfThenProps;


/**
 * Control statement for react `If`
 *
 * @author David Hsing
 *
 * @ignore
 */
export const If: any = (props: IfProps) => {
    if (!props.children) {
        return undefined;
    }
    if (props.validation !== false) {
        let thenCount = 0, elseCount = 0;
        React.Children.forEach(props.children, (item: any) => {
            const childType = (item as React.ReactElement)?.type;
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
    }
    return React.Children.map(props.children, (item: any) => {
        const isElse = (item as React.ReactElement)?.type === If.Else;
        return ((props.condition && !isElse) || (!props.condition && isElse)) ? item : null;
    });
};


/**
 * Control statement for react `If.Then`
 *
 * @author David Hsing
 *
 * @ignore
 */
If.Then = (props?: IfThenProps) => {
    return props?.render ? props.render() : props?.children;
};


/**
 * Control statement for react `If.Else`
 *
 * @author David Hsing
 *
 * @ignore
 */
If.Else = (props?: IfElseProps) => {
    return props?.render ? props.render() : props?.children;
};
