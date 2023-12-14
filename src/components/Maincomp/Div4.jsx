import React  from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Div4.css'; // Make sure to replace with the correct stylesheet

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

const Div4 = () => {

  const data =[
    {id:'1' , name:'jesse pinkman' , work:'UI & UK Designer' , imvg:'./immg1.png'},
    {id:'2' , name:'Walter White ' , work:'Data Scientist' , imvg:'./immg2.png'},
    {id:'3' , name:'Skyler White ' , work:'Machine Learing' , imvg:'./immg3.png'},
    {id:'4' , name:'jane Margolis' , work:'Full Stack Developer' , imvg:'./immg4.png'},

  ]
 



  return (
    <div className='my-5 py-5 instructor '>
      <div className='container py-5 mt-4'>
      <h2 className='fw-bold text-dark heading mt-3' style={{'font-size':"40px" , "font-weight":"800" , 'position':"absolute"}}>Our  Instructors</h2>

<Carousel responsive={responsive}
    swipeable={true}
    infinite={true}
    keyBoardControl={true}
    autoPlay={true}
    autoPlaySpeed={2500}
    removeArrowOnDeviceType={["tablet", "mobile"]}
    itemClass="carousel-item-padding-40-px"
    className='my-4 h-100 py-5 '>

{
  data.map(item => (
   <div className='item-cou' id='grid-6' key={item.id} style={{'width':'90%' , 'margin':'auto'}}>
    <div className='second-parent'>
     <img src={item.imvg} alt="" className='img-grid' />
     <div className='d-flex  bg-transparent py-3 text-center'>
      <div className='w-100 mx-auto'>
      <i class="fa fa-instagram mx-2 fs-5" aria-hidden="true"></i>
     <i class="fa fa-facebook mx-2 fs-5" aria-hidden="true"></i>
     <i class="fa fa-twitter mx-2 fs-5" aria-hidden="true"></i>
     <i class="fa fa-pinterest mx-2 fs-5" aria-hidden="true"></i>
      </div>
    
     </div>
     </div>
     <div className='px-3 py-2 mt-2'>
        <h5 className='fw-bold text-center mt-2'>{item.name}</h5>
        <p className='text-center'>{item.work} </p>
        <hr className='mt-4' style={{"color":"#555"}}/>
     </div>
     <div className='d-flex flex-row px-3 mb-4 bt justify-content-between'>
        <div className='me-3 d-flex align-items-center'><img src="./profile.png" alt="" className='img-stat ' /> 2006</div>
        <div className='mx-3 d-flex align-items-center'><img src="./save.png" alt="" className='img-stat ' /> Lecturers</div>
     </div>
    </div>
  ))
}
      
  


</Carousel>
</div>
    </div>
  );
};

export default Div4;
