'use client';

interface FlowStep {
  id: number;
  label: string;
  icon: string;
  color: string;
  activeColor: string;
}

const flowSteps: FlowStep[] = [
  { 
    id: 1, 
    label: 'Select Tools', 
    icon: '🎯', 
    color: 'bg-gray-200 dark:bg-gray-700',
    activeColor: 'from-blue-500 to-cyan-500'
  },
  { 
    id: 2, 
    label: 'Setup Workspace', 
    icon: '⚙️', 
    color: 'bg-gray-200 dark:bg-gray-700',
    activeColor: 'from-purple-500 to-pink-500'
  },
  { 
    id: 3, 
    label: 'Delegate', 
    icon: '🚀', 
    color: 'bg-gray-200 dark:bg-gray-700',
    activeColor: 'from-green-500 to-emerald-500'
  },
];

export default function FlowDiagram() {
  // This will be made interactive later - for now showing step 1 as active
  const activeStep = 1;

  return (
    <div className="w-full py-8 px-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border-2 border-gray-200/50 dark:border-gray-700/50 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
        Your Development Workflow
      </h3>
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        {flowSteps.map((step, index) => {
          const isActive = activeStep >= step.id;
          const isCompleted = activeStep > step.id;
          
          return (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center flex-1 relative z-10">
                <div
                  className={`
                    w-20 h-20 rounded-2xl flex items-center justify-center text-3xl
                    transition-all duration-500 ease-in-out transform
                    ${
                      isActive
                        ? `bg-gradient-to-br ${step.activeColor} shadow-xl scale-110 ring-4 ring-white/50 dark:ring-gray-800/50`
                        : `${step.color} scale-100`
                    }
                    ${isCompleted ? 'ring-4 ring-green-300 dark:ring-green-700' : ''}
                  `}
                  style={{
                    animation: isActive && !isCompleted ? 'pulse 2s infinite' : 'none',
                    boxShadow: isActive ? '0 10px 30px rgba(0,0,0,0.2)' : 'none',
                  }}
                >
                  <span className={isActive ? 'drop-shadow-lg' : ''}>
                    {step.icon}
                  </span>
                </div>
                <div
                  className={`
                    mt-4 text-sm font-bold text-center px-3 py-1 rounded-lg
                    transition-all duration-300
                    ${
                      isActive
                        ? 'text-gray-900 dark:text-gray-100 bg-white/80 dark:bg-gray-800/80'
                        : 'text-gray-500 dark:text-gray-400'
                    }
                  `}
                >
                  {step.label}
                </div>
                {isCompleted && (
                  <div className="absolute top-0 right-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    ✓
                  </div>
                )}
              </div>

              {/* Arrow */}
              {index < flowSteps.length - 1 && (
                <div className="flex-1 mx-4 relative h-1">
                  <div
                    className={`
                      h-1 rounded-full transition-all duration-500
                      ${
                        isCompleted
                          ? `bg-gradient-to-r ${step.activeColor}`
                          : 'bg-gray-300 dark:bg-gray-600'
                      }
                    `}
                  />
                  <div
                    className={`
                      absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2
                      w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent
                      transition-all duration-500
                      ${
                        isCompleted
                          ? `border-l-12 border-l-pink-500`
                          : 'border-l-12 border-l-gray-300 dark:border-l-gray-600'
                      }
                    `}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Follow the steps to go from ideation to deployment
        </p>
      </div>
    </div>
  );
}
