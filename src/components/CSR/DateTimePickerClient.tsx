'use client';

import { useState } from 'react';

import DateTimePicker, {
  OptionsDateTimePickerProp,
} from '@/components/Custom Comp/DateTimePicker';

import Button from '../Custom Comp/Button';

const DateTimePickerClient = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const dateTimePickerOptions: OptionsDateTimePickerProp = {
    // Agregar aca la configuración deseada del dtp.
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
        placeholder=''
        value={selectedDate || undefined}
      />

      {/* // TODO: agregar funcionalidad btn */}
      <Button>Buscar</Button>
    </div>
  );
};

export default DateTimePickerClient;
