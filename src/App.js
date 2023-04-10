import React, { useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import useClipboard from "react-use-clipboard";
// import { CopyToClipboard } from "react-copy-to-clipboard";

export default function App() {
  const {
    transcript,

    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const [copyText, setCopy] = useState();
  const [isCopied, setCopied] = useClipboard(copyText);

  // const { transcript } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  // const funnc = () => {
  //   SpeechRecognition.stopListening;
  //   // callForCopy();
  // };
  // const callForCopy = () => {
  //   setCopy(transcript);
  // };

  return (
    <div className="main-container">
      <div className="contain">
        <header className="header">
          <h1 className="h11">Speech Recognition</h1>
          <p className="para">
            welcome to the new era of speech recognition where you can get the
            text of whatever you are saying
          </p>
        </header>

        {/*  */}

        <body className="body" onClick={() => setCopy(transcript)}>
          <p className="main-text">{transcript}</p>
        </body>
        <div className="main-controls">
          <button onClick={setCopied} className="copy">
            {isCopied ? "Copied👍" : "Copy it"}
          </button>

          <button onClick={startListening} className="startListenting">
            StartListening
          </button>

          <button
            onClick={SpeechRecognition.stopListening}
            className="stopListening"
          >
            StopListening
          </button>
        </div>
        <div className="par">
          Made with with ❤️ by Tapas Mondal &#169;{" "}
          <a href="https://github.com/Tapas071?tab=projects"> Tapas071</a>
        </div>
      </div>
    </div>
  );
}
