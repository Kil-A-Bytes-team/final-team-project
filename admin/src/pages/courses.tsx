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
import { useEffect } from 'react'
import axios from 'axios'
import { useCrud } from '../hooks/useCrud'

const Categories = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const { createItem } = useCrud('courses')
  const { items: categories } = useCrud('categories')

  return (
    <>
      <Head>
        <title>{getPageTitle('Forms')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiBallotOutline}
          title="Add courses"
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <Formik
            initialValues={{
              name: '',
              price: '',
              image: '',
              video: '',
              category: '',
              textarea: '',
            }}
            onSubmit={undefined}
          >
            <Form
              onSubmit={(e) => {
                e.preventDefault()
                createItem({ name, imageUrl, description, ategory: category, videoUrl })
              }}
            >
              <FormField label="Basic information" icons={[mdiAccount, mdiMail]}>
                <Field
                  name="title"
                  placeholder="Course title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Field
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
                <Field
                  name="video"
                  placeholder="Video Url"
                  id="video"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
              </FormField>

              <FormField label="Category" labelFor="category">
                <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                  {categories.map((category) => (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </FormField>

              <BaseDivider />

              <FormField label="Description" hasTextareaHeight>
                <Field
                  name="textarea"
                  as="textarea"
                  placeholder="Course description here"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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

Categories.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Categories
