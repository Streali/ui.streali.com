import toast, { Toaster } from 'react-hot-toast';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';
import { Text } from '../text/text';
import { Link } from 'react-router-dom';

interface ToastProps {
  type: 'default' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  id?: string;
  duration?: number;
  buttons?: {
    title: string;
    onClick: () => void;
    link?: string;
    external?: boolean;
  }[];
  icon?: string;
}

export function Toast(props: ToastProps) {
  const { type, title, message, id = crypto.randomUUID(), duration, buttons, icon } = props;

  return (
    <>
      <Button onClick={() => toastr(type, title, message, id, duration, buttons, icon)}>
        Display toast
      </Button>
    </>
  );
}

export function toastr(
  type: 'default' | 'success' | 'warning' | 'error',
  title: string,
  message: string,
  id?: string,
  duration?: number,
  buttons?: {
    title: string;
    onClick: () => void;
    link?: string;
    external?: boolean;
  }[],
  icon?: string
) {
  toast(
    <ToastContent type={type} title={title} message={message} buttons={buttons} icon={icon} />,
    {
      id: id ?? crypto.randomUUID(),
      duration: duration || 5000,
      position: 'top-right',
      className: '!p-0 !bg-transparent !border-0 !rounded-0 !shadow-none !text-white',
    }
  );
}

interface ToastContentProps {
  type: 'default' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  buttons?: {
    title: string;
    onClick: () => void;
    link?: string;
    external?: boolean;
  }[];
  icon?: string;
}

function ToastContent(props: ToastContentProps) {
  const { type, title, message, buttons, icon } = props;

  return (
    <div className="bg-grey-600 border border-grey-400 rounded py-4 pl-5 pr-4 overflow-hidden relative min-w-[300px] flex gap-4">
      <div
        className={`w-1 h-full absolute top-0 left-0 ${
          type === 'default'
            ? 'bg-primary-500'
            : type === 'success'
            ? 'bg-success-500'
            : type === 'warning'
            ? 'bg-warning-500'
            : 'bg-error-500'
        }`}></div>
      {icon && (
        <div
          className={`${
            type === 'default'
              ? 'text-primary-500'
              : type === 'success'
              ? 'text-success-500'
              : type === 'warning'
              ? 'text-warning-500'
              : 'text-error-500'
          }`}>
          <Icon name={icon} />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-0.5">
          <Text>{title}</Text>
          <Text type="medium">{message}</Text>
        </div>
        {buttons && buttons.length !== 0 && (
          <div className="flex gap-2 flex-wrap">
            {buttons.map((button, index) => (
              <ToastButton
                key={index}
                type={type}
                title={button.title}
                onClick={button.onClick}
                link={button.link}
                external={button.external}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface ToastButtonProps {
  type: 'default' | 'success' | 'warning' | 'error';
  title: string;
  onClick: () => void;
  link?: string;
  external?: boolean;
}

function ToastButton(props: ToastButtonProps) {
  const { type, title, onClick, link, external } = props;

  const typeButtonColor = {
    default: 'text-primary-300',
    success: 'text-success-300',
    warning: 'text-warning-300',
    error: 'text-error-300',
  };

  const linkContent = () => {
    if (link && !external) {
      return (
        <Link to={link} onClick={onClick} className={`text-sm ${typeButtonColor[type]}`}>
          {title}
        </Link>
      );
    }

    if (link && external) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          onClick={onClick}
          className={`text-sm ${typeButtonColor[type]}`}>
          {title}
        </a>
      );
    }

    return (
      <button onClick={onClick} className={`text-sm ${typeButtonColor[type]}`}>
        {title}
      </button>
    );
  };

  return linkContent();
}

interface ToastProviderProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function ToastProvider(props: ToastProviderProps) {
  const { position = 'top-right' } = props;

  return <Toaster position={position} />;
}
