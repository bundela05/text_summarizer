import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SummaryFormatSwitcher from './components/summaryformatswitcher'

function App() {
  return (
    <>
      <div class="min-h-screen bg-gray-100 p-8">
        <div class="max-w-4xl mx-auto bg-gray-50 shadow-xl rounded-2xl overflow-hidden border-gray-200 border-1">
            <div className='bg-indigo-600 flex justify-center items-center'>
            <header class="p-6 max-w-fit flex items-center justify-between bg-white text-transparent bg-clip-text">
              <h1 class="text-3xl font-bold tracking-wider text-center">
                Text Summarizer
              </h1>
            </header>
            </div>
            <main class="p-8 space-y-8">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className=''>
                  <div className='flex justify-center'>
                  <label for="input-text" class="max-w-fit font-bold text-xl bg-gradient-to-tr from-cyan-500 via-pink-200 to-blue-600 text-transparent bg-clip-text block text-gray-700 mb-2">
                    Input Text
                  </label>
                  </div>
                  <textarea id="input-text" rows="10"
                        class="w-full p-4 border border-gray-300 bg-gray-100 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out resize-none"
                        placeholder="Paste your text here to summarize..."></textarea>
                </div>

                <div>
                  <div className='flex justify-center'>
                  <label for="output-text" class="max-w-fit font-bold text-xl bg-gradient-to-tr from-cyan-500 via-pink-200  to-blue-600 text-transparent bg-clip-text block text-gray-700 mb-2">
                    Summary Output
                  </label></div>
                  <textarea id="output-text" rows="10" readonly
                        class="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 resize-none cursor-default"
                        placeholder="Your summary will appear here."></textarea>
                </div>
              </div>
              <div class="flex flex-col items-center pt-4">
                  <SummaryFormatSwitcher/>
                  <button
                      class="mt-6 w-full sm:w-auto px-10 py-3 text-xl font-bold rounded-xl transition duration-300 ease-in-out 
                           bg-gradient-to-tr from-cyan-300 via-pink-200 to-blue-300 text-white  shadow-lg transform hover:text-black hover:scale-[1.01] active:scale-[0.99]">
                      Summarize Text
                  </button> 
              </div>
            </main>
          </div>
        </div>
    </>
  )
}

export default App
