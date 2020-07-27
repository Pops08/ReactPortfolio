import React from 'react';

function Resume() {
  return (
    <>
        <div>
            <h1>
              Technical Skills
            </h1>
              <p>
                Click here to <a href='JHartResume.txt' download>download my resume</a>.
              </p>
              <h2>Client Side</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Js</li>
                <li>React</li>
              </ul>
              <h2>Server Technologies</h2>
              <ul>
                <li>Express</li>
                <li>Node</li>
              </ul>
              <h2>Data Storage</h2>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
        </div>
    </>
  )
}

export default Resume;