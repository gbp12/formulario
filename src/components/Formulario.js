import { Formik, ErrorMessage } from "formik"
import { StyledForm, StyledField, Submit, ShortDiv, LongDiv, P, Label } from "./Styles"
import { validation } from "../validation/RegistroValidation"

export const Formulario = ({ resetForm }) => {
	return (
		<Formik
			validationSchema={validation}
			initialValues={{ nombre: "", apellido: "", email: "", direccion: "", pais: "", ciudad: "", mas: "" }}
			onSubmit={(values) => {
				alert(`Bienvenido ${values.nombre} ${values.apellido}`)
				document.getElementById("formulario").reset()
			}}>
			<StyledForm id="formulario">
				<Label>
					<P>Nombre</P>
					<P>Apellidos</P>
				</Label>
				<ShortDiv>
					<StyledField name="nombre" type="text" required />

					<StyledField name="apellido" type="text" required />
				</ShortDiv>
				<ErrorMessage name="nombre" />
				<br />
				<ErrorMessage name="apellido" />
				<Label>Email</Label>
				<ShortDiv>
					<StyledField name="email" type="email" required />
				</ShortDiv>
				<ErrorMessage name="email" />

				<Label>
					<P>Direccion</P>
				</Label>
				<ShortDiv>
					<StyledField name="direccion" type="text" required />
				</ShortDiv>
				<ErrorMessage name="direccion" />
				<Label>
					<P>País</P>
					<P>Ciudad</P>
				</Label>
				<ShortDiv>
					<StyledField name="pais" type="text" required />
					<StyledField name="ciudad" type="text" required />
				</ShortDiv>
				<ErrorMessage name="pais" />
				<ErrorMessage name="ciudad" />

				<Label>
					<P>Sobre Ti</P>
				</Label>
				<LongDiv>
					<StyledField name="mas" type="text" placeholder="Cuentanos más aqí...." />
				</LongDiv>

				<Submit type="submit" onClick={resetForm}>
					Enviar
				</Submit>
			</StyledForm>
		</Formik>
	)
}
