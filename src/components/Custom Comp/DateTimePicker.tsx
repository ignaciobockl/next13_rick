import { FC, useEffect, useRef } from 'react';

import flatpickr from 'flatpickr';
import { Options } from 'flatpickr/dist/types/options';

import 'flatpickr/dist/flatpickr.min.css';

export type OptionsDateTimePickerProp = Options & {
  allowInput?: boolean;
  clickOpens?: boolean;
  dateFormat?: 'd/m/Y H:i' | 'd/m/Y H:i:S' | 'd/m/Y' | 'H:i' | 'H:i:S';
  defaultDate?: Date;
  defaultHour?: number;
  defaultMinute?: number;
  defaultSeconds?: number;
  disableMobile?: boolean;
  enableTime?: boolean;
  errorHandler?: (e: Error) => void;
  locale?: 'es';
  maxDate?: Date;
  minDate?: Date;
  mode?: 'single' | 'multiple' | 'range' | 'time';
  noCalendar?: boolean;
};

export interface DateTimePickerProps {
  className?: string;
  onChange: (selectedDate: Date) => void;
  options?: OptionsDateTimePickerProp;
  placeholder?: string;
  value?: Date;
}

const optionsDefaultValues: OptionsDateTimePickerProp = {
  enableTime: false,
  dateFormat: 'd/m/Y',
  locale: 'es',
  mode: 'single',
  noCalendar: false,
};

/**
 * Component for selecting dates and times with customizable options.
 * @param {DateTimePickerProps} props - The props for the DateTimePicker component.
 * @param {string} [props.className = ''] - Additional CSS class for the component.
 * @param {function} props.onChange - Function to execute when the selected date changes.
 * @param {OptionsDateTimePickerProp} [props.options] - Configuration options for the DateTimePicker.
 * @param {boolean} [props.options.allowInput] - Allow manual input of dates.
 * @param {boolean} [props.options.clickOpens] - Open the calendar when the input is clicked.
 * @param {string} [props.options.dateFormat='d/m/Y'] - Date and time format to display.
 *   Possible values: 'd/m/Y H:i' | 'd/m/Y H:i:S' | 'd/m/Y' | 'H:i' | 'H:i:S'
 * @param {Date} [props.options.defaultDate] - Default date to display.
 * @param {number} [props.options.defaultHour] - Default hour value.
 * @param {number} [props.options.defaultMinute] - Default minute value.
 * @param {number} [props.options.defaultSeconds] - Default seconds value.
 * @param {boolean} [props.options.disableMobile] - Disable mobile mode.
 * @param {boolean} [props.options.enableTime] - Enable or disable time selection.
 * @param {function} [props.options.errorHandler] - Custom error handler function.
 * @param {string} [props.options.locale] - Local language for the component.
 * @param {Date} [props.options.maxDate] - Maximum allowed date.
 * @param {Date} [props.options.minDate] - Minimum allowed date.
 * @param {string} [props.options.mode='single'] - Calendar selection mode ('single', 'multiple', 'range', 'time').
 * @param {boolean} [props.options.noCalendar] - Hide the calendar and show only the time picker.
 * @param {string} [props.options.placeholder] - Placeholder text for the input.
 * @param {Date} [props.value] - Current value of the DateTimePicker.
 * @returns {JSX.Element} - The DateTimePicker component.
 */

const DateTimePicker: FC<DateTimePickerProps> = (props) => {
  const { className = '', onChange, options, placeholder, value } = props;

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
      placeholder={placeholder || 'Seleccione la Fecha'}
      type='text'
    />
  );
};

export default DateTimePicker;
