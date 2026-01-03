'use client';

import { Tool } from '@/lib/tools';
import { useState } from 'react';

interface ToolCardProps {
  tool: Tool;
  isSelected: boolean;
  onToggle: (toolId: string) => void;
}

export default function ToolCard({ tool, isSelected, onToggle }: ToolCardProps) {
  return (
    <button
      onClick={() => onToggle(tool.id)}
      className={`
        group relative w-full p-6 rounded-xl border-2 transition-all duration-300 text-left
        transform hover:scale-[1.02] hover:shadow-xl
        ${isSelected 
          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 shadow-lg ring-4 ring-blue-200 dark:ring-blue-800/50' 
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800'
        }
      `}
    >
      {/* Animated background gradient on hover */}
      {isSelected && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-xl opacity-50 animate-pulse" />
      )}
      
      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className={`text-lg font-bold transition-colors duration-300 ${
              isSelected 
                ? 'text-blue-700 dark:text-blue-300' 
                : 'text-gray-900 dark:text-gray-100'
            }`}>
              {tool.name}
            </h3>
            {isSelected && (
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold shadow-lg animate-bounce">
                ✓
              </span>
            )}
          </div>
          <p className={`text-sm mb-3 transition-colors duration-300 ${
            isSelected
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400'
          }`}>
            {tool.description}
          </p>
          {tool.link && (
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`
                text-sm font-medium transition-all duration-300 inline-flex items-center gap-1
                ${isSelected
                  ? 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300'
                  : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }
              `}
            >
              Learn more
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>
    </button>
  );
}
