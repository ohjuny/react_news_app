import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../store/actions';
import { showToast } from '../utils/tools';

const Contact = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            firstname: '',
            lastname:'',
            message:''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Email is required :(')
                .email('Not a valid email :('),
            firstname: Yup.string()
                .required('First name is required :('),
            lastname: Yup.string()
                .required('Last name is required :('),
            message: Yup.string()
                .required('Message is required')
                .max(500, 'Exceeded character limit (500 characters)')
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(sendMessage(values)).then(({payload}) => {
                if (payload) {
                    resetForm()
                    showToast('SUCCESS', 'Thank you, we will get back in touch soon!')
                }
                else {
                    showToast('ERROR', 'Something went wrong :(')
                }
            })
        }
    })

    return (
        <>
            <h1>Contact Us</h1>
            <form className="mt-3" onSubmit={formik.handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="email@example.com"
                        {...formik.getFieldProps('email')}
                    />
                    { formik.errors.email && formik.touched.email ?
                    <Alert variant="danger">
                        { formik.errors.email }
                    </Alert>
                    : null }
                </div>
                
                <div className="form-group mb-2">
                    <label htmlFor="email">First Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        placeholder="First Name"
                        {...formik.getFieldProps('firstname')}
                    />
                    { formik.errors.firstname && formik.touched.firstname ?
                    <Alert variant="danger">
                        { formik.errors.firstname }
                    </Alert>
                    : null }
                </div>
                
                <div className="form-group mb-2">
                    <label htmlFor="email">Last Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        placeholder="First Name"
                        {...formik.getFieldProps('lastname')}
                    />
                    { formik.errors.lastname && formik.touched.lastname ?
                    <Alert variant="danger">
                        { formik.errors.lastname }
                    </Alert>
                    : null }
                </div>
                
                <div className="form-group mb-2">
                    <label htmlFor="email">Message:</label>
                    <textarea
                        className="form-control"
                        name="message"
                        rows="3"
                        {...formik.getFieldProps('message')}
                    ></textarea>
                    { formik.errors.message && formik.touched.message ?
                    <Alert variant="danger">
                        { formik.errors.message }
                    </Alert>
                    : null }
                </div>

                <button type="submit" className="btn btn-primary mb-2">
                    Submit
                </button>
            </form>
        </>
    )
}

export default Contact;