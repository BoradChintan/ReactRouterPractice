import React from 'react'


function Login({ onLogin }) {
    const formstyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '400px',
        margin: 'auto',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const inputstyle = {
        width: '100%',
        padding: '0.75rem',
        margin: '0.5rem 0',
        border: '1px solid #ddd',
        borderRadius: '4px',
    };

    const buttonstyle = {
        width: '100%',
        padding: '0.75rem',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    const buttonhoverstyle = {
        backgroundColor: '#0056b3',
    };

    return (
        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f1f1f1', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <form style={formstyle} onSubmit={(e) => {
                e.preventDefault();
                onLogin(); // Call the onLogin function passed as a prop
            }}>
                <h2>Login</h2>
                <input type="text" placeholder="Username" required style={inputstyle} />
                <input type="password" placeholder="Password" required style={inputstyle} />
                <button
                    type="submit"
                    style={buttonstyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonhoverstyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonstyle.backgroundColor}
                >
                    Login
                </button>
            </form>
        </div>
    );
}


export default Login
