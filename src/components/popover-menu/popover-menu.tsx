'use client';

import { Popover } from '../popover/popover';
import { Icon } from '../icon/icon';

export type PopoverMenuItem = {
  label: string;
  onClick?: () => void;
  link?: string;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  iconLeft?: string;
};

interface PopoverMenuProps {
  trigger: React.ReactNode;
  menu: PopoverMenuItem[];
}

export function PopoverMenu(props: PopoverMenuProps) {
  const { trigger, menu } = props;

  return (
    <div>
      <Popover trigger={trigger}>
        <div className="flex flex-col gap-1">
          {menu.map((item) => (
            <PopoverMenuItem {...item} key={item.label} />
          ))}
        </div>
      </Popover>
    </div>
  );
}

interface PopoverMenuItemProps {
  label: string;
  onClick?: () => void;
  link?: string;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  iconLeft?: string;
}

function PopoverMenuItem(props: PopoverMenuItemProps) {
  const { label, onClick, link, external, disabled, className = '', iconLeft } = props;

  const defineClassName = `w-full h-9 flex items-center gap-2 px-3 bg-grey-700 border border-grey-400 rounded hover:bg-primary-500 transition-colors duration-200 ${
    disabled ? '!bg-grey-400 cursor-not-allowed text-grey-100' : ''
  } ${className}`;

  if (link && !external) {
    return (
      <a href={link} className={defineClassName} onClick={onClick}>
        {iconLeft && <Icon name={iconLeft} />}
        {label}
      </a>
    );
  }

  if (link && external) {
    <a href={link} rel="noreferrer" target="_blank" className={defineClassName} onClick={onClick}>
      {iconLeft && <Icon name={iconLeft} />}
      {label}
    </a>;
  }

  return (
    <button onClick={onClick} className={defineClassName}>
      {iconLeft && <Icon name={iconLeft} />}
      {label}
    </button>
  );
}
