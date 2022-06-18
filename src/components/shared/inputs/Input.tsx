import { useEffect, useState } from "react";

interface InputProps {
    placeholder: string;
    type: string;
    inputValue(value: number | string): void;
    prePopulatedValue?: string | number;
}

const Input = (props: InputProps) => {

    const [value, setValue] = useState(props.type === "number" ? 0 : "");

    useEffect(() => {
        if (props.prePopulatedValue) setValue(props.prePopulatedValue);

        props.inputValue(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        props.inputValue(value)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <div className="w-full mr-3 relative">
            {(value && value !== "") && <span className="absolute -top-2 text-xs text-greyscale-grey-mid">{props.placeholder}</span>}
            <input
                type={`${props.type}`}
                onChange={(e) => { setValue(e.target.value) }}
                className={`w-full appearance-none outline-none border-b-divider-light border-b-solid border-b-2 text-xl pt-4 pb-1`}
                placeholder={props.placeholder}
                value={value}
            />
        </div>
    );
};

export default Input;
