import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from './Input';
import { Button } from './Button';
import ErrorMessage from './errorMessage';
interface IFormType {
    formType: string
}
const Form = ({ formType }: IFormType) => {
    
    return (
        <form>
            {formType === 'signin' ? <>
                
            </> : <>
                
            </>}
            <ErrorMessage error={error} />

        </form>
    )
}

export default Form