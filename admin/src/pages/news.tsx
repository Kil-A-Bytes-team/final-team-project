import { mdiAccount, mdiBallotOutline, mdiMail } from '@mdi/js'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import Head from 'next/head'
import { ReactElement, useEffect, useState } from 'react'
import BaseButton from '../components/BaseButton'
import BaseButtons from '../components/BaseButtons'
import BaseDivider from '../components/BaseDivider'
import CardBox from '../components/CardBox'
import FormField from '../components/FormField'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import { getPageTitle } from '../config'
import axios from 'axios'
import { useCrud } from '../hooks/useCrud'

const NewsCategories = () => {
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  const { createItem } = useCrud('news')
  const { items: categories } = useCrud('news-categories')

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
              image: '',
              category: '',
              textarea: '',
            }}
            onSubmit={undefined}
          >
            <Form
              onSubmit={(e) => {
                e.preventDefault()
                createItem({ title, imageUrl, text, newsCategory: category })
              }}
            >
              <FormField label="Basic information" icons={[mdiAccount, mdiMail]}>
                <Field
                  name="title"
                  placeholder="News title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormField>

              <FormField label="Urls" labelFor="phone">
                <Field
                  name="image"
                  placeholder="Image Url"
                  id="image"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </FormField>

              <FormField label="Category" labelFor="category">
                <Field
                  name="category"
                  id="category"
                  component="select"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Field>
              </FormField>

              <BaseDivider />

              <FormField label="Text" hasTextareaHeight>
                <Field
                  name="textarea"
                  as="textarea"
                  placeholder="Text here"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
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

NewsCategories.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default NewsCategories
