import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Text } from '../text/text';
import Icon from '../icon/icon';

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

interface AccordionProps {
  items: AccordionItem[];
  defaultOpens: string[];
}

export function Accordion(props: AccordionProps) {
  const { items, defaultOpens } = props;

  return (
    <AccordionPrimitive.Root type="multiple" defaultValue={defaultOpens}>
      {items.map((item, index) => (
        <AccordionPrimitive.Item key={index} value={index.toString()} className="mb-3">
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="w-full h-10 bg-grey-600 border border-grey-400 rounded flex items-center px-3 justify-between group transition-colors duration-200 data-[state=open]:border-primary-500">
              <Text>{item.title}</Text>
              <Icon
                name="arrow-down-s-line"
                className="transition-transform duration-200 group-data-[state=open]:rotate-180"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="mt-3 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
            {item.content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
