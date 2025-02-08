import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';

class Handbook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            handbooks: []
        }
    }

    componentDidMount() {
        this.props.getHandbookStart("all");
    }

    componentDidUpdate(prevProps) {
        let { dataHandbookRedux } = this.props;
        if (prevProps.dataHandbookRedux !== dataHandbookRedux) {
            this.setState({
                handbooks: dataHandbookRedux
            })
        }
    }

    render() {
        let { handbooks } = this.state;
        handbooks = handbooks.concat(handbooks).concat(handbooks);
        let settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
                breakpoint: 855,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }]
        };
        return (
            <>
                <div className='section-share section-handbook'>
                    <div className='specialty-content'>
                        <div className="container-section">
                            <div className='specialist-popular'>
                                <h3><FormattedMessage id="slick.handbook" /></h3>
                                <button className='see-more'><FormattedMessage id="slick.all_posts" /></button>
                            </div>
                            <Slider {...settings}>
                                {handbooks && handbooks.length > 0 && handbooks.map((handbook, index) => {
                                    return (
                                        <div className='handbook-box' key={index}>
                                            <img src={handbook.image} alt='' />
                                            <div className='handbook-text'><h3>{handbook.name}</h3></div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn, // Các biến từ redux
        language: state.app.language, // state.app.language là ta lấy từ file appReducer.js,
        dataHandbookRedux: state.admin.dataHandbook
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHandbookStart: (id) => dispatch(actions.getHandbookStart(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
