import './RestaurantCard.css';
import React from "react";

class RestaurantCard extends React.Component {
    render() {
        const {restaurant} = this.props;
        return (
            <>
                {
                    restaurant.map((item, a, b, c, d, e, f, g) => {
                        return (
                            <div className={'container'} key={a}>
                                <div className={'restaurantCardWrapper'} key={b}>
                                    <h1 key={c}>{item.restaurant_name}</h1>
                                    <h4 key={d}>{item.address.formatted}</h4>
                                    <h4 key={g}>{item.restaurant_phone}</h4>
                                    <button key={e} className={'restaurantButton'}>
                                        <a href={item.restaurant_website} key={f} className={'link'}>Take me there!</a>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}
export default RestaurantCard;
