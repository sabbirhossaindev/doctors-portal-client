import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <header className='my-6'
        style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                    <div className='lg:w-1/2'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
            <p className='text-xl'>You Have Selected Date: {format(selectedDate, 'pp')}</p>
        </header>
    );
};

export default AppointmentBanner;