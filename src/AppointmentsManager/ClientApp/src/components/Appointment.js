export default function Appointment(props){

    return(
        <div className={`row py-5 underline  ${props.item.deleted ? ' bc-red' : props.item.done ? ' bc-green' : ''}`} key={props.item.id}>
            <div className="column id">{props.item.ID}</div>
            <div className="column title">{props.item.Title}</div>
            <div className="column description">{props.item.Description}</div>
            <div className="column importance">{props.item.LevelOfImportance}</div>
            <div className="column date">{props.item.Date}</div>
            <div className="column time">{props.item.Time}</div>
            <div className="column address">{props.item.Address}</div>
            <div className="column edit">
                <div>Edit</div>
            </div>
            <div className={`column delete  ${props.item.deleted ? ' not-allowed' : ''}`}>
                <div>Delete</div>
            </div>
        </div>
    )
}