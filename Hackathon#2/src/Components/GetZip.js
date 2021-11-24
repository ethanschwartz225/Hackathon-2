import React from "react";
import './GetZip.css'
import Results from "./Results";

class GetZip extends React.Component {
    constructor() {
        super();
        this.state = {
            zipCode:'',
			restaurantArr:[]
        }
    }

    fetchZipCode = () => {
		const {zipCode} = this.state;
		fetch(`https://documenu.p.rapidapi.com/restaurants/search/fields?zip_code=${zipCode}`, {
			"method": "GET",
			"headers": {
			"x-api-key": "961722898415e673dda6c6d81d0250e0",
			"x-rapidapi-key": "3c4bf15b3bmsh222d6a6bb51ae93p113d14jsn57af88e1e42d",
			"x-rapidapi-host": "documenu.p.rapidapi.com"
			}
			})
			.then(res => res.json())
			.then(data => {
				console.log(data.data);
				this.setState({restaurantArr:data.data})
			})
				.catch(err => {
				console.error(err);
		        });
	    }

   GetZipCode = (event) => {
    	this.setState({zipCode: event.target.value})
   }

    render() {
    	const {restaurantArr} = this.state;
       return (
       	<>
			<div className="zipForm" id={'zipForm'}>
				<input type='text' placeholder={'Zip Code'} className={'inputZip'} id={'zipInput'} onChange={this.GetZipCode}/>
				<button className={'goButton'} onClick={this.fetchZipCode}>Go</button>
			</div>
				<Results restaurants={restaurantArr} />
		</>
       )
    }
}
export default GetZip;