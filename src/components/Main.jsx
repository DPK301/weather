import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
function Main() {

   const [wdata,setwdata] =useState({})
   const [sear,setsear]=useState();

   console.log(sear);

   const weather=async()=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sear}&appid=a3feb99bc2c3d2a927a4563aca525a74&units=metric`)
    .then(response=>response.json())
    .then(data=>setwdata(data));

    console.log(wdata);
   }
   

   useEffect(()=>{
    weather()
},[])
   
  return (
    <div style={{backgroundImage:'url(https://static.wixstatic.com/media/565794_76c1fd4ab0fc48e5947f0d9789a6af80~mv2.png/v1/fill/w_3840,h_2160,al_c/wS%20Material%20Desktop%20Wallpaper%20-%2010.png)',backgroundSize:'cover',height:'700px',color:'white'}} >
       <div className='p-3'>
        <h3><b>WEATHER.COM</b></h3>
       </div>
        <div>
        <div className='p-5'>
        <InputGroup  >
        <Form.Control className="border-0 shadow"
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1" onChange={e=>setsear(e.target.value)}
        />
         <Button opacity="50%" onClick={weather} className="border-0 shadow"  variant="primary" id="button-addon1">
          Search
        </Button>
      </InputGroup>
      </div>
        <div className='text-center'>
           
                <div >
                    <div>
                        <img style={{width:'300px'}} src="https://th.bing.com/th/id/R.123c6efb6be12ba8bb8990dcd6e40d81?rik=V1%2bF4GZtZOQkgQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fcloud%2fcloud_PNG18.png&ehk=t8%2bode6%2bkm7PpXZD2WcfnoTGii4enycjuIcYU%2fLWXXc%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </div>
                    <p style={{fontSize:'30px',opacity:'90%',margin:'0'}}>{wdata.name}</p>
                   <div>
                   <b> <h1 style={{fontSize:'100px'}}>{wdata.main?.temp} <span style={{fontSize:'30px',opacity:'75%'}}>celsius</span>
                   </h1></b>
                   
                   <p>lon:{wdata.coord?.lon}/ lat:{wdata.coord?.lat} </p>
                   </div>
                </div>
              
          </div>

        </div>
       


    </div>
  )
}

export default Main