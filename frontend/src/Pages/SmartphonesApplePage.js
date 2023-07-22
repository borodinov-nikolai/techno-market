import React from 'react'
import Catalog from '../components/body/devicePage/Catalog'
import axios from 'axios'




const TabPage = () => {
  const [data, setData] = React.useState([])


React.useEffect(()=>{
    async function getData(){
        await axios.get(process.env.REACT_APP_API_URL + '/device', {params: {
          brandId: 7,
          typeId: 1
        }})
        .then(res=> setData(res.data))
    }
    getData()

}, [])

  return (
   
      <Catalog data={data}/>
    
  )
}

export default TabPage