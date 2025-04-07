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
 * Properties for react `Switch`
 *
 * @author David Hsing
 *
 * @ignore
 */
export type SwitchProps = React.PropsWithChildren<{
    /**
     * Whether to validate the children nodes
     */
    validation?: boolean;
}>;


/**
 * Properties for react `Switch.Case`
 *
 * @author David Hsing
 *
 * @ignore
 */
export type SwitchCaseProps = React.PropsWithChildren<{
    /**
     * The condition to be checked
     */
    condition: boolean | number | string | null | undefined;

    /**
     * The render function to be executed
     */
    render?: () => React.ReactNode;
}>;


/**
 * Properties for react `Switch.Default`
 *
 * @author David Hsing
 *
 * @ignore
 */
export type SwitchDefaultProps = React.PropsWithChildren<{
    render?: () => React.ReactNode;
}>;


/**
 * Control statement for react `Switch`
 *
 * @author David Hsing
 *
 * @ignore
 */
export const Switch: any = (props?: SwitchProps) => {
    if (!props?.children) {
        return undefined;
    }
    if (props?.validation !== false) {
        let caseCount = 0, defaultCount = 0;
        React.Children.forEach(props.children, (item: any) => {
            const childType = (item as React.ReactElement)?.type;
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
    }
    let caseValue = undefined, defaultValue = undefined;
    React.Children.forEach(props.children, (item: any) => {
        const childType = (item as React.ReactElement)?.type;
        if (childType === Switch.Case && item.props?.condition) {
            caseValue = item.props?.children;
        }
        if (childType === Switch.Default) {
            defaultValue = item.props?.children;
        }
    });
    return caseValue ?? defaultValue;
};


/**
 * Control statement for react `Switch.Case`
 *
 * @author David Hsing
 *
 * @ignore
 */
Switch.Case = (props: SwitchCaseProps) => {
    return !props.condition ? undefined : (props?.render ? props.render() : props.children);
};


/**
 * Control statement for react `Switch.Default`
 *
 * @author David Hsing
 *
 * @ignore
 */
Switch.Default = (props?: SwitchDefaultProps) => {
    return props?.render ? props.render() : props?.children;
};
