import React, {useEffect,useState} from 'react'
import "./Carousel.css";
const Carousel = ({data}) => {
  const [slide,setslide] =useState(0);
  const [prev, setprev] =useState(data.length-1);
  const [next,setnext] =useState(1);
  const [left,setleft] =useState(data.length-2);
  const [right,setright] =useState(2);

  

  const nextSlide=()=>{
    setleft((left+1)%data.length)
   setprev((prev+1)%data.length);
    setslide((slide+1)%data.length);
    setnext((next+1)%data.length);
    setright((right+1)%data.length)
  }
  const prevSlide=()=>{
    if(slide===0)
    setslide(data.length-1);
  else
    setslide(slide-1);
  if(prev===0)
  setprev(data.length-1);
else
setprev(prev-1);
if(next===0)
setnext(data.length-1);
else
setnext(next-1);
if(left===0)
setleft(data.length-1);
else
setleft(left-1);
if(right===0)
setright(data.length-1);
else
setright(right-1);
  }
//   useEffect(()=>{
//     const timer=setInterval(nextSlide,2000);
//     return ()=>{
// clearInterval(timer);
//     };
//   },[]);
  // const time=setInterval(
  //   nextSlide
  // ,2000
  // )
  // clearInterval(time);
function set(num)
{
setslide(num);
if(num===0){
setprev(data.length-1);
setleft(data.length-2);
setnext(num+1);
setright(num+2);
}
else if(num===1)
{
  setprev(num-1);
setleft(data.length-1);
setnext(num+1);
setright(num+2);
}
else if(num===data.length-1||num===data.length-2)
{
  setnext((num+1)%data.length);
  setright((num+2)%data.length);
  setprev(num-1);
  setleft(num-2);
}
else{
  setnext(num+1);
  setright(num+2);
  setprev(num-1);
  setleft(num-2);
}
}
  return (
  <>
  <div className='heading'>Featured Products</div>
  <p className='des'>Explore and discover a variety of products</p>
    <div className='carousel'>
      {data.map((item,idx) =>{
        return (
          <>
        <img src={item.src} alt={item.alt} key={idx} className={left===idx ? "slide3": "slide3 slide-hidden"} />
        <img src={item.src} alt={item.alt} key={idx} className={prev===idx ? "slide1": "slide1 slide-hidden"} />
        <img src={item.src} alt={item.alt} key={idx} className={slide===idx ? "slide": "slide slide-hidden"}/>
        <img src={item.src} alt={item.alt} key={idx} className={next===idx ? "slide2": "slide2 slide-hidden"} />
        <img src={item.src} alt={item.alt} key={idx} className={right===idx ? "slide4": "slide4 slide-hidden"} />

        </>
        );
      })}
    </div>
    <span className='indicators'>
      <img src="images/Arrow-Left.png" alt="img" className='leftarrow' onClick={prevSlide}/>
        {data.map((_,idx) =>{
          return (
            <button key={idx} onClick={()=>set(idx)} className={slide===idx ? "indicator":"indicator indicator-inactive"}></button>
          )
        })}
        <img src="images/Arrow-Right.png" alt="img" className='rightarrow' onClick={nextSlide}/>
      </span>
    </>
  )
}

export default Carousel
