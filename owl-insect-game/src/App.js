import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.css';
import beetle from './assets/images/Beetle.png';
import ant from './assets/images/Ant.png';
import wasp from './assets/images/Wasp.png';
import background from './assets/images/background.png';
import Navbar from './components/Navbar';
import OptionButton from './components/OptionButton';
import Owl from './components/Owl';
import Insect from './components/Insect';
import NavigationButtons from './components/NavigationButtons';

function App() {
  const [insects, setInsects] = useState([]);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [draggedInsect, setDraggedInsect] = useState(null);

  const addInsect = (type, src) => {
    setInsects([...insects, { id: insects.length, type, src }]);
  };

  const handleDrag = (position, insectId) => {
    setTargetPosition(position);
    setDraggedInsect(insectId);
  };

  const handleDrop = (position) => {
    setTargetPosition(position);
    // Check if the insect is close enough to the owl's mouth to be "eaten"
    // If so, remove the insect and show bounce effect
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Navbar />
      <div className="options-container">
        <OptionButton src={beetle} alt="Beetle" onClick={() => addInsect('Beetle', beetle)} />
        <OptionButton src={ant} alt="Ant" onClick={() => addInsect('Ant', ant)} />
        <OptionButton src={wasp} alt="Wasp" onClick={() => addInsect('Wasp', wasp)} />
      </div>
      <div className="main-content">
        <Owl targetPosition={targetPosition} />
        {insects.map((insect) => (
          <Insect
            key={insect.id}
            type={insect.type}
            src={insect.src}
            onDrag={(position) => handleDrag(position, insect.id)}
            onDrop={handleDrop}
          />
        ))}
      </div>
      <NavigationButtons />
    </div>
  );
}

export default App;
