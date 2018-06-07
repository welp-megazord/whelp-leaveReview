import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            location: props.location,
            date: props.date,
            friends_count: props.friends_count,
            reviews_count: props.reviews_count,
            photos_count: props.photos_count,
            useful_count: props.useful_count,
            funny_count: props.funny_count,
            cool_count: props.cool_count,
            reviewDescription: props.reviewDescription,
            imgSrc: props.imgSrc,
            hovering: false,
            votedCool: false,
            votedFunny: false,
            votedUseful: false,
            rating5src: "https://image.ibb.co/dOkUVy/Screen_Shot_2018_06_01_at_8_03_14_PM.png",
            rating1src: "https://image.ibb.co/jTuYQy/Screen_Shot_2018_06_02_at_2_44_46_PM.png",
            rating: props.rating,
            opacity: 0,
            photos: props.photos
        }
    }

    hoveringOn() {
        console.log('on')
        this.setState({
            hovering: true,
            opacity: 1
        })
    }
    hoveringOff() {
        console.log('off')
        this.setState({
            hovering: false,
            opacity: 0
        })
    }

    updateVoted(type) {
        if (type === 'cool'){
            if (!this.state.votedCool){
            this.setState({
                votedCool: true,
                cool_count: this.state.cool_count + 1
            })
            } else {
                this.setState({
                    votedCool: false,
                    cool_count: this.state.cool_count - 1
                })
            }
        } else if (type === 'funny'){
            if (!this.state.votedFunny){
                this.setState({
                    votedFunny: true,
                    funny_count: this.state.funny_count + 1
                })
                } else {
                    this.setState({
                        votedFunny: false,
                        funny_count: this.state.funny_count - 1
                    })
                }
        } else if (type === 'useful'){
            if (!this.state.votedUseful){
                this.setState({
                    votedUseful: true,
                    useful_count: this.state.useful_count + 1
                })
                } else {
                    this.setState({
                        votedUseful: false,
                        useful_count: this.state.useful_count - 1
                    })
                }
        }
    }
//this.state.cool_count + 1
    render() {
        return (
            <div onMouseEnter={() => this.hoveringOn()} onMouseLeave={() => this.hoveringOff()} className="Review">
                {/* Portfolio */}
                <div className="Passport">
                    <img className="PassportPic" src={this.state.imgSrc}/>
                    <ul className="PassportDeets">
                        <li className="Username"><b>{this.state.username}</b></li>
                        <li className="Location"><b>{this.state.location}</b></li>
                        <li className="Friends"><img className="FriendsIcon18"src="https://image.ibb.co/ftdV3J/Screen_Shot_2018_06_01_at_7_37_19_PM.png"/><b>{this.state.friends_count}</b> friends</li>
                        <li className="ReviewsCount"><div className="ReviewIcon"><img className="ReviewStarIcon"src="https://image.ibb.co/b4VbSd/star.png" width="9" height="9"/></div><b><strong>-</strong>{this.state.reviews_count}</b>  reviews</li>
                    </ul>
                </div>
        
                    <img className={"ReviewRating-"+this.state.rating} src={this.state['rating'+this.state.rating+'src']}/>
                    <h5 className="ReviewDate">{this.state.date}</h5>
                    <p className="ReviewDescription">{this.state.reviewDescription}</p>
                {/* Rendering Photos */}
                <ul className="Photos">
                    <li><img className="PhotoSolo" src={this.state.photos[0]} width="350" height="350"/></li>
                </ul>
                <ul className="voting-buttons">
                    <li className={"vote-item-"+Number(this.state.votedCool)} onClick={() => this.updateVoted('cool')}><img src={this.state.votedCool? "https://image.ibb.co/ipaCJJ/Screen_Shot_2018_06_02_at_11_29_30_AM.png" : "https://image.ibb.co/jtk6TJ/Screen_Shot_2018_06_02_at_11_29_30_AM.png"} className="voteIcon"/><b>Cool</b><strong>{this.state.cool_count > 0? this.state.cool_count : null}</strong></li>
                    <li className={"vote-item-"+Number(this.state.votedFunny)} onClick={() => this.updateVoted('funny')}><img src={this.state.votedFunny? "https://image.ibb.co/kORPXd/Screen_Shot_2018_06_02_at_11_29_19_AM.png" : "https://image.ibb.co/ksE88J/Screen_Shot_2018_06_02_at_11_29_19_AM.png"} className="voteIcon"/><b>Funny</b><strong>{this.state.funny_count > 0? this.state.funny_count : null}</strong></li>
                    <li className={"vote-item-"+Number(this.state.votedUseful)} onClick={() => this.updateVoted('useful')}><img src={this.state.votedUseful? "https://image.ibb.co/nhXnky/Screen_Shot_2018_06_02_at_11_28_57_AM.png" : "https://image.ibb.co/fMkFoJ/Screen_Shot_2018_06_02_at_11_28_57_AM.png"} className="voteIcon"/><b>Useful</b><strong>{this.state.useful_count > 0? this.state.useful_count : null}</strong></li>
                </ul>
                <div className="Divider"></div>
                <ul style={{opacity: this.state.opacity, transition: '0.3s'}}className="PassportOptions">
                    <li className="PassportOption"><b>Share review</b></li>
                    <li className="PassportOption"><b>Embed review</b></li>
                    <li className="PassportOption"><b>Compliment</b></li>
                    <li className="PassportOption"><b>Send message</b></li>
                    <li className="PassportOption"><b>Follow Afi P.</b></li>
                </ul>
                { this.state.votedCool||this.state.votedFunny||this.state.votedUseful? <h5 className="Voted">Thanks for your vote!</h5> : null }
            </div>

        )
    }
}