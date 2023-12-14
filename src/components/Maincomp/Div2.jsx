import React from 'react'

const Div2 = () => {
  return (
    <div className='div2 mt-5'>
      <div className='d-flex flex-row item px-5'>
        <div>
            <img src="./img1.png" alt=""  className='img-fluid my-2 ms-1 me-3'/>
        </div>
        <div>
            <p className='my-2 fw-bold'>Enrolled Students</p>
            <h3>80,000+</h3>
        </div>
      </div>

      <div className='d-flex flex-row item px-5'>
        <div>
            <img src="./img2.png" alt=""  className='img-fluid my-2 ms-1 me-3'/>
        </div>
        <div>
            <p className='my-2 fw-bold'>Online Courses</p>
            <h3>1,200+</h3>
        </div>
      </div>

      <div className='d-flex flex-row  item px-5'>
        <div>
            <img src="./img3.png" alt=""  className='img-fluid my-2 ms-1 me-3' />
        </div>
        <div>
            <p className='my-2 fw-bold'>Expert Instructions</p>
            <h3>80,000+</h3>
        </div>
      </div>
    </div>
  )
}

export default Div2
