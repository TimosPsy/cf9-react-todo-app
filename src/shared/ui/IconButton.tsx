import type {IconButtonProps} from "../types.ts";

const IconButton = (
    {icon, onClick, disabled = false, addClasses=""}: IconButtonProps) => {
    return (
        <>
            <button
                className={`opacity-80 hover:opacity-100 cursor-pointer ${addClasses}`}
                onClick={onClick}
                disabled={disabled}
            >
                {icon}
            </button>
        </>
    )
}
export default IconButton;