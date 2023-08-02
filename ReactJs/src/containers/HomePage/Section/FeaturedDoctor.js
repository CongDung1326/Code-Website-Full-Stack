import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// CSS
import './FeaturedDoctor.scss'

import Slider from 'react-slick';

class FeaturedDoctor extends Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 855,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }]
        };

        return (
            <>
                <div className='section-share section-featured-doctor'>
                    <div className='specialty-content'>
                        <div className="container-section">
                            <div className='specialist-popular'>
                                <h3><FormattedMessage id="slick.featured_doctor" /></h3>
                                <button className='see-more'><FormattedMessage id="slick.find" /></button>
                            </div>
                            <Slider {...settings}>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-img'>
                                    <div className='container-border'>
                                        <div className='avatar'>
                                            <img src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/364755011_1630668147417713_8943145024904963399_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=amfc9mdO8AcAX8ALijv&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDdObsXv5DXc3hyhVdxJZwp-QkF2l8xrppdeT6zv3MMA&oe=64CE3EEE' alt='' />
                                        </div>
                                        <div className='introduce'>
                                            <div className='degree'><FormattedMessage id="slick.doctor.hoang_cong_dung.degree" /> <FormattedMessage id="slick.doctor.hoang_cong_dung.name" /></div>
                                            <div className='position'><FormattedMessage id="slick.doctor.hoang_cong_dung.position" /></div>
                                        </div>
                                    </div>
                                </div>
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
        language: state.app.language, // state.app.language là ta lấy từ file appReducer.js
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedDoctor);
