import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
    const sound = useRef();
    const color = useRef();

    const submit = (e) => {
        e.preventDefault();
        const soundVal = sound.current.value;
        const colorVal = color.current.value;
        alert(`${soundVal} sounds like ${colorVal}`);
        sound.current.value = '';
        color.current.value = '#000000';
    };
    return (
        <form onSubmit={submit}>
            <input ref={sound} type="text" placeholder="Sound..." />
            <input ref={color} type="color" />
            <button>ADD</button>
        </form>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

