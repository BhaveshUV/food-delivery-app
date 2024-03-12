import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const Login = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='form-body w-[50vw] mx-auto'>
            <h2 className="text-yellow-500 text-center text-2xl font-semibold p-4">Login Page</h2>
            <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
                <div>
                    <div className='flex items-center gap-4'>
                        <label htmlFor="fName" className='text-white'>First name: </label>
                        <input className='px-2 py-1 rounded-md flex-grow'
                            id="fName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                    </div>
                    {formik.errors.firstName && formik.touched.firstName ? <div className="text-red-600 text-xs leading-none">{formik.errors.firstName}</div> : null}
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <label htmlFor="lName" className='text-white'>Last name: </label>
                        <input className='px-2 py-1 rounded-md flex-grow'
                            id="lName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                    </div>
                    {formik.errors.lastName && formik.touched.lastName ? <div className="text-red-600 text-xs leading-none">{formik.errors.lastName}</div> : null}
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <label htmlFor="email" className='text-white'>Email Address: </label>
                        <input className='px-2 py-1 rounded-md flex-grow'
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                    </div>
                    {formik.errors.email && formik.touched.email ? <div className="text-red-600 text-xs leading-none">{formik.errors.email}</div> : null}

                </div>
                <button type="submit" className='w-fit self-end bg-green-800 px-2 py-1 rounded-md text-white'>Submit</button>
            </form>
        </div>
    );
};

export default Login;