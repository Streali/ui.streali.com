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
  name: string;
  children?: React.ReactNode;
  username?: string;
}

export function SocialProvider(props: SocialProviderProps) {
  const { icon, iconSVG, iconClassName, iconHeight, iconWidth, children, name, username } = props;

  return (
    <div className="w-full p-6 rounded-lg bg-grey-700 border border-grey-400 flex flex-col">
      <div className="flex gap-3 items-center h-9">
        <Icon
          name={icon}
          svg={iconSVG}
          className={`text-2xl text-social-${name} ${iconClassName}`}
          width={iconWidth}
          height={iconHeight}
        />
        <div className="flex flex-col">
          <span className="text-grey-100">{username}</span>
          <span className={`capitalize text-xl font-medium -mt-1 text-social-${name}`}>{name}</span>
        </div>
      </div>
      {children && <div className="border-t border-grey-400 mt-6 pt-6">{children}</div>}
    </div>
  );
}
