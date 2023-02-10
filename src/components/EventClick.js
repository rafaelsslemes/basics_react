const EventClick = () => {

    const handleClick = () => {
        console.log('Event activated');
    }

    return (
        <div>
            <div>
                <button onClick={handleClick} >Click Here Arrow</button>
                <button onClick={buttonClick} >Click Here Function</button>
                <button onClick={()=> console.log('Inline Clicked')} >Click Here Inline</button>
            </div>
            <div>
                {_getButton(true)}
                {_getButton(false)}
            </div>
        </div>
    )

    function buttonClick(event){
        console.log(event);
    }

    // Render something in some condictions
    function _getButton(value){
        if(value){
            return <button>Okay</button>
        }
        return <div></div>
    }
}

export default EventClick;