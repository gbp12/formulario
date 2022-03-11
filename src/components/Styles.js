import styled from "styled-components"
import { Form, Field } from "formik"

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	background-color: #fff;
	margin-top: 10vh;
	margin-left: 30vw;
	margin-right: 30vw;
	height: 80vh;
	border-radius: 5px;
	@media (max-width: 700px) {
		width: 100%;
		margin-left: 0;
		margin-right: 0;
	}
`

export const H1 = styled.h1`
	font-family: "Times New Roman", serif;
`

export const DivContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 5vh;
	margin-bottom: 10vh;
`

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	width: 85%;
`

export const StyledField = styled(Field)`
	padding: 10px;
	border: none;
	background-color: rgb(248, 235, 215);
	margin: 5px;
	width: 100%;
`

export const Submit = styled.button`
	padding: 10px 5px 10px 5px;
	margin-top: 10%;
	border: none;
	color: #fff;
	background-color: rgb(25, 68, 17);
	font-size: larger;
	font-family: "Times New Roman", serif;
	cursor: pointer;
`

export const ShortDiv = styled.div`
	display: flex;
`

export const LongDiv = styled(ShortDiv)`
	height: 7vh;
`

export const P = styled.p`
	font-family: "Times New Roman", serif;
	font-size: 1em;
	display: flex;
	margin-bottom: 5px;
`

export const Label = styled.label`
	display: flex;
	justify-content: space-around;
`
