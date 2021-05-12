import Header from './components/Header'
import Tasks from './components/Tasks'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>CRud</h1>
      <div className="forms">
        <label>Movie Name:</label>
        <input type="text" name="movieName" />
        <label>Review:</label>
        <input type="text" name="review" />
        <div class="btn-primary">
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default App;
