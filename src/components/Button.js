export default function Button({buttonText, buttonAction, buttonDisabled}) {

    return (
        <button
            value={buttonText}
            disabled={buttonDisabled}
            onClick={buttonAction}>{buttonText}
        </button>
    )
}