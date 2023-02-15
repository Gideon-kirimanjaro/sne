import React, { useState } from "react";

import styled from "styled-components";

import SpeechSpeedSetter from "./SpeechSpeedSetter";
import LanguageSelect from "./LanguageSelect";
import TextToSpeech from "./TextToSpeech";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { DEFAULTS } from "./appEnums";

const apiKey = "332c16d1a8db4a10b44047fd0888b485";

const App = ({ className }) => {
  const data =
    "St. Paul’s University is an ecumenical private chartered university founded in 1903. It is strategically located in the lush Kiambu County along Nairobi-Limuru Route A, 30kms from Nairobi, next to Jumuia Conference and Country Home with other campuses in Nairobi, Nakuru and Machakos. It is in a cool and serene environment that is very  conducive for learning. The University is an internationally recognized private institution that provides education to over 6000 students at graduate and undergraduate levels. The Christian principles and perspectives on life and a student body and faculty that represent different countries provide a diversity that enriches learning and your stay at the University. St. Paul's has a long-standing reputation, which is known and respected for providing high quality training. Over the years we have trained theologians and pastors for service in the Christian churches. In various parts of  Africa many church leaders, such as Bishops, Moderators, General  Secretaries and even Archbishops have been trained at St. Paul's. With time other programmes including Business, Communication, Development,Health, Hospitality and ICT oriented have been introduced so as to increase our impact with many of our graduates taking up positions of leadership within a relatively short time.";
  const [language, setLanguage] = useState(DEFAULTS.LANGUAGES);
  const [speed, setSpeed] = useState(DEFAULTS.SPEED);
  const [text, setText] = useState(data);
  const [speech, setSpeech] = useState(DEFAULTS.SPEECH);

  const handleClick = () => {
    const audioSrc = `http://api.voicerss.org/?key=${apiKey}&hl=${language}&src=${text}&r=${speed}`;

    setSpeech(audioSrc);
  };

  return (
    <div className={className}>
      <h1>
        ST PAUL'S UNIVERSITY HEARING IMPAIRED APPLICATION~~By Gideon Kirimanjaro
      </h1>
      <img src="/spu.png" height={100} width={100} />
      <p style={{ fontWeight: "bold", fontSize: "25px" }}>
        Please turn your device volume up and press 'CLICK TO SPEECH" and wait
        for 3 seconds for the audio to play
      </p>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <LanguageSelect value={language} setValue={setLanguage} />
        </Grid>
        <Grid item xs={6}>
          <SpeechSpeedSetter value={speed} setValue={setSpeed} />
        </Grid>
        <Grid item xs={12}>
          <div></div>
          <TextToSpeech value={text} setValue={setText} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Click To Speech
          </Button>
          <a
            href="https://www.gideonkirimanjaro.com/"
            target="_blank"
            style={{
              color: "red",
              marginLeft: "40px",
              fontSize: "30px",
            }}
          >
            My portfolio
          </a>
        </Grid>
        <Grid item xs={12}>
          {speech && <audio autoPlay src={speech}></audio>}
        </Grid>
      </Grid>
    </div>
  );
};

const StyledApp = styled(App)`
  max-width: 640px;
  margin: 0 auto;
  padding-top: 40px;
`;

export default StyledApp;
