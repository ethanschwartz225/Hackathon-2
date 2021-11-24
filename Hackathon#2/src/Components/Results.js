import React from "react";
import RestaurantCard from "./RestaurantCard";
class Results extends React.Component {
    render() {
        // console.log('results:', this.props.restaurants)
        const {restaurants} = this.props;
        return (
            <>
                <div>
                    {
                        <RestaurantCard restaurant={restaurants} />
                    }
                </div>
            </>
        )
    }
}
export default Results