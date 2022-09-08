interface GenericErrorProps {
    error: any,
    hide: () => void
}

const GenericErrorModal = ({error, hide}: GenericErrorProps) => {
    return (
        <div className="flex flex-col gap-y-6 items-center mt-10">
            <div className="flex flex-col items-center text-center gap-y-6">
                {/* <span className="text-sm">{props.error.errorCode}</span>
                <span className="text-sm w-[50vh] empty:hidden">{props.error.description}</span> */}
            </div>
            <button
                className="btn-primary"
                onClick={() => hide()}
            >
                Close
            </button>
        </div>
    );
};

export default GenericErrorModal;
