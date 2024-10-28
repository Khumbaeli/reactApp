import React from 'react';
import "./about.css"
import pdf from '../assets/Resume Elias A Capriles.pdf'

const About = () => {
    return (
        <div>
            <p >My name is Elias and I recently graduated with a Bachelor’s of Science degree in both Computer Science and Environmental Science. My academic journey has been a fascinating exploration of two fields that may seem disparate at first glance, but are deeply interconnected in our modern world.

My passion for computer science has equipped me with a strong foundation in problem-solving, data analysis, and software development. On the other hand, my studies in environmental science have deepened my understanding of our planet’s complex ecosystems and the urgent challenges posed by climate change.
 
As a recent graduate, I am excited to bridge these two fields. I believe that technology, when used responsibly, can be a powerful tool in mitigating the impacts of climate change. Whether it’s through developing algorithms to optimize energy consumption, using machine learning to predict weather patterns and natural disasters, or creating platforms to raise awareness about sustainable practices, I am committed to leveraging my skills to contribute to this global effort.

I look forward to a future where technology and nature work in harmony, and I am eager to play a part in creating that future. Together, we can use the power of technology to ensure a sustainable and prosperous planet for generations to come.
For more information here is my <a href ={pdf} attributes-list download>Resume </a>
</p>
        </div>
    );
};

export default About;