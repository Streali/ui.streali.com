import Text from '../../text/text';

interface SpacingProps {
  border: { top: number; right: number; bottom: number; left: number };
  margin: { top: number; right: number; bottom: number; left: number };
  padding: { top: number; right: number; bottom: number; left: number };
  onChange?: (value: {
    border: { top: number; right: number; bottom: number; left: number };
    margin: { top: number; right: number; bottom: number; left: number };
    padding: { top: number; right: number; bottom: number; left: number };
  }) => void;
}

export function Spacing(props: SpacingProps) {
  const { border, margin, padding, onChange } = props;

  const handleValueChange = (
    type: 'border' | 'margin' | 'padding',
    side: 'top' | 'right' | 'bottom' | 'left',
    value: number
  ) => {
    if (onChange) {
      onChange({
        border: { ...border },
        margin: { ...margin },
        padding: { ...padding },
        [type]: { ...[type], [side]: value },
      });
    }
  };

  return (
    <div className="w-full bg-grey-900 border border-grey-400 rounded p-6 relative">
      {/* Margin */}
      <Text type="medium" className="absolute top-1 left-2">
        margin
      </Text>
      <input
        type="number"
        min="0"
        className="h-6 w-9 text-center bg-grey-900 border-none outline-none absolute top-0 left-1/2 -translate-x-1/2 text-sm align-middle appearance-none"
        defaultValue={margin.top}
        onChange={(e) => handleValueChange('margin', 'top', e.target.valueAsNumber)}
      />
      <input
        type="number"
        min="0"
        className="h-6 w-9 text-center bg-grey-900 border-none outline-none absolute bottom-0 left-1/2 -translate-x-1/2 text-sm align-middle appearance-none"
        defaultValue={margin.bottom}
        onChange={(e) => handleValueChange('margin', 'bottom', e.target.valueAsNumber)}
      />
      <input
        type="number"
        min="0"
        className="w-6 h-3 text-center bg-grey-900 border-none outline-none absolute top-1/2 left-0 -translate-y-1/2 text-sm align-middle appearance-none"
        defaultValue={margin.left}
        onChange={(e) => handleValueChange('margin', 'left', e.target.valueAsNumber)}
      />
      <input
        type="number"
        min="0"
        className="w-6 h-3 text-center bg-grey-900 border-none outline-none absolute top-1/2 right-0 -translate-y-1/2 text-sm align-middle appearance-none"
        defaultValue={margin.right}
        onChange={(e) => handleValueChange('margin', 'right', e.target.valueAsNumber)}
      />

      <div className="w-full bg-grey-800 border border-grey-400 rounded p-6 relative">
        {/* Border */}
        <Text type="medium" className="absolute top-1 left-2">
          border
        </Text>
        <input
          type="number"
          min="0"
          className="h-6 w-9 text-center bg-grey-900 border-none outline-none absolute top-0 left-1/2 -translate-x-1/2 text-sm align-middle appearance-none"
          defaultValue={border.top}
          onChange={(e) => handleValueChange('border', 'top', e.target.valueAsNumber)}
        />
        <input
          type="number"
          min="0"
          className="h-6 w-9 text-center bg-grey-900 border-none outline-none absolute bottom-0 left-1/2 -translate-x-1/2 text-sm align-middle appearance-none"
          defaultValue={border.bottom}
          onChange={(e) => handleValueChange('border', 'bottom', e.target.valueAsNumber)}
        />
        <input
          type="number"
          min="0"
          className="w-6 h-3 text-center bg-grey-900 border-none outline-none absolute top-1/2 left-0 -translate-y-1/2 text-sm align-middle appearance-none"
          defaultValue={border.left}
          onChange={(e) => handleValueChange('border', 'left', e.target.valueAsNumber)}
        />
        <input
          type="number"
          min="0"
          className="w-6 h-3 text-center bg-grey-900 border-none outline-none absolute top-1/2 right-0 -translate-y-1/2 text-sm align-middle appearance-none"
          defaultValue={border.right}
          onChange={(e) => handleValueChange('border', 'right', e.target.valueAsNumber)}
        />

        <div className="w-full bg-grey-700 border border-grey-400 rounded p-6 relative">
          {/* Padding */}
          <Text type="medium" className="absolute top-1 left-2">
            padding
          </Text>
          <input
            type="number"
            min="0"
            className="h-6 w-9 text-center bg-grey-900 border-none outline-none absolute top-0 left-1/2 -translate-x-1/2 text-sm align-middle appearance-none"
            defaultValue={padding.top}
            onChange={(e) => handleValueChange('padding', 'top', e.target.valueAsNumber)}
          />
          <input
            type="number"
            min="0"
            className="h-6 w-9 text-center bg-grey-900 border-none outline-none absolute bottom-0 left-1/2 -translate-x-1/2 text-sm align-middle appearance-none"
            defaultValue={padding.bottom}
            onChange={(e) => handleValueChange('padding', 'bottom', e.target.valueAsNumber)}
          />
          <input
            type="number"
            min="0"
            className="w-6 h-3 text-center bg-grey-900 border-none outline-none absolute top-1/2 left-0 -translate-y-1/2 text-sm align-middle appearance-none"
            defaultValue={padding.left}
            onChange={(e) => handleValueChange('padding', 'left', e.target.valueAsNumber)}
          />
          <input
            type="number"
            min="0"
            className="w-6 h-3 text-center bg-grey-900 border-none outline-none absolute top-1/2 right-0 -translate-y-1/2 text-sm align-middle appearance-none"
            defaultValue={padding.right}
            onChange={(e) => handleValueChange('padding', 'right', e.target.valueAsNumber)}
          />

          <div className="w-full bg-grey-600 border border-grey-400 rounded p-6"></div>
        </div>
      </div>
    </div>
  );
}
