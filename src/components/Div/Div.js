import { useState } from 'react';
import DisplayInputs from '../DisplayInputs/DisplayInputs';
 
export default function Div(props) {

    // const [content, setContent] = useState(null);

    // console.log(props.data);

    let content = [];
    if (props.data.cv)
        for (let index = 0; index < props.data.cv.length; index++) {
            content.push(<DisplayInputs key={index} header={props.data.cv[index].header} inputs={props.data.cv[index].inputs}/>);
        }

    return (
        <div className="Div">
            {/* <h2>Basics</h2> */}
            {/* {   props.data.basics &&
                    Object.entries(props.data.basics)
                        .filter(el => typeof el[1] !== "object")
                        .map((el, idx) => (
                            <div key={idx}>
                                <p>{el[0]}</p>
                                <textarea defaultValue={el[1]} />
                            </div>
                        ))
            } */}

            {/* {props.data.cv.map((el, idx) => (<div key={idx}>
                <h2>el.header</h2>
                {el.inputs.filter(ip => !ip.hasOwnProperty("header2"))
                .map((ip, idx2) => <>
                    <label key={idx2}>{ip.label}</label>
                    <input key={idx2} type={ip.type} />
                </>)}
                {
                let arr = el.inputs.filter(ip => ip.hasOwnProperty("header2"))
                arr.map((ip, idx2) => <>
                    <label key={idx2}>{ip.label}</label>
                    <input key={idx2} type={ip.type} />
                </>)}
            </div>))} */}

            {
                content
            }
        </div>
    )
}


