const Button = ({nome, modal, setModal}) => {
    return (
        <>
            <button className="Button" onClick={() => setModal(!modal)}><p>{nome}</p></button>
        </>
    )
}

export default Button;