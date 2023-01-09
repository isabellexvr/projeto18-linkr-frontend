import * as S from "../Assets/authStyle";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "../Components/Form/useForm";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../Components/Context/authContext";

export default function SignUp() {
	const [form, handleForm] = useForm({
		email: "",
		password: "",
		username: "",
		pictureUrl: "",
	});
	const { token, setToken } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	function register(event) {
		event.preventDefault();
		setLoading(true);

		if (
			form.email === "" ||
			form.password === "" ||
			form.username === "" ||
			form.pictureUrl === ""
		) {
			alert("Preencha todos os campos do formulário, por favor.");
			setLoading(false);
			return;
		}

		const URL = "https://linkr-api-9ik9.onrender.com/sign-up";

		setTimeout(() => {
			const promise = axios.post(URL, form);

			promise.then(() => {
				setLoading(false);
				navigate("/");
			});

			promise.catch((err) => {
				console.log(err.response.data);
				setLoading(false);
				alert(err.response.data);
			});
		}, 1000);
	}

	return (
		<S.ManagingContainers>
			<S.MainContainer>
				<S.LogoContainer>
					<S.Logo>linkr</S.Logo>
					<S.Slogan>
						<h1>save, share and discover</h1>
						<h1>the best links on the web</h1>
					</S.Slogan>
				</S.LogoContainer>
			</S.MainContainer>
			<S.SecondContainer>
				<S.ContainerInformation>
					<S.ContainerForm onSubmit={register}>
						<input
							type='email'
							placeholder=' e-mail'
							name='email'
							value={form.email}
							onChange={handleForm}
						/>
						<input
							type='password'
							placeholder=' password'
							name='password'
							value={form.password}
							onChange={handleForm}
						/>
						<input
							type='text'
							placeholder=' username'
							name='username'
							value={form.username}
							onChange={handleForm}
						/>
						<input
							type='url'
							placeholder=' picture url'
							name='pictureUrl'
							value={form.pictureUrl}
							onChange={handleForm}
						/>
						<S.Button
							type='submit'
							disabled={loading}>
							Sign Up
						</S.Button>
					</S.ContainerForm>
					<Link to='/'>
						<S.RedirecitonText>Switch back to log in</S.RedirecitonText>
					</Link>
				</S.ContainerInformation>
			</S.SecondContainer>
		</S.ManagingContainers>
	);
}
