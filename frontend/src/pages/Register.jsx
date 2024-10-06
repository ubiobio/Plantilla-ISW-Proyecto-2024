import { useNavigate } from 'react-router-dom';
import { register } from '@services/auth.service.js';
import Form from "@components/Form";
import useRegister from '@hooks/auth/useRegister.jsx';
import { showErrorAlert, showSuccessAlert } from '@helpers/sweetAlert.js';
import '@styles/form.css';

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
            showSuccessAlert('¡Registrado!','Usuario registrado exitosamente.');
            setTimeout(() => {
                navigate('/auth');
            }, 3000)
        } else if (response.status === 'Client error') {
            errorData(response.details);
        }
    } catch (error) {
        console.error("Error al registrar un usuario: ", error);
        showErrorAlert('Cancelado', 'Ocurrió un error al registrarse.');
    }
}

const patternRut = new RegExp(/^(?:(?:[1-9]\d{0}|[1-2]\d{1})(\.\d{3}){2}|[1-9]\d{6}|[1-2]\d{7}|29\.999\.999|29999999)-[\dkK]$/)

	return (
		<main className="container">
			<Form
				title="Crea tu cuenta"
				fields={[
					{
						label: "Nombre completo",
						name: "nombreCompleto",
						placeholder: "Diego Alexis Salazar Jara",
                        fieldType: 'input',
						type: "text",
						required: true,
						minLength: 15,
						maxLength: 50,
                        pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
						patternMessage: "Debe contener solo letras y espacios",
					},
                    {
                        label: "Correo electrónico",
                        name: "email",
                        placeholder: "example@gmail.cl",
                        fieldType: 'input',
                        type: "email",
                        required: true,
                        minLength: 15,
                        maxLength: 35,
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
                        fieldType: 'input',
                        type: "text",
						minLength: 9,
						maxLength: 12,
						pattern: patternRut,
						patternMessage: "Debe ser xx.xxx.xxx-x o xxxxxxxx-x",
						required: true,
                        errorMessageData: errorRut,
                        onChange: (e) => handleInputChange('rut', e.target.value)
                    },
                    {
                        label: "Contraseña",
                        name: "password",
                        placeholder: "**********",
                        fieldType: 'input',
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