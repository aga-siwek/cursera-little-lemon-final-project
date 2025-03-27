import styles from "./TestimonialsSection.module.css";
import {getPositiveTestimonials} from "../../testimonials.js";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
    const testimonials = getPositiveTestimonials()
    return (
        <div className={styles.testimonials}>
            <hr className={styles.testimonials__line}/>
            <div><h3 className={styles.testimonials__header__text}>Testimonials</h3></div>
            <div className={styles.testimonials__cards}>
                {testimonials.map((testimonial, index) =>
                    <TestimonialCard key={index} testimonial={testimonial}/>)}
            </div>
        </div>
    )
}