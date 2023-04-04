import style from './Contact.module.css';
import contactImg from './../../../footer_pages_img/Contact_Us.png';
import * as yup from 'yup';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    let schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        message: yup.string().required(),
    })
    let nameRef = useRef();
    let emailRef = useRef();
    let messageRef = useRef();
    let [show, setShow] = useState(false);
    let navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        let details = {};
        details.name = nameRef.current.value;
        details.email = emailRef.current.value;
        details.message = messageRef.current.value;
        schema.validate(details)
            .then((e) => {
                setShow(false);
                window.scrollTo(0, 0);
                navigate('/');
                alert('your message has been recorded');

            })
            .catch((e) => {
                setShow(true);
            })
    }

    return (
        <div className={style.main}>
            <h2>CONTACT US!</h2>
            <p>Our team of Customer Experience Experts is ready to help!</p>
            <p>Email Us! Complete our Customer Service form and receive a quick response.</p>
            <form action="" onSubmit={submitForm}>
                <div>
                    <input type="text" name="" id="" placeholder='Your name*' ref={nameRef} />
                    <input type="email" name="" id="" placeholder='Your email*' ref={emailRef} />
                </div>
                <div>
                    <input type="number" name="" id="" placeholder='Your phone(optional)' />
                    <select name="" id="">
                        <option value="" selected>Reason*</option>
                        <option value="Tracking">Tracking</option>
                        <option value="Return">Return</option>
                        <option value="Refund">Refund</option>
                        <option value="Cancel">Cancel</option>
                        <option value="Damage">Damage</option>
                        <option value="Exchange">Exchange</option>
                        <option value="Missing Item">Missing Item</option>
                        <option value="Unsubscribe">Unsubscribe</option>
                        <option value="Expert Advice">Expert Advice</option>
                        <option value="Help with purchase">Help with purchase</option>
                        <option value="Promotions">Promotions</option>
                        <option value="Gift Card Spa">Gift Card Spa</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your message*' ref={messageRef}></textarea>
                </div>
                <div><input type="file" name="" id="" placeholder='Upload image(optional)' /></div>
                <div><input type="submit" value="SEND MESSAGE" /></div>
            </form>
            {show && <small style={{ color: 'red' }}>Please enter all required field</small>}
            <div className={style.image}>
                <img src={contactImg} alt="image" />
            </div>
        </div>
    )
}

export default Contact;