import React from 'react'
import Catalog from '../components/body/devicePage/Catalog'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'




const SmartphonesPage = () => {
  const [data, setData] = React.useState([])
  const [searchData, setSearchData] = React.useState('')


React.useEffect(()=>{
    async function getData(){
        await axios.get(process.env.REACT_APP_API_URL + '/device', {params:{
          typeId: 1,
        }
        })
        .then(res=> setData(res.data))
    }
    getData()

    
  }, [])


  const Finder = async ()=> {
    await axios.get(process.env.REACT_APP_API_URL + '/device', {params:{
      search: searchData
    }
    })
    .then(res=> setData(res.data))
  }
  
  console.log(searchData)


  return (
    <>
    <div className='d-flex'>
       <Form.Control
       type ='text'
       onChange={event=>setSearchData(event.target.value)}
       />
       <Button onClick={Finder}>Найти</Button>

    </div>
      <Catalog data={data}/>
      </>
  )
}

export default SmartphonesPage