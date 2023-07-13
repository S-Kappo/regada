import { useNavigate } from "react-router-dom";

const Selector = () => {
  let navigate = useNavigate();

  const naMikro = () => {
    navigate("/mikro");
    window.location.reload();
  };
  const naSO2 = () => {
    navigate("/so2");
    window.location.reload();
  };
  const naSearch = () => {
    navigate("/search");
    window.location.reload();
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
        href="https://www.figma.com/proto/BdbsYIUJOM1wNbx9ykIoSX/konfigurator?page-id=0%3A1&type=design&node-id=8-68&viewport=1545%2C1891%2C0.5&t=tQ0NdBB2XivkjAa7-1&scaling=min-zoom&starting-point-node-id=8%3A68&mode=design"
        target="_blank"
      >
        Figma
      </a>
    </div>
  );
};

export default Selector;
