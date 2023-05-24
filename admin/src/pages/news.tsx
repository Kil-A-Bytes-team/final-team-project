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
import { GetServerSidePropsContext } from 'next'

const NewsCategories = ({ news }) => {
  const { createItem, updateItem } = useCrud('news')
  const { items: categories } = useCrud('news-categories')
  const isNew = !news ? true : false
  return (
    <>
      <Head>
        <title>{getPageTitle('Forms')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiBallotOutline}
          title={isNew ? 'Add news' : 'Edit news'}
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <Formik
            initialValues={
              news
                ? news
                : {
                    title: '',
                    imageUrl: '',
                    newsCategory: '',
                    description: '',
                    text: '',
                  }
            }
            onSubmit={(values) => {
              if (isNew) {
                createItem(values)
              } else {
                updateItem(news._id, values)
              }
            }}
          >
            <Form>
              <FormField label="Basic information" icons={[mdiAccount, mdiMail]}>
                <Field name="title" placeholder="News title" />
              </FormField>

              <FormField label="Url" labelFor="Url">
                <Field name="imageUrl" placeholder="Image Url" id="image" />
              </FormField>

              <FormField label="Category" labelFor="newsCategory">
                <Field as="select" name="newsCategory" id="newsCategory">
                  <option value="">Category...</option>
                  {categories.map((category) => (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Field>
              </FormField>

              <BaseDivider />

              <FormField label="Description" hasTextareaHeight>
                <Field name="description" as="textarea" placeholder="Description here" />
              </FormField>

              <FormField label="Text" hasTextareaHeight>
                <Field name="text" as="textarea" placeholder="Text here" />
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

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { _id } = ctx.query

  const request = await axios.get('http://localhost:5000/news/' + _id)
  const news = request.data

  return {
    props: {
      news,
    },
  }
}

export default NewsCategories
