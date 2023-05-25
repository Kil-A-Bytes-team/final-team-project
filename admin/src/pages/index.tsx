import React, { ReactElement } from 'react'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode } from '../stores/styleSlice'
import LayoutAuthenticated from '../layouts/Authenticated'
import Dashboard from './dashboard'
import { useRouter } from 'next/router'

const StyleSelect = () => {
  const dispatch = useAppDispatch()
  dispatch(setDarkMode(false))
  return <Dashboard />
}

StyleSelect.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default StyleSelect
