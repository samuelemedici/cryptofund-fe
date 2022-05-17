export interface TestModalProps {
    children: JSX.Element,
    hide: () => void
}

const TestModal = ({ children, hide }: TestModalProps) => {
    return <div className="w-screen h-screen bg-black bg-opacity-80 shadow-md absolute top-0 left-0 z-20 flex items-center justify-center">
        <div className="bg-white w-1/2 h-min rounded-md py-14 px-14
         flex flex-col gap-y-8 items">
            {children}
            <button className="button-primary bg-brand-orange self-center"
                onClick={() => hide()}
            >Close</button>
        </div>
    </div>
}

export default TestModal;