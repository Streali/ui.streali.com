import { Button } from '../../button/button';
import { ColorPicker } from '../../editor/color-picker/color-picker';
import Slider from '../../forms/slider/slider';
import { Tooltip } from '../../tooltip/tooltip';

interface ChatDemoToolbarProps {
  className?: string;
  onMessageSpeedChange?: (value: number) => void;
  onDownloadClick?: () => void;
  onBackgroundColorChange?: (color: string) => void;
}

export function ChatDemoToolbar(props: ChatDemoToolbarProps) {
  const { className = '', onMessageSpeedChange, onDownloadClick, onBackgroundColorChange } = props;

  return (
    <div
      className={`p-3 bg-grey-900 border-b border-grey-400 flex justify-between items-center ${className}`}>
      <Slider
        min={0}
        max={3}
        label="Message speed"
        containerClassName="w-1/3"
        onChange={onMessageSpeedChange}
      />
      <div className="flex gap-2">
        <Tooltip content="Download as PNG">
          <Button iconLeft="download-line" color="stroke" onClick={onDownloadClick} />
        </Tooltip>
        <Tooltip content="Background color">
          <ColorPicker side="right" onChange={onBackgroundColorChange} />
        </Tooltip>
      </div>
    </div>
  );
}
