import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";

export default function DivUserActions() {
    const emailInput = {
        type: "text",
        placeholder: "Correo electrónico o número de teléfono",
    };

    const passwordInput = {
        type: "password",
        placeholder: "Contraseña",
    };

    const loginText = "Iniciar Sesión";
    const createAccountText = "Crear una cuenta";

    return (
        <>
            <InputBox {...emailInput} />
            <InputBox {...passwordInput} />

            <Button text={loginText} />
            <Button text={createAccountText} />
        </>
    );
}
