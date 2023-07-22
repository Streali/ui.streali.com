import { CSSProperties, Fragment } from 'react';
import { ChatMessage } from '../chat-message/chat-message';
import { Container } from '../chat-message/container';
import { Message } from '../chat-message/message';
import { Name } from '../chat-message/name';

interface ChatMessageEditorProps {
  settings: ChatMessage;
  onElementClick?: (element: 'name' | 'message' | 'container') => void;
  className?: string;
}

export function ChatMessageEditor(props: ChatMessageEditorProps) {
  const { settings, onElementClick, className = '' } = props;

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
    <div className={className}>
      <div
        className="relative border-2 before:h-5 border-green-500 before:content-['Container'] before:bg-green-500 before:absolute before:-top-5 before:-left-0.5 before:text-sm before:px-1 before:rounded-t before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 cursor-pointer w-fit"
        onClick={() => onElementClick && onElementClick('container')}>
        <div style={globalStyle} className="flex w-full">
          <Container
            settings={settings.container}
            providerColor={'#000000'}
            globalSettings={settings.global}>
            {settings.global.order.map((item, index) => (
              <Fragment key={index}>
                {item.id === 'name' && (
                  <div
                    className="relative border-2 before:h-5 border-blue-500 before:content-['Name'] before:bg-blue-500 before:absolute before:-top-5 before:-left-0.5 before:text-sm before:px-1 before:rounded-t before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      onElementClick && onElementClick('name');
                    }}>
                    <Name
                      key={item.id}
                      settings={settings.name}
                      pseudo={'Pseudo'}
                      badges={[]}
                      providerColor={'#000000'}
                      layout={settings.global.layout}
                    />
                  </div>
                )}
                {item.id === 'message' && (
                  <div
                    className="relative border-2 before:h-5 border-orange-500 before:content-['Message'] before:bg-orange-500 before:absolute before:-top-5 before:-left-0.5 before:text-sm before:px-1 before:rounded-t before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      onElementClick && onElementClick('message');
                    }}>
                    <Message
                      key={item.id}
                      settings={settings.message}
                      message={'Message content'}
                      providerColor={'#000000'}
                      layout={settings.global.layout}
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
}
