import React, { useState } from 'react';
import './Contact.css';
import contactimg from './contact.jpg';
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PacmanLoader } from 'react-spinners';


const Contact = () => {

    const API = "https://rakeshs-portfolio.onrender.com/sendmail";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [jobtype, setJobtype] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    const sendEmail = () => {
        setLoader(true);
        fetch(API, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                jobtype,
                message
            }),
        }).then((res) => res.json())
            .then((result) => {
                if (result.success == false) {
                    toast.error(result.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                } else {
                    setName("");
                    setEmail("");
                    setJobtype("");
                    setMessage("");
                    toast.success(result.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
                setLoader(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='container contact-section' id='contact'>
            <div className='row'>
                <motion.div 
                    className='col-xl-5 col-lg-5 col-md-5 col-sm-5'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className='contact-form-image'>
                        <img src={contactimg} alt='contact form image' />
                    </div>
                </motion.div>

                <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>
                    <div className='contact-form-design'>
                        <div className='text-center'>
                            <h5>Contact Me</h5>
                        </div>
                    </div>
                    <motion.form
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='contact-form'>
                            <label className='form-label'>Name</label>
                            <input type='email' className='form-control'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div className='contact-form'>
                            <label className='form-label'>E-mail</label>
                            <input type='email' className='form-control'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className='contact-form'>
                            <label className='form-label'>Job Types</label>
                            <select className='custom-select-tag'
                                value={jobtype}
                                onChange={(e) => setJobtype(e.target.value)}
                            >
                                <option>Select</option>
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Contract</option>
                            </select>
                        </div>
                        <div className='contact-form'>
                            <label className='form-label'>Message</label>
                            <textarea rows="4" type='text' className='form-control'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        {loader ? (<div className='spinner-container' ><p><PacmanLoader size={15} color={'yellowgreen'} loading={loader} /> </p></div>) :
                            (<div className='button-submit' onClick={sendEmail}><p>Send <RiSendPlaneFill size={20} /></p></div>)}

                    </motion.form>
                </div>
            </div>

            <ToastContainer autoClose={8000} />
        </div>
    )
}

export default Contact