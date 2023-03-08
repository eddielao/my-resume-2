import React from "react";
import ReactDOM from "react-dom/client";
import { ExperienceDateView } from './ExperienceDateView';
import { Experience } from './Experience';

import { sampleExperiences } from './sampleData';

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <ExperienceDateView
    experiences={sampleExperiences}
  />
);