import { Field, Form, Formik, ErrorMessage } from "formik"

function AppForm() {
    return(
    <Formik 
        initialValues={{message: "Hola te contacto por ..."}}
        validate={values => {
            let errors = {}
            if (!values.name){
                errors.name = "Obligatorio"
            }
            if (!values.email){
                errors.email = "Obligatorio"
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                errors.email = "Ingrese un correo valido"
            }
            return errors
        }}
        onSubmit={
            (values, {setSubmitting}) =>{
                let url = "https://formspree.io/f/mwkdoknq"
                let formData = new FormData()
                formData.append("name", values.name)
                formData.append("email", values.email)
                formData.append("message", values.message)

                fetch(url, {
                    method:"POST",
                    body :formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    setSubmitting(false)
                    alert("Gracias por contactarnos")
                })
            }
        }
    >
        {
            ({isSubmitting, values}) => (
                <Form>
                    <div>
                        <label htmlFor="name">Nombre: </label>
                        <Field type="text" name="name"></Field>
                        <ErrorMessage name="name" component="p"></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor="email">Correo: </label>
                        <Field type="email" name="email"></Field>
                        <ErrorMessage name="email" component="p"></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor="message">Mensaje</label>
                        <Field component="textarea" rows={5} cols={30} value={values.message} name="message"></Field>
                        {/* <Field as="textarea" rows={5} cols={30} name="message"></Field> */}
                    </div>
                    <button type="submit" disabled={isSubmitting}> 
                        { isSubmitting ? "Enviando..." : "Enviar"} 
                    </button>
                </Form>
            )
        }
    </Formik>
    )
}

export default AppForm