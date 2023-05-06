import Icon from '../icon/icon';
import { Text } from '../text/text';

interface InformationBoxProps {
  title: string;
  text: string;
  icon?: string;
  type: 'info' | 'warning' | 'error';
  buttons?: React.ReactNode;
  className?: string;
}

const defineContainerClassName = {
  info: 'bg-grey-600 border-grey-400',
  warning: 'bg-warning-100 border-warning-300',
  error: 'bg-error-100 border-error-500',
};

const defineIconClassName = {
  info: 'text-primary-500',
  warning: 'text-warning-500',
  error: 'text-error-500',
};

const defineTitleClassName = {
  info: 'text-white',
  warning: 'text-warning-900',
  error: 'text-error-900',
};

const defineTextClassName = {
  info: 'text-grey-100',
  warning: 'text-warning-700',
  error: 'text-error-700',
};

export function InformationBox(props: InformationBoxProps) {
  const { title, text, icon = 'information-fill', type, buttons, className = '' } = props;

  return (
    <div
      className={`w-full p-5 border rounded flex gap-5 ${defineContainerClassName[type]} ${className}`}>
      <div>
        <Icon name={icon} className={`text-2xl ${defineIconClassName[type]}`} />
      </div>
      <div className="flex flex-col mt-1.5">
        <Text type="h3" className={`${defineTitleClassName[type]}`}>
          {title}
        </Text>
        <Text className={`${defineTextClassName[type]}`}>{text}</Text>
        {buttons && <div className="mt-3">{buttons}</div>}
      </div>
    </div>
  );
}
