import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Header from '../../src/Components/Header';
import HeaderStyles from '../../src/Components/Header/Header-style';

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons')

test('renders correctly', () => {
    const test = true
    const comp = render(<Header home={test} />);
    expect(comp).toMatchSnapshot();
});

test('should render default theme style', () => {
    const test = true
    const comp = render(<Header home={test} />);
    const HeaderHomeContainerStyle = comp.getByTestId('header-home-container').props.style;

    expect(HeaderHomeContainerStyle).toMatchObject(HeaderStyles.homecontainer);
});

test('should render default theme style', () => {
    const test = true
    const comp = render(<Header home={test} />);
    const HeaderHomeTextStyle = comp.getByTestId('header-home-home-text').props.style;

    expect(HeaderHomeTextStyle).toMatchObject(HeaderStyles.hometext);
});

test('renders correctly', () => {
    const comp = render(<Header />);
    expect(comp).toMatchSnapshot();
});

test('should render press correctly', () => {
    const mockFunction = jest.fn();
    const comp = render(<Header backPress={mockFunction} />);

    const HeaderBackButtonPress = comp.getByTestId('header-home-back-button');
    fireEvent(HeaderBackButtonPress, 'press');

    expect(mockFunction).toBeCalled();
})

test('should render default theme style', () => {
    const comp = render(<Header />);
    const HeaderHomeDetailContainerStyle = comp.getByTestId('header-home-detail-container').props.style;

    expect(HeaderHomeDetailContainerStyle).toMatchObject(HeaderStyles.detailcontainer);
});

test('should render default theme style', () => {
    const comp = render(<Header />);
    const HeaderHomeBackButtonStyle = comp.getByTestId('header-home-back-button').props.style;

    expect(HeaderHomeBackButtonStyle).toMatchObject(HeaderStyles.backbutton);
});

test('should render default theme style', () => {
    const comp = render(<Header />);
    const HeaderTextStyle = comp.getByTestId('header-home-text').props.style;

    expect(HeaderTextStyle).toMatchObject(HeaderStyles.text);
});
