import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            RestaurantName: props.RestaurantName
        }
    }

    render() {
        return (
            <div id="Header">
                <h2 className="Headertext"> <span className="HTHighlight">Recommended Reviews</span> for {this.state.RestaurantName}</h2>
                <span className="ReviewSearch">
                    <input className="Headerinput" placeholder="Search within the reviews" />
                    <button type="submit" value="submit" className="SearchButton">
                        <div className="fa fa-search fa-2x"></div>
                    </button>
                </span>
            </div>
        )
    }
}