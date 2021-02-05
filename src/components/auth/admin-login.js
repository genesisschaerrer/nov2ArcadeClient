import React, {useState} from "react"

const AdminLogin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hit handle submit")
    }
    return (
        <div className="login-container">
            <h1 className="login-title">Admin Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    className="login-input"
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <input
                    className="login-input"
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <div className="login-btn">Submit</div>
            </form>
        </div>
    )
}

export default AdminLogin

