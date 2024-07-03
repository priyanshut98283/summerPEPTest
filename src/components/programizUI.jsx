import React,{useState} from 'react';
import '../../src/App.css';

const Programiz = () => {
  const leftPaneIcons = [
    '/assets/python-logo.png',
    '/assets/r.png',
    '/assets/c.png',
    '/assets/c++.png',
    '/assets/csharp.png',
    '/assets/c.png',
    '/assets/database.png',
    '/assets/php.png',
    '/assets/swift.png',
    '/assets/java.png',
  ];

  const [lineNumbers, setLineNumbers] = useState(Array.from({ length: 20 }, (_, i) => i + 1));

  const handleTextareaChange = (event) => {
    const lineCount = event.target.value.split('\n').length;
    setLineNumbers(Array.from({ length: lineCount > 20 ? lineCount : 20 }, (_, i) => i + 1));
  };

  return (
    <div className="editor-container">
      <div className="left-pane">
        {leftPaneIcons.map((icon, index) => (
          <img key={index} src={icon} alt={`icon${index + 1}`} className="pane-icon" />
        ))}
      </div>
      <div className="editor-content">
        <div className="code-editor">
          <div className="editor-header">
            <button className="file-button">main.js</button>
            <div className="editor-buttons">
              <button className="editor-button">🔲</button>
              <button className="editor-button">🌙</button>
              <button className="editor-button">▶️</button>
            </div>
          </div>
          <div className="code-area">
            <div className="line-numbers">
              {lineNumbers.map((lineNumber) => (
                <div key={lineNumber}>{lineNumber}</div>
              ))}
            </div>
            <textarea
              className="code-input"
              placeholder="Write your code here..."
              onChange={handleTextareaChange}
            ></textarea>
          </div>
        </div>
        <div className="output-section">
          <div className="output-header">
            <span>Output</span>
            <button className="clear-button">Clear</button>
          </div>
          <div className="output-area">
            {/* Output will be displayed here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programiz;