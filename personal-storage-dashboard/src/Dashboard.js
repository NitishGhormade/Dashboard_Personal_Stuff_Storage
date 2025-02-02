import ReactDOM from "react-dom"

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <a href="/">Logout</a>
    </div>
  )
}

ReactDOM.render(<Dashboard />, document.getElementById("root"))

