import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import LayoutGuest from '../layouts/Guest'
import { StyleKey } from '../interfaces'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode, setStyle } from '../stores/styleSlice'
import Dashboard from './dashboard'

const StyleSelect = () => {
  const dispatch = useAppDispatch()

  dispatch(setDarkMode(false))

  // const router = useRouter()

  // const handleStylePick = (e: React.MouseEvent, style: StyleKey) => {
  //   e.preventDefault()

  //   dispatch(setStyle(style))

  //   router.push('/dashboard')
  // }

  return <Dashboard />
}

StyleSelect.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default StyleSelect
