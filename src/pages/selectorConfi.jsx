import { useNavigate } from "react-router-dom";

const Selector = () => {
    let navigate = useNavigate();

    const naMikro = () => {
        navigate("/mikro")
    }
    const naSO2 = () => {
        navigate("/so2")
    }
    const naSearch = () => {
        navigate("/search")
    }


    return (        
        <div className="buttony">
            <button className="button-51" role="button" onClick={naMikro}>SP MIRKO</button>
            <button className="button-51" role="button"onClick={naSO2}>SO 2</button>
            <button className="button-51" role="button" onClick={naSearch}>Dešifrovač</button>
        </div>
    )

}

export default Selector