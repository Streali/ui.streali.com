import { useState } from 'react';
import { Icon, IconSVG } from '../../icon/icon';
import { Text } from '../../text/text';
import { Popover } from '../../popover/popover';

export type Element = {
  id: string;
  name: string;
  icon?: string;
  iconSvg?: IconSVG;
  iconClassName?: string;
};

interface ElementPickerProps {
  elements: Element[];
  defaultValue?: Element;
  onElementClick?: (element: Element) => void;
  label?: string;
  labelClassName?: string;
}

export function ElementPicker(props: ElementPickerProps) {
  const { defaultValue, elements, onElementClick, label, labelClassName } = props;
  const [value, setValue] = useState<Element | undefined>(defaultValue);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleElementClick = (element: Element) => {
    setValue(element);
    onElementClick && onElementClick(element);
    setPopoverOpen(false);
  };

  return (
    <>
      <style>
        {`
          [data-radix-popper-content-wrapper] {
            z-index: 999!important;
          }
        `}
      </style>
      {label && (
        <Text className={`mb-2 block w-full ${labelClassName}`} type="medium">
          {label}
        </Text>
      )}
      <Popover
        trigger={<ElementTrigger element={value} />}
        open={popoverOpen}
        onOpenChange={setPopoverOpen}>
        <div className="grid grid-cols-2 gap-3">
          {elements.map((element) => (
            <div
              className="border border-grey-400 rounded-sm p-3 flex flex-col justify-center items-center gap-1 hover:bg-grey-400 transition-colors duration-200 cursor-pointer"
              onClick={() => handleElementClick(element)}
              key={element.id}>
              <Icon
                svg={element.iconSvg}
                name={element.icon}
                className={element.iconClassName}
                width={32}
                height={32}
              />
              <Text className="mt-2" type="content">
                {element.name}
              </Text>
            </div>
          ))}
        </div>
      </Popover>
    </>
  );
}

interface ElementTriggerProps {
  element?: Element;
}

function ElementTrigger(props: ElementTriggerProps) {
  const { element } = props;

  return (
    <div className="w-full h-10 border border-grey-400 bg-grey-600 rounded flex items-center px-3 gap-2 cursor-pointer hover:border-grey-300 transition-colors duration-200">
      <Text type="content">{element ? element?.name : 'Select an element'}</Text>
    </div>
  );
}
