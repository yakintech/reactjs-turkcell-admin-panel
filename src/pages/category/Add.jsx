import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { axiosInstance } from '../../config/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';


const addCategoryValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(2),
  description: Yup.string()
    .required()
    .min(5)
})

function Add() {

  const navigate = useNavigate()


  return <>

    <Formik
      initialValues={{
        name: "",
        description: ""
      }}
      validationSchema={addCategoryValidationSchema}
      onSubmit={(value) => {
        
        axiosInstance.post("categories", value)
        .then(res => {
            navigate("/categories")
            enqueueSnackbar("Success!", {variant:"success"})
        })

      }}
    >
      {
        ({ errors }) => {
          return <Form>
            <div>
              <label htmlFor="">Name:</label>
              <Field name="name" />
              {
                errors.name ? <span style={{ color: 'red' }}>{errors.name}</span> : <></>
              }
            </div>
            <div>
              <label>Description:</label>
              <Field name="description" />
              {
                errors.description ? <span style={{ color: 'red' }}>{errors.description}</span> : <></>
              }
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        }
      }

    </Formik>
  </>
}

export default Add