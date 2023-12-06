import imags from '../images/Search-Icon.png'
import icon from '../images/Explore.svg'
import icone from '../images/Options.png'
import img from '../images/Common-More-Button.png'

function Trends(){
    return(

        <div className='trend'>
             <div>
                  <Inputsearch/>
              </div>
            <div className='trendstyle'>
                <TitleTrends/>
              <div>
                <Trend/>
              </div>
              <div>
                <Trend/>
              </div>
              <div>
                <Trend/>
               </div>
               <div>
                <Trend/>
               </div>

            </div>

            <div className=''>

            </div>
            
        </div> 
        )
} 

function Inputsearch(){
    return(
        <div className='inputstyle'>
            <img src={imags} alt="icon"/>
            <input className='inputscolor' type="text" />
        </div>
    )
}

function Trend(){
    return(
        <div className=''>
            <div className='Titletrend'><span className='tweet-title-details'>Trending in Turkey</span><img src={img} alt="icon" /></div>
            <div className='titleTrends'><img src={icon} alt="icon"/><strong className='titleTrends'>SQUID</strong></div>
            <span className='tweet-title-details'>2.066 Tweets</span>
        </div>
    )
}

function TitleTrends(){
    return(
        <div>
            <h3>Trends for you</h3>
            <img src={icone} alt="icon"/>
        </div>
    )
}

export default Trends;