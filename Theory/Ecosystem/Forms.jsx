//? React Hook Form
// Самая продвинутая

// npm install react-hook-form

// https://react-hook-form.com/ - Паттерны
// Уже была попытка, но вышел фейл из-за того что в тот момент вышла новая версия


///////////////////////////////////////////////////////////////////////////////////////////


//? Formik
// Самая легкая в плане веса

// npm install formik --save

// - Getting values in and out of form state
// - Validation and error messages
// - Handling form submission

//* onChange = { formik.handleChange }
//* onBlur = { formik.handleBlur }
//* value = { formik.values.email }

///////////////////////////////////////////////////////////////////////////////////////////

//? Final Form
// Самая проверенная временем


// npm install --save final-form react-final-form


// Компонент Form не заменяет html тег form
//! API https://final-form.org/docs/react-final-form/api



<Form onSubmit={onSubmit}>
    {props => (
        <form onSubmit={props.handleSubmit}>

            <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
            />

            <button type="submit">Submit</button>
        </form>
    )}
</Form>
