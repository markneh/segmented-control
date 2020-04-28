/**
 * @flow
 */

'use strict';

import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

type Props = $ReadOnly<{|
  value: string,
  tintColor?: ?string,
  textColor?: ?string,
  activeTextColor?: ?string,
  onSelect: () => void,
  selected: boolean,
  enabled: boolean,
|}>;

export const SegmentedControlTab = ({
  onSelect,
  value,
  enabled,
  selected,
  tintColor,
  textColor,
  activeTextColor,
}: Props) => {
  const getColor = () => {
    if (selected && activeTextColor) {
      return activeTextColor;
    }
    if (textColor) {
      return textColor;
    }
    if (tintColor) {
      return tintColor;
    }
    return 'black';
  };
  const color = getColor();

  const getBackgroundColor = () => {
    if (selected && tintColor) {
      return tintColor;
    }
    return 'white';
  };
  const backgroundColor = selected ? getBackgroundColor() : undefined;
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      disabled={!enabled}
      onPress={onSelect}>
      <View style={styles.default}>
        <Text style={{color}}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    margin: 2,
  },
  default: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
