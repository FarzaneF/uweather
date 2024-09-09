import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={"Weather Servies"} style={{ minHeight: 300, margin: 10, width: "calc(100% - 20px)" ,backgroundImage:'url("https://cdn.ituring.ir/research/75/images.jpeg")',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

        {/* <img src="https://cdn.ituring.ir/research/75/temp2.webp" style={{height:40,objectFit:"contain"}}/> */}

        <c-x style={{}}>
          <f-25 style={{padding:"10px 10px",color:"white",textAlign:"center",fontFamily:"readme"}}>Shiraz </f-25>
          <f-cse>
            <f-cc style={{height:80 , width:300, backgroundColor:"steelblue",borderRadius:15}}>
              <img src="https://cdn.ituring.ir/research/75/temp2.webp" style={{height:30,objectFit:"contain"}}/>
              <sp-3/>
              <f-cc>
                <f-25>Temprature : </f-25>
                <sp-3/>
                <f-24>  {props.feelslikec} </f-24>
                <f-25>°</f-25>
                <f-25>C</f-25>
                 </f-cc>

            </f-cc>

            <f-cc style={{height:80 , width:300, backgroundColor:"steelblue",borderRadius:15}}>
              <img src="https://cdn.ituring.ir/research/75/pic.jpeg" style={{height:30,objectFit:"contain"}}/>
              <sp-3/>
              <f-cc>
                <f-25>Pressure : </f-25>
                <sp-3/>
                <f-24>  {props.pressure} </f-24>
                
                 </f-cc>

            </f-cc>
            
          </f-cse>
          <br-x/>
          <br-x/>
          <f-cse>
            <f-cc style={{height:80 , width:300, backgroundColor:"steelblue",borderRadius:15}}>
              <img src="https://cdn.ituring.ir/research/75/Untitled.jpeg" style={{height:30,objectFit:"contain"}}/>
              <sp-3/>
              <f-cc>
                <f-25>Humidity : </f-25>
                <sp-3/>
                <f-25>  {props.humidity} </f-25>
                
                 </f-cc>

            </f-cc>

            <f-cc style={{height:80 , width:300, backgroundColor:"steelblue",borderRadius:15}}>
              <img src="https://cdn.ituring.ir/research/75/cloud.png" style={{height:30,objectFit:"contain"}}/>
              <sp-3/>
              <f-cc>
                <f-25>Cloudcover : </f-25>
                <sp-3/>
                <f-25>  {props.value} </f-25>
                
                 </f-cc>

            </f-cc>
            
          </f-cse>
          <br-x/>
          <f-cc style={{width:"100%"}}>
            <sp-4/>
            <f-13>By Turing team (pc group) </f-13>

          </f-cc>
          <br-x/>
          

        </c-x>


        {/* <div style={{direction:"ltr",fontSize:20}}>

          <span>Feels like: {props.feelslikec} °C</span>
          <br/>
          <span>Humidity: {props.humidity} % RH</span>
          <br/>
          <span>Pressure: {props.pressure}</span>
          <br/>
          <span>cloudcover: {props.value}</span>
          <br/>
          <span>Shiraz: {props.date}</span>
        </div> */}
      
        <br-x/>
      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;


    let data = await(await fetch("https://cdn.ituring.ir/research/api/weather/")).json()

    let feelslikec = data.current_condition[0].FeelsLikeC
    let humidity = data.current_condition[0].humidity
    let pressure = data.current_condition[0].pressure
    let value = data.current_condition[0].cloudcover
    let date = new Date().toLocaleTimeString()


  return {
    props: {
      data: global.QSON.stringify({
   
        session,
        feelslikec,
        humidity,
        pressure,
        value,
        date
        // nlangs,
      })
    },
  }
}