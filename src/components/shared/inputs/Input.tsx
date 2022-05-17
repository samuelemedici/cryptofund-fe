import { useState } from "react";

interface InputProps {
    placeholder: string;
    type: string;
    inputValue: (value: string) => void;
}

const Input = (props: InputProps) => {

    const [value, setValue] = useState(props.type === "number" ? 0 : "")

    return (
        <div className="w-1/4 flex flex-col relative">
            {(value && value !== "") && <span className="absolute -top-2 text-xs text-white">{props.placeholder}</span>}
            <input
                type={`${props.type}`}
                onChange={(e) => { setValue(e.target.value); props.inputValue(e.target.value) }}
                className={`w-full appearance-none outline-none border-b-black border-b-solid border-b-2 text-xl py-2`}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Input;
