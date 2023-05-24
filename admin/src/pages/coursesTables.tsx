import { mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import { getPageTitle } from '../config'
import TableCourses from '../components/TableCourses'

const TablesPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Courses')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiTableBorder}
          title="Courses"
          main
        ></SectionTitleLineWithButton>

        <CardBox className="mb-6" hasTable>
          <TableCourses />
        </CardBox>
      </SectionMain>
    </>
  )
}

TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TablesPage
