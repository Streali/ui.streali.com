import { Icon, IconSVG } from '../../icon/icon';

export type Tool = {
  title: string;
  icon: string | IconSVG;
  onClick: () => void;
};

interface ToolbarProps {
  tools: Tool[];
  className?: string;
}

export function Toolbar(props: ToolbarProps) {
  const { tools, className = '' } = props;

  return (
    <div className={`p-2 bg-grey-800 border-r border-grey-400 flex flex-col gap-2 ${className}`}>
      {tools.map((tool) => (
        <button
          className="bg-grey-400 rounded p-3 flex flex-col gap-1 items-center hover:bg-primary-500 transition-colors duration-150"
          onClick={tool.onClick}>
          <Icon name={tool.icon} className="text-xl" />
          <span className="uppercase text-xs">{tool.title}</span>
        </button>
      ))}
    </div>
  );
}
