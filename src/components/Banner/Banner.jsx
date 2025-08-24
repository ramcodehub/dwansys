import Button from "../Button/Button"
import './Banner.css'

const Banner = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 banner">
       <div className="d-flex flex-column align-items-center m-0 p-0 banner-heading">
        <h1 className="m-0 p-0 lh-1">Unlock Data Insights</h1>
        <h1 className="p-0 lh-1 colored">Make Smarter Decisions</h1>
       </div>
       <div className="fw-light text-center  lh-1 mx-auto banner-description">
         <p>“Driving bold, breakthrough innovations that redefine how we protect and nurture the planet 
            making sustainability not just a goal, but a revolution."</p>
        </div>
        <Button variant='secondary'>Book a Demo</Button>  
    </div>
  )
}

export default Banner
