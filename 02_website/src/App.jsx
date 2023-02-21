
import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Learn from './components/Learn';
import webImg from './assets/img/web dev.jpeg'
import ml from "./assets/img/ml.jpeg"
import pm from "./assets/img/pm.jpeg"
import NewsLetter from './components/NewsLetter';
import Plans from './components/Plans';
import Footer from './components/Footer';

const web = 'Web Development';
const webInfo = 'Web development creates websites through coding and design. It includes front-end and back-end development and aims to create user-friendly, secure, and visually appealing websites.'

const ML = 'Machine Learning';
const mlInfo = 'Machine learning is an AI technique that involves training algorithms to identify patterns in data and make predictions or decisions based on that data, without being explicitly programmed for each task.';

const PM = 'Project Management';
const pmInfo = 'roject management involves planning, organizing, and overseeing the execution of a project to achieve specific goals and objectives. This includes defining project requirements, allocating resources, managing timelines, and monitoring progress to ensure successful completion.'
function App() {
  return (
    <div className='bg-[#F5F4F6]'>
      <Header />
      <Banner />
      <Learn techName={web} info={webInfo} image={webImg} />
      <Learn techName={ML} info={mlInfo} image={ml} />
      <Learn techName={PM} info={pmInfo} image={pm} />
      <NewsLetter />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
