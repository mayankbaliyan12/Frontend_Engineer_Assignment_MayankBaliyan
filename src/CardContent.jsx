import { FaPlus, FaTrash } from "react-icons/fa";
const CardContent = ({ title, body, description, handleDelete, index, id }) => (
  <div
    key={index}
    className="card"
    style={{
      margin: "2rem",
      background: "#CADCFC",
    }}
  >
    <button
      onClick={() => handleDelete(id)}
      style={{
        color: "red",
        border: "none",
        background: "none",
      }}
    >
      <FaTrash />
    </button>
    <h2 className="card-title">{title}</h2>
    <p className="card-content">{body}</p>
  </div>
);

export default CardContent;
