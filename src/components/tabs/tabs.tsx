import * as TabsPrimitive from '@radix-ui/react-tabs';
import { Button } from '../button/button';
import { useEffect, useState } from 'react';

interface TabsProps {
  children: React.ReactNode;
  list: { title: string; id: string }[];
  onTabChange?: (id: string) => void;
  tab?: string;
  containerClassName?: string;
}

export function Tabs(props: TabsProps) {
  const { children, list, onTabChange, tab, containerClassName = '' } = props;
  const [currentTab, setCurrentTab] = useState(tab ? tab : list[0].id);

  const handleTabChange = (id: string) => {
    setCurrentTab(id);
    onTabChange && onTabChange(id);
  };

  useEffect(() => {
    if (tab) {
      setCurrentTab(tab);
    }
  }, [tab]);

  return (
    <TabsPrimitive.Root value={currentTab} onValueChange={handleTabChange}>
      <TabsPrimitive.List
        className={`p-2 border border-grey-400 bg-grey-600 rounded flex gap-2 mb-3 ${containerClassName}`}>
        {list.map((item) => (
          <TabsPrimitive.Trigger key={item.id} value={item.id} asChild>
            <Button color={currentTab === item.id ? 'primary' : 'transparent'}>{item.title}</Button>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {children}
    </TabsPrimitive.Root>
  );
}

interface TabProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Tab(props: TabProps) {
  const { id, children, className = '' } = props;

  return (
    <TabsPrimitive.Content value={id} className={className}>
      {children}
    </TabsPrimitive.Content>
  );
}
