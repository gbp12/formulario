import { StyledDiv, H1, DivContainer } from "../components/Styles"
import { Formulario } from "../components/Formulario"

export const Main = () => {
	return (
		<StyledDiv>
			<DivContainer>
				<H1>Registro</H1>
				<Formulario />
			</DivContainer>
		</StyledDiv>
	)
}
