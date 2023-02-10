import ChildComponent from "./ChildComponent";

const SampleComponent = () => {

    // React JSX always must be wrapped by an unique tag
    return (
        <div> 
            {/* Comment */}
            <h1>Top of Sample Component</h1>

            {/* imported ChildComponent */}
            <ChildComponent/>

            <h1>Bottom of Sample Component</h1>

        </div>    
    );
};

export default SampleComponent;
