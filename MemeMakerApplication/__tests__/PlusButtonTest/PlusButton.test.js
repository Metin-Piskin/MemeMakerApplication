import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import PlusButton from '../../src/Components/PlusButton';
import PlusButtonStyles from '../../src/Components/PlusButton/PlusButton-style';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-vector-icons/Feather', () => 'Feather');

test('renders correctly', () => {
    const comp = render(<PlusButton />);
    expect(comp).toMatchSnapshot();
});

test('should render press correctly', () => {
    const mockFunction = jest.fn();
    const comp = render(<PlusButton onPress={mockFunction} />);

    const PlusButtonPress = comp.getByTestId('plus-button-press');
    fireEvent(PlusButtonPress, 'press');

    expect(mockFunction).toBeCalled();
});

test('should render default theme style', () => {
    const comp = render(<PlusButton />);
    const PlusButtonContainerStyle = comp.getByTestId('plus-button-container').props.style;

    expect(PlusButtonContainerStyle).toMatchObject(PlusButtonStyles.container);
});

test('should render default theme style', () => {
    const comp = render(<PlusButton />);
    const PlusButtonTextStyle = comp.getByTestId('plus-button-text').props.style;

    expect(PlusButtonTextStyle).toMatchObject(PlusButtonStyles.text);
});

