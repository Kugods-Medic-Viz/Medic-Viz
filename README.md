
![header](https://capsule-render.vercel.app/api?type=rect&color=DEEBFF&fontColor=005DEA&text=%20%20Medic-Viz%20%20&fontAlign=25&fontSize=30&textBg=true&desc=%20%20Medical%20Diagnosis%20Assistance%20Service&descAlign=60&descAlignY=50)

## 👨🏻‍⚕️ Introduction

&nbsp; Medic-Viz is mobile-first web service that uses Firebase, and Google Cloud Platform(GCP). Our service aims to help effective healthcare communication between patients and doctors by visualizing functions, such as STT and diagnosis algorithms.
<br>
&nbsp; By using Medic-Viz, we hope to foster smoother collaboration between patients and doctors, and help promote a more sustainable and equitable healthcare system. 

<br><br/>
## 👨🏻‍⚕️ Problem
### 📍"1-hour wait, 3-minute consultation."
&nbsp; In Korea, there is a nickname for outpatient clinics called "1-hour wait, 3-minute consultation." This means that within a short period of 3 minutes, doctors check the patient's medical chart, listen to the patient's symptoms/side effects, decide on a treatment plan, and prescribe medication or order tests. However, this type of "3-minute consultation" inevitably lowers the quality of medical care and threatens patient safety, infringing on the right of patients to receive safe treatment and leading to distrust in medical services.

### 📍How to Solve this Problem?
&nbsp; The most fundamental solution may be to mandate longer consultation times or improve the outpatient clinic system. However, due to various complicated issues, it is not an easy solution. Therefore, we are convinced that a visualization web service that helps deliver medical information during the medical process is the most realistic way to solve this problem.

### 📍 Our Goals
<p align="center"><img width="600" alt="image" src="https://user-images.githubusercontent.com/77691829/228758226-3b64fce1-f185-407b-9ce3-a9ecd95bb1c6.png"></p>

<br><br/>
##  👨🏻‍⚕️ Solution
&nbsp; Medic-Viz has two main functions that are designed to benefit both patients and doctors.
### 📍  Solution 1 - Recording (STT-Function)
<p align="center">
<img width="650" alt="image" src="https://user-images.githubusercontent.com/77691829/229002810-a0a04d1b-1944-4634-998a-7eb9604d0f0e.gif">
<img width="650" alt="image" src="https://user-images.githubusercontent.com/77691829/229002985-f55f4700-5ebf-456f-8677-cd0ed92da540.png">
<img width="650" alt="image" src="https://user-images.githubusercontent.com/77691829/229003114-dfb44c5a-d7de-4527-a136-58d2d916ae7e.png">
</p>
&nbsp; The Recording feature enables doctors to record and store medical examinations or conversations with patients, along with additional analysis of diseases. 

### 📍 Solution 2 - Standard Diagnose Algorithm
<p align="center">
<img width="650" alt="image" src="https://user-images.githubusercontent.com/77691829/229003752-eec5eaa9-1e04-434d-b671-5d42465023d8.png">
<img width="650" alt="image" src="https://user-images.githubusercontent.com/77691829/229003816-acea5646-f174-42dd-af8a-3ad55d004c38.png">
</p>
&nbsp; Model algorithm for certain diseases provides doctors with a standardized diagnostic process that can help improve the accuracy and consistency of diagnoses, and ultimately lead to better outcomes for patients

<br><br/>
##  👨🏻‍⚕️ Tech Stack
<p align="center"><img width="600" alt="image" src="https://user-images.githubusercontent.com/77691829/228756498-93a8dd19-05b1-4cb3-a397-740d9fe3dc1d.png" align="center"></p>
<br/>
<table>
  <tr>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/77691829/228751202-3f0b757a-b0c4-4a21-8aaf-8beb65ef5f0a.png" width="60px">
      <br/>
      <strong>React.js</strong>
    </td>
    <td>Used <strong>React</strong> for client development.</td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Firebase_Logo.png/220px-Firebase_Logo.png" width="130px"><br/>
      <strong>Firebase</strong>
    </td>
    <td>Used <strong>Firebase</strong> for server development</td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://www.serviops.ca/wp-content/uploads/et_temp/Google-Cloud-Platform-GCP-Logo-95213_1080x675.png" width="120px"><br/>
      <strong>Google Cloud Platform (GCP)</strong>
    </td>
    <td> Used <strong>Speech-to-Text API</strong> for STT-Function</td>
  </tr>
    <tr>
    <td align="center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png" width="50px" height="50px"><br/>
      <strong>Python Selenium</strong>
    </td>
    <td> Used <strong>Python Selenium Pacakage</strong> for crawling disease infromation </td>
  </tr>
</table>

<br><br/>
## 👨🏻‍⚕️ Start Guide
```bash
# Clone Repository 
$ git clone https://github.com/Kugods-Medic-Viz/Medic-Viz.git
# Move to folder
$ cd Medic-Viz

# Install dependency
$ npm install
# Run
$ npm start
```
<br><br/>
## 👨🏻‍⚕️ Contributors
* 김소형 <a href="https://github.com/Smaller25"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white&link=https://github.com/Smaller25"/></a> / AI
* 도경민 / Design
* 조연서 <a href="https://github.com/Yeonseo-Jo"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white&link=https://github.com/Yeonseo-Jo"/></a> / Frontend & Backend
* 황민아 <a href="https://github.com/hwangmina"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white&link=https://github.com/hwangmina"/></a> /  AI & Frontend
