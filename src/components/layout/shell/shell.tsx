'use client';

import { PopoverMenuItem } from '../../popover-menu/popover-menu';
import { Navigation, NavigationBottomItem, NavigationItem } from '../navigation/navigation';

interface ShellProps {
  navigation: {
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
  };
  children: React.ReactNode;
}

export function Shell(props: ShellProps) {
  const { navigation, children } = props;

  return (
    <>
      <Navigation {...navigation} />
      <div className="ml-[14rem] min-h-screen w-[calc(100vw_-_14rem)]">{children}</div>
    </>
  );
}
