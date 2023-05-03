import { useState } from 'react';
import Select from '../../forms/select/select';
import { ColorPicker } from '../color-picker/color-picker';
import { Text } from '../../text/text';

const borderTypes = [
  { label: 'Solid', value: 'solid' },
  { label: 'Dashed', value: 'dashed' },
  { label: 'Dotted', value: 'dotted' },
  { label: 'Double', value: 'double' },
  { label: 'Groove', value: 'groove' },
  { label: 'Ridge', value: 'ridge' },
  { label: 'Inset', value: 'inset' },
  { label: 'Outset', value: 'outset' },
  { label: 'None', value: 'none' },
];

interface BorderProps {
  color?: string;
  type?: string;
  onChange?: (color: string, type: string) => void;
  label?: string;
  labelClassName?: string;
}

function Border(props: BorderProps) {
  const { color, type, onChange, label, labelClassName } = props;
  const [borderColor, setBorderColor] = useState(color || '#ffffff');
  const [borderType, setBorderType] = useState(type || 'solid');

  const handleColorChange = (colorChoose: string) => {
    setBorderColor(colorChoose);
    onChange?.(colorChoose, borderType);
  };

  const handleTypeChange = (typeChoose: string) => {
    setBorderType(typeChoose);
    onChange?.(borderColor, typeChoose);
  };

  return (
    <div>
      {label && (
        <Text className={`mb-2 block w-full ${labelClassName}`} type="medium">
          {label}
        </Text>
      )}
      <div className="flex items-center gap-3 w-full">
        <ColorPicker value={color} onChange={handleColorChange} />
        <Select
          className="flex-1"
          defaultValue={
            borderTypes.find((borderType) => borderType.value === type) || borderTypes[0]
          }
          options={borderTypes}
          onChange={(option) => {
            const opt = option as { label: string; value: string };
            handleTypeChange(opt.value);
          }}
        />
      </div>
    </div>
  );
}

export default Border;
