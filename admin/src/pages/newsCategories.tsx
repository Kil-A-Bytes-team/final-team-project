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

const Categories = () => {
  const [category, setCategories] = useState()
  const createCategory = (e) => {
    return
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Forms')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiBallotOutline}
          title="Add news category"
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <Formik initialValues={{}} onSubmit={(values) => alert(JSON.stringify(values, null, 2))}>
            <Form>
              <FormField label="News category" icons={[mdiBookMultipleOutline]}>
                <Field name="fullname" placeholder="Category name" />
              </FormField>

              <FormField label="Text area" hasTextareaHeight>
                <Field name="textarea" as="textarea" placeholder="Your text here" />
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
