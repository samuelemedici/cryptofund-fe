import { useEffect, useState } from "react";
import { useAppSelector } from "../../../state/hooks/hooks";

interface ValidatedInputProps {
    placeholder: string;
    errorMessage?: string;
    successMessage?: string;
    /** The type of the input (Example: 'text', 'number') */
    type: string;
    /** The id of the input - If present in the Redux slice related to inputs validation will display an error message */
    id: string;
    /** This function will return the value typed in the input field */
    validatedInput: (value: string | number | null) => void;
    /** A custom function that accepts a value and performs custom checks on it */
    customCheck?: (value: string | number) => boolean;
}

const ValidatedInput = (props: ValidatedInputProps) => {

    const [input, setInput] = useState("");
    const [inputIsValid, setInputIsValid] = useState(true);
    const [inputIdHasErrors, setInputIdHasErrors] = useState(false);
    const { idList } = useAppSelector((state) => state.validatedInput);

    useEffect(() => {
        setInputIdHasErrors(idList.includes(props.id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const customCheck = props.customCheck ? props.customCheck(input) : true;
        if (customCheck && input) props.validatedInput(input)
        else props.validatedInput(null);
        if (input) setInputIsValid(customCheck);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    const borderColor = () => {
        return inputIsValid || inputIdHasErrors ? "border-b-black" : "border-b-red";
    }

    const message = () => {
        return inputIsValid ? (props.successMessage || '') : (props.errorMessage || '');
    }

    const messageColor = (): string => {
        return inputIsValid ? 'text-red' : 'text-green';
    }

    return (
        <div className="w-1/4 flex flex-col relative">
            {input !== "" && <span className="absolute -top-2 text-xs text-black">{props.placeholder}</span>}
            <input
                type={props.type}
                onChange={(e) => { setInput(e.target.value) }}
                className={`w-full appearance-none outline-none ${borderColor()} border-b-solid border-b-2 text-xl py-2`}
                placeholder={props.placeholder}
                id={props.id}
            />
            <span className={`absolute -bottom-4 text-xs ${messageColor()}`}>{message()}</span>
        </div>
    );
};

export default ValidatedInput;
