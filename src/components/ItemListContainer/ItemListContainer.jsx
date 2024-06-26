
export default function ItemListContainer(props) {
    return (
        <div className='container items-list-container'>
            <div className="row">
                <h1>
                    {props.saludo}
                    <strong>{props.name}</strong>
                    {props.store}
                </h1>
            </div>
        </div>
    )
}
