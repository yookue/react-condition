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


import {Switch} from '@yookue/react-condition';
import {render, screen} from '@testing-library/react';


describe('react-condition Switch', () => {
    test('Testing for Case', () => {
        const username: string = 'admin';
        render(
            <Switch>
                <Switch.Case condition={username.includes('admin')}>
                    <span data-testid='admin'>admin</span>
                </Switch.Case>
                <Switch.Case condition={username.includes('guest')}>
                    <span data-testid='guest'>guest</span>
                </Switch.Case>
                <Switch.Default>
                    <span data-testid='root'>root</span>
                </Switch.Default>
            </Switch>
        );
        // screen.debug();
        expect(screen.queryByTestId('admin')).toBeInTheDocument();
    });

    test('Testing for Default', () => {
        const username: string = 'root';
        render(
            <Switch>
                <Switch.Case condition={username.includes('admin')}>
                    <span data-testid='admin'>admin</span>
                </Switch.Case>
                <Switch.Case condition={username.includes('guest')}>
                    <span data-testid='guest'>guest</span>
                </Switch.Case>
                <Switch.Default>
                    <span data-testid='root'>root</span>
                </Switch.Default>
            </Switch>
        );
        // screen.debug();
        expect(screen.queryByTestId('root')).toBeInTheDocument();
    });
});
