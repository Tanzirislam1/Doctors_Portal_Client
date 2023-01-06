import chair from '../../../src/assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse gap-16">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='dentist-chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date} // current date
                        onSelect={setDate} // select dates
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;