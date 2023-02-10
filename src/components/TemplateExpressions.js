const TemplateExpressions = () => {

    const name='John';
    const data = {
        age: 30,
        job: 'Developer'
    };

    return (
        <div>
            <h1>Hello {name}, are you ok? </h1>
            <p>Your job is {data.job}</p>
            <p>At {50+50}% of time!</p>

        </div> 
    );
};

export default TemplateExpressions;