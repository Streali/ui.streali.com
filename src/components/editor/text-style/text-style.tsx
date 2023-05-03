import { useEffect, useState } from 'react';
import { Button } from '../../button/button';
import { Input } from '../../forms/input/input';
import Select from '../../forms/select/select';
import { Popover } from '../../popover/popover';
import { Text } from '../../text/text';
import { ColorPicker } from '../color-picker/color-picker';
import FontPicker, { Font } from '../font-picker/font-picker';
import { Shadow } from '../shadow/shadow';

export type TextStyleType = {
  fontFamily: string;
  fontSize: number;
  color: string;
  fontWeight: string;
  textDecoration: string;
  fontStyle: string;
  textAlign: string;
  letterSpacing: number;
  lineHeight: number;
  textShadow: {
    color: string;
    x: number;
    y: number;
    blur: number;
  };
};

interface TextStyleProps {
  fonts: Font[];
  settings: TextStyleType;
  onChange?: (settings: TextStyleType) => void;
}

export function TextStyle(props: TextStyleProps) {
  const { fonts, settings, onChange } = props;
  const [fontSettings, setFontSettings] = useState<TextStyleType>(settings);

  const getCurrentFontVariants = () => {
    const currentFont = fonts.find((font) => font.family === settings.fontFamily);
    if (!currentFont) return [];
    return currentFont.variants.map((variant) => ({
      value: variant.weight.toString(),
      label: variant.weight.toString(),
    }));
  };

  const getCurrentFontWeight = () => {
    const currentFont = fonts.find((font) => font.family === settings.fontFamily);
    if (!currentFont) return { value: '400', label: '400' };
    const findVariant = currentFont.variants.find(
      (variant) => variant.weight.toString() === settings.fontWeight
    );
    if (!findVariant) return { value: '400', label: '400' };
    return {
      value: findVariant.weight.toString(),
      label: findVariant.weight.toString(),
    };
  };

  const handleSettingsChange = (
    key:
      | 'fontFamily'
      | 'fontSize'
      | 'fontWeight'
      | 'color'
      | 'textAlign'
      | 'textDecoration'
      | 'fontStyle'
      | 'letterSpacing'
      | 'lineHeight'
      | 'textShadow',
    value: string | number | TextStyleType['textShadow']
  ) => {
    const currentSettings: TextStyleType = { ...fontSettings };
    switch (key) {
      case 'fontFamily':
        currentSettings.fontFamily = value as string;
        break;
      case 'fontSize':
        currentSettings.fontSize = value as number;
        break;
      case 'fontWeight':
        currentSettings.fontWeight = value as string;
        break;
      case 'color':
        currentSettings.color = value as string;
        break;
      case 'textAlign':
        currentSettings.textAlign = value as string;
        break;
      case 'textDecoration':
        currentSettings.textDecoration = value as string;
        break;
      case 'fontStyle':
        currentSettings.fontStyle = value as string;
        break;
      case 'letterSpacing':
        currentSettings.letterSpacing = value as number;
        break;
      case 'lineHeight':
        currentSettings.lineHeight = value as number;
        break;
      case 'textShadow':
        currentSettings.textShadow = value as TextStyleType['textShadow'];
        break;
    }

    setFontSettings(currentSettings);
    onChange && onChange(currentSettings);
  };

  useEffect(() => {
    if (settings) {
      setFontSettings(settings);
    }
  }, [settings]);

  console.log(fontSettings);

  return (
    <div className="">
      <div className="flex gap-2 mb-2">
        <FontPicker
          fonts={fonts}
          value={fontSettings.fontFamily}
          onChange={(font) => handleSettingsChange('fontFamily', font.family)}
        />
        <Input
          suffix="px"
          type="number"
          containerClassName="appearance-none"
          defaultValue={fontSettings.fontSize}
        />
        <ColorPicker
          value={fontSettings.color}
          side="right"
          onChange={(color) => handleSettingsChange('color', color)}
        />
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2">
          <Button
            iconLeft="underline"
            color={fontSettings.textDecoration === 'underline' ? 'primary' : 'transparent'}
            onClick={() => {
              const textDecoration = fontSettings.textDecoration;
              textDecoration === 'none'
                ? handleSettingsChange('textDecoration', 'underline')
                : handleSettingsChange('textDecoration', 'none');
            }}
          />
          <Button
            iconLeft="italic"
            color={fontSettings.fontStyle === 'italic' ? 'primary' : 'transparent'}
            onClick={() => {
              const fontStyle = fontSettings.fontStyle;
              fontStyle === 'italic'
                ? handleSettingsChange('fontStyle', 'normal')
                : handleSettingsChange('fontStyle', 'italic');
            }}
          />
        </div>
        <Select
          options={getCurrentFontVariants()}
          defaultValue={getCurrentFontWeight()}
          className="flex-1"
          onChange={(option) => {
            const v = option as { value: string; label: string };
            handleSettingsChange('fontWeight', v.value);
          }}
        />
        <div className="flex gap-2">
          <Button
            iconLeft="align-left"
            color={fontSettings.textAlign === 'left' ? 'primary' : 'transparent'}
            onClick={() => handleSettingsChange('textAlign', 'left')}
          />
          <Button
            iconLeft="align-center"
            color={fontSettings.textAlign === 'center' ? 'primary' : 'transparent'}
            onClick={() => handleSettingsChange('textAlign', 'center')}
          />
          <Button
            iconLeft="align-right"
            color={fontSettings.textAlign === 'right' ? 'primary' : 'transparent'}
            onClick={() => handleSettingsChange('textAlign', 'right')}
          />
        </div>
      </div>
      <div className="mt-2 w-full flex justify-end">
        <Popover
          align="end"
          trigger={
            <Button color="secondary" size="small" iconRight="arrow-down-s-line">
              More
            </Button>
          }>
          <div className="grid grid-cols-2 gap-2 max-w-full">
            <Input
              iconLeft="text-spacing"
              suffix="px"
              type="number"
              containerClassName="flex-1 "
              defaultValue={fontSettings.letterSpacing}
              onChange={(e) => handleSettingsChange('letterSpacing', e.target.valueAsNumber)}
            />
            <Input
              iconLeft="line-height"
              suffix="%"
              type="number"
              containerClassName="flex-1"
              defaultValue={fontSettings.lineHeight}
              onChange={(e) => handleSettingsChange('lineHeight', e.target.valueAsNumber)}
            />
          </div>
          <Text type="medium" className="my-2 block">
            Text shadow
          </Text>
          <Shadow
            settings={fontSettings.textShadow}
            onChange={(settings) => {
              handleSettingsChange('textShadow', settings);
            }}
          />
        </Popover>
      </div>
    </div>
  );
}
