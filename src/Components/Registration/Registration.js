import React, {useState, useContext} from "react";
import styles from './Registration.module.css'
import registrationImg from '../../Assets/last-block-img.png'
import {ScrollContext} from "../../ScrollContext";
import axios from "axios";

const Registration = (props) => {
    const items = [
        {
            label: 'Ім’я',
            htmlFor: 'name'
        },
        {
            label: 'Прізвище',
            htmlFor: 'surname'
        },
        {
            label: 'Email',
            htmlFor: 'email'
        },
        {
            label: 'Номер телефону',
            htmlFor: 'phone'
        }
    ]

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: ''
    })
    const [hasSubmitted, setHasSubmitted] = useState(false);

    // const targetRef = useContext(ScrollContext)

    // const submitButtonHandler = (e) => {
    //     e.preventDefault()
    //     if (hasSubmitted) {
    //         return;
    //     }
    //     setHasSubmitted(true);
    //
    //     // let data = new FormData()
    //     // data.append('name', formData.name, 'surname', formData.surname, 'email', formData.email, 'phone', formData.phone)
    //     fetch('http://localhost:8888/project-avon-api/', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //         // body: data
    //     })
    //         .then(response => response.text())
    //         .then(data => console.log(data))
    //         .catch(error => console.error(error))
    //         .finally(() => {
    //             setHasSubmitted(false)
    //             setFormData({
    //                 name: '',
    //                 surname: '',
    //                 email: '',
    //                 phone: ''
    //             })
    //         })
    //     // console.log(formData)
    // }

    const inputChangeHandler = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
        console.log(formData)
    }

    const registrationHandler = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try{
            const response = await axios.post('http://localhost:8080/api', formData);
            console.log(response.data); // Handle the response from the server
            setFormData({
                name: '',
                surname: '',
                email: '',
                phone: ''
            });
        }
        catch(error){
            console.error(error)
        }
    }

    return (
        <div className={styles['registration-wrapper']}>
            <div className={styles['registration-container']}>
                <h1>Зроби красу своїм бізнесом</h1>
                <div className={styles['registration-block']}>
                    {/*<div className={styles['registration-inputs']}>*/}
                    {/*    {*/}
                    {/*        items.map((item, index) => {*/}
                    {/*            return (*/}
                    {/*                <div key={index}>*/}
                    {/*                    <p>{item}</p>*/}
                    {/*                    <input type='text'/>*/}
                    {/*                </div>*/}
                    {/*            )*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*    <button className={styles['registration-btn']}>Зареєструватися</button>*/}
                    {/*</div>*/}
                    <div className={styles['registration-inputs']}>
                        {/*<form onSubmit={submitButtonHandler}>*/}
                            {
                                items.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div
                                                // htmlFor={item.htmlFor}
                                            >
                                                    {item.label}
                                            </div>
                                            <input
                                                type='text'
                                                name={item.htmlFor}
                                                onChange={inputChangeHandler}
                                                value={formData[item.htmlFor]}
                                            />
                                        </div>
                                    )
                                })
                            }
                            <button
                                // onClick={submitButtonHandler}
                                className={styles['registration-btn']}
                                onClick={registrationHandler}
                            >Зареєструватися</button>
                        {/*</form>*/}
                    </div>
                    <img src={registrationImg} alt='registration-img'/>
                </div>
                {/*registration*/}
            </div>
        </div>
    )
}

export default Registration