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


export type MapIteratorProps = {
    /**
     * The elements to be inspected
     */
    of: Map<any, any> | ReadonlyMap<any, any>;

    /**
     * The render function to be executed
     */
    render: (value: any, key: any, index: number) => React.ReactNode;
}


export const MapIterator: any = (props: MapIteratorProps) => {
    if (!props?.of || props.of.size === 0) {
        return undefined;
    }
    return Array.from(props.of).map((item, index) => props?.render(item[1], item[0], index));
}
