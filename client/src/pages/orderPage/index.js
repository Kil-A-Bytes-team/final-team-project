import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Layout } from '../../layouts/layout';

export default function orderPage() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const props = [
    { name: 'monpay', img: '/monpay.jpeg' },
    { name: 'qpay', img: '/qpay.png' },
    { name: 'socialpay', img: '/social pay.png' },
  ]

  return (
    <Layout>
      <div className="container mx-auto">
        <h3 className="mb-28 text-4xl font-medium text-gray-900 dark:text-white text-center">Худалдаж авах төрлөө сонгох</h3>
        <div className="w-[1000px] ml-64">
          <table class="w-full justify-items-center text-sm text-left text-gray-500 dark:text-gray-400 mb-40">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Захиалгаа баталгаажуулах
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Сонгосон хичээлийн үнэ
                </th>
                <td class="px-6 py-4">100.000₮</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="text-xl px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Нийт үнэ
                </th>
                <td class="px-6 py-4 text-xl font-bold">100.000₮</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[900px] mx-auto">
          <div className="flex flex-row justify-between">
            {props?.map((prop, i) => (
              <div key={i} className="flex flex-col mb-36">
                <img className="w-44 h-44 rounded-full object-cover" src={prop.img} />
                <span className="text-center text-3xl font-sans font-bold mt-5">{prop.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed inset-0 flex items-center justify-center">
          <button type="button" onClick={openModal} className="mt-96 rounded-md px-[500px] py-36 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"></button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 text-center">
                      QR -ыг уншуулж төлбөрөө төлж баталгаажуулна уу.
                    </Dialog.Title>
                    <div className="mt-2">
                      <img className="w-40 h-40 ml-28 my-5" src="QR.png" />
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-28"
                        onClick={closeModal}
                      >
                        Төлбөрийг төлсөн
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </Layout>
  );
}
