import React from 'react'
import '../Maincomp/Div3/Div3.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Div5 = () => {
  return (
    <div className='div3 my-5 py-5'>
        <div className='d-flex justify-content-between mb-3 pb-4'>
        <h2 className='fw-bold text-dark heading ' style={{'font-size':"40px" , "font-weight":"800" }}>Read Our Blogs</h2>
    <button className='select-custom new' style={{'max-width':'150px'}}>View All</button>
        </div>
            
      
      <div className='grid my-5 pb-5 '>

      <div className='product-item' id='grid-1'>
        <div className='second-parent'>
         <img src="https://positive.b-cdn.net/wp-content/uploads/self-actualization-1.jpg" alt="" className='img-grid' />
         </div>
         <div className='text-start px-3 mt-4 pt-2 text-ext'><span>April,22,2020</span>&nbsp;&nbsp;&nbsp;4 comments</div>
         <div className='px-3 py-2 mt-2 pb-4'>
            <h5 className='fw-bold text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam</h5>
            <p className='text-start' > <span className='dark-green' style={{'font-size':'14px'}}>READ MORE...</span></p>
         </div>
        </div>


        <div className='product-item' id='grid-1'>
        <div className='second-parent'>
         <img src="https://upjourney.com/wp-content/uploads/2022/08/examples-of-self-actualization-needs-maslows-hierarchy.png" alt="" className='img-grid' />
         </div>
         <div className='text-start px-3 mt-4 pt-2 text-ext'><span>April,22,2020</span>&nbsp;&nbsp;&nbsp;4 comments</div>
         <div className='px-3 py-2 mt-2 pb-4'>
            <h5 className='fw-bold text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
            <p className='text-start' > <span className='dark-green' style={{'font-size':'14px'}}>READ MORE...</span></p>
         </div>
         
        </div>

        <div className='product-item' id='grid-1'>
        <div className='second-parent'>
         <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbGFwdG9wfGVufDB8fDB8fHww" alt="" className='img-grid' />
         </div>
         <div className='text-start px-3 mt-4 pt-2 text-ext'><span>April,22,2020</span>&nbsp;&nbsp;&nbsp;4 comments</div>
         <div className='px-3 py-2 mt-2 pb-4'>
            <h5 className='fw-bold text-start'>Lorem ipsum dolor sit  consectetur  elit. Expedita, architecto?</h5>
            <p className='text-start' > <span className='dark-green' style={{'font-size':'14px'}}>READ MORE...</span></p>
         </div>
         
        </div>



        
        
      </div>

      <Carousel
      responsive={responsive}
      swipeable={true}
      infinite={true}
      keyBoardControl={true}
      autoPlay={true}
      autoPlaySpeed={2500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
      className=' mt-0  h-100 pt-0 pb-3 carousel-custom'
      >
        <div className='item-cou' id='grid-1'>
        <div className='second-parent'>
         <img src="https://positive.b-cdn.net/wp-content/uploads/self-actualization-1.jpg" alt="" className='img-grid' />
         </div>
         <div className='text-start px-3 mt-4 pt-2 text-ext'><span>April,22,2020</span>&nbsp;&nbsp;&nbsp;4 comments</div>
         <div className='px-3 py-2 mt-2 pb-4'>
            <h5 className='fw-bold text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam</h5>
            <p className='text-start' > <span className='dark-green' style={{'font-size':'14px'}}>READ MORE...</span></p>
         </div>
        </div>


        <div className='item-cou' id='grid-1'>
        <div className='second-parent'>
         <img src="https://upjourney.com/wp-content/uploads/2022/08/examples-of-self-actualization-needs-maslows-hierarchy.png" alt="" className='img-grid' />
         </div>
         <div className='text-start px-3 mt-4 pt-2 text-ext'><span>April,22,2020</span>&nbsp;&nbsp;&nbsp;4 comments</div>
         <div className='px-3 py-2 mt-2 pb-4'>
            <h5 className='fw-bold text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
            <p className='text-start' > <span className='dark-green' style={{'font-size':'14px'}}>READ MORE...</span></p>
         </div>
         
        </div>

        <div className='item-cou' id='grid-1'>
        <div className='second-parent'>
         <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbGFwdG9wfGVufDB8fDB8fHww" alt="" className='img-grid' />
         </div>
         <div className='text-start px-3 mt-4 pt-2 text-ext'><span>April,22,2020</span>&nbsp;&nbsp;&nbsp;4 comments</div>
         <div className='px-3 py-2 mt-2 pb-4'>
            <h5 className='fw-bold text-start'>Lorem ipsum dolor sit  consectetur  elit. Expedita, architecto?</h5>
            <p className='text-start' > <span className='dark-green' style={{'font-size':'14px'}}>READ MORE...</span></p>
         </div>
         
        </div>

      </Carousel>


      
    </div>
  )
}

export default Div5
