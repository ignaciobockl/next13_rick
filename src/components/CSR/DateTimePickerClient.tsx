'use client';

import { useState } from 'react';

import DateTimePicker, {
  OptionsDateTimePickerProp,
} from '@/components/Custom Comp/DateTimePicker';
import Button from '../Custom Comp/Button';

/**
 * 1- AAAA-MM-DD: Fecha en formato AAAA-MM-DD.
 * 2- DD/MM/AA o DD/MM/AAAA o D/MM/AA: Fechas en formato DD/MM/AA, DD/MM/AAAA o D/MM/AA, donde D puede ser un solo dígito para el día.
 * 3- T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z: Formato ISO de fecha y hora, opcionalmente con milisegundos y zona horaria.
* Example: [
      '2025-01-30',
      '17/08/2023',
      '21/8/23',
      '03-08-23',
      '2023-08-28T00:00:00.000Z',
    ]
*/

const datePattern =
  /^(\d{4}-\d{2}-\d{2}|\d{1,2}[-/]\d{1,2}[-/]\d{2,4})(T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z)?$/;

const DateTimePickerClient = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const dateTimePickerOptions: OptionsDateTimePickerProp = {
    disable: invalidDates.filter((date) => !datePattern.test(date)),
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className='flex flex-col items-center justify-center m-4'>
      <h1 className='mb-2'>Flexible DateTimePicker Example</h1>
      <DateTimePicker
        className='mb-2'
        onChange={handleDateChange}
        options={dateTimePickerOptions}
        value={selectedDate || undefined}
      />

      <Button>Buscar</Button>
    </div>
  );
};

export default DateTimePickerClient;
