import { CSSProperties, Fragment } from 'react';
import type { ContainerType } from './container';
import { Container } from './container';
import { Name, NameType } from './name';
import { Message, MessageType } from './message';

export type Global = {
  spaceBetweenMessages: number;
  alignment: 'left' | 'center' | 'right';
  layout: 'stack' | 'inline' | 'flex';
  order: { id: string; name: string }[];
  animation: string;
  developer_mode?: boolean;
};

export type ChatMessage = {
  global: Global;
  container: ContainerType;
  name: NameType;
  message: MessageType;
};

export type ProviderMessage = {
  pseudo: string;
  message: string;
  badges?: string[];
  color?: string;
};

interface ChatMessageProps {
  settings: ChatMessage;
  message: ProviderMessage;
}

export function ChatMessage(props: ChatMessageProps) {
  const { settings, message } = props;

  const globalStyle: CSSProperties = {
    flexDirection: settings.global.layout === 'stack' ? 'column' : ('row' as 'column' | 'row'),
    ...(settings.global.layout === 'stack' && {
      alignItems:
        settings.global.alignment === 'left'
          ? 'flex-start'
          : settings.global.alignment === 'right'
          ? 'flex-end'
          : ('center' as 'flex-start' | 'flex-end' | 'center'),
    }),
    ...(settings.global.layout === 'inline' && {
      justifyContent:
        settings.global.alignment === 'left'
          ? 'flex-start'
          : settings.global.alignment === 'right'
          ? 'flex-end'
          : ('center' as 'flex-start' | 'flex-end' | 'center'),
    }),
    marginBottom: settings.global.spaceBetweenMessages + 'px',
  };

  return (
    <div style={globalStyle} className="flex w-full">
      <Container
        settings={settings.container}
        providerColor={message.color}
        globalSettings={settings.global}>
        {settings.global.order.map((item, index) => (
          <Fragment key={index}>
            {item.id === 'name' && (
              <Name
                key={item.id}
                settings={settings.name}
                pseudo={message.pseudo}
                badges={message.badges || []}
                providerColor={message.color}
                layout={settings.global.layout}
              />
            )}
            {item.id === 'message' && (
              <Message
                key={item.id}
                settings={settings.message}
                message={message.message}
                providerColor={message.color}
                layout={settings.global.layout}
              />
            )}
          </Fragment>
        ))}
      </Container>
    </div>
  );
}
