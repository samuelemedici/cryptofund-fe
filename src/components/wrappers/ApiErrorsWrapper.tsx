import { useAppDispatch } from "../../state/hooks/hooks";

const ApiErrorsWrapper = ({ children }: { children: JSX.Element }) => {
    const dispatch = useAppDispatch();

    return <>
        {children}
    </>;
};

export default ApiErrorsWrapper;
