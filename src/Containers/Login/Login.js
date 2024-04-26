import React, {isValidElement} from 'react';
import {useRef} from "react";
import {View, Text, TextInput, Button} from 'react-native';
import {ErrorMessage, Form, Formik} from "formik";
import * as Yup from 'yup';
import {passthroughSyntaxPlugins} from "metro-react-native-babel-preset";

const initialValues = {
    username: '',
    password: ''
}

const loginValidationSchema = Yup.object().shape({
    username: Yup.string().required('Required').min(2,'Too Short').max(20, 'Too Long!'),
    password: Yup.string().required('Required').min(2,'Too Short').max(20, 'Too Long!')
})

const Login = () => {
    const formikRef = useRef()

    const formSubmission = () => {
        console.log("formik ref : ", formikRef?.current)
    }

    return (
        <Formik initialValues={initialValues} onSubmit={formSubmission} validationSchema={loginValidationSchema} innerRef={formikRef}>

            {({ handleChange, handleBlur, handleSubmit, values , errors}) => (
                <View>
                    <Text>Username</Text>
                    <TextInput
                        onChangeText={handleChange('username')}
                        value={values.email}
                    />
                    {errors?.username? <Text>Error</Text> : <Text>No Error</Text>}

                    <Text>Password</Text>
                    <TextInput onChangeText={handleChange('password')} value={values.password} />

                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}

        </Formik>
    );
}

export default Login;