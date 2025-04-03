import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs'; // Import TensorFlow.js
import '../style.css/DiabetesPrediction.css'
import { IoHomeSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdInformationCircle } from "react-icons/io";
import { TbHandFingerLeft } from "react-icons/tb";
import { Link } from 'react-router-dom';

const DiabetesPrediction = () => {
  const [model, setModel] = useState(null);
  const [isTrained, setIsTrained] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // To handle loading state
  const [prediction, setPrediction] = useState(null);
  const [formData, setFormData] = useState({
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigreeFunction: '',
    age: '',
  });
  const [errorMessage, setErrorMessage] = useState(''); // Error message for invalid input

  // Load and preprocess data
  const loadData = async () => {
    const dataset = await fetch('/diabetes.csv'); // Ensure the dataset is in the correct path
    const data = await dataset.text();
  
    // Split into lines and parse the CSV
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines
    const headers = lines[0].split(',');
    const rows = lines.slice(1).map(line => line.split(','));

    const inputs = [];
    const labels = [];

    // Split data into inputs (features) and labels
    rows.forEach(row => {
      if (row.length === headers.length) {
        const input = row.slice(0, 8); // First 8 columns are features
        const label = row[8]; // Last column is label (diabetes)
        inputs.push(input.map(Number)); // Convert strings to numbers
        labels.push(Number(label)); // Convert label to number (0 or 1)
      }
    });

    // Convert inputs and labels to tensors
    const inputTensor = tf.tensor2d(inputs, [inputs.length, 8]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

    return { inputs: inputTensor, labels: labelTensor };
  };

  // Normalize data function
  const normalizeData = (data) => {
    const max = data.max(0);  // Get the maximum of each column (feature)
    const min = data.min(0);  // Get the minimum of each column (feature)
    const normalized = data.sub(min).div(max.sub(min));  // Normalize the data
    return normalized;
  };

  // Create and compile the model
  const createModel = () => {
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 12, inputShape: [8], activation: 'relu' }));
    model.add(tf.layers.dense({ units: 8, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

    model.compile({
      optimizer: 'adam',
      loss: 'binaryCrossentropy',
      metrics: ['accuracy'],
    });

    return model;
  };

  // Train the model
  const trainModel = async (model, inputs, labels) => {
    setIsLoading(true); // Start loading when training begins
    await model.fit(inputs, labels, {
      epochs: 50,
      batchSize: 32,
      validationSplit: 0.2,
      shuffle: true,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          console.log(`Epoch ${epoch}: loss = ${logs.loss}, accuracy = ${logs.acc}`);
        },
      },
    });
    setIsTrained(true); // Set model as trained
    setIsLoading(false); // Stop loading after training completes

    // Save model to localStorage
    await model.save('localstorage://diabetes-model');
    console.log("Model saved to localStorage");
  };

  // Load model from localStorage (if it exists)
  const loadModelFromStorage = async () => {
    try {
      const model = await tf.loadLayersModel('localstorage://diabetes-model');
      setModel(model);
      setIsTrained(true); // Mark as trained if model exists
    } catch (err) {
      console.log("No model found in localStorage");
    }
  };

  // Load data and train the model
  useEffect(() => {
    loadModelFromStorage(); // Check if a saved model exists in localStorage

    const initializeModel = async () => {
      const { inputs, labels } = await loadData();
      const normalizedInputs = normalizeData(inputs);
      const model = createModel();
      await trainModel(model, normalizedInputs, labels);
      setModel(model); // Set the trained model in state
    };

    if (!model) initializeModel(); // Only train if model isn't loaded
  }, []); // Runs once when component mounts

  // Function to make predictions
  const makePrediction = (model, inputData) => {
    const normalizedInput = normalizeData(tf.tensor2d([inputData], [1, 8])); // Normalize input data
    model.predict(normalizedInput).data().then((prediction) => {
      const outcome = prediction[0] >= 0.5 ? 'Diabetic' : 'Non-Diabetic';
      setPrediction(outcome);
    }).catch(err => {
      setErrorMessage("Prediction failed. Please check the input values.");
      console.error(err);
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorMessage(''); // Reset error message when user changes input
  };

  // Handle form submission for prediction
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = Object.values(formData).map(Number); // Convert form data to numbers
    
    // Validate input data
    if (inputData.some(isNaN)) {
      setErrorMessage("Please fill out all fields with valid numbers.");
      return;
    }

    makePrediction(model, inputData); // Make the prediction
  };

  return (
    <div>
    
{/* <div>
  <h1>Diabetes Prediction</h1>
  {isLoading && <p>Training model...</p>}
  {isTrained && !isLoading && <p>Model has been trained!</p>}

  <form onSubmit={handleSubmit}>
    <input
      type="number"
      name="pregnancies"
      value={formData.pregnancies}
      onChange={handleInputChange}
      placeholder="Pregnancies"
    />
    <input
      type="number"
      name="glucose"
      value={formData.glucose}
      onChange={handleInputChange}
      placeholder="Glucose"
    />
    <input
      type="number"
      name="bloodPressure"
      value={formData.bloodPressure}
      onChange={handleInputChange}
      placeholder="Blood Pressure"
    />
    <input
      type="number"
      name="skinThickness"
      value={formData.skinThickness}
      onChange={handleInputChange}
      placeholder="Skin Thickness"
    />
    <input
      type="number"
      name="insulin"
      value={formData.insulin}
      onChange={handleInputChange}
      placeholder="Insulin"
    />
    <input
      type="number"
      name="bmi"
      value={formData.bmi}
      onChange={handleInputChange}
      placeholder="BMI"
    />
    <input
      type="number"
      name="diabetesPedigreeFunction"
      value={formData.diabetesPedigreeFunction}
      onChange={handleInputChange}
      placeholder="Diabetes Pedigree Function"
    />
    <input
      type="number"
      name="age"
      value={formData.age}
      onChange={handleInputChange}
      placeholder="Age"
    />
    <button type="submit">Predict</button>
  </form>

  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
  <div className='predict'> {prediction && <p style={{ color: 'blue' }}>Prediction: {prediction}</p>}</div>
</div> */}




<div className='onetimeuser'>
 <div className='navbar-onetimeuser'>
   <Link to="/Home"><div className='logo-onetimeuser'>NeuralHack</div></Link>
   <div className='menu-onetimeuser'>
       
           <Link to="/Home"><div className='icon-onetimeuser'><IoHomeSharp className='iconn-onetimeuser' />HOME</div></Link>
           <Link to="/Registration"><div className='icon-onetimeuser'><BsFillPersonFill  className='iconn-onetimeuser' />LOGIN / REGISTER</div></Link>
           <Link to="/DiabetesPrediction"><div className='icon-onetimeuser'><BsFillPersonFill className='iconn-onetimeuser'/>ONE TIME USER?</div></Link>
           <Link className='"https://gamma.app/docs/Diabetes-Prediction-System-Web-Implementation-s0y02son70l656x?mode=doc" target="_blank" rel="noopener noreferrer"'><div className='icon-onetimeuser'><FaRobot className='iconn-onetimeuser'/>AIML GEEKS?</div></Link>
       
   </div>
</div>
<div className='onetimeusers'>
<div className='Left-onetimeuser'>
 <div className='buttons-onetimeuser'>
       <div className='one-onetimeuser'><HiOutlineMenuAlt2  className='icon-onetimeuser'/>NOTE</div>
       <div className='two-onetimeuser'><IoMdInformationCircle className='icon-onetimeuser' />DETAILS</div>
   </div>
   <div className='words-onetimeuser'>
       <p>Hey there, here are some points that should be noted before starting to work with this site. </p>
       <p>The most important point to be noted is that, Our prediction model is only compatible with female patients because the AIML model takes in the term pregnancy as one of the inputs. So Please make sure to enter correct data.</p>
       <p> <TbHandFingerLeft />Brief description of the parameters required are given in the details tab.</p>   
      
   </div>
</div>
<div className='Right-onetimeuser'>
   <div className='top-onetimeuser'>Medical Data</div>
   <form className='bottom-onetimeuser' onSubmit={handleSubmit}>
       <div className='title-onetimeuser'>Please provide the required data of the patient</div>
       <div className='middle-onetimeuser'>
       <div className='leftside-onetimeuser'>
       <div className='predict-form-onetimeuser'> <div>Pregnancies </div><div><input type="number" id='Pregnancies' name='Pregnancies'required min="0" onChange={(e)=>setpregnancies(e.target.value)}/></div></div>
       <div className='predict-form-onetimeuser'> <div><label className='predict-label'>Blood Pressure</label> </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
       <div className='predict-form-onetimeuser'> <div>Insulin </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
       <div className='predict-form-onetimeuser'> <div>DPF </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
       </div>
       <div className='rightside-onetimeuser'>
       <div className='predict-form-onetimeuser'> <div>Glucose </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
       <div className='predict-form-onetimeuser'> <div><label className='predict-label-onetimeuser'>Skin Thickness</label> </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
       <div className='predict-form-onetimeuser'> <div> BMI </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
       <div className='predict-form-onetimeuser'> <div> Age </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
       </div>
       </div>
       <button type='Submit' className='buttonn-onetimeuser'>P R E D I C T</button>
   </form>
   {errorMessage && <p style={{ color: 'black' }}>{errorMessage}</p>}
   <div className='predict'>{prediction && <p style={{ color: 'red' }}>Prediction: {prediction}</p>}</div>

</div>

</div>    
</div>


</div>
  );
};

export default DiabetesPrediction;






