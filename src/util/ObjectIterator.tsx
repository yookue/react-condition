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


export type ObjectIteratorProps<T extends object> = React.PropsWithChildren<{
    /**
     * The object to be inspected
     */
    of: T;

    /**
     * The render function to be executed
     */
    render?: (value: any, key: string, index: number) => React.ReactNode;
}>;


/**
 * Control statement for react `ObjectIterator`
 *
 * @author David Hsing
 */
export const ObjectIterator: any = (props: ObjectIteratorProps<object>) => {
    if (!props.of) {
        return null;
    }
    return Object.keys(props.of).map((item, index) => {
        if (props.render) {
            return props.render(props.of[item as keyof typeof props.of], item, index);
        } else if (!props.render && props.children) {
            return (
                <div key={index} className="condition-object-iterator">
                    {props.children}
                </div>
            );
        }
        return null;
    });
};
