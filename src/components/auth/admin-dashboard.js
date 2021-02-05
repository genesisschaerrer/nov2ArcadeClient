import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"

const AdminDashboard = () => {
    const [logStatus, setLogStatus] = useState("LOGGED_OUT")
    const [games, setGames] = useState([])
    const [gamename, setGameName] = useState("")
    const [url, setUrl] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const history = useHistory

    const getAllGames = () => {
        axios.get("http://nov2arcade-express-api.herokuapp.com/all-games")
        .then(response => {
            console.log(response.data)
            setGames(response.data)

            // console.log(games)
        // .then()
        //     setGameName(games.gamename)
        //     setUrl(games.url)
        //     setImage(games.url)
        //     setDescription(games.description)
        })
        .catch(error => console.log("Get all games error: ", error))

    }

    useEffect(() => {
        getAllGames()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://patorjk.com/games/snake/games", {gamename, url, description, image})
        .then(() => {
            setUsername("")
            setPassword("")
            history.push("/admindashboard")
            console.log("hit handle submit")
        })
    }

    const handleDelete = (id) => {
        console.log("hit delete function")
        console.log("id")
        axios.delete(`http://nov2arcade-express-api.herokuapp.com/delete/${id}`)
            .then(() => getAllGames())
            .catch(err => console.log("Delete error: ", err))
    }

    return (
        <div className="dashboard-container"> 
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-title">New Game</div>
                <input
                    className="login-input"
                    type="text"
                    placeholder="name"
                    value={gamename}
                    onChange={e => setGameName(e.target.value)}
                />
                <input
                    className="login-input"
                    type="text"
                    placeholder="game url"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />
                <input
                    className="login-input"
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input
                    className="login-input"
                    type="text"
                    placeholder="image url"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />
                <button>Submit</button>
           </form>
           {games.map(game => {
               return (
                   <div className="all-games-dashboard" style={{"color": "white"}} key={game._id}>
                       <div className="dashboard-game-name">{game.gamename}</div>
                       <img src={game.image} alt="game image" />
                       <div className="dashborad-game-description">{game.description}</div>
                       <div className="delte-btn" onClick={() => handleDelete(game._id)}>Delete</div>
                   </div>
               )
           })}
        </div>
    )
}
export default AdminDashboard