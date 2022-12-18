import React from 'react';
import { render } from '@testing-library/react-native';

import Home from '../../src/Pages/Home';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('@shopify/flash-list');

test('renders correctly', () => {
    const comp = render(<Home />);
    expect(comp).toMatchSnapshot();
});