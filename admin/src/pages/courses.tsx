import { mdiAccount, mdiBallotOutline, mdiMail } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import { ReactElement } from 'react'
import BaseButton from '../components/BaseButton'
import BaseButtons from '../components/BaseButtons'
import BaseDivider from '../components/BaseDivider'
import CardBox from '../components/CardBox'
import FormField from '../components/FormField'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import { getPageTitle } from '../config'
import { useCrud } from '../hooks/useCrud'
import { GetServerSidePropsContext } from 'next'
import axios from 'axios'

const Categories = ({ course }) => {
  const { createItem, updateItem } = useCrud('courses')
  const { items: categories } = useCrud('categories')
  const isNew = !course ? true : false
  return (
    <>
      <Head>
        <title>{getPageTitle('Forms')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiBallotOutline}
          title={isNew ? 'Add course' : 'Edit course'}
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <Formik
            initialValues={
              course
                ? course
                : {
                    name: '',
                    price: '',
                    imageUrl: '',
                    videoUrl: '',
                    category: '',
                    textarea: '',
                  }
            }
            onSubmit={(values) => {
              if (isNew) {
                createItem(values)
              } else {
                updateItem(course._id, values)
              }
            }}
          >
            <Form>
              <FormField label="Basic information" icons={[mdiAccount, mdiMail]}>
                <Field name="name" placeholder="Course title" />
                <Field type="number" name="price" placeholder="Price" />
              </FormField>

              <FormField label="Urls" labelFor="phone">
                <Field name="imageUrl" placeholder="Image Url" id="image" />
                <Field name="videoUrl" placeholder="Video Url" id="video" />
              </FormField>

              <FormField label="Category" labelFor="category">
                <Field as="select" name="category" id="category">
                  {categories.map((category) => (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Field>
              </FormField>

              <BaseDivider />

              <FormField label="Description" hasTextareaHeight>
                <Field name="description" as="textarea" placeholder="Course description here" />
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

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { _id } = ctx.query

  const request = await axios.get('http://localhost:5000/courses/' + _id)
  const course = request.data

  return {
    props: {
      course,
    },
  }
}

export default Categories
