import React from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import BaseButton from '../components/BaseButton'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/SectionFullScreen'
import LayoutGuest from '../layouts/Guest'
import { Field, Form, Formik } from 'formik'
import FormField from '../components/FormField'
import BaseDivider from '../components/BaseDivider'
import BaseButtons from '../components/BaseButtons'
import { useRouter } from 'next/router'
import { getPageTitle } from '../config'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Error() {
  const router = useRouter()

  const handleSubmit = (values) => {
    console.log('values:', values)
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/signin`, values)
      .then((res: any) => {
        console.log(res.status)
        localStorage.setItem('token', res.data)
        toast.success('Амжилттай нэвтэрлээ')
        router.push('/dashboard')
      })
      .catch((err) => {
        toast.error('Medeelel buruu baina!')
      })
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Login')}</title>
      </Head>

      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label="email" help="Please enter your email">
                <Field name="email" />
              </FormField>

              <FormField label="Password" help="Please enter your password">
                <Field name="password" type="password" />
              </FormField>

              <BaseDivider />

              <BaseButtons>
                <BaseButton type="submit" label="Login" color="info" />
                <BaseButton href="/dashboard" label="Home" color="info" outline />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionFullScreen>
    </>
  )
}

Error.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}
