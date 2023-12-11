import React from 'react';
import { Button } from './Button';
import { FilterType } from './App';

type ScreenPropsType = {
    counter: number
    changeCounterValue: (filter: FilterType) => void
    maxValue: number
    minValue: number
}

export const Screen = (props: ScreenPropsType) => {

    return (
        < >
            <div className='screen'>
                <p className={props.counter === props.maxValue ? 'max-counter' : 'counter'}> {props.counter}</p>

            </div>
            <div className='buttons'>
                <Button
                    name ={'inc'}
                    changeCounterValue={props.changeCounterValue}
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                    counter={props.counter}
                    disabled={props.counter === props.maxValue}
                />
                <Button
                    name={'reset'}
                    changeCounterValue={props.changeCounterValue}
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                    counter={props.counter}
                    disabled={props.counter === props.minValue}
                />
            </div>
        </>
    )
}