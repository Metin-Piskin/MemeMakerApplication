import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import MemesCard from '../../src/Components/MemesCard';

test('renders correctly', () => {
    const comp = render(<MemesCard />);
    expect(comp).toMatchSnapshot();
});

test('renders correctly', () => {
    const test = 'test'
    const comp = render(<MemesCard veri={test} />);
    expect(comp).toMatchSnapshot();
});

test('should render press correctly', () => {
    const test = 'test';
    const mockFunction = jest.fn();
    const comp = render(<MemesCard veri={test} onPress={mockFunction} />);

    const MemesCardPress = comp.getByTestId('memes-card-press');
    fireEvent(MemesCardPress, 'press');

    expect(mockFunction).toBeCalled();
})