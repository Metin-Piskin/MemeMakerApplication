import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import RadioButton from '../../src/Components/RadioButton';
import RadioButtonStyles from '../../src/Components/RadioButton/RadioButton-style';

jest.mock('react-native-paper')

test('renders correctly', () => {
    const comp = render(<RadioButton />);
    expect(comp).toMatchSnapshot();
});

test('should render title correctly', () => {
    const test = 'test';
    const comp = render(<RadioButton text={test} />);

    const Text = comp.getByTestId('radio-button-text').children[0];
    expect(Text).toBe(test);
});

test('should render default theme style', () => {
    const comp = render(<RadioButton />);
    const RadioButtonContainerStyle = comp.getByTestId('radio-button-container').props.style;

    expect(RadioButtonContainerStyle).toMatchObject(RadioButtonStyles.radiocontainer);
});

test('should render default theme style', () => {
    const comp = render(<RadioButton />);
    const RadioButtonTextStyle = comp.getByTestId('radio-button-text').props.style;

    expect(RadioButtonTextStyle).toMatchObject(RadioButtonStyles.text);
});
