import ReactDOM from "react-dom"

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li>
            <a href="/auth/login">Login</a>
          </li>
          <li>
            <a href="/auth/register">Register</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

ReactDOM.render(<Home />, document.getElementById("root"))

