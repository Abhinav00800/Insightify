import React, { useState, useRef } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Getstart = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    
    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
      setAudioBlob(blob);
      audioChunksRef.current = [];
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const uploadAudio = async () => {
    if (!audioBlob) return;

    const formData = new FormData();
    formData.append('audio_data', audioBlob, 'recording.wav');

    try {
      const response = await axios.post('http://localhost:5000/upload/audio', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
    <Header/>
    <h1 className='flex flex-col font-bold text-blue-500 items-center justify-center bg-gray-100'> Record Your Lecture Now</h1>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        className={`w-48 h-48 rounded-full text-white text-2xl font-bold flex items-center justify-center transition-colors duration-300 ${
          isRecording ? 'bg-red-500' : 'bg-green-500'
        } hover:opacity-80`}
        onClick={isRecording ? stopRecording : startRecording}
      >
        {isRecording ? 'Stop Recording' : 'Record Now'}
      </button>
      {audioBlob && (
        <button
          onClick={uploadAudio}
          className="mt-4 px-6 py-2 rounded bg-blue-500 text-white text-lg font-semibold hover:bg-blue-400"
        >
          Upload Audio
        </button>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default Getstart;
