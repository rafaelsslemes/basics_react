const EventClick = () => {

    const handleClick = () => {
        console.log('Event activated');
    }

    return (
        <div>
            <button onClick={handleClick} >Click Here Arrow</button>
            <button onClick={buttonClick} >Click Here Function</button>
        </div>
    )

    function buttonClick(event){
        console.log(event);
    }
}

export default EventClick;