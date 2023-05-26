import { useState } from 'react'
import Resim1 from './images/resim1.jpg'
import Resim2 from './images/resim2.jpg'
import Resim3 from './images/resim3.jpg'
import Resim4 from './images/resim4.jpg'
import Resim5 from './images/resim5.jpg'
import Resim6 from './images/resim6.jpg'

const newİmages = { Resim1, Resim2, Resim3, Resim4, Resim5, Resim6 }

function İmageShow({ imageName }) {
  const [Hovered, setHovered] = useState(false)

  const handleIconClick = () => {
    setHovered(!Hovered)
  }
  const iconClassName = Hovered ? 'icon iconClicked' : 'icon'
  return (
    <div className='imageDiv'>
      <div className='imgİcon'>
        <img className='newİmage' src={newİmages[imageName]} alt={'Hemstır'} />
        <i className={iconClassName} onClick={handleIconClick}>
          👍
        </i>
      </div>
    </div>
  )
}

export default İmageShow
