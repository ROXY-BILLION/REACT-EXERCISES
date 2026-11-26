function CourseCard({title,instructor,duration}) {
    return (
        <>
            <h2>{title}</h2> 
            <p>{instructor}</p>
            <p>{duration}</p>
        </>
    )
}
export default CourseCard;