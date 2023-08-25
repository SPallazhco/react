import { Formik, Form, Field, ErrorMessage } from "formik";
import { React, useContext } from 'react'
import { NotesContext } from "../contexts/NotesContext";

function NotesForm() {
    const { addNotes } = useContext(NotesContext)
    return(
        <>
        <Formik
            initialValues={{title: '', message: ''}}
            validate={
                values => {
                    const errors = {}
                    if(!values.title) {
                        errors.title = 'El titulo es requerido'
                    } else if(!values.message) {
                        errors.message = 'El mensaje es requerido'
                    }
                    return errors
                }
            }
            onSubmit={
                (values, { setSubmitting }) => {
                    addNotes(values.title, values.message)
                    setSubmitting(false)
                    values.title=""
                    values.message=""
                }
            }
        >
            {
                ({isSubmitting}) => (
                    <Form className="form">
                        <div>
                            <label htmlFor="title"> Título </label>
                            <Field type="text" name="title" />
                            <ErrorMessage name="title" component="p" />
                        </div>
                        <div>
                            <label htmlFor="message"> ¿Qué qieres guardar? </label>
                            <Field type="textarea" name="message" />
                            <ErrorMessage name="message" component="p" />
                        </div>
                        <button type="submit" disabled= {isSubmitting}>
                            {
                                isSubmitting ? "Guardando..." : "Guardar"
                            }
                        </button>
                    </Form>
                )
            }
        </Formik>
        </>
    )
}

export default NotesForm