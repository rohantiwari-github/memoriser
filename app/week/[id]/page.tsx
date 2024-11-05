"use client";
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import questionsData from '../../../data/questionsData';

interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

export default function WeekQuestions() {
    const params = useParams();
    const id = params?.id as string;
    const questions: Question[] = questionsData[`week${id}`] || [];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [feedbackVisible, setFeedbackVisible] = useState(false);

    const handleAnswer = (answer: string) => {
        setSelectedAnswer(answer);
        setFeedbackVisible(true);

        // Delay before moving to the next question
        setTimeout(() => {
            setSelectedAnswer(null);
            setFeedbackVisible(false);
            setCurrentQuestion((prev) => (prev + 1) % questions.length);
        }, 2000); // 2 seconds delay for feedback
    };

    const isCorrectAnswer = (option: string) => option === questions[currentQuestion].correctAnswer;
    const isSelectedAnswerCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;

    if (!questions.length) return <p className="text-center text-white">Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-2xl mx-auto">
                <Link href="/" className="text-purple-400 underline mb-4 inline-block">← Back to Home</Link>
                <h1 className="text-3xl font-bold mb-4">Week {id} Practice</h1>

                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-xl mb-4">{questions[currentQuestion].question}</h2>
                    <div className="grid gap-2">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className={`p-3 rounded transition 
                  ${selectedAnswer ? (
                                        option === selectedAnswer
                                            ? isSelectedAnswerCorrect ? 'bg-green-500' : 'bg-red-500'
                                            : isCorrectAnswer(option) && !isSelectedAnswerCorrect ? 'bg-green-500' : 'bg-gray-700'
                                    ) : 'bg-gray-700 hover:bg-purple-500'}
                `}
                                disabled={feedbackVisible} // Disable buttons once an answer is selected
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
