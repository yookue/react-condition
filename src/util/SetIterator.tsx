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
 * Properties for react `SetIterator`
 *
 * @author David Hsing
 *
 * @ignore
 */
export type SetIteratorProps = React.PropsWithChildren<{
    /**
     * The elements to be inspected
     */
    of: Set<any>;

    /**
     * The render function to be executed
     */
    render?: (item: any, index: number) => React.ReactNode;
}>;


/**
 * Control statement for react `SetIterator`
 *
 * @author David Hsing
 *
 * @ignore
 */
export const SetIterator: any = (props: SetIteratorProps) => {
    return Array.from(props.of).map((item, index) => {
        if (props.render) {
            return props.render(item, index);
        } else if (!props.render && props.children) {
            return (
                <div key={index} className="condition-set-iterator">
                    {props.children}
                </div>
            );
        }
        return null;
    });
};
