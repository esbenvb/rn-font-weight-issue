import React, {FC, useCallback, useState} from 'react';
import {G, Text, Rect, Path} from 'react-native-svg';
import {LayoutChangeEvent} from 'react-native';

export const separatorLineLabelHeight = 20;
export const separatorLineLabelBorderWidth = 2;

export type Props = {
  color: string;
  label: string;
  labelColor: string;
};
const SeparatorLineLabel: FC<Props> = ({color, label, labelColor}) => {
  const horizontalLabelPadding = 12;

  const [textWidth, setTextWidth] = useState(0);
  const handleTextLayout = useCallback((event: LayoutChangeEvent) => {
    const {layout} = event.nativeEvent;
    setTextWidth(layout.width);
  }, []);

  return (
    <>
      <G y={-separatorLineLabelHeight / 2}>
        <Rect
          height={separatorLineLabelHeight}
          width={textWidth + horizontalLabelPadding * 2}
          strokeWidth={separatorLineLabelBorderWidth}
          stroke={color}
          fill={color === labelColor ? '#FFFFFF' : color}
          ry={separatorLineLabelHeight / 2}
          rx={separatorLineLabelHeight / 2}
        />
        <Text
          x={horizontalLabelPadding}
          textAnchor={'start'}
          y={separatorLineLabelHeight / 2 + 4}
          fontFamily="Chivo"
          fontSize={13}
          fill={labelColor}
          strokeWidth="0"
          fontWeight="400"
          onLayout={handleTextLayout}>
          {label}
        </Text>
        <Text
          y={40}
          x={10}
          fontFamily="Chivo"
          fontSize={13}
          stroke={'red'}
          strokeWidth="0"
          fontWeight="400">
          width: {textWidth}
        </Text>
      </G>
    </>
  );
};

export default SeparatorLineLabel;
