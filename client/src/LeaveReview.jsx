import React from 'react';
// import star from './icons/star.png';

export default class LeaveReview extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            RestaurantName: props.RestaurantName,
            Rating: 4,
            SelectedRating: 0
            }
        }

        updateRating(Rating) {
            this.setState({
                Rating: Rating
            })
        }
    
    render() {
        return (
            <div className="LeaveReview">
                <div className="EmptyProfile">
                    <img src="https://s3-media2.fl.yelpcdn.com/assets/2/www/img/0a027d2e0fcf/writeareview/empty_profile@2x.png" width="148" height="68"/>
                </div>
                <div className="StarBoard">
                <div className="StarsBackground">
                    <ul className="Stars">
                        <li onMouseEnter={() => this.updateRating(5)} className={"Rating-"+this.state.Rating+"--Star-5"}><img className="StarIcon" src="https://image.ibb.co/khOiay/Screen_Shot_2018_06_02_at_3_08_10_PM.png" width="27" height="27"/></li>
                        <li onMouseEnter={() => this.updateRating(4)} className={"Rating-"+this.state.Rating+"--Star-4"}><img className="StarIcon" src="https://image.ibb.co/khOiay/Screen_Shot_2018_06_02_at_3_08_10_PM.png" width="27" height="27"/></li>
                        <li onMouseEnter={() => this.updateRating(3)} className={"Rating-"+this.state.Rating+"--Star-3"}><img className="StarIcon" src="https://image.ibb.co/khOiay/Screen_Shot_2018_06_02_at_3_08_10_PM.png" width="27" height="27"/></li>
                        <li onMouseEnter={() => this.updateRating(2)} className={"Rating-"+this.state.Rating+"--Star-2"}><img className="StarIcon" src="https://image.ibb.co/khOiay/Screen_Shot_2018_06_02_at_3_08_10_PM.png" width="27" height="27"/></li>
                        <li onMouseEnter={() => this.updateRating(1)} className={"Rating-"+this.state.Rating+"--Star-1"}><img className="StarIcon" src="https://image.ibb.co/khOiay/Screen_Shot_2018_06_02_at_3_08_10_PM.png" width="27" height="27"/></li>
                    </ul>
                </div>
                <a on className="ReviewLink">Start your review of <strong>{this.state.RestaurantName}.</strong></a>
                </div>
            </div>
        )
    }
    
}