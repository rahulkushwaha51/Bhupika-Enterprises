import { useState, useEffect } from 'react'
import img1 from '../../assets/ghost.jpg'
import img2 from '../../assets/moon-knight.jpg'
import img3 from '../../assets/mortal-kombat.jpg'
import img4 from '../../assets/skull.jpg'
import "./ImageSlider.css"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react'
const ImageSlider = () => {
  let images = [img1, img2, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const showNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }
  const showPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }
  useEffect(() => {
    timeout = autoPlay && setTimeout(() => {
      showNext();
    }, 2500);
  });
  let timeout = null;

  return (
    <>
      <div className='slider-container' onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)} >
        <div className='slider'>
          {images.map((img, index) => (
            <img key={index} src={img} alt="image" className='slider-img' style={{ transform: `translateX(${-100 * currentIndex}%)` }} />
          ))}
        </div>
        <div>
          <button onClick={() => showPrevious()} className='slider-btn' style={{ left: 0 }}><ArrowBigLeft /></button>
          <button onClick={() => showNext()} className='slider-btn' style={{ right: 0 }}><ArrowBigRight /></button>
        </div>
      </div>
    </>
  )
}

export default ImageSlider;
