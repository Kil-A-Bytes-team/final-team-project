import { mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import { getPageTitle } from '../config'
import TableNews from '../components/TableNews'

const TablesPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('News')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiTableBorder}
          title="News"
          main
        ></SectionTitleLineWithButton>

        <CardBox className="mb-6" hasTable>
          <TableNews />
        </CardBox>
      </SectionMain>
    </>
  )
}

TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TablesPage
