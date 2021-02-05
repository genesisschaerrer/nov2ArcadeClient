import React, {useState} from "react"
import {useHistory} from "react-router-dom"
const AdminDashboard = () => {
    const [logStatus, setLogStatus] = useState("LOGGED_OUT")
    const [gameName, setGameName] = useState("")
    const [url, setUrl] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const history = useHistory
    const handleSubmit = (e) => {
        e.preventDefault()
        //.then("LOGGED_IN")
        // setUsername("")
        // setPassword("")
        // history.push("/admindashboard")
        console.log("hit handle submit")
    }
    const handleDelete = () => {
        console.log("hit delete function")
    }
    const mockData = [{id: 1, gameName: "some name", url: "some Url", description: "some description", image: "some image url"},
                    {id: 2, gameName: "another name", url: "some Url", description: "some description", image: "some image url"}]
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    value={gameName}
                    onChange={e => setGameName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="game url"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="image url"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />
                <button>Submit</button>
           </form>
           {mockData.map(game => {
               return (
                   <div key={mockData.id}>
                       <div className="dashboard-game-name">{game.gameName}</div>
                       <img src={game.image} alt="game image" />
                       <div className="dashborad-game-description">{game.description}</div>
                       <div className="delte-btn" onClick={handleDelete}>Delete</div>
                   </div>
               )
           })}
        </div>
    )
}
export default AdminDashboard