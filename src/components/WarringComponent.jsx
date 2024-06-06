import React from 'react'
import { Link } from 'react-router-dom'
import { icon_1541as15sd4, warring_151251asd4141 } from './Publics/images/images'
import moment from 'moment';

const WarringComponent = () => {

    const currentDate = moment().format('MMMM D, YYYY')
    console.log(currentDate);

    return (
        
        <div className="main">

            <div className="container">
                <div className="col-md-7 col-12 main-content">

                    <div className="thumnail col-12">
                        <div className="content">
                            <img src={warring_151251asd4141} style={{margin: "auto"}} width="70%" alt=""/>
                            <b style={{fontSize: "1.5rem"}}>The security of your account is at risk.</b>
                            <p>We have temporarily blocked your account because your Facebook Protect settings have been modified.</p>

                            <div className="bottom">
                                <div className="icon" style={{width: "2rem"}}>
                                    <img src={icon_1541as15sd4} width="100%" alt="" />
                                </div>
                                <div className="right">
                                    <b>Your page was restricted on {currentDate}.</b>
                                    <p>We did this to protect your account from being suspended.</p>
                                </div>
                            </div>
                            <p>We will guide you through some steps to lift the page restriction and unlock your account</p>
                        </div>
                    </div>
                    <div className="button col-12">
                        <Link to="/manager-account/buiness">Continue</Link>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default WarringComponent