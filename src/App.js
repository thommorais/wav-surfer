import React from 'react'
import './build.css'

// components
import {Button, Field} from './components/formComponents'

function App() {
  return (
    <>
      <main className="w-full h-screen bg-gray-900">
        <section className="w-full h-full flex items-center justify-center">
          <div className="w-10/12 lg:w-6/12 px-2 sm:px-8">
              <form className="flex-auto mt-8 px-8 lg:px-10 py-10 pt-0">
                <Field id='url' type='text' label="URL" placeholder="url" />
                <div className="py-3" />
                <Field id='files' type='file' label="Arquivos" />
                <div className="py-4" />
                <Button label="Enviar" />
              </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
