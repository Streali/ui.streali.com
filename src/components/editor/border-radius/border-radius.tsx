import { useEffect, useState } from 'react';
import { Text } from '../../text/text';
import { Input } from '../../forms/input/input';
import Button from '../../button/button';

interface BorderRadiusProps {
  value?: { topLeft: number; topRight: number; bottomLeft: number; bottomRight: number };
  onChange?: (value: {
    topLeft: number;
    topRight: number;
    bottomLeft: number;
    bottomRight: number;
  }) => void;
  label?: string;
  labelClassName?: string;
}

function BorderRadius(props: BorderRadiusProps) {
  const { value, onChange, label, labelClassName } = props;
  const [isExtend, setIsExtend] = useState(false);
  const [val, setVal] = useState<{
    topLeft: number;
    topRight: number;
    bottomLeft: number;
    bottomRight: number;
  }>(value || { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 });

  const checkIfSameValues = (): boolean => {
    if (val) {
      return (
        val.topLeft === val.topRight &&
        val.topLeft === val.bottomLeft &&
        val.topLeft === val.bottomRight
      );
    }
    return false;
  };

  const handleAllValuesChange = (value: number) => {
    if (onChange) {
      onChange({
        topLeft: value,
        topRight: value,
        bottomLeft: value,
        bottomRight: value,
      });
      setVal({
        topLeft: value,
        topRight: value,
        bottomLeft: value,
        bottomRight: value,
      });
    }
  };

  const handleSingleValueChange = (
    value: number,
    key: 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft'
  ) => {
    if (onChange) {
      onChange({
        ...val,
        [key]: value,
      });
      setVal({
        ...val,
        [key]: value,
      });
    }
  };

  useEffect(() => {
    setVal(value || { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 });
    if (val && checkIfSameValues()) {
      setIsExtend(false);
    } else {
      setIsExtend(true);
    }
  }, []);

  return (
    <div className="max-w-full">
      {label && (
        <Text className={`mb-2 block w-full ${labelClassName}`} type="medium">
          {label}
        </Text>
      )}
      <div className="flex items-center gap-3 max-w-full">
        {!isExtend && (
          <Input
            containerClassName="flex-1"
            type="number"
            defaultValue={val?.topLeft}
            suffix="px"
            onChange={(e) => handleAllValuesChange(e.target.valueAsNumber)}
          />
        )}
        {isExtend && (
          <div className="grid grid-cols-4 gap-3 max-w-[calc(100%_-_48px)]">
            <Input
              defaultValue={val?.topLeft}
              type="number"
              suffix="px"
              onChange={(e) => handleSingleValueChange(e.target.valueAsNumber, 'topLeft')}
            />
            <Input
              defaultValue={val?.topRight}
              type="number"
              suffix="px"
              onChange={(e) => handleSingleValueChange(e.target.valueAsNumber, 'topRight')}
            />
            <Input
              defaultValue={val?.bottomRight}
              type="number"
              suffix="px"
              onChange={(e) => handleSingleValueChange(e.target.valueAsNumber, 'bottomRight')}
            />
            <Input
              defaultValue={val?.bottomLeft}
              type="number"
              suffix="px"
              onChange={(e) => handleSingleValueChange(e.target.valueAsNumber, 'bottomLeft')}
            />
          </div>
        )}
        <Button
          iconLeft="rounded-corner"
          onClick={() => {
            setIsExtend(!isExtend);
          }}
        />
      </div>
    </div>
  );
}

export default BorderRadius;
