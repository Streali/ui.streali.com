import { useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import './variable-input.scss';
import { Text } from '../../text/text';

type Suggest = {
  id: string;
  display: string;
};

interface VariableTextareaProps {
  value?: string;
  onChange?: (newValue: string) => void;
  className?: string;
  data: Suggest[];
  label?: string;
  labelClassName?: string;
  errorMessage?: string;
}

export function VariableInput(props: VariableTextareaProps) {
  const { value, onChange, className, data, label, labelClassName, errorMessage } = props;

  const [val, setValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: any, newValue: string, newPlainTextValue: string, mentions: any) => {
    setValue(newValue);
    if (onChange) {
      onChange(newPlainTextValue);
    }
  };

  const inputContainerClassName = `w-full cursor-text rounded bg-grey-600 text-white !min-h-[40px] py-[7px] px-4 transition border ${
    isFocused ? 'border-primary-500' : 'border-grey-400'
  } ${value ? 'border-primary-500' : ''} ${errorMessage ? 'border-error-500' : ''} ${className}`;

  return (
    <>
      {label && (
        <Text className={`mb-2 block w-full ${labelClassName}`} type="medium">
          {label}
        </Text>
      )}
      <div className={inputContainerClassName}>
        <MentionsInput
          value={val}
          onChange={handleChange}
          className="variable-textarea"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}>
          <Mention trigger="#" data={data} markup={'{{__display__}}'} />
        </MentionsInput>
      </div>
      {errorMessage && (
        <Text type="medium" className="text-error-500">
          {errorMessage}
        </Text>
      )}
    </>
  );
}
