import { useState } from 'react';
import { items } from './items';
import Singlecolor from './Singlecolor';


const Home = () => {

  

const [colors] = useState(items)


  return (
    <div className='homepage'>
     {colors.map((color) => (
    <Singlecolor color = {color} key = {color.id} />
     ))}
    </div>
  )
}

export default Home