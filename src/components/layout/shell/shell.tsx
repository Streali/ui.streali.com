import { PopoverMenuItem } from '../../popover-menu/popover-menu';
import { Navigation, NavigationBottomItem, NavigationItem } from '../navigation/navigation';

interface ShellProps {
  logo: React.ReactNode;
  user: {
    username: string;
    avatarUrl?: string;
    menu: PopoverMenuItem[];
  };
  navigation: NavigationItem[];
  bottomNavigation: NavigationBottomItem[];
  version: string;
  children: React.ReactNode;
}

export function Shell(props: ShellProps) {
  const { logo, user, navigation, bottomNavigation, version, children } = props;

  return (
    <>
      <Navigation
        logo={logo}
        user={user}
        navigation={navigation}
        bottomNavigation={bottomNavigation}
        version={version}
      />
      <div className="ml-[14rem] min-h-screen w-[calc(100vw_-_14rem)]">{children}</div>
    </>
  );
}
