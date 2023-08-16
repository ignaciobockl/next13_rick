import { FC, useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import { Options } from 'flatpickr/dist/types/options';

import 'flatpickr/dist/flatpickr.min.css';

export type OptionsDateTimePickerProp = Options & {
  enableTime?: boolean;
  dateFormat?: 'd/m/Y H:i' | 'd/m/Y H:i:S' | 'd/m/Y' | 'H:i' | 'H:i:S';
  defaultDate?: Date;
  locale?: 'es';
  maxDate?: Date;
  minDate?: Date;
};

interface DateTimePickerProps {
  className?: string;
  onChange: (selectedDate: Date) => void;
  options?: OptionsDateTimePickerProp;
  value?: Date;
}

const optionsDefaultValues: OptionsDateTimePickerProp = {
  enableTime: true,
  dateFormat: 'd/m/Y',
  locale: 'es',
};

/**
 *
 * @param props
 * @param {} [] -
 * @returns
 */

const DateTimePicker: FC<DateTimePickerProps> = (props) => {
  const { className = '', onChange, options, value } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      const fp = flatpickr(inputRef.current, {
        ...optionsDefaultValues,
        ...options,
        onChange: (selectedDates) => {
          if (selectedDates.length > 0) {
            onChange(selectedDates[0]);
          }
        },
      });

      return () => {
        fp.destroy();
      };
    }
  }, [onChange, value, options]);

  return (
    <input
      className={`p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 ${className}`}
      ref={inputRef}
      type='text'
    />
  );
};

export default DateTimePicker;
