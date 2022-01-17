import { Link } from "react-router-dom";
import { FormContainer, RegisterError, RegisterErrorsContainer, SubmitButton } from "./styles";
import { useForm } from "./useForm";
import axios from "axios";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import Redirect from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Register() {
    // defining the initial state for the form
    let navigate = useNavigate();

    const initialState = {
        email: "",
        password: "",
    };

    interface ResponseData {
        field: String
        errors: String[]
    }

    interface LoginResponse {
        data: ResponseData[]
        status: number
    }

    const [redirect, setRedirect] = useState<Boolean>();
    const [loginResponse, setLoginResponse] = useState<LoginResponse>();

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to database
        console.log(`loginUserCallback ${ JSON.stringify(values) }`)

        const axiosInstance = axios.create({
            baseURL: 'http://44.195.238.80/api',
            headers: {
                Authorization: 'token',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })

        await axiosInstance.post('/users', values)
        .then((response) => {
            console.log(response)
            setRedirect(true)
            navigate('/login')
        })
        .catch((error) => {
            if (error.response){            
                var responseDataArray: ResponseData[] = []
                Object.keys(error.response.data[0]).map(field => {
                    responseDataArray.push({
                        field: field,
                        errors: error.response.data[0][field]
                    })
                })

                const loginResponse: LoginResponse = {
                    data: responseDataArray,
                    status: error.response.status
                }

                console.log(JSON.stringify(loginResponse))
                setLoginResponse(loginResponse)
            } else {
                console.log(error)
            }
        })        
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
        
        <RegisterErrorsContainer>
            {loginResponse?.data.map(fieldErrors => {
                return(                  
                    fieldErrors.errors.map((error, index) => {
                        return(
                            <Alert key={index} variant="danger">
                                {`${fieldErrors.field}: ${error}`}
                            </Alert>
                        )
                    })
            )})} 
        </RegisterErrorsContainer>
        </>        
    );
}

export default Register;