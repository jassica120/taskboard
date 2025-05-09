function FN(){
    const [sum, setSum] = useState(0);

    setSum(a+b);

    return(
        <>
            <p>{sum}</p>
            <input>{a}</input>
            <input>{b}</input>
        </>
    )
}