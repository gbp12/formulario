import { Formik } from "formik"
import { StyledForm, StyledField, Submit, ShortDiv, LongDiv, P, Label } from "./Styles"

export const Formulario = () => {
	return (
		<Formik
			initialValues={{ name: "", lastname: "", email: "", direction: "", country: "", city: "", more: "Cuéntanos aquí..." }}
			onSubmit={() => {
				alert("datos enviados correctamente")
			}}>
			<StyledForm>
				<Label>
					<P>Nombre</P>
					<P>Apellidos</P>
				</Label>
				<ShortDiv>
					<StyledField name="name" type="text" />
					<StyledField name="lastname" type="text" />
				</ShortDiv>

				<Label>Email</Label>
				<ShortDiv>
					<StyledField name="email" type="email" />
				</ShortDiv>
				<Label>
					<P>Direccion</P>
				</Label>
				<ShortDiv>
					<StyledField name="direction" type="text" />
				</ShortDiv>
				<Label>
					<P>País</P>
					<P>Ciudad</P>
				</Label>
				<ShortDiv>
					<StyledField name="country" type="text" />
					<StyledField name="city" type="text" />
				</ShortDiv>

				<Label>
					<P>Sobre Ti</P>
				</Label>
				<LongDiv>
					<StyledField name="more" type="text" tex />
				</LongDiv>

				<Submit type="submit">Enviar</Submit>
			</StyledForm>
		</Formik>
	)
}
