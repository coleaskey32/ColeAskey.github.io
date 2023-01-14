import Image from 'next/image'
import { useState } from 'react'
import mypic from '../asset/myPic.jpg'

const MyImage = (props) => {
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);
  return (
    <div>
      <Image
        src={mypic}
        alt="Picture of the author"
        width= {width}
        height={height}
      />
    </div>
  )
}

export default MyImage