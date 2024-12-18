import React, { useRef } from "react";

export default function Header() {
    const todayPeriodRef = useRef(0);
    const weekPeriodRef = useRef(0);

    const celsiusRef = useRef(0);
    const farenheitRef = useRef(0);

    const tooglePeriod = (button) => {
        if(button.target.classList.contains('period-active'))
            return 0;
        else {
            button.target.classList.add('period-active');

            if(button.target.innerHTML == weekPeriodRef.current.innerHTML)
                todayPeriodRef.current.classList.remove('period-active');
            else
                weekPeriodRef.current.classList.remove('period-active');
        }
    }

    const toogle = (button, className, fRef, sRef) => {
        if(button.target.classList.contains(className))
            return 0;
        else {
            button.target.classList.add(className);

            if(button.target.innerHTML == sRef.current.innerHTML)
                fRef.current.classList.remove(className);
            else
                sRef.current.classList.remove(className);
        }
    }

    return (
        <header>
            <div>
                <button className="period period-active" ref={todayPeriodRef} onClick={button => toogle(button, 'period-active', todayPeriodRef, weekPeriodRef)}> Today </button>
                <button className="period" ref={weekPeriodRef} onClick={button => toogle(button, 'period-active', todayPeriodRef, weekPeriodRef)}> Week </button>
            </div>
            <div>
                <button className="unit active-unit" ref={celsiusRef} onClick={button => toogle(button, 'active-unit', celsiusRef, farenheitRef)}> °C </button>
                <button className="unit" ref={farenheitRef} onClick={button => toogle(button, 'active-unit', celsiusRef, farenheitRef)}> °F </button>
            </div>
        </header>
    )
}