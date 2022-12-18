import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import SaveButton from '../../src/Components/SaveButton';
import SaveButtonStyles from '../../src/Components/SaveButton/SaveButton-style';

jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');

test('renders correctly', () => {
    const comp = render(<SaveButton />);
    expect(comp).toMatchSnapshot();
});

test('should render press correctly', () => {
    const mockFunction = jest.fn();
    const comp = render(<SaveButton onPress={mockFunction} />);

    const SaveButtonPress = comp.getByTestId('save-button-press');
    fireEvent(SaveButtonPress, 'press');

    expect(mockFunction).toBeCalled();
});

test('should render default theme style', () => {
    const comp = render(<SaveButton />);
    const SaveButtonContainerStyle = comp.getByTestId('save-button-press').props.style;

    expect(SaveButtonContainerStyle).toMatchObject(SaveButtonStyles.save);
});