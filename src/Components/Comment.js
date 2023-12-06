import LoadRing from "./LoadRing"

const Comment = (props) => {
    let { content, date, like } = props

    return (
        <div className="card">
            <h3>✍️ {content || 'Empty'}</h3>
            <p className="card-infor" style={{marginTop: 0}}>
                <span><span className="calender-icon">📅</span> {date || <LoadRing size={20}></LoadRing>}</span>
                <span>{like || <LoadRing size={20}></LoadRing>}<span className="heart-icon">🩷</span></span>
            </p>
        </div>
    )
}

export default Comment