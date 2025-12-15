

export default function List(){

    let car=["Toyota","BMW","Ford","Ford"]
    return<div>
        <p>List of Cars</p>
        <ul>
            {car.map((car,index)=>{
                return <li key={index}>{car}</li>})
}
        </ul>
    </div>
}