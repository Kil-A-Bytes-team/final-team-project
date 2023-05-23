import { mdiAccount, mdiBallotOutline, mdiBookMultipleOutline, mdiMail, mdiUpload } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import { ReactElement, useState } from 'react'
import BaseButton from '../components/BaseButton'
import BaseButtons from '../components/BaseButtons'
import BaseDivider from '../components/BaseDivider'
import CardBox from '../components/CardBox'
import FormCheckRadio from '../components/FormCheckRadio'
import FormCheckRadioGroup from '../components/FormCheckRadioGroup'
import FormField from '../components/FormField'
import FormFilePicker from '../components/FormFilePicker'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitle from '../components/SectionTitle'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import { getPageTitle } from '../config'
import axios from 'axios'
import { useCrud } from '../hooks/useCrud'

const Categories = () => {
  const { createItem } = useCrud('categories')

  return (
    <>
      <Head>
        <title>{getPageTitle('Forms')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiBallotOutline}
          title="Add course category"
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <Formik initialValues={{}} onSubmit={(values) => createItem(values)}>
            <Form>
              <FormField label="Course category" icons={[mdiBookMultipleOutline]}>
                <Field name="name" placeholder="Category name" />
              </FormField>

              <BaseDivider />

              <BaseButtons>
                <BaseButton type="submit" color="info" label="Submit" />
                <BaseButton type="reset" color="info" outline label="Reset" />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  )
}

Categories.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Categories
