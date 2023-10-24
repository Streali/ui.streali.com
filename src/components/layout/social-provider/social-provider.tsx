import { useState } from 'react';
import { Button } from '../../button/button';
import { Input } from '../../forms/input/input';
import { Icon, IconSVG } from '../../icon/icon';
import { Text } from '../../text/text';

interface SocialProviderProps {
  icon?: string;
  iconSVG?: IconSVG;
  iconWidth?: number;
  iconHeight?: number;
  iconClassName?: string;
  provider: 'twitch' | 'kick';
  isConnected?: boolean;
  isConnectedContent?: string;
  onConnectClick?: (value?: string) => void;
  connectWithInput?: boolean;
  inputPlaceholder?: string;
}

export function SocialProvider(props: SocialProviderProps) {
  const {
    icon,
    iconSVG,
    iconClassName,
    iconHeight,
    iconWidth,
    provider,
    isConnected,
    isConnectedContent,
    onConnectClick,
    connectWithInput,
    inputPlaceholder = 'Your username',
  } = props;

  const [inputValue, setInputValue] = useState('');

  return (
    <div className="w-full p-6 rounded-lg bg-grey-700 border border-grey-400">
      <div className="flex justify-between md:items-center flex-col md:!flex-row gap-3">
        <div>
          <div className="flex gap-3 items-center h-9">
            <Icon
              name={icon}
              svg={iconSVG}
              className={`text-2xl text-social-${provider} ${iconClassName}`}
              width={iconWidth}
              height={iconHeight}
            />
            <span className={`capitalize text-xl text-social-${provider}`}>{provider}</span>
          </div>
          <div className="flex gap-1 items-center">
            <Icon
              name={isConnected ? 'check-fill' : 'close-line'}
              className={`${isConnected ? 'text-success-500' : 'text-error-500'}`}
            />
            <Text type="medium" className="block -mt-1">
              {isConnected ? 'Connected' : 'Not connected'}
            </Text>
          </div>
        </div>
        {isConnected ? (
          <div className="flex gap-1 items-center">
            <div className="inline-flex h-10 px-3 bg-white text-black rounded items-center">
              {isConnectedContent}
            </div>
          </div>
        ) : (
          <div className="flex gap-1">
            {connectWithInput && (
              <Input
                placeholder={inputPlaceholder}
                onChange={(e) => setInputValue(e.target.value)}
                containerClassName="flex-1 md:flex-0"
              />
            )}
            <Button color="stroke" onClick={() => onConnectClick && onConnectClick(inputValue)}>
              Connect
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
