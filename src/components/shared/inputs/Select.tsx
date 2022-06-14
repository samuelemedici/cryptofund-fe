import Image from "next/image";
import { useEffect, useState } from "react";

interface SelectProps {
    placeholder: string;
    values: string[] | number[];
    inputValue(value: string | number): void;
    preSelectedValue?: string | number;
    disabled?: boolean;
}

const Select = (props: SelectProps) => {

    const [value, setValue] = useState<string | number>("")

    useEffect(() => {
        if (value) props.inputValue(value)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    useEffect(() => {
        if (props.preSelectedValue) setValue(props.preSelectedValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="w-1/2 mr-3 relative h-min">
            {(value && value !== "") && <span className="absolute -top-2 text-xs text-greyscale-grey-mid">{props.placeholder}</span>}
            <select
                onChange={(e) => { setValue(e.target.value) }}
                className={`${value === "" && "text-greyscale-grey-mid"} w-full appearance-none outline-none border-b-divider-light border-b-solid border-b-2 text-lg pt-4 pb-1`}
                defaultValue={props.preSelectedValue ? props.preSelectedValue : "disabled"}
                disabled={props.disabled}
            >
                <option value={"disabled"} disabled>{props.placeholder}</option>
                {props.values.map((optionValue) => <option key={optionValue} value={optionValue}>{optionValue}</option>)}
            </select>
            <div className="absolute right-0 bottom-1 pointer-events-none">
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
