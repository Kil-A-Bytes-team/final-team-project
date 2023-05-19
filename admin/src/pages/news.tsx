import { mdiAccount, mdiBallotOutline, mdiGithub, mdiMail, mdiUpload } from '@mdi/js'
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
          title="Add news"
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <Formik
            initialValues={{
              title: '',
              price: '',
              image: '',
              video: '',
              category: '',
              textarea: '',
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FormField label="Basic information" icons={[mdiAccount, mdiMail]}>
                <Field name="title" placeholder="News title" />
              </FormField>

              <FormField label="Urls" labelFor="phone">
                <Field name="image" placeholder="Image Url" id="image" />
              </FormField>

              <FormField label="Category" labelFor="category">
                <Field name="category" id="category" component="select">
                  <option value="red">Category 1</option>
                  <option value="green">Category 2</option>
                  <option value="blue">Category 3</option>
                </Field>
              </FormField>

              <BaseDivider />

              <FormField label="Text" hasTextareaHeight>
                <Field name="textarea" as="textarea" placeholder="Text here" />
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

      {/* <SectionMain>
        <CardBox>
          <Formik
            initialValues={{ checkboxes: ['lorem'], switches: ['lorem'], radio: 'lorem' }}
            onSubmit={() => null}
          >
            <Form>
              <FormField label="Checkbox">
                <FormCheckRadioGroup>
                  <FormCheckRadio type="checkbox" label="Lorem">
                    <Field type="checkbox" name="checkboxes" value="lorem" />
                  </FormCheckRadio>
                  <FormCheckRadio type="checkbox" label="Ipsum">
                    <Field type="checkbox" name="checkboxes" value="ipsum" />
                  </FormCheckRadio>
                  <FormCheckRadio type="checkbox" label="Dolore">
                    <Field type="checkbox" name="checkboxes" value="dolore" />
                  </FormCheckRadio>
                </FormCheckRadioGroup>
              </FormField>

              <BaseDivider />

              <FormField label="Radio">
                <FormCheckRadioGroup>
                  <FormCheckRadio type="radio" label="Lorem">
                    <Field type="radio" name="radio" value="lorem" />
                  </FormCheckRadio>
                  <FormCheckRadio type="radio" label="Ipsum">
                    <Field type="radio" name="radio" value="ipsum" />
                  </FormCheckRadio>
                </FormCheckRadioGroup>
              </FormField>

              <BaseDivider />

              <FormField label="Switch">
                <FormCheckRadioGroup>
                  <FormCheckRadio type="switch" label="Lorem">
                    <Field type="checkbox" name="switches" value="lorem" />
                  </FormCheckRadio>
                  <FormCheckRadio type="switch" label="Ipsum">
                    <Field type="checkbox" name="switches" value="ipsum" />
                  </FormCheckRadio>
                </FormCheckRadioGroup>
              </FormField>
            </Form>
          </Formik>
          <BaseDivider />
          <FormField>
            <FormFilePicker label="Upload" color="info" icon={mdiUpload} />
          </FormField>
        </CardBox>
      </SectionMain> */}
    </>
  )
}

Categories.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Categories
