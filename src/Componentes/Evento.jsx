function Evento({titulo, descricao, horario, local}){
return(
 <section className="evento">
    <div className="informação">
        <h1>{titulo}</h1>
        <p>{descricao}</p>
        <p>{horario}</p>
        <p>{local}</p>
    </div>
    <img src="sesi.jpeg"/>
     </section>
)
}

export default Evento;