import * as yup from "yup"

export const validation = yup.object().shape({
	nombre: yup.string().min(3, "el nombre debe tener mas de 3 letras").max(15, "el nombre debe tener menos de 15 letras"),
	apellido: yup.string().min(3, "el apellido debe tener mas de 5 letras").max(15, "el apellido debe tener menos de 15 letras"),
	email: yup.string().min(8, "el email debe tener mas de 8 letras"),
	direccion: yup.string().min(3, "tu dirección debe tener mas de 3 letras").max(50, "el nombre debe tener menos de 50 letras"),
})
