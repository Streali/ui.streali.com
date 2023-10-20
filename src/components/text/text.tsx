interface TextProps {
  children: React.ReactNode;
  type?: 'content' | 'little' | 'medium' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  onClick?: () => void;
}

const defineTypeClassName = {
  content: 'text-base',
  little: 'text-xs',
  medium: 'text-sm',
  h1: 'text-2xl font-medium',
  h2: 'text-xl font-medium',
  h3: 'text-lg font-medium',
  h4: 'text-base font-medium',
  h5: 'text-sm font-medium',
  h6: 'text-xs font-medium',
};

export function Text(props: TextProps) {
  const { children, type = 'content', className = '', onClick } = props;

  return (
    <span className={`${defineTypeClassName[type]} ${className}`} onClick={onClick}>
      {children}
    </span>
  );
}
