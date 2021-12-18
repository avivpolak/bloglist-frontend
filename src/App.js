import axios from "axios";
import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";

const App = () => {
    const [blogs, setBlogs] = useState([]);
    const [newBlog, setNewBlog] = useState("");
    const [showAll, setShowAll] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        blogService.getAll().then((blogs) => setBlogs(blogs));
    }, []);
    const handleLogin = async (e) => {
        e.preventDefault();

        const { body: user } = await axios.post("api/users/login", {
            username,
            password,
        });
        console.log(user);
    };
    const handleSingup = async (e) => {
        e.preventDefault();
        console.log("sing");
        const { data: user } = await axios.post("/api/users/register", {
            username,
            password,
            name,
        });
        console.log("up");

        console.log(user);
    };

    const handleBlogChange = () => {
        console.log("handleBlogChange");
    };
    const addBlog = () => {
        console.log("addBlog");
    };

    const loginForm = () => (
        <form onSubmit={handleLogin}>
            <h2>login</h2>
            <div>
                username
                <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                password
                <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button type="submit">login</button>
        </form>
    );
    const singupForm = () => (
        <form onSubmit={handleSingup}>
            <h2>sing-up</h2>
            <div>
                username
                <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                name
                <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={({ target }) => setName(target.value)}
                />
            </div>
            <div>
                password
                <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button type="submit">singup</button>
        </form>
    );

    const blogForm = () => (
        <form onSubmit={addBlog}>
            <input value={newBlog} onChange={handleBlogChange} />
            <button type="submit">save</button>
        </form>
    );

    return (
        <div>
            {username !== null ? loginForm() : blogForm()}
            {singupForm()}
            <h2>blogs</h2>
            {blogs.map((blog) => (
                <Blog key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default App;
