import { CSSProperties } from 'react';
import { BorderRadiusType } from '../../editor/border-radius/border-radius';
import { BorderType } from '../../editor/border/border';
import { ShadowType } from '../../editor/shadow/shadow';
import { SpacingType } from '../../editor/spacing/spacing';
import { TextStyleType } from '../../editor/text-style/text-style';

export type NameType = {
  textProviderColor: boolean;
  text: TextStyleType;
  backgroundProviderColor: boolean;
  background: string;
  shadow: ShadowType;
  border: BorderType;
  margin: SpacingType;
  padding: SpacingType;
  radius: BorderRadiusType;
  badges: {
    enabled: boolean;
    position: 'left' | 'right';
    style: 'twitch';
    size: number;
    space: number;
    spaceBetween: number;
  };
  fullWidth: boolean;
};

interface NameProps {
  settings: NameType;
  pseudo: string;
  badges: string[];
  providerColor?: string;
  layout: 'stack' | 'inline' | 'flex';
}

export function Name(props: NameProps) {
  const { settings, pseudo, badges, providerColor, layout } = props;

  const nameStyle: CSSProperties = {
    display: layout === 'flex' ? 'inline-block' : 'flex',
    width: settings.fullWidth ? '100%' : 'auto',
    fontFamily: settings.text.fontFamily,
    fontSize: settings.text.fontSize + 'px',
    fontWeight: settings.text.fontWeight,
    color: settings.textProviderColor ? providerColor : settings.text.color,
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

  const badgesStyle: CSSProperties = {
    gap: settings.badges.spaceBetween + 'px',
  };

  const badgeContent = (
    <div style={badgesStyle} className="flex">
      {badges.map((badge) => (
        <img
          key={badge}
          style={{ width: settings.badges.size + 'px' }}
          src={`/badges/${settings.badges.style}/${badge}.png`}
        />
      ))}
    </div>
  );

  return (
    <div style={nameStyle} className="shrink-0">
      <div
        className="flex items-center"
        style={{
          gap: badges.length > 0 ? settings.badges.space + 'px' : '0px',
          justifyContent:
            settings.text.textAlign === 'left'
              ? 'start'
              : settings.text.textAlign === 'center'
              ? 'center'
              : 'end',
        }}>
        {settings?.badges.enabled &&
          settings?.badges.position === 'left' &&
          badges.length > 0 &&
          badgeContent}
        {pseudo}
        {settings?.badges.enabled &&
          settings?.badges.position === 'right' &&
          badges.length > 0 &&
          badgeContent}
      </div>
    </div>
  );
}
