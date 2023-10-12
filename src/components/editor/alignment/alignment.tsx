'use client';

import { useState } from 'react';
import { Button } from '../../button/button';
import { Icon } from '../../icon/icon';
import { Text } from '../../text/text';

interface AlignmentProps {
  currentAlign?: 'left' | 'right' | 'center';
  onAlignChange?: (align: 'left' | 'right' | 'center') => void;
  label?: string;
  labelClassName?: string;
}

export function Alignment(props: AlignmentProps) {
  const { currentAlign, onAlignChange, label, labelClassName } = props;
  const [current, setCurrent] = useState<'left' | 'right' | 'center'>(currentAlign || 'left');

  const handleAlignChange = (align: 'left' | 'right' | 'center') => {
    setCurrent(align);
    onAlignChange && onAlignChange(align);
  };

  return (
    <>
      {label && (
        <Text className={`mb-2 block w-full ${labelClassName}`} type="medium">
          {label}
        </Text>
      )}
      <div className="flex w-full gap-2">
        <Button
          className="flex-1 h-8"
          color={current === 'left' ? 'primary' : 'stroke'}
          onClick={() => handleAlignChange('left')}>
          <Icon name="align-left" />
        </Button>
        <Button
          className="flex-1 h-8"
          color={current === 'center' ? 'primary' : 'stroke'}
          onClick={() => handleAlignChange('center')}>
          <Icon name="align-center" />
        </Button>
        <Button
          className="flex-1 h-8"
          color={current === 'right' ? 'primary' : 'stroke'}
          onClick={() => handleAlignChange('right')}>
          <Icon name="align-right" />
        </Button>
      </div>
    </>
  );
}
