import Input from "../components/Input";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import users from "../data/users.json"
import {useState} from "react";

export default function Login({isAut, toggleIsAuthenticatedAtr}) {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    let userFound;
    const [logError, setLogError] = useState(false);
    const [logErrorMessage, setLogErrorMessage] = useState("");

    function handleFormSubmit(data) {
        userFound = users.find((user) => {
            return (user.email === data.email && user.password === data.password);
        })
        if (userFound) {
            toggleIsAuthenticatedAtr(true);
            navigate("/Overzicht", {replace: true});
        } else {
            setLogError(true);
            if (users.find((u) => {
                return (u.email === data.email)
            })) {
                setLogErrorMessage("Password is onjuist")
            } else {
                setLogErrorMessage("E-mail niet gevonden")
            }
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Input
                    idAttribute="email-field"
                    nameAttribute="email"
                    labelText="E-mail: "
                    inputType="text"
                    placeholderAttribute="kota@ma.ala"
                    validationRules={{
                        required: {
                            value: true,
                            message: "E-mail is verplicht",
                        },
                        validate: (value) => value.includes('@') || "E-mail moet een @ bevatten",
                    }}
                    register={register}
                    errors={errors}
                />
                <Input
                    idAttribute="password-field"
                    nameAttribute="password"
                    labelText="Password: "
                    inputType="password"
                    placeholderAttribute="min 3, max 12"
                    validationRules={{
                        required: {
                            value: true,
                            message: "Password is verplicht",
                        },
                        minLength: {
                            value: 3,
                            message: "Password is te kort"
                        },
                        maxLength: {
                            value: 12,
                            message: "Password is te lang",
                        },
                    }}
                    register={register}
                    errors={errors}
                />
                <button
                    type="submit"
                    className="button-submit">
                    Inloggen
                </button>
                {logError === false || <p className="p-error">{logErrorMessage}</p>}
            </form>
        </>
    )
}