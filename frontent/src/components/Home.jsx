import React from 'react'
import FormExample from './Form'
import BasicExample from './table'
function Home() {

  return (
    <>
      <div className="container my-4">
        <h1 className="text-center">PW-MANAGER</h1>
        <h6 className='text-center fs-4 fst-italic text-secondary my-3'>your own password manager</h6>

        <FormExample />
        <div className='my-5'>
          <h3 className='text-center text-secondary fst-bold'>YOUR PASSWORDS</h3>
        </div>
        <BasicExample />
      </div>
    </>
  )
}

export default Home
