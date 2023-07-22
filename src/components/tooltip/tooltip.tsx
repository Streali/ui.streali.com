import * as TooltipPrimitive from '@radix-ui/react-tooltip';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  delayDuration?: number;
}

export function Tooltip(props: TooltipProps) {
  const { children, content, delayDuration = 100 } = props;

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={delayDuration}>
        <TooltipPrimitive.Trigger>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className="bg-black/80 backdrop-blur px-2 py-1 rounded"
            sideOffset={8}>
            <TooltipPrimitive.Arrow />
            <p className="text-sm">{content}</p>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}