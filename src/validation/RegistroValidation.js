import * as yup from "yup"

export const validation = yup.object().shape({
	nombre: yup
		.string()
		.min(3, <p style={{ color: "red" }}>el nombre debe tener mas de 3 letras</p>)
		.max(15, <p style={{ color: "red" }}>el nombre debe tener menos de 15 letras</p>),
	apellido: yup
		.string()
		.min(5, <p style={{ color: "red" }}>el apellido debe tener mas de 5 letras</p>)
		.max(15, <p style={{ color: "red" }}>el nombre debe tener menos de 3 15letras</p>),
	email: yup.string().min(8, <p style={{ color: "red" }}>tu email debe tener mas de 8 letras</p>),
	direccion: yup
		.string()
		.min(10, <p style={{ color: "red" }}>tu direccion debe tener mas de 10 caracteres</p>)
		.max(50, <p style={{ color: "red" }}>tu direccion debe tener menos de 50 caracteres</p>),
})
