import { Delete } from "./Delete"
import { Edit } from "./Edit"
import { New } from "./New"
import "../custom.css";

export default function Home(props) {

  return (
    <main>
      <h1>Manage Your Appointments / Dates very easy</h1>
      <p>This powerful web application helps you to menage your dates very easy.</p>
      <div className="add-btn row items-center content-center">
        <div className="btn add">+</div>
      </div>

      <New />
      <Edit />
      <Delete />
    </main>
  )
}