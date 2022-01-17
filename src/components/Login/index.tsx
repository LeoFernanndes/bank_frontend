import { Link } from "react-router-dom";
import { FormContainer, SubmitButton } from "./styles";
import { useForm } from "./useForm";

function Login() {
    // defining the initial state for the form
    const initialState = {
        email: "",
        password: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to database
        console.log(`loginUserCallback ${ JSON.stringify(values) }`)

    }

    return (
        <>
        <form onSubmit={onSubmit}>
        <FormContainer>
            <input
                name='email'
                id='email'
                type='email'
                placeholder='Email'
                onChange={onChange}
                required
                />

            <input
                name='password'
                id='password'
                type='password'
                placeholder='Password'
                onChange={onChange}
                required
                />
            <SubmitButton type='submit'>Login</SubmitButton>
        </FormContainer>
        </form>

        <div>
            <Link to = "/register">Cadastro</Link>
        </div>
        </>        
    );
}

export default Login;