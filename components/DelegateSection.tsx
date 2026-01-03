'use client';

import { useState } from 'react';

export default function DelegateSection() {
  const [isDelegating, setIsDelegating] = useState(false);

  const delegateOptions = [
    {
      icon: '📦',
      title: 'Create Snapshot',
      description: 'Save your current progress as a snapshot for handoff',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30',
    },
    {
      icon: '📋',
      title: 'Export Workspace',
      description: 'Export your workspace configuration and code',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30',
    },
    {
      icon: '👥',
      title: 'Assign Developer',
      description: 'Connect with developers to continue the work',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30',
    },
  ];

  return (
    <div className="w-full border-t-2 border-gray-200 dark:border-gray-700 pt-8 mt-8 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-2xl shadow-lg">
            🎯
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Delegate to Developers
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Hand off your prototype to professional developers
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {delegateOptions.map((option, index) => (
          <div
            key={option.title}
            className={`
              group p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700
              bg-gradient-to-br ${option.bgColor}
              transition-all duration-300 transform hover:scale-105 hover:shadow-xl
              animate-fade-in
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {option.icon}
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
              {option.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {option.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setIsDelegating(!isDelegating)}
          className={`
            px-8 py-4 rounded-xl font-bold text-white
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl
            ${
              isDelegating
                ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'
                : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
            }
          `}
        >
          {isDelegating ? 'Cancel Delegation' : 'Start Delegation Process'}
        </button>
        <button className="px-8 py-4 rounded-xl font-bold border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
          Export Snapshot
        </button>
      </div>

      {isDelegating && (
        <div className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-xl border-2 border-yellow-300 dark:border-yellow-700 animate-slide-in">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                Delegation workflow initiated
              </p>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Your prototype will be assigned to developers with all necessary context and workspace information.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
