import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import TextAdd from '../../src/Components/TextAdd';
import TextAddStyles from '../../src/Components/TextAdd/TextAdd-style';

test('renders correctly', () => {
    const comp = render(<TextAdd />);
    expect(comp).toMatchSnapshot();
});

test('renders correctly', () => {
    const test = true
    const comp = render(<TextAdd btn={test} />);
    expect(comp).toMatchSnapshot();
});

test('should trigerr onPress', () => {
    const mockFunction = jest.fn();
    const comp = render(<TextAdd onPress={mockFunction} />);

    const ButtonTouchable = comp.getByTestId('text-add-press');
    fireEvent(ButtonTouchable, 'press');

    expect(mockFunction).toBeCalled();
})

test('should render default theme style', () => {
    const comp = render(<TextAdd />);

    const TextAddContainerStyle = comp.getByTestId('text-add-container').props.style;

    expect(TextAddContainerStyle).toMatchObject(TextAddStyles.editcontainer);
});

test('should render default theme style', () => {
    const comp = render(<TextAdd />);

    const TextAddImputStyle = comp.getByTestId('text-add-input').props.style;

    expect(TextAddImputStyle).toMatchObject(TextAddStyles.imput);
});

test('should render default theme style', () => {
    const comp = render(<TextAdd />);

    const TextAddPressStyle = comp.getByTestId('text-add-press').props.style;

    expect(TextAddPressStyle).toMatchObject(TextAddStyles.addtextbutton);
});

test('should render default theme style', () => {
    const comp = render(<TextAdd />);

    const TextAddPressTextStyle = comp.getByTestId('text-add-press-text').props.style;

    expect(TextAddPressTextStyle).toMatchObject(TextAddStyles.addtext);
});

test('should render default theme style', () => {
    const test = true
    const comp = render(<TextAdd btn={test} />);

    const TextAddImputNullStyle = comp.getByTestId('text-add-input-null').props.style;

    expect(TextAddImputNullStyle).toMatchObject(TextAddStyles.imputnull);
});

test('should render default theme style', () => {
    const test = true
    const comp = render(<TextAdd btn={test} />);

    const TextAddPressNullStyle = comp.getByTestId('text-add-press-null').props.style;

    expect(TextAddPressNullStyle).toMatchObject(TextAddStyles.addtextbuttonnull);
});

test('should render default theme style', () => {
    const test = true
    const comp = render(<TextAdd btn={test} />);

    const TextAddPressTextNullStyle = comp.getByTestId('text-add-press-text-null').props.style;

    expect(TextAddPressTextNullStyle).toMatchObject(TextAddStyles.addtextnull);
});