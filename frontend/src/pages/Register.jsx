import { useNavigate } from 'react-router-dom';
import { register } from '@services/auth.service.js';
import Form from "@components/Form";
import useRegister from '@hooks/auth/useRegister.jsx';

const Register = () => {
	const navigate = useNavigate();
	const {
        errorEmail,
        errorRut,
        errorData,
        handleInputChange
    } = useRegister();


    const registerSubmit = async (data) => {
        try {
            const response = await register(data);
            if (response.status === 'Success') {
                setTimeout(() => {
                    navigate('/auth');
                }, 3000)
            } else if (response.status === 'Client error') {
                errorData(response.message);
            }
        } catch (error) {
            console.log(error)
        }
    }

	return (
		<main className="container">
			<Form
				title="Crea tu cuenta"
				fields={[
					{
						label: "Nombre completo",
						name: "nombreCompleto",
						placeholder: "Diego Alexis Salazar Jara",
						type: "text",
						required: true,
						minLength: 3,
						maxLength: 50,
                        pattern: /^[a-zA-Z\s]+$/,
						patternMessage: "Debe contener solo letras de la a-z o A-Z",
					},
                    {
                        label: "Correo electrónico",
                        name: "email",
                        placeholder: "example@gmail.cl",
                        type: "email",
                        required: true,
                        minLength: 15,
                        maxLength: 30,
                        errorMessageData: errorEmail,
                        validate: {
                            emailDomain: (value) => value.endsWith('@gmail.cl') || 'El correo debe terminar en @gmail.cl'
                        },
                        onChange: (e) => handleInputChange('email', e.target.value)
                    },
                    {
						label: "Rut",
                        name: "rut",
                        placeholder: "23.770.330-1",
                        type: "text",
						minLength: 9,
						maxLength: 12,
						pattern: /^\d{1,2}(\.\d{3}){2}-[\dkK]$|^\d{7,8}-[\dkK]$/,
						patternMessage: "Debe ser 12.345.678-9 o 12345678-9",
						required: true,
                        errorMessageData: errorRut,
                        onChange: (e) => handleInputChange('rut', e.target.value)
                    },
                    {
                        label: "Contraseña",
                        name: "password",
                        placeholder: "**********",
                        type: "password",
                        required: true,
                        minLength: 8,
                        maxLength: 26,
                        pattern: /^[a-zA-Z0-9]+$/,
                        patternMessage: "Debe contener solo letras y números",
                    },
				]}
				buttonText="Registrarse"
				onSubmit={registerSubmit}
				footerContent={
					<p>
						¿Ya tienes cuenta?, <a href="/auth">¡Inicia sesión aquí!</a>
					</p>
				}
			/>
		</main>
	);
};

export default Register;