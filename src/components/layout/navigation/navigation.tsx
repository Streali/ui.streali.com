'use client';

import { Link } from 'react-router-dom';
import { Avatar } from '../../avatar/avatar';
import { PopoverMenu, PopoverMenuItem } from '../../popover-menu/popover-menu';
import { Icon } from '../../icon/icon';
import { Text } from '../../text/text';

export type NavigationItem = {
  label: string;
  link: string;
  icon: string;
};

export type NavigationBottomItem = {
  label: string;
  link: string;
  external: boolean;
};

interface NavigationProps {
  logo: React.ReactNode;
  user: {
    username: string;
    avatarUrl?: string;
    menu?: PopoverMenuItem[];
  };
  navigation?: NavigationItem[];
  bottomNavigation?: NavigationBottomItem[];
  version?: string;
  customContent?: React.ReactNode;
}

export function Navigation(props: NavigationProps) {
  const { logo, user, navigation, bottomNavigation, version, customContent } = props;

  return (
    <div className="fixed top-0 left-0 w-56 h-screen bg-grey-600 border-r border-grey-400 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="h-[72px] w-full flex justify-between border-b border-grey-400 items-center px-4">
          {logo}
          <PopoverMenu
            trigger={<Avatar username={user.username} size="24" url={user.avatarUrl} />}
            menu={user.menu ? user.menu : []}
          />
        </div>
        <nav className="p-2 flex flex-col gap-1">
          {navigation && navigation.map((item) => <NavigationItem key={item.label} {...item} />)}
        </nav>
      </div>
      <div className="flex flex-col gap-2">
        {customContent}
        <div className="flex flex-col gap-2 p-4">
          {bottomNavigation &&
            bottomNavigation.map((item) => <NavigationItemBottom key={item.label} {...item} />)}
        </div>
        <Text className="block px-4 mb-4" type="little">
          {version}
        </Text>
      </div>
    </div>
  );
}

function NavigationItem(props: NavigationItem) {
  const { label, link, icon } = props;

  return (
    <Link
      to={link}
      className={`h-8 items-center flex gap-3 hover:bg-grey-400 transition-colors duration-200 px-2 rounded`}>
      <Icon name={icon} />
      {label}
    </Link>
  );
}

function NavigationItemBottom(props: NavigationBottomItem) {
  const { label, link, external } = props;

  if (external)
    return (
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className="text-sm text-grey-100 hover:text-white transition-colors duration-200">
        {label}
      </a>
    );

  return (
    <Link
      to={link}
      className="text-sm text-grey-100 hover:text-white transition-colors duration-200">
      {label}
    </Link>
  );
}
