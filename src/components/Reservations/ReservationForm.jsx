import styles from "./ReservationForm.module.css"
import {useRef, useState} from "react";
import Confirmation from "../../pages/Confirmation.jsx";
import {useFormik} from 'formik';
import {basicSchema} from "../../shemas/reservationForm.js";

export default function ReservationForm({handleFillForm, availableTimes, getAvailableTimes}) {

    const refAdult = useRef(0);
    const refChildren = useRef(null);
    const [countAdults, setCountAdults] = useState(1);
    const [countChildren, setCountChildren] = useState(0);
    const [specialRequest, setSpecialRequest] = useState({
        pets: false,
        familyArea: false,
        babyChair: false
    });
    let confirmation = {}
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            bookDate: "",
            time: "18:00",
            occasion: "No occasion",
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
        },
        validationSchema: basicSchema,
        onSubmit: () => {
            onSubmit()
        }
    });

    const onSubmit = () => {
        console.log("subbmit")
        confirmation.bookDate = values.bookDate;
        confirmation.time = values.time;
        confirmation.countAdult = countAdults;
        confirmation.countChildren = countChildren;
        confirmation.occasion = values.occasion;
        confirmation.specialRequest = specialRequest;
        confirmation.firstName = values.firstName
        confirmation.lastName = values.lastName
        confirmation.phone = values.phone
        confirmation.email = values.email;
        console.log(confirmation)

        const date = new Date(confirmation.bookDate);
        console.log(date.getDate())
        handleFillForm(confirmation);
    };

    const increaseCountAdult = () => {
        refAdult.current = refAdult.current + 1;
        setCountAdults(prevCountAdults => prevCountAdults + 1);
        if (countAdults >= 8) {
            setCountAdults(8);
            refAdult.current = 8;
        }
    };
    const decreaseCountAdult = () => {
        refAdult.current = refAdult.current - 1;
        setCountAdults(prevCountAdults => prevCountAdults - 1);
        if (countAdults <= 1) {
            setCountAdults(1);
            refAdult.current = 1;
        }
    };

    const increaseCountChildren = () => {
        refChildren.current = refChildren.current + 1;
        setCountChildren(prevCountChildren => prevCountChildren + 1);
        if (countChildren >= 4) {
            setCountChildren(4);
            refAdult.current = 4;
        }
    };
    const decreaseCountChildren = () => {
        refChildren.current = refChildren.current - 1;
        setCountChildren(prevCountChildren => prevCountChildren - 1);
        if (countChildren <= 0) {
            setCountChildren(0);
            refChildren.current = 0;
        }
    };

    const handleCheck = (e) => {
        if (e.target.value === "pets") {
            setSpecialRequest({...specialRequest, ["pets"]: e.target.checked})
        } else if (e.target.value === "familyArea") {
            setSpecialRequest({...specialRequest, ["familyArea"]: e.target.checked})
        } else if (e.target.value === "babyChair") {
            setSpecialRequest({...specialRequest, ["babyChair"]: e.target.checked})
        }
    }

    return (
        <div>
            <form className={styles.container} onSubmit={handleSubmit}>
                <div className={styles.form_table_information}>
                    <div className={styles.form__header}>Book a table:</div>
                    <div className={styles.form__table}>
                        <div className={styles.form__area}>
                            <label htmlFor="date">Start date:</label>
                            <input
                                type="date"
                                id="date"
                                min="2025-03-01"
                                max="2025-04-30"
                                name="bookDate"
                                value={values.bookDate}
                                onChange={(e)=>{
                                    handleChange(e);
                                    getAvailableTimes(e.target.value)
                                    }}/>
                            {errors.bookDate && touched.bookDate && <p className={styles.form__error}>{errors.bookDate}</p>}
                        </div>
                        <div className={styles.form__area}>
                            <label htmlFor="time">Time:</label>
                            <select
                                name="time"
                                id="time"
                                value={values.time}
                                onChange={handleChange}
                                onBlur={handleBlur}>
                                {availableTimes.map((time) => <option value={time}>{time}</option>)}
                            </select>
                            {errors.time && touched.time && <p className={styles.form__error}>{errors.time}</p>}
                        </div>
                        <div className={styles.form__area}>
                            <label htmlFor="adult">Number of adult:</label>
                            <div className={styles.form__count_container}>
                                <div className={styles.form__count_decrease_adult} data-testid="decrease_adult" aria-label="decrease adults" role="button" onClick={decreaseCountAdult}>-</div>
                                <div className={styles.form__count_result_adult} data-testid="result_adult" aria-label="result adults" role="text">{countAdults}</div>
                                <div className={styles.form__count_increase_adult} data-testid="increase_adult" aria-label="increase adults" role="button" onClick={increaseCountAdult}>+</div>
                            </div>
                        </div>
                        <div className={styles.form__area}>
                            <label htmlFor="children">Number of children:</label>
                            <div className={styles.form__count_container}>
                                <div className={styles.form__count_decrease_children} data-testid="decrease_children" aria-label="decrease children" role="button" onClick={decreaseCountChildren}>-</div>
                                <div className={styles.form__count_result_children} data-testid="result_children" aria-label="result children" role="text">{countChildren}</div>
                                <div className={styles.form__count_increase_children} data-testid="increase_children" aria-label="increase children" role="children" onClick={increaseCountChildren}>+</div>
                            </div>
                        </div>
                        <div className={styles.form__area}>
                            <label htmlFor="occasion">Occasion:</label>
                            <select
                                name="occasion"
                                id="occasion"
                                value={values.occasion}
                                onChange={handleChange}
                                onBlur={handleBlur}>
                                <option value="No occasion">No occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Engagement">Engagement</option>
                            </select>
                            {errors.occasion && touched.occasion &&
                                <p className={styles.form__error}>{errors.occasion}</p>}
                        </div>
                        <div className={styles.form__area_special_request}>
                            <label>Special request:</label>
                            <div className={styles.form__area_special_request_check}>
                                <div className={styles.form__checkbox}>
                                    <input type="checkbox" id="pets" name="request" value="pets"
                                           onChange={handleCheck}/>
                                    <label htmlFor="pets">Comes with pet</label>
                                </div>
                                <div className={styles.form__checkbox}>
                                    <input type="checkbox" id="familyArea" name="request" value="familyArea"
                                           onChange={handleCheck}/>
                                    <label htmlFor="familyArea">Family area with playroom access</label>
                                </div>
                                <div className={styles.form__checkbox}>
                                    <input type="checkbox" id="babyChair" name="request" value="babyChair"
                                           onChange={handleCheck}/>
                                    <label htmlFor="babyChair">High chair for children</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.form_personal_information}>
                    <div className={styles.form__header}>Contact information:</div>
                    <div className={styles.form__personal}>
                        <div className={styles.form__area}>
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                            {errors.firstName && touched.firstName &&
                                <p className={styles.form__error}>{errors.firstName}</p>}
                        </div>

                        <div className={styles.form__area}>
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                            {errors.lastName && touched.lastName &&
                                <p className={styles.form__error}>{errors.lastName}</p>}
                        </div>
                        <div className={styles.form__area}>
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                            {errors.phone && touched.phone && <p className={styles.form__error}>{errors.phone}</p>}
                        </div>
                        <div className={styles.form__area}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                            {errors.email && touched.email && <p className={styles.form__error}>{errors.email}</p>}
                        </div>
                    </div>
                </div>
                <button type="submit" className={styles.form__button}>Submit</button>
            </form>
        </div>
    )
}