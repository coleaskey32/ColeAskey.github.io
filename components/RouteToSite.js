import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'

function RouteButton(props) {
  const router = useRouter()
  const [height, setHeight] = useState(50);
  const [width, setWidth] = useState(50);

  const handleClick = e => {
    e.preventDefault()
    router.push(props.destination)
  }

  return (
    <button style={{marginRight: '20px', marginLeft: '20px', border: 'none', outline: 'none', cursor: 'pointer', backgroundColor: 'burlywood'}} type="button" onClick={handleClick}>
        <Image
        src={props.image}
        alt="Picture of the author"
        width= {width}
        height= {height}
    />
    </button>
  )
}

export default RouteButton
