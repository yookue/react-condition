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


export type WhileProps = React.PropsWithChildren<{
    /**
     * The condition to be checked
     */
    condition: () => boolean | number | string | undefined | null;

    /**
     * The render function to be executed
     */
    render?: (index: number) => React.ReactNode;
}>;


/**
 * Control statement for react `While`
 *
 * @author David Hsing
 */
export const While: any = (props: WhileProps) => {
    const result = [];
    let index = 0;
    while (props.condition()) {
        if (props.render) {
            result.push(props?.render(index));
        } else if (!props.render && props.children) {
            result.push(
                <div key={index} className="condition-while">
                    {props.children}
                </div>
            );
        }
        index++;
    }
    return result;
};
