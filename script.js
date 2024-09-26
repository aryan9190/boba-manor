/* style.css */
body {
    margin: 0;
    padding: 0;
    font-family: 'Creepster', cursive;
    background: url('https://img.freepik.com/free-vector/watercolor-halloween-background_52683-43698.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1727308800&semt=ais_hybrid') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
    text-align: center;
    display: flex; 
    flex-direction: column; 
    min-height: 100vh; 
}

header {
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.8);
}

h1 {
    color: #f8e71c; 
    font-size: 4rem;
    text-shadow: 2px 2px 5px #000;
    animation: flicker 2s infinite; 
}

@keyframes flicker {
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
        opacity: 1;
    }
    20%, 24%, 55% {
        opacity: 0;
    }
}

p {
    font-size: 1.2rem;
    color: #ddd;
}

main {
    flex: 1; 
    padding: 20px;
    margin-top: 50px;
}

.submission-section {
    background-color: rgba(50, 0, 0, 0.8);
    padding: 30px;
    border: 2px solid darkred;
    display: inline-block;
    transform: rotate(-2deg);
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.8);
    margin-top: 20px;
}

h2 {
    color: #f8e71c; 
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); 
    font-size: 2rem;
}

button {
    padding: 15px 30px;
    background-color: darkred;
    color: white;
    font-family: 'Creepster', cursive;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.2s;
}

button:hover {
    transform: rotate(5deg);
    background-color: #fff;
    color: darkred;
}

footer {
    margin-top: 50px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 0.9rem;
    text-shadow: 1px 1px 3px #000;
}

/* Floating Boba Bubbles */
.bubble {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    animation: float 10s infinite;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
}

@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-300px);
    }
    100% {
        transform: translateY(0);
    }
}

/* Hidden Ghost */
.hidden-ghost {
    position: absolute;
    width: 80px;
    height: 80px;
    background: url('https://static.vecteezy.com/system/resources/previews/014/605/931/original/a-cartoon-white-evil-ghost-that-has-fun-haunting-people-on-halloween-png.png') no-repeat center;
    background-size: cover;
    opacity: 0.8;
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.hidden-ghost:hover {
    opacity: 1;
    transform: scale(1.2);
}

/* Animation for shaking effect */
area:hover {
    animation: shake 0.5s;
}

@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    25% { transform: translate(-1px, -2px) rotate(-1deg); }
    50% { transform: translate(-3px, 0px) rotate(1deg); }
    75% { transform: translate(3px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -1px) rotate(1deg); }
}

/* Rules Box */
.rules-box {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border: 2px solid #fff;
    box-shadow: 0 0 15px #fff;
    text-align: left;
}
