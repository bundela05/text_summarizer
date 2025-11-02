import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div class="min-h-screen bg-gray-100 p-8">
        <div class="max-w-4xl mx-auto bg-gray-100 shadow-xl rounded-2xl overflow-hidden border-gray-200 border-1">
            <header class="p-6 max-w-fit flex items-center justify-between bg-gradient-to-tr from-cyan-500 via-pink-200 to-blue-600 text-transparent bg-clip-text">
              <h1 class="text-3xl  font-bold tracking-wider text-center">
                Text Summarizer
              </h1>
            </header>
            <main class="p-8 space-y-8">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label for="input-text" class="block text-lg font-medium text-gray-700 mb-2">
                    Input Text
                  </label>
                  <textarea id="input-text" rows="10"
                        class="w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out resize-none"
                        placeholder="Paste your text here to summarize..."></textarea>
                </div>

                <div>
                  <label for="output-text" class="block text-lg font-medium text-gray-700 mb-2">
                    Summary Output
                  </label>
                  <textarea id="output-text" rows="10" readonly
                        class="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 resize-none cursor-default"
                        placeholder="Your summary will appear here."></textarea>
                </div>
              </div>
              <div class="flex flex-col items-center pt-4">
                <p class="text-lg font-medium text-gray-700 mb-3">Choose Summary Format:</p>
                  <div class="inline-flex rounded-xl bg-gray-200 p-1 shadow-inner" role="group" id="summary-toggle">
                    <button id="bullet-btn"
                        class="px-6 py-2 text-base font-semibold rounded-lg transition duration-200 
                                bg-indigo-600 text-white shadow-md active-format"
                        data-format="bullet">
                        <span class="mr-2">💡</span> Bullet Points
                    </button>
                    <button id="paragraph-btn"
                        class="px-6 py-2 text-base font-semibold rounded-lg transition duration-200 
                                text-gray-600 hover:bg-gray-300"
                        data-format="paragraph">
                        <span class="mr-2">📄</span> Paragraph
                    </button>
                  </div>
                  <button
                      class="mt-6 w-full sm:w-auto px-10 py-3 text-xl font-bold rounded-xl transition duration-300 ease-in-out 
                           bg-gradient-to-tr from-cyan-300 via-pink-200 to-blue-300 text-white hover:bg-green-600 shadow-lg transform hover:scale-[1.01] active:scale-[0.99]">
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
