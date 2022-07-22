function MyComponent({clientName, goldUser, onSubmit}) { //destructuring
    let result = 42;
    return(
        <section id="mySection">
            <p>Io sono una sottocomponente</p>
            <p>Io sono il cliente {clientName}</p>
            <p>Sono un utente {goldUser?"Gold":"Standard"}</p>
            <button onClick={() => onSubmit(result)}>mainSearch</button>
        </section>
    );
}

export default MyComponent;