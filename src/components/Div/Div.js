import DisplayInputs from '../DisplayInputs/DisplayInputs';
 
export default function Div(props) {

    // console.log(props.data);

    let content = [];
    if (props.data.cv)
        for (let index = 0; index < props.data.cv.length; index++) {
            content.push(<DisplayInputs key={index} header={props.data.cv[index].header} 
                                        inputs={props.data.cv[index].inputs}/>);
        }

    return (
        <div className="Div">
            {
                content
            }
        </div>
    )
}


