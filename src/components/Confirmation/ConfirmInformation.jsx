import styles from "./ConfirmInformation.module.css"

export default function ConfirmInformation({confirmations}) {
    console.log("from confirm")
    console.log(confirmations)
    return (
        <div className={styles.container}>
            <div className={styles.information__container}>
                <div className={styles.information__container_header}><h2>Table information</h2></div>
                <div className={styles.data}>
                    <div className={styles.information}>
                        <div className={styles.information__header}><h3>Date:</h3></div>
                        <div className={styles.information__data}>{confirmations.bookDate}</div>
                    </div>
                    <div className={styles.information}>
                        <div className={styles.information__header}><h3>Time:</h3></div>
                        <div className={styles.information__data}>{confirmations.time}</div>
                    </div>
                    <div className={styles.information}>
                        <div className={styles.information__header}><h3>Number of adults:</h3></div>
                        <div className={styles.information__data}>{confirmations.countAdult}</div>
                    </div>
                    <div className={styles.information}>
                        <div className={styles.information__header}><h3>Number of children:</h3></div>
                        <div className={styles.information__data}>{confirmations.countChildren}</div>
                    </div>
                    <div className={styles.information}>
                        <div className={styles.information__header}><h3>Occasion:</h3></div>
                        <div className={styles.information__data}>{confirmations.occasion}</div>
                    </div>
                    <div className={styles.information}>
                        <div className={styles.information__header}><h3>Special request:</h3></div>
                        <div className={styles.information__data}>
                            <div className={styles.information__request}>{confirmations.specialRequest.pets &&
                                <p>Come with pets</p>}</div>
                            <div className={styles.information__request}>{confirmations.specialRequest.familyArea &&
                                <p>Table in family area</p>}</div>
                            <div className={styles.information__request}>{confirmations.specialRequest.babyChair &&
                                <p>Additional high baby chair</p>}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.information__container}>
                <div className={styles.information__container_header}><h2>Personal information</h2></div>
                <div className={styles.data}>
                    <div className={styles.data}>
                        <div className={styles.information}>
                            <div className={styles.information__header}><h3>First name:</h3></div>
                            <div className={styles.information__data}>{confirmations.firstName}</div>
                        </div>
                        <div className={styles.information}>
                            <div className={styles.information__header}><h3>Last name:</h3></div>
                            <div className={styles.information__data}>{confirmations.lastName}</div>
                        </div>
                        <div className={styles.information}>
                            <div className={styles.information__header}><h3>Phone:</h3></div>
                            <div className={styles.information__data}>{confirmations.phone}</div>
                        </div>
                        <div className={styles.information}>
                            <div className={styles.information__header}><h3>Email:</h3></div>
                            <div className={styles.information__data}>{confirmations.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}