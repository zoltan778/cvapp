export default function Div(props) {

    return (
        <div className="Div">
            <h2>Basics</h2>
            {   props.data.basics &&
                    Object.entries(props.data.basics)
                        .filter(el => typeof el[1] !== "object")
                        .map((el, idx) => (
                            <div key={idx}>
                                <p>{el[0]}</p>
                                <textarea defaultValue={el[1]} />
                            </div>
                        ))
            }
        </div>
    )
}


