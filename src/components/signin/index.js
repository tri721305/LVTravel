import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './signinelements'

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Goz</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in you account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
