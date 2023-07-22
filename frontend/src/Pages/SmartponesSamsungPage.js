import React from 'react'
import Catalog from '../components/body/devicePage/Catalog'
import axios from 'axios'




const SmartponesSamsungPage = () => {
  const [data, setData] = React.useState([])


React.useEffect(()=>{
    async function getData(){
        await axios.get(process.env.REACT_APP_API_URL + 'device/', {params: {
          typeId: 1,
          brandId: 1
        }})
        .then(res=> setData(res.data))
    }
    getData()

}, [])

  return (
   
      <Catalog data={data}/>
    
  )
}

export default SmartponesSamsungPage





