import * as TooltipPrimitive from '@radix-ui/react-tooltip';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  delayDuration?: number;
  contentClassName?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export function Tooltip(props: TooltipProps) {
  const { children, content, delayDuration = 100, contentClassName = '', side } = props;

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={delayDuration}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side || 'top'}
            className={`bg-black/80 backdrop-blur px-2 py-1 rounded ${contentClassName}`}
            sideOffset={4}>
            <TooltipPrimitive.Arrow />
            <p className="text-sm">{content}</p>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
