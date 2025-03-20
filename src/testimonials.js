const testimonials = [
    {
        name: "Poul",
        stars: "4",
        opinion: "The best greek salad in the city",
        photo: "Poul.jpg"
    },
    {
        name: "Alice",
        stars: "5",
        opinion: "Excellent restaurant",
        photo: "Alice.jpg"
    },
    {
        name: "Tom",
        stars: "5",
        opinion: "This restaurant exceeded all my expectations with its incredible food, impeccable service, and cozy ambiance—an easy 5-star experience!",
        photo: "Tom.jpg"
    },

    {
        name: "Karol",
        stars: "1",
        opinion: "Horrible soup with live fly",
        photo: "Karol.jpg"
    }
]

const getPositiveTestimonials =() => {
    let positiveTestimonials = []
    testimonials.map(testimonial => testimonial.stars > 3 && positiveTestimonials.push(testimonial))
    return positiveTestimonials
}

export {getPositiveTestimonials}