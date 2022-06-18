import { useAppDispatch, useAppSelector } from "../../state/hooks/hooks";
import { removeApiError } from "../../state/slices/errors/apiErrorSlice";
import GenericErrorModal from "../modals/GenericErrorModal";
import TestModal from "../modals/TestModal";

const ApiErrorsWrapper = ({ children }: { children: JSX.Element }) => {
    const errorState = useAppSelector((state) => state.errors.api);
    const dispatch = useAppDispatch();

    return <>
        {errorState.error &&
            <TestModal
                hide={() => dispatch(removeApiError())}>
                <GenericErrorModal
                    error={errorState.error}
                    hide={() => dispatch(removeApiError())}
                />
            </TestModal>
        }
        {children}
    </>;
};

export default ApiErrorsWrapper;
