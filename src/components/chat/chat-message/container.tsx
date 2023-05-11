import { BorderRadiusType } from '../../editor/border-radius/border-radius';
import { BorderType } from '../../editor/border/border';
import { ShadowType } from '../../editor/shadow/shadow';
import { SpacingType } from '../../editor/spacing/spacing';
import { Global } from './chat-message';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';

export type ContainerType = {
  backgroundProviderColor: boolean;
  background: string;
  shadow: ShadowType;
  border: BorderType;
  margin: SpacingType;
  padding: SpacingType;
  radius: BorderRadiusType;
  fullWidth: boolean;
  alignment: 'left' | 'center' | 'right';
};

interface ContainerProps {
  settings: ContainerType;
  globalSettings: Global;
  providerColor?: string;
  children: React.ReactNode;
}

export function Container(props: ContainerProps) {
  const { settings, globalSettings, providerColor, children } = props;

  const containerStyle: CSSProperties = {
    flexDirection: globalSettings.layout === 'stack' ? 'column' : 'row',
    width: settings.fullWidth ? '100%' : 'fit-content',
    background:
      settings.backgroundProviderColor && providerColor ? providerColor : settings.background,
    boxShadow: `${settings.shadow.x}px ${settings.shadow.y}px ${settings.shadow.blur}px ${settings.shadow.color}`,
    borderTop: `${settings.border.size.top}px ${settings.border.type} ${settings.border.color}`,
    borderRight: `${settings.border.size.right}px ${settings.border.type} ${settings.border.color}`,
    borderBottom: `${settings.border.size.bottom}px ${settings.border.type} ${settings.border.color}`,
    borderLeft: `${settings.border.size.left}px ${settings.border.type} ${settings.border.color}`,
    margin: `${settings.margin.top}px ${settings.margin.right}px ${settings.margin.bottom}px ${settings.margin.left}px`,
    padding: `${settings.padding.top}px ${settings.padding.right}px ${settings.padding.bottom}px ${settings.padding.left}px`,
    borderRadius: `${settings.radius.topLeft}px ${settings.radius.topRight}px ${settings.radius.bottomRight}px ${settings.radius.bottomLeft}px`,
    ...(globalSettings.layout === 'stack' && {
      alignItems:
        settings.alignment === 'left'
          ? 'flex-start'
          : settings.alignment === 'right'
          ? 'flex-end'
          : ('center' as 'flex-start' | 'flex-end' | 'center'),
    }),
    ...(globalSettings.layout === 'inline' && {
      justifyContent:
        settings.alignment === 'left'
          ? 'flex-start'
          : settings.alignment === 'right'
          ? 'flex-end'
          : ('center' as 'flex-start' | 'flex-end' | 'center'),
    }),
  };

  return (
    <motion.div className="flex" style={containerStyle}>
      {children}
    </motion.div>
  );
}
