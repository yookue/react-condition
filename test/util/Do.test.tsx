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


import {Do} from '@yookue/react-condition';
import {render, screen} from '@testing-library/react';


describe('react-condition Do', () => {
    test('Testing for number', () => {
        let param = 0;
        render(
            <Do
                condition={() => {
                    return param < 2;
                }}
                render={(index: number) => {
                    param++;
                    return (
                        <span key={index} data-testid={'jest-' + index}>Good luck</span>
                    );
                }}
            />
        );
        // screen.debug();
        expect(screen.queryByTestId('jest-0')).toBeInTheDocument();
        expect(screen.queryByTestId('jest-1')).toBeInTheDocument();
        expect(screen.queryByTestId('jest-2')).not.toBeInTheDocument();
    });
});
