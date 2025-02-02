const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000

// Set EJS as the view engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.get("/", (req, res) => {
  res.render("home")
})

app.get("/auth/login", (req, res) => {
  res.render("login")
})

app.get("/auth/register", (req, res) => {
  res.render("register")
})

app.get("/dashboard", (req, res) => {
  // TODO: Add authentication middleware
  res.render("dashboard")
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

