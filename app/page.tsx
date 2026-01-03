import VibeCodingSection from '@/components/VibeCodingSection';
import WorkspaceSection from '@/components/WorkspaceSection';
import DelegateSection from '@/components/DelegateSection';
import FlowDiagram from '@/components/FlowDiagram';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-3xl shadow-lg">
              🚀
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Development Handoff Hub
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                From ideation to deployment - orchestrate your development workflow
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Flow Diagram */}
        <div className="mb-8">
          <FlowDiagram />
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Section - Vibe Coding */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border-2 border-gray-200/50 dark:border-gray-700/50 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <VibeCodingSection />
          </div>

          {/* Right Section - Workspace Setup */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border-2 border-gray-200/50 dark:border-gray-700/50 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <WorkspaceSection />
          </div>
        </div>

        {/* Bottom Section - Delegate */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border-2 border-gray-200/50 dark:border-gray-700/50 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <DelegateSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built for seamless development workflows
          </p>
        </div>
      </footer>
    </div>
  );
}
