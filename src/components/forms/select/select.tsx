import ReactSelect, {
  ActionMeta,
  ControlProps,
  IndicatorsContainerProps,
  InputProps,
  MenuListProps,
  MenuProps,
  MultiValueProps,
  OptionProps,
  PlaceholderProps,
  PropsValue,
  SingleValueProps,
  ValueContainerProps,
  components,
} from 'react-select';
import Text from '../../text/text';
import Icon from '../../icon/icon';

interface SelectProps {
  label?: string;
  labelClassName?: string;
  options: { value: string; label: string }[];
  isMulti?: boolean;
  errorMessage?: string;
  placeholder?: string;
  onChange?: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
  iconLeft?: string;
  disabled?: boolean;
  className?: string;
  defaultValue?: { label: string; value: string };
}

export default function Select(props: SelectProps) {
  const {
    label,
    labelClassName = '',
    errorMessage,
    isMulti = false,
    options,
    placeholder = '',
    onChange,
    iconLeft,
    disabled = false,
    className = '',
    defaultValue,
  } = props;

  return (
    <div className={className}>
      {label && (
        <Text className={`mb-2 block w-full ${labelClassName}`} type="medium">
          {label}
        </Text>
      )}
      <ReactSelect
        options={options}
        defaultValue={defaultValue as unknown}
        isMulti={isMulti}
        placeholder={placeholder}
        onChange={onChange}
        isDisabled={disabled}
        components={{
          Control: ({ ...props }) => (
            <>
              <SelectControl
                errorMessage={errorMessage}
                iconLeft={iconLeft}
                {...props}></SelectControl>
            </>
          ),
          CrossIcon: SelectCross,
          IndicatorSeparator: SelectIndicatorSeparator,
          IndicatorsContainer: SelectIndicatorContainer,
          ValueContainer: SelectValueContainer,
          SingleValue: SelectSingleValue,
          Input: SelectInput,
          Placeholder: SelectPlaceholder,
          Menu: SelectMenu,
          MenuList: SelectMenuList,
          Option: SelectOption,
          MultiValue: SelectMultiValue,
        }}
      />
    </div>
  );
}

interface SelectControlProps extends ControlProps {
  errorMessage?: string;
  iconLeft?: string;
}

const SelectControl = ({ children, ...props }: SelectControlProps) => {
  const defineFocusClassName = '!border-primary-500 !shadow-outline';
  const defineErrorClassName = '!border-error-500';
  const defineDisabledClassName = '!bg-grey-400 !cursor-not-allowed';

  return (
    <>
      <components.Control
        className={`!bg-grey-600 border !min-h-fit ${props.isFocused ? defineFocusClassName : ''} ${
          props.isMulti && '!max-h-fit'
        } ${props.errorMessage ? defineErrorClassName : '!border-grey-400'} ${
          props.isDisabled ? defineDisabledClassName : ''
        }`}
        {...props}>
        {props.iconLeft && (
          <Icon name={props.iconLeft} className={`ml-3 ${props.isMulti && 'mr-1'}`} />
        )}
        {children}
      </components.Control>
      {props.errorMessage && (
        <Text type="medium" className="text-error-500">
          {props.errorMessage}
        </Text>
      )}
    </>
  );
};

const SelectCross = () => {
  return <Icon name="close-line" />;
};

const SelectIndicatorSeparator = () => {
  return null;
};

const SelectIndicatorContainer = (props: IndicatorsContainerProps) => {
  return (
    <components.IndicatorsContainer
      className="w-10 h-10 flex justify-center items-center text-lg !self-center"
      {...props}>
      <Icon name="arrow-down-s-line" />
    </components.IndicatorsContainer>
  );
};

const SelectValueContainer = (props: ValueContainerProps) => {
  return (
    <components.ValueContainer
      className={`!min-h-10 !p-0 !pl-3 max-h-6 gap-1  ${
        props.isMulti ? '!pl-1 !pt-2 !pb-1 !min-h-fit !max-h-fit !-mt-1' : '!mt-0'
      }`}
      {...props}>
      {props.children}
    </components.ValueContainer>
  );
};

const SelectSingleValue = (props: SingleValueProps) => {
  return (
    <components.SingleValue
      className="!text-white !h-auto flex items-center !ml-0 !mr-0 !-mt-0.5"
      {...props}>
      {props.children}
    </components.SingleValue>
  );
};

const SelectInput = (props: InputProps) => {
  return (
    <components.Input
      className={`!bg-transparent !p-0 !m-0 !text-white !text-lg !outline-none ${
        props.isMulti ? '!ml-1' : ''
      }`}
      {...props}
    />
  );
};

const SelectPlaceholder = (props: PlaceholderProps) => {
  return (
    <components.Placeholder
      className={`!bg-transparent !p-0  !text-grey-200 !outline-none ${
        props.isMulti ? '!ml-1 !-mt-0.5' : '!-mt-0.5'
      }`}
      {...props}
    />
  );
};

const SelectMenu = (props: MenuProps) => {
  return <components.Menu className="!bg-transparent" {...props} />;
};

const SelectMenuList = (props: MenuListProps) => {
  return (
    <components.MenuList
      className="!bg-grey-900 !border !border-grey-400 !rounded !p-2 flex flex-col gap-1"
      {...props}
    />
  );
};

const SelectOption = (props: OptionProps) => {
  return (
    <components.Option
      className={`!bg-grey-600 !text-white !p-0 !px-2 !rounded h-7 !inline-flex !items-center !text-sm hover:!bg-primary-500 !cursor-pointer gap-2 ${
        props.isSelected ? '!bg-primary-500' : ''
      }`}
      {...props}>
      {props.isSelected && <Icon name="check-line" />}
      {props.children}
    </components.Option>
  );
};

const SelectMultiValue = (props: MultiValueProps) => {
  return (
    <components.MultiValue
      className="!bg-primary-500 !rounded !p-0 !px-1 !h-6 !inline-flex !items-center !text-sm !cursor-pointer !text-white !m-0"
      {...props}>
      {props.children}
    </components.MultiValue>
  );
};
