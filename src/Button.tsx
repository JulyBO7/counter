import { FilterType } from "./App"

type ButtonPropsType = {
    name: FilterType
    changeCounterValue: (filter: FilterType) => void
    minValue: number
    maxValue: number
    counter: number
    disabled: boolean

}


export const Button = (props: ButtonPropsType) => {
    const onClickChangeCounterValueHeandler = () => props.changeCounterValue(props.name)
    return (
        <div >
            <button onClick={onClickChangeCounterValueHeandler} 
                    disabled={props.disabled}> 

                {props.name} 

            </button>
        </div>
    )
}