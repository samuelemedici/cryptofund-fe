import { useState } from "react";
import Image from "next/image";

interface SelectProps {
    placeholder: string;
    values: string[] | number[];
    inputValue: (value: string) => void;
}

const Select = (props: SelectProps) => {

    const [value, setValue] = useState("")

    return (
        <div className="w-1/4 flex flex-col relative">
            {(value && value !== "") && <span className="absolute -top-2 text-xs text-black">{props.placeholder}</span>}
            <select
                onChange={(e) => { setValue(e.target.value); props.inputValue(e.target.value) }}
                className={`w-full appearance-none outline-none border-b-black border-b-solid border-b-2 text-xl py-2`}
                defaultValue={"disabled"}
            >
                <option value={"disabled"} disabled>{props.placeholder}</option>
                {props.values.map((optionValue) => <option key={optionValue} value={optionValue}>{optionValue}</option>)}
            </select>
            <div className="absolute right-0 bottom-3 pointer-events-none">
                <div className="relative h-6 w-6">
                    <Image
                        src="/assets/images/shared/arrows/down-black.svg"
                        alt="password-state"
                        layout="fill"
                    />
                </div>
            </div>
        </div >
    );
};

export default Select;
