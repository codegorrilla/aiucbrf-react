import img1 from '../assets/images/av-1.avif'
import img2 from '../assets/images/av-2.avif'
import img3 from '../assets/images/av-3.avif'
import img4 from '../assets/images/av-4.avif'
import img5 from '../assets/images/av-5.avif'

function ImgSet(props){
    return(
        <img src={props.imgUrl} alt={props.imgTitle}/>        
    )
}

function Hero({children}) {
	return (
		<div className="col-sm-12 fl-box">
			<div className="col-sm-12 col-lg-5 col-offset-lg-1 fl-box fl-col-c">
				<h1 className='hero-title'>
					We’re changing the way people connect.
				</h1>
                {children}
			</div>
			<div className="col-lg-6 fl-box">
                <div className="av px-1 py-2 first">
                    <ImgSet imgUrl={img1} imgTitle='Image1' /> 
                </div>
                <div className="av px-1 py-2 second">
                    <ImgSet imgUrl={img2} imgTitle='Image2' />
                    <ImgSet imgUrl={img3} imgTitle='Image3' /> 
                </div>
                <div className="av px-1 py-2 third">
                    <ImgSet imgUrl={img4} imgTitle='Image4' /> 
                    <ImgSet imgUrl={img5} imgTitle='Image5' /> 
                </div>
            </div>
		</div>
	)
}



export default Hero
