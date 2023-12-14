import React from 'react'
import './Maincomp.css'
import Div2 from './Div2'
import Div3 from './Div3/Div3'
import Div4 from './Div4'
import Div5 from './Div5'
const Maincomp = () => {
  return (
    <div className='maincomp1 '>
        <div className='maincomp py-5'>
        <div className='container'>
      <div className='d-flex justify-content-center align-items-center py-3'>
        <div>
            <h1 className='text-center'>Learn Best Online Courses</h1>
            <h4 className='text-center mt-3'>48,000 Online Courses for you</h4>
            <div className='w-80 mx-auto select-head mt-5 py-3 justify-content-between'>
                <div className='w-33'>
                <select name="category" id="" className='select-custom w-100'>
                    <option value="">Category</option>
                    <option value="">category1</option>
                    <option value="">category2</option>
                    <option value="">category3</option>
                    <option value="">category4</option>
                </select>
                </div>
                
                <div className='w-66 d-flex justify-content-between'>
                    <div className='px-2'><input type="text" placeholder='What do you want to learn?' className='input-custom w-100 mx-auto mx-2'/></div>
                <button className='select-custom '>Search</button>
                </div>
                
            </div>
            <div className='text-center'>
                <img src="./home-bg.png" alt="" className='img-fluid w-75 mx-auto text-center' />
            </div>
        </div>
      </div>
      </div>
      </div>
      <div className="container">
      <Div2/>
      <Div3/>
      </div>
      <Div4/>
      <div className="container">
      <Div5/>
      </div>
      
      
    </div>
  )
}

export default Maincomp
