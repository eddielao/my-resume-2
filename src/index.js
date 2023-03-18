import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.scss';
import React from "react";
import ReactDOM from "react-dom/client";
import { ExperienceDateView } from './ExperienceDateView';

import { sampleExperiences } from './sampleData';

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <ExperienceDateView
    experiences={sampleExperiences}
  />
);