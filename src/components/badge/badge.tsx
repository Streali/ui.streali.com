'use client';

interface BadgeProps {
  type: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  text: string;
  className?: string;
}

const defineTypeClassName = {
  primary: 'bg-primary-500 text-white',
  secondary: 'bg-secondary-500 text-black',
  success: 'bg-success-100 text-success-600',
  error: 'bg-error-100 text-error-500',
  warning: 'bg-warning-100 text-warning-600',
};

export default function Badge(props: BadgeProps) {
  const { type, text, className = '' } = props;

  return (
    <div
      className={`inline-flex px-2 h-6 rounded items-center font-semibold text-sm uppercase ${defineTypeClassName[type]} ${className}`}>
      {text}
    </div>
  );
}
