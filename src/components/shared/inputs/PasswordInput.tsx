import Image from "next/image";
import { useEffect, useState } from "react";
import { PASSWORD_REGEX } from "../../../utils/regex";

interface PasswordProps {
    placeholder: string;
    errorMessage?: string;
    successMessage?: string;
    validatedPassword(value: string | null): void;
    value?: string;
}

const PasswordInput = (props: PasswordProps) => {

    const [password, setPassword] = useState("");
    const [displayPassword, setDisplayPassword] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    useEffect(() => {
        if (PASSWORD_REGEX.test(password) && password) props.validatedPassword(password)
        else props.validatedPassword(null);
        setIsPasswordValid(PASSWORD_REGEX.test(password));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [password]);

    const borderColor = () => {
        return password === "" ? "border-b-divider-light" : isPasswordValid ? "border-b-state-green" : "border-b-state-red";
    }

    const message = () => {
        return password === "" ? "" : isPasswordValid ? (props.successMessage || '') : (props.errorMessage || '');
    }

    const messageColor = (): string => {
        return isPasswordValid ? 'text-state-green' : 'text-state-red';
    }

    return (
        <div className="w-1/2 flex flex-col relative">
            {password !== "" && <span className="absolute -top-2 text-xs text-greyscale-grey-mid">{props.placeholder}</span>}
            <input
                type={`${displayPassword ? 'text' : 'password'}`}
                onChange={(e) => { setPassword(e.target.value) }}
                className={`w-full appearance-none outline-none ${borderColor()} border-b-solid border-b-2 text-lg pt-4 pb-1`}
                placeholder={props.placeholder}
                value={props.value}
            />
            <span className={`absolute -bottom-4 text-xs ${messageColor()}`}>{message()}</span>
            <div className="absolute right-0 bottom-3">
                <div className="relative h-6 w-6">
                    <Image
                        src={displayPassword ? '/assets/images/shared/eye/closed.svg' : '/assets/images/shared/eye/open.svg'}
                        alt="password-state"
                        layout="fill"
                        onClick={() => setDisplayPassword(!displayPassword)}
                    />
                </div>
            </div>
        </div>
    );
};

export default PasswordInput;
