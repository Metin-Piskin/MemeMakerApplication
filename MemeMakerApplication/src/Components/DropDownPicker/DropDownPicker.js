import React from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './DropDownPicker-style';

const DropDownPickerComponent = ({
    open,
    value,
    items,
    setOpen,
    setValue,
    setItems,
    containerStyle,
    selectedItemLabelStyle,
    listItemLabelStyle,
    maxHeight,
}) => {
    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            containerStyle={containerStyle}
            style={styles.dropdownspam}
            dropDownContainerStyle={styles.dropdownspam}
            selectedItemLabelStyle={selectedItemLabelStyle}
            listItemLabelStyle={listItemLabelStyle}
            maxHeight={maxHeight}
            disableBorderRadius={false}
        />
    )
}

export default DropDownPickerComponent;