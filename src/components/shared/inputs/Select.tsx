import Image from "next/image";

interface SelectProps {
    /**Input name */
    name?: string;
    /**Input id */
    id?: string;
    /**Use this only if you don't want to display the floating label */
    placeholder?: string;
    /**Initial value of the input */
    defaultValue?: string | number;
    /**Array with the options */
    values: string[] | number[];
    /**Callback for the selected value */
    selectedValue(value: number | string): void;
    /**Specifies if the input is required for the form validation */
    required?: boolean;
    /**Specifies if the input is disabled */
    disabled?: boolean;
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
}

const Select = (props: SelectProps) => {

    return (
        <div className="w-full relative">
            <select
                name={props.name}
                id={props.id}
                placeholder={props.placeholder || " "}
                defaultValue={props.defaultValue || props.label}
                onChange={(event) => props.selectedValue(event.target.value)}
                required={props.required}
                disabled={props.disabled}
                className={`block py-2.5 px-0 
                w-full text-lg text-text-primary-dark bg-transparent 
                border-0 border-b-2 border-divider-light
                appearance-none focus:outline-none focus:ring-0
                peer ${!props.defaultValue && "text-text-grey-mid"}`}
            >
                <option value={props.label} disabled>{props.label}</option>
                {props.values.map((optionValue) => <option key={optionValue} value={optionValue}>{optionValue}</option>)}
            </select>
            {!!props.id &&
                !!props.label &&
                props.defaultValue && !props.placeholder &&
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
            <div className="absolute right-0 bottom-2 pointer-events-none">
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
