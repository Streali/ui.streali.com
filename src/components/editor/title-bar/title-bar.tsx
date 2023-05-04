import { useRef, useState } from 'react';
import { Button } from '../../button/button';
import { Switch } from '../../forms/switch/switch';
import { Text } from '../../text/text';
import { Input } from '../../forms/input/input';

interface TitleBarProps {
  title?: string;
  onTitleChange?: (title: string) => void;
  devMode?: boolean;
  devModeChecked?: boolean;
  onDevModeChange?: (devMode: boolean) => void;
}

export function TitleBar(props: TitleBarProps) {
  const {
    title = 'Default Title',
    onTitleChange,
    devMode = false,
    devModeChecked,
    onDevModeChange,
  } = props;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>(title);
  const [isDevMode, setIsDevMode] = useState<boolean>(devModeChecked || false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleTitleChange = (title: string) => {
    setTitleValue(title);
    onTitleChange && onTitleChange(title);
  };

  return (
    <div className="w-full h-[72px] bg-grey-700 border-b border-grey-400 flex px-4 items-center justify-between">
      {!isEditing && (
        <div className="flex items-center gap-4 flex-1 max-w-[50%]">
          <Text type="h2" className="truncate">
            {titleValue}
          </Text>
          <Button
            iconLeft="pencil-line"
            color="stroke"
            onClick={() => {
              setIsEditing(true);
              setTimeout(() => {
                inputRef.current?.focus();
              }, 0);
            }}
          />
        </div>
      )}
      {isEditing && (
        <div className="flex items-center gap-4">
          <Input defaultValue={titleValue} ref={inputRef} />
          <div className="flex gap-1">
            <Button
              color="stroke"
              iconLeft="check-line"
              onClick={() => {
                handleTitleChange(inputRef.current?.value || titleValue);
                setIsEditing(false);
              }}
            />
            <Button
              color="error"
              iconLeft="close-line"
              onClick={() => {
                setIsEditing(false);
              }}
            />
          </div>
        </div>
      )}
      <div className="flex items-center gap-10">
        {devMode && (
          <Switch
            label="Developer mode"
            checked={isDevMode}
            onChange={(checked) => {
              setIsDevMode(checked);
              onDevModeChange && onDevModeChange(checked);
            }}
          />
        )}
        <Button color="secondary">Save</Button>
      </div>
    </div>
  );
}
