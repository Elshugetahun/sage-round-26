

export default function Card(props){
    return<div style={{'width':'300px','padding':'10px',}}>  
        <img width={300}src={props.picture}/>
        <h1>{props.title}</h1>
        <p>{props.paragraf}</p>
    </div>
}