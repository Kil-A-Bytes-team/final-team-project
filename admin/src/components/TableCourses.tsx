import { mdiEye, mdiTrashCan } from '@mdi/js'
import React, { useRef, useState } from 'react'
import BaseButton from './BaseButton'
import BaseButtons from './BaseButtons'
import CardBoxModal from './CardBoxModal'
import { useCrud } from '../hooks/useCrud'
import { useRouter } from 'next/router'

const TableCourses = () => {
  const { items, deleteItem } = useCrud('courses')

  const perPage = 10

  const [currentPage, setCurrentPage] = useState(0)

  const itemsPaginated = items.slice(perPage * currentPage, perPage * (currentPage + 1))

  const numPages = items.length / perPage

  const pagesList = []

  const deletingItem = useRef<string>('')

  const router = useRouter()

  for (let i = 0; i < numPages; i++) {
    pagesList.push(i)
  }

  const [isModalTrashActive, setIsModalTrashActive] = useState(false)

  const confirmDelete = () => {
    deleteItem(deletingItem.current)
    handleModalAction()
  }

  const handleModalAction = () => {
    setIsModalTrashActive(false)
    deletingItem.current = ''
  }

  return (
    <>
      <CardBoxModal
        title="Please confirm"
        buttonColor="danger"
        buttonLabel="Confirm"
        isActive={isModalTrashActive}
        onConfirm={confirmDelete}
        onCancel={handleModalAction}
      >
        <p>
          Та устгахдаа <b>итгэлтэй</b> байна уу?
        </p>
      </CardBoxModal>

      <table>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {itemsPaginated.map((item: any) => (
            <tr key={item._id}>
              <td className="border-b-0 lg:w-6 before:hidden">
                {/* <UserAvatar username={client.name} className="w-24 h-24 mx-auto lg:w-6 lg:h-6" /> */}
              </td>
              <td data-label="Name" className="lg:w-1 whitespace-wrap">
                {item.name || item.title}
              </td>
              <td data-label="Price" className="lg:w-1 whitespace-wrap">
                {item.price}
              </td>
              <td data-label="Category" className="lg:w-1 whitespace-wrap">
                {item.category?.name}
              </td>

              <td data-label="Description" className="lg:w-1 whitespace-wrap">
                {item.description}
              </td>
              <td className="before:hidden lg:w-1 whitespace-nowrap">
                <BaseButtons type="justify-start lg:justify-end" noWrap>
                  <BaseButton
                    color="info"
                    icon={mdiEye}
                    onClick={() => router.push(`/courses?_id=${item._id}`)}
                    small
                  />
                  <BaseButton
                    color="danger"
                    icon={mdiTrashCan}
                    onClick={() => {
                      deletingItem.current = item._id
                      setIsModalTrashActive(true)
                    }}
                    small
                  />
                </BaseButtons>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
          <BaseButtons>
            {pagesList.map((page) => (
              <BaseButton
                key={page}
                active={page === currentPage}
                label={page + 1}
                color={page === currentPage ? 'lightDark' : 'whiteDark'}
                small
                onClick={() => setCurrentPage(page)}
              />
            ))}
          </BaseButtons>
          <small className="mt-6 md:mt-0">
            Page {currentPage + 1} of {numPages}
          </small>
        </div>
      </div>
    </>
  )
}

export default TableCourses
