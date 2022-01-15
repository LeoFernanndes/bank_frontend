import { Link } from "react-router-dom";
import { FormContainer, SubmitButton } from "./styles";
import { useForm } from "./useForm";

function Register() {
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
                name='name'
                id='name'
                type='name'
                placeholder='Name'
                onChange={onChange}
                required
                />

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
            <Link to = "/">Home</Link>
        </div>
        </>        
    );
}

export default Register;