import { useState } from 'react';
import { Input } from '../../forms/input/input';
import { ColorPicker } from '../color-picker/color-picker';

export type ShadowType = {
  color: string;
  x: number;
  y: number;
  blur: number;
};

interface ShadowProps {
  onChange?: (settings: ShadowType) => void;
  settings?: ShadowType;
}

export function Shadow(props: ShadowProps) {
  const { onChange, settings } = props;
  const [shadowSettings, setShadowSettings] = useState<ShadowType>({
    color: '#000000',
    x: 0,
    y: 0,
    blur: 0,
  });

  const handleSettingsChange = (key: 'color' | 'x' | 'y' | 'blur', value: string | number) => {
    const currentSettings: ShadowType = { ...shadowSettings };
    switch (key) {
      case 'color':
        currentSettings.color = value as string;
        break;
      case 'x':
        currentSettings.x = value as number;
        break;
      case 'y':
        currentSettings.y = value as number;
        break;
      case 'blur':
        currentSettings.blur = value as number;
        break;
    }
    setShadowSettings(currentSettings);
    onChange && onChange(currentSettings);
  };

  return (
    <div className="flex gap-2 w-full">
      <ColorPicker
        value={settings?.color}
        onChange={(color) => handleSettingsChange('color', color)}
      />
      <div className="grid grid-cols-3 gap-2">
        <Input
          suffix="px"
          containerClassName="flex-1"
          defaultValue={settings?.x}
          onChange={(e) => handleSettingsChange('x', e.target.valueAsNumber)}
        />
        <Input
          suffix="px"
          containerClassName="flex-1"
          defaultValue={settings?.y}
          onChange={(e) => handleSettingsChange('y', e.target.valueAsNumber)}
        />
        <Input
          suffix="px"
          containerClassName="flex-1"
          defaultValue={settings?.blur}
          onChange={(e) => handleSettingsChange('blur', e.target.valueAsNumber)}
        />
      </div>
    </div>
  );
}
