import Image from "next/image";
import { useState } from "react";
import { InputType } from "../../../utils/models/InputType";
interface InputProps {
    /**Accepted values: text, number, email, password */
    type: InputType;
    /**Input name */
    name?: string;
    /**Input id */
    id?: string;
    /**Use this only if you don't want to display the floating label */
    placeholder?: string;
    /**Initial value of the input */
    defaultValue?: string | number;
    /**Callback for the inserted value */
    insertedValue(value: number | string): void;
    /**Specifies if the input is required for the form validation */
    required?: boolean;
    /**Specifies if the input is disabled */
    disabled?: boolean;
    /**Icon path, this will be displayed at the end of the input */
    iconPath?: string;
    /**Use this if you need a floating label on the input */
    label?: string;
    /**Specifies the error message for the validation fail - regular font*/
    errorMessageRegular?: string;
    /**Specifies the error message for the validation fail - bold font*/
    errorMessageBold?: string;
    /**Specifies the success message for the validation success - regular font */
    successMessageRegular?: string;
    /**Specifies the success message for the validation success - bold font */
    successMessageBold?: string;
    /**Specifies if the autocomplete should be enabled for the input */
    autocomplete?: string;
}

const Input = (props: InputProps) => {

    const [passwordType, setPasswordType] = useState<InputType>(InputType.PASSWORD);

    return <div className="relative z-0 w-full group">
        <input
            type={props.type === InputType.PASSWORD ? passwordType : props.type}
            name={props.name}
            id={props.id}
            placeholder={props.placeholder || " "}
            defaultValue={props.defaultValue}
            onChange={(event) => props.insertedValue(event.target.value)}
            required={props.required}
            disabled={props.disabled}
            className="block py-2.5 px-0 
            w-full text-lg text-text-primary-dark bg-transparent 
            border-0 border-b-2 border-divider-light
            appearance-none focus:outline-none focus:ring-0
            peer"
            autoComplete={props.autocomplete}
        />
        {
            props.type === InputType.PASSWORD && <div className="absolute right-0 top-4">
                <div className="relative h-5 w-5 cursor-pointer">
                    <Image
                        src={(passwordType === InputType.PASSWORD) ? "/assets/images/shared/eye/closed.svg" : "/assets/images/shared/eye/open.svg"}
                        layout="fill"
                        alt="password-icon"
                        onClick={() => (passwordType === InputType.TEXT) ? setPasswordType(InputType.PASSWORD) : setPasswordType(InputType.TEXT)}
                    />
                </div>
            </div>
        }
        {!!props.id &&
            !!props.label &&
            <label
                htmlFor={props.id}
                className="peer-focus:font-medium absolute text-base text-text-grey-mid
                duration-300 transform -translate-y-6 scale-75
                top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                peer-focus:-translate-y-6">
                {props.label}
            </label>
        }
        {
            (props.successMessageRegular || props.successMessageBold) && <p
                id="filled_success_help"
                className="text-xs text-state-green absolute">
                <span className="font-medium">{props.successMessageBold}</span>
                {props.successMessageRegular}
            </p>
        }
        {
            (props.errorMessageRegular || props.errorMessageBold) && <p
                id="filled_success_help"
                className="text-xs text-state-red absolute">
                <span className="font-medium">{props.errorMessageBold}</span>
                {props.errorMessageRegular}
            </p>
        }
        {
            (props.iconPath) && <div className="absolute right-0 top-4">
                <div className="relative h-6 w-6">
                    <Image
                        src={props.iconPath}
                        alt={props.id || "icon"}
                        layout="fill"
                    />
                </div>
            </div>
        }
    </div>
};

export default Input;
