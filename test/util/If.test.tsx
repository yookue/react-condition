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


import {If} from '@yookue/react-condition';
import {render, screen} from '@testing-library/react';


describe('react-condition If', () => {
    test('Testing object', () => {
        const param: Object = {foo: 'bar'};
        render(
            <If condition={param} validation={false}>
                <If.Then>
                    <span data-testid='jest'>Good luck</span>
                </If.Then>
                <If.Else>
                    <span data-testid='oops'>Bad luck</span>
                </If.Else>
            </If>
        );
        // screen.debug();
        expect(screen.queryByTestId('jest')).toBeInTheDocument();
        expect(screen.queryByTestId('oops')).not.toBeInTheDocument();
    });

    test('Testing none then', () => {
        const param: boolean = true;
        render(
            <If condition={param}>
                <span data-testid='jest'>Good luck</span>
                <If condition={'world'.length === 5}>
                    <span data-testid='world'>Hello World!</span>
                </If>
            </If>
        );
        // screen.debug();
        expect(screen.queryByTestId('jest')).toBeInTheDocument();
    });

    test('Testing with then', () => {
        const param: boolean = true;
        render(
            <If condition={param}>
                <If.Then render={() => {
                    return (<span data-testid='jest'>Good luck</span>);
                }}>
                    <span data-testid='oops'>Oops</span>
                </If.Then>
                <If.Else>
                    <span data-testid='world'>Hello World!</span>
                </If.Else>
            </If>
        );
        // screen.debug();
        expect(screen.queryByTestId('jest')).toBeInTheDocument();
    });

    test('Testing with else', () => {
        const param1: number = 0, param2: number = 1;
        render(
            <If condition={param1}>
                <span data-testid='oops'>Oops</span>
                <If.Else>
                    <span data-testid='jest'>Good luck</span>
                </If.Else>
            </If>
        );
        // screen.debug();
        expect(screen.queryByTestId('jest')).toBeInTheDocument();
    });

    test('Testing just else', () => {
        const param1: number = 0, param2: number = 1;
        render(
            <If condition={param1}>
                <If.Else>
                    <span data-testid='jest'>Good luck</span>
                </If.Else>
            </If>
        );
        // screen.debug();
        expect(screen.queryByTestId('jest')).toBeInTheDocument();
    });
});
