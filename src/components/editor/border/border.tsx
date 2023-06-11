import { useState } from 'react';
import Select from '../../forms/select/select';
import { ColorPicker } from '../color-picker/color-picker';
import { Text } from '../../text/text';
import { Popover } from '../../popover/popover';
import Size from '../size/size';

export type BorderType = {
  color: string;
  type: string;
  size: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
};

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
  borderSettings?: BorderType;
  onChange?: (border: BorderType) => void;
  label?: string;
  labelClassName?: string;
}

export function Border(props: BorderProps) {
  const { borderSettings, onChange, label, labelClassName } = props;
  const [settings, setSettings] = useState<BorderType>(
    borderSettings || {
      color: '#000000',
      type: 'solid',
      size: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    }
  );

  const handleColorChange = (colorChoose: string) => {
    onChange &&
      onChange({
        ...settings,
        color: colorChoose,
      });
    setSettings({
      ...settings,
      color: colorChoose,
    });
  };

  const handleTypeChange = (typeChoose: string) => {
    onChange &&
      onChange({
        ...settings,
        type: typeChoose,
      });
    setSettings({
      ...settings,
      type: typeChoose,
    });
  };

  const handleSizeChange = (value: [number, number, number, number]) => {
    onChange &&
      onChange({
        ...settings,
        size: {
          top: value[0],
          right: value[1],
          bottom: value[2],
          left: value[3],
        },
      });
    setSettings({
      ...settings,
      size: {
        top: value[0],
        right: value[1],
        bottom: value[2],
        left: value[3],
      },
    });
  };

  return (
    <>
      {label && (
        <Text className={`mb-2 block w-full ${labelClassName}`} type="medium">
          {label}
        </Text>
      )}
      <Popover trigger={<BorderTrigger color={settings.color} type={settings.type} />}>
        <ColorPicker
          label="Color"
          value={settings.color}
          onChange={handleColorChange}
          haveInput
          containerClassName="flex-1 mb-3"
        />
        <Select
          label="Type"
          className="flex-1 mb-3"
          defaultValue={
            borderTypes.find((borderType) => borderType.value === settings.type) || borderTypes[0]
          }
          options={borderTypes}
          onChange={(option) => {
            const opt = option as { label: string; value: string };
            handleTypeChange(opt.value);
          }}
        />
        <Size label="Width" onValueChange={handleSizeChange} />
      </Popover>
    </>
  );
}

interface BorderTriggerProps {
  color: string;
  type: string;
}

function BorderTrigger(props: BorderTriggerProps) {
  const { color, type } = props;

  return (
    <div className="w-full h-10 border border-grey-400 bg-grey-600 rounded flex items-center px-2 gap-2 cursor-pointer hover:border-grey-300 transition-colors duration-200">
      <div className="w-6 h-6 rounded" style={{ backgroundColor: color }}></div>
      <Text type="content" className="capitalize">
        {type}
      </Text>
    </div>
  );
}
