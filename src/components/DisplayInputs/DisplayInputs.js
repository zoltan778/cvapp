import React from 'react';
import './DisplayInputs.css';

export default function DisplayInputs(props) {

    // console.log(props);

    const renderInputs = (inputs) => {
        let ret = [];

        for (let index = 0; index < inputs.length; index++) {
            if (inputs[index].type)
                if (inputs[index].type !== "textarea")
                    ret.push(<div key={index} className="formField">
                        <label>{inputs[index].label} </label>
                        <input type={inputs[index].type} 
                            //    value={inputs[index].type === "date" ? new Date().toISOString().slice(0, 10) : null} 
                        />
                    </div>);
                else
                    ret.push(<div key={index} className="formField">
                        <label>{inputs[index].label} </label>
                        <textarea />
                    </div>);
            else 
                ret.push(<DisplayInputs key={index} header2={inputs[index].header2} 
                                        inputs={inputs[index].inputs}/>);
        }

        return ret;
    };

    let content = [];

    if (Array.isArray(props.inputs[0]))
        for (let index = 0; index < props.inputs.length; index++) {
            content = [...content, <div key={index} className="inputs">{renderInputs(props.inputs[index])}</div>];
        }
    else
        content = [...content, renderInputs(props.inputs)];

    return (
        <div className="displayInputs">
            <h2>{props.header}</h2>
            <h3>{props.header2}</h3>
            {
                content
            }        
        </div>
    )
}
