import { useNavigate } from "react-router-dom";

const Selector = () => {
  let navigate = useNavigate();

  const naMikro = () => {
    navigate("/mikro");
  };
  const naSO2 = () => {
    navigate("/so2");
  };
  const naSearch = () => {
    navigate("/search");
  };

  return (
    <div className="buttony">
      <button className="button-51" role="button" onClick={naMikro}>
        SP MIRKO
      </button>
      <button className="button-51" role="button" onClick={naSO2}>
        SO 2
      </button>
      <button className="button-51" role="button" onClick={naSearch}>
        Dešifrovač
      </button>
      <a
        href="https://www.figma.com/proto/mhMZPUW3voNaUdTw8oYhC5/Untitled?page-id=0%3A1&type=design&node-id=15-2&viewport=4471%2C-1205%2C1.71&scaling=scale-down&starting-point-node-id=15%3A2"
        target="_blank"
      >
        Figma
      </a>
    </div>
  );
};

export default Selector;
