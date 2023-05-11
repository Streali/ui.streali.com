import { CSSProperties } from 'react';
import { BorderRadiusType } from '../../editor/border-radius/border-radius';
import { BorderType } from '../../editor/border/border';
import { ShadowType } from '../../editor/shadow/shadow';
import { SpacingType } from '../../editor/spacing/spacing';
import { TextStyleType } from '../../editor/text-style/text-style';

export type MessageType = {
  textProviderColor: boolean;
  text: TextStyleType;
  backgroundProviderColor: boolean;
  background: string;
  shadow: ShadowType;
  border: BorderType;
  margin: SpacingType;
  padding: SpacingType;
  radius: BorderRadiusType;
  fullWidth: boolean;
};

interface MessageProps {
  settings: MessageType;
  message: string;
  providerColor?: string;
}

export function Message(props: MessageProps) {
  const { settings, message, providerColor } = props;

  const messageStyle: CSSProperties = {
    width: settings.fullWidth ? '100%' : 'auto',
    fontFamily: settings.text.fontFamily,
    fontSize: settings.text.fontSize + 'px',
    fontWeight: settings.text.fontWeight,
    color: settings?.textProviderColor ? providerColor : settings.text.color,
    textAlign: settings.text.textAlign as 'left' | 'center' | 'right',
    textDecoration: settings.text.textDecoration,
    fontStyle: settings.text.fontStyle,
    letterSpacing: settings.text.letterSpacing + 'px',
    lineHeight: settings.text.lineHeight + '%',
    textShadow: `${settings.text.textShadow.x}px ${settings.text.textShadow.y}px ${settings.text.textShadow.blur}px ${settings.text.textShadow.color}`,
    background: settings.backgroundProviderColor ? providerColor : settings.background,
    boxShadow: `${settings.shadow.x}px ${settings.shadow.y}px ${settings.shadow.blur}px ${settings.shadow.color}`,
    borderTop: `${settings.border.size.top}px ${settings.border.type} ${settings.border.color}`,
    borderRight: `${settings.border.size.right}px ${settings.border.type} ${settings.border.color}`,
    borderBottom: `${settings.border.size.bottom}px ${settings.border.type} ${settings.border.color}`,
    borderLeft: `${settings.border.size.left}px ${settings.border.type} ${settings.border.color}`,
    margin: `${settings.margin.top}px ${settings.margin.right}px ${settings.margin.bottom}px ${settings.margin.left}px`,
    padding: `${settings.padding.top}px ${settings.padding.right}px ${settings.padding.bottom}px ${settings.padding.left}px`,
    borderRadius: `${settings.radius.topLeft}px ${settings.radius.topRight}px ${settings.radius.bottomRight}px ${settings.radius.bottomLeft}px`,
  };

  return (
    <div
      className="chat__message"
      style={messageStyle}
      dangerouslySetInnerHTML={{ __html: message }}></div>
  );
}
