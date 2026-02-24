import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Brain, Database, Layers, Cpu, Zap, ShieldAlert, Code2, LineChart, Network, Briefcase, X } from 'lucide-react';
import { MERMAID_CHART, MODULES, TECH_STACK, INVESTMENT_THESIS } from './constants';
import { Mermaid } from './components/Mermaid';
import { cn } from './lib/utils';

const TABS = [
  { id: 'overview', label: 'Xülasə', icon: Activity },
  { id: 'architecture', label: 'Arxitektura', icon: Layers },
  { id: 'modules', label: 'AI Modulları (18)', icon: Brain },
  { id: 'dual-brain', label: 'Dual Brain', icon: Cpu },
  { id: 'fusion', label: 'Fusion & Risk', icon: ShieldAlert },
  { id: 'execution', label: 'İcra & Öyrənmə', icon: Zap },
  { id: 'tech', label: 'Texnologiyalar', icon: Code2 },
  { id: 'investor', label: 'VC & İnvestor', icon: Briefcase },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-neutral-900 flex items-center justify-center text-white">
              <Network className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight text-neutral-900 leading-none">MERIDIAN</h1>
              <p className="text-[10px] text-neutral-500 font-medium uppercase tracking-widest mt-1">Institutional Solutions</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 overflow-x-auto hide-scrollbar">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border-b-2",
                    isActive 
                      ? "text-neutral-900 border-neutral-900" 
                      : "text-neutral-500 border-transparent hover:text-neutral-900"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden border-t border-neutral-200 overflow-x-auto hide-scrollbar">
           <div className="flex items-center gap-4 p-4">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "text-xs font-semibold uppercase tracking-wider whitespace-nowrap",
                    isActive 
                      ? "text-neutral-900" 
                      : "text-neutral-500"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
           </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'architecture' && <ArchitectureTab />}
            {activeTab === 'modules' && <ModulesTab />}
            {activeTab === 'dual-brain' && <DualBrainTab />}
            {activeTab === 'fusion' && <FusionTab />}
            {activeTab === 'execution' && <ExecutionTab />}
            {activeTab === 'tech' && <TechTab />}
            {activeTab === 'investor' && <InvestorTab />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function OverviewTab() {
  const ACRONYM = [
    { letter: "M", word: "Market", desc: "Global liquidity analysis & structure" },
    { letter: "E", word: "Exchange", desc: "Cross-venue execution routing" },
    { letter: "R", word: "Risk", desc: "Real-time exposure control" },
    { letter: "I", word: "Intelligence", desc: "18-module neural network" },
    { letter: "D", word: "Discovery", desc: "Alpha generation engine" },
    { letter: "I", word: "Information", desc: "Alternative data synthesis" },
    { letter: "A", word: "Automated", desc: "Zero-touch operation" },
    { letter: "N", word: "Navigation", desc: "Strategic capital deployment" },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="mb-8">
            <h2 className="text-6xl font-light text-neutral-900 leading-none tracking-tighter mb-4">
              MERIDIAN <span className="font-bold">v4.0</span>
            </h2>
            <p className="text-neutral-500 text-sm font-mono uppercase tracking-widest border-l-2 border-neutral-900 pl-4">
              Institutional Grade • Autonomous • Adaptive
            </p>
          </div>
          
          <p className="text-neutral-600 text-lg leading-relaxed mb-10 max-w-xl font-light">
            The next evolution in quantitative finance. Meridian synthesizes fragmented global market data into a singular, actionable intelligence stream. By fusing fundamental analysis with alternative data and satellite imagery, it navigates market volatility with machine precision.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-neutral-900 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl">
              Initialize System
            </button>
            <button className="border border-neutral-200 text-neutral-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:border-neutral-900 transition-all">
              View Live Performance
            </button>
          </div>
        </div>

        {/* Acronym Visualization */}
        <div className="bg-neutral-50 border border-neutral-100 p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="grid grid-cols-1 gap-4 relative z-10">
            {ACRONYM.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 group cursor-default"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-neutral-200 text-lg font-bold text-neutral-900 shadow-sm group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                  {item.letter}
                </div>
                <div className="flex-1 flex items-baseline justify-between border-b border-neutral-200 pb-2 group-hover:border-neutral-400 transition-colors">
                  <div className="text-sm font-bold text-neutral-900 uppercase tracking-wider">{item.word}</div>
                  <div className="text-xs text-neutral-400 font-mono group-hover:text-neutral-600 transition-colors">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
        {[
          { label: "Daily Volume", value: "$1.2B", sub: "Executed" },
          { label: "Latency", value: "42μs", sub: "Glass-to-Glass" },
          { label: "Active Models", value: "18", sub: "Neural Networks" },
          { label: "Sharpe Ratio", value: "3.4", sub: "Year-to-Date" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 hover:bg-neutral-50 transition-colors group">
            <div className="text-4xl font-light text-neutral-900 mb-2 group-hover:scale-105 transition-transform origin-left">{stat.value}</div>
            <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">{stat.label}</div>
            <div className="text-[10px] text-neutral-400 font-mono uppercase">{stat.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureTab() {
  const [selectedStep, setSelectedStep] = useState<any>(null);

  const ARCHITECTURE_STEPS = [
    {
      id: 1,
      title: "Data Ingestion",
      subtitle: "Global Aggregation",
      description: "Aggregates high-frequency market data, alternative datasets, and social sentiment streams in real-time.",
      icon: Database,
      items: [
        { name: "Market Data Feeds", specs: "NYSE, NASDAQ, Crypto", cost: "$15,000/mo", icon: LineChart },
        { name: "Alternative Data", specs: "Satellite, Maritime", cost: "$20,000/mo", icon: Network },
        { name: "News & Social Firehose", specs: "Bloomberg, X API", cost: "$10,000/mo", icon: Activity },
        { name: "On-Chain Data Nodes", specs: "Ethereum/Solana RPC", cost: "$5,000/mo", icon: Code2 }
      ],
      total: "$50,000",
      actions: ["Add Data Source", "Optimize Latency", "View Ingestion Logs"]
    },
    {
      id: 2,
      title: "AI Processing",
      subtitle: "18-Module Cluster",
      description: "Massively parallel processing cluster running 18 specialized AI models for deep market analysis.",
      icon: Cpu,
      items: [
        { name: "Core Analytics Cluster", specs: "5 Modules (LSTM/XGBoost)", cost: "$8,500/mo", icon: Activity },
        { name: "Strategic Intel Cluster", specs: "LLMs (GPT-4/Claude)", cost: "$12,000/mo", icon: Brain },
        { name: "Alpha Hunter Cluster", specs: "HFT Models (RL)", cost: "$18,000/mo", icon: Zap },
        { name: "Risk Sentinel Cluster", specs: "Anomaly Detection", cost: "$4,000/mo", icon: ShieldAlert }
      ],
      total: "$42,500",
      actions: ["Scale GPU Cluster", "Retrain Models", "View Model Metrics"]
    },
    {
      id: 3,
      title: "Fusion Engine",
      subtitle: "Dual Brain Synthesis",
      description: "The central nervous system that synthesizes conflicting signals into a single high-confidence trade decision.",
      icon: Brain,
      items: [
        { name: "Dual Brain Engine", specs: "Inference Server", cost: "$3,500/mo", icon: Cpu },
        { name: "Conflict Resolution", specs: "Weighting Logic", cost: "$1,500/mo", icon: ShieldAlert }
      ],
      total: "$5,000",
      actions: ["Adjust Weighting", "Run Simulation", "Audit Decisions"]
    },
    {
      id: 4,
      title: "Execution",
      subtitle: "Smart Routing",
      description: "Smart order routing system ensuring best execution price and minimal slippage across multiple venues.",
      icon: Zap,
      items: [
        { name: "Direct Market Access", specs: "DMA Gateway", cost: "$5,000/mo", icon: Network },
        { name: "Co-location Server", specs: "NY4/LD4 Rack", cost: "$4,000/mo", icon: Database }
      ],
      total: "$9,000",
      actions: ["Configure Routing", "Emergency Halt", "View Trade Logs"]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-6">
        <div>
          <h2 className="text-2xl font-light text-neutral-900">System Architecture</h2>
          <p className="text-neutral-500 mt-1 text-sm">Hierarchical data flow and infrastructure cost analysis.</p>
        </div>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-6 top-8 bottom-8 w-px bg-neutral-200 hidden md:block" />

        <div className="space-y-8">
          {ARCHITECTURE_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedStep(step)}
                className="relative flex flex-col md:flex-row gap-8 cursor-pointer group"
              >
                {/* Step Number/Icon */}
                <div className="hidden md:flex flex-col items-center shrink-0 z-10">
                  <div className="w-12 h-12 bg-white border border-neutral-200 flex items-center justify-center group-hover:border-neutral-900 transition-colors">
                    <Icon className="w-5 h-5 text-neutral-900" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">{step.title}</h3>
                      <p className="text-sm text-neutral-500">{step.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Monthly OpEx</div>
                      <div className="font-mono font-medium text-neutral-900">{step.total}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-neutral-50 border border-neutral-100">
                        <span className="text-sm text-neutral-700 font-medium">{item.name}</span>
                        <span className="text-xs font-mono text-neutral-500">{item.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Total Summary */}
      <div className="bg-neutral-900 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-light mb-1">Total Infrastructure Requirement</h3>
          <p className="text-neutral-400 text-sm">Monthly operational expenditure for full stack deployment.</p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-light tracking-tight">$106,500</div>
          <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Monthly Burn</div>
        </div>
      </div>

      {/* Architecture Detail Modal */}
      <AnimatePresence>
        {selectedStep && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStep(null)}
              className="fixed inset-0 bg-white/80 backdrop-blur-md z-[60]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white border border-neutral-200 shadow-2xl z-[70]"
            >
              <div className="p-6 border-b border-neutral-100 flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 flex items-center justify-center">
                    <selectedStep.icon className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-light text-neutral-900">{selectedStep.title}</h2>
                    <p className="text-sm text-neutral-500">{selectedStep.subtitle}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedStep(null)}
                  className="p-2 hover:bg-neutral-100 transition-colors text-neutral-400 hover:text-neutral-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8 space-y-8">
                <p className="text-neutral-600 leading-relaxed">
                  {selectedStep.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Cost Breakdown</h4>
                  <div className="border border-neutral-200">
                    {selectedStep.items.map((item: any, i: number) => (
                      <div key={i} className="flex items-center justify-between p-4 border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-4 h-4 text-neutral-400" />
                          <span className="text-sm text-neutral-900 font-medium">{item.name}</span>
                        </div>
                        <span className="text-sm font-mono text-neutral-600">{item.cost}</span>
                      </div>
                    ))}
                    <div className="p-4 bg-neutral-50 flex justify-between items-center">
                      <span className="text-xs font-bold text-neutral-900 uppercase">Total</span>
                      <span className="font-mono font-bold text-neutral-900">{selectedStep.total}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Available Actions</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedStep.actions.map((action: string, i: number) => (
                      <button key={i} className="px-4 py-2 bg-white hover:bg-neutral-900 hover:text-white text-neutral-900 text-xs font-medium border border-neutral-200 transition-all">
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function ModulesTab() {
  const [selectedModule, setSelectedModule] = useState<typeof MODULES[0] | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-6">
        <div>
          <h2 className="text-2xl font-light text-neutral-900">AI Module Ecosystem</h2>
          <p className="text-neutral-500 mt-1 text-sm">18 specialized neural networks operating in parallel.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {MODULES.map((mod) => (
          <div 
            key={mod.id} 
            onClick={() => setSelectedModule(mod)}
            className="bg-white border border-neutral-200 p-6 hover:border-neutral-900 hover:shadow-lg transition-all cursor-pointer group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-neutral-400 bg-neutral-50 px-2 py-1">#{mod.id.toString().padStart(2, '0')}</span>
                <h3 className="font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">{mod.name}</h3>
              </div>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-wider px-2 py-1",
                mod.category === 'CORE' ? "bg-neutral-100 text-neutral-600" :
                mod.category === 'STRATEGIC' ? "bg-blue-50 text-blue-600" :
                mod.category === 'ALPHA HUNTER' ? "bg-emerald-50 text-emerald-600" :
                "bg-amber-50 text-amber-600"
              )}>
                {mod.category}
              </span>
            </div>
            <p className="text-sm text-neutral-600 mb-6 flex-grow leading-relaxed">{mod.description}</p>
            
            <div className="space-y-4 mt-auto">
              <div className="pt-4 border-t border-neutral-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Data Sources</span>
                  <span className="text-[10px] font-mono text-neutral-400">{mod.dataSources.length} Active Feeds</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mod.dataSources.slice(0, 3).map((ds, i) => (
                    <span key={i} className="bg-neutral-50 text-neutral-600 text-[10px] px-2 py-1 border border-neutral-100 uppercase tracking-wide">{ds}</span>
                  ))}
                  {mod.dataSources.length > 3 && <span className="text-neutral-400 text-[10px] px-2 py-1">+{mod.dataSources.length - 3}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal Overlay */}
      <AnimatePresence>
        {selectedModule && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModule(null)}
              className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white shadow-2xl z-[70] overflow-hidden max-h-[90vh] flex flex-col border border-neutral-200"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-neutral-100 flex justify-between items-start bg-neutral-50/50 shrink-0">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
                    <Brain className="w-8 h-8 text-neutral-900" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-mono text-neutral-400">ID: {selectedModule.id.toString().padStart(2, '0')}</span>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5",
                        selectedModule.category === 'CORE' ? "bg-neutral-200 text-neutral-700" :
                        selectedModule.category === 'STRATEGIC' ? "bg-blue-100 text-blue-700" :
                        selectedModule.category === 'ALPHA HUNTER' ? "bg-emerald-100 text-emerald-700" :
                        "bg-amber-100 text-amber-700"
                      )}>
                        {selectedModule.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">{selectedModule.name}</h2>
                    <div className="flex items-center gap-4 mt-2 text-xs font-mono text-neutral-500">
                      <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"/> LIVE</span>
                      <span>•</span>
                      <span>LATENCY: 12ms</span>
                      <span>•</span>
                      <span>CONFIDENCE: 98.4%</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedModule(null)}
                  className="p-2 hover:bg-neutral-200 transition-colors text-neutral-400 hover:text-neutral-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-8 space-y-8">
                  
                  {/* Description Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Activity className="w-4 h-4" /> Operational Objective
                      </h4>
                      <p className="text-neutral-600 leading-relaxed text-sm border-l-2 border-neutral-900 pl-4">
                        {selectedModule.detailedDescription}
                      </p>
                    </div>
                    <div className="bg-neutral-50 p-4 border border-neutral-100">
                      <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">Tech Specs</h4>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between"><span className="text-neutral-500">Version</span> <span className="font-mono">v4.2.1</span></div>
                        <div className="flex justify-between"><span className="text-neutral-500">Last Retrain</span> <span className="font-mono">2h ago</span></div>
                        <div className="flex justify-between"><span className="text-neutral-500">Daily Ops</span> <span className="font-mono">1.4M</span></div>
                      </div>
                    </div>
                  </div>

                  <hr className="border-neutral-100" />

                  {/* Inputs & Models */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Database className="w-4 h-4" /> Data Ingestion
                      </h4>
                      <div className="bg-white border border-neutral-200">
                        {selectedModule.dataSources.map((ds, i) => (
                          <div key={i} className="px-4 py-3 border-b border-neutral-100 last:border-0 flex items-center justify-between hover:bg-neutral-50 transition-colors">
                            <span className="text-sm text-neutral-700">{ds}</span>
                            <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5">CONNECTED</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Cpu className="w-4 h-4" /> Neural Architecture
                      </h4>
                      <div className="bg-white border border-neutral-200">
                        {selectedModule.models.map((model, i) => (
                          <div key={i} className="px-4 py-3 border-b border-neutral-100 last:border-0 flex items-center justify-between hover:bg-neutral-50 transition-colors">
                            <span className="text-sm text-neutral-700">{model}</span>
                            <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-1.5 py-0.5">ACTIVE</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ROI & Risk */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-emerald-50/50 border border-emerald-100 p-6 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <LineChart className="w-16 h-16 text-emerald-600" />
                      </div>
                      <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">Alpha Generation (ROI)</h4>
                      <p className="text-sm text-emerald-900 leading-relaxed font-medium">{selectedModule.roiPotential}</p>
                    </div>
                    <div className="bg-rose-50/50 border border-rose-100 p-6 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ShieldAlert className="w-16 h-16 text-rose-600" />
                      </div>
                      <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2">Risk Mitigation</h4>
                      <p className="text-sm text-rose-900 leading-relaxed font-medium">{selectedModule.riskMitigation}</p>
                    </div>
                  </div>

                  {/* Live Output Console */}
                  <div className="bg-neutral-900 text-neutral-200 p-6 font-mono text-sm rounded-sm shadow-inner">
                    <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-2">
                      <span className="text-xs font-bold text-neutral-500 uppercase">Live Output Stream</span>
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-4">
                        <span className="text-neutral-500">{new Date().toLocaleTimeString()}</span>
                        <span className="text-blue-400">INFO</span>
                        <span>Processing batch #8921...</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-neutral-500">{new Date().toLocaleTimeString()}</span>
                        <span className="text-emerald-400">SUCCESS</span>
                        <span>Signal generated: {selectedModule.output}</span>
                      </div>
                      <div className="flex gap-4 mt-4 p-3 bg-neutral-800/50 border-l-2 border-emerald-500">
                        <span className="text-emerald-300">{'>'} {selectedModule.example}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              
              {/* Modal Footer */}
              <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex justify-between items-center text-xs text-neutral-500 shrink-0">
                <span>Meridian AI Core v4.0</span>
                <div className="flex gap-4">
                  <button className="hover:text-neutral-900 transition-colors">View Logs</button>
                  <button className="hover:text-neutral-900 transition-colors">Configure Parameters</button>
                  <button className="hover:text-neutral-900 transition-colors">Export Report</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function DualBrainTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dual Brain Decision System (v4.0)</h2>
        <p className="text-zinc-400 mt-1">Strateji və Taktiki qərarları 18 mənbəli "Omni-Brain" datası ilə vermək.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <Brain className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-100">INVESTOR BRAIN</h3>
              <p className="text-sm text-zinc-400 font-mono">Strategic / Long-Term (3-12 mo)</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">Artıq yalnız maliyyə hesabatlarına baxmır. Qlobal təchizat zəncirini, makro tsiklləri və ESG risklərini analiz edir.</p>
            
            <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800/50">
              <h4 className="text-xs font-mono text-zinc-500 mb-3">INPUT WEIGHTS</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span className="text-zinc-300">Fundamental AI</span><span className="text-blue-400 font-mono">30%</span></li>
                <li className="flex justify-between"><span className="text-zinc-300">Supply Chain AI</span><span className="text-blue-400 font-mono">20%</span></li>
                <li className="flex justify-between"><span className="text-zinc-300">Macro Cycle AI</span><span className="text-blue-400 font-mono">15%</span></li>
                <li className="flex justify-between"><span className="text-zinc-300">Geopolitical AI</span><span className="text-blue-400 font-mono">15%</span></li>
                <li className="flex justify-between"><span className="text-zinc-300">ESG & Persona</span><span className="text-blue-400 font-mono">20%</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Zap className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-100">TRADER BRAIN</h3>
              <p className="text-sm text-zinc-400 font-mono">Tactical / Short-Term (min/hrs)</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">Artıq yalnız qrafiklərə baxmır. İnsayder hərəkətlərinə, peyk görüntülərinə və hüquqi xəbərlərə baxır.</p>
            
            <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800/50">
              <h4 className="text-xs font-mono text-zinc-500 mb-3">INPUT WEIGHTS</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span className="text-zinc-300">Technical AI</span><span className="text-emerald-400 font-mono">25%</span></li>
                <li className="flex justify-between"><span className="text-zinc-300">Insider Trading</span><span className="text-emerald-400 font-mono">25%</span></li>
                <li className="flex justify-between"><span className="text-zinc-300">Satellite/Physical</span><span className="text-emerald-400 font-mono">20%</span></li>
                <li className="flex justify-between"><span className="text-zinc-300">Legal/Litigation</span><span className="text-emerald-400 font-mono">15%</span></li>
                <li className="flex justify-between"><span className="text-zinc-300">Sentiment & Quant</span><span className="text-emerald-400 font-mono">15%</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-zinc-100 mb-4">Synchronization Layer: "Hard Evidence" Rule</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/50">
            <h4 className="font-semibold text-rose-400 mb-2">1. ACTIONS {'>'} WORDS</h4>
            <p className="text-sm text-zinc-400">CEO "Gələcək parlaqdır" deyir, amma İnsayderlər satırsa → <strong className="text-rose-400">SELL</strong> (İnsayder qalib gəlir).</p>
          </div>
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/50">
            <h4 className="font-semibold text-blue-400 mb-2">2. PHYSICAL {'>'} DIGITAL</h4>
            <p className="text-sm text-zinc-400">Hesabat "Satış artdı" deyir, amma Peyk zavodu boş görürsə → <strong className="text-blue-400">SHORT</strong> (Fraud ehtimalı).</p>
          </div>
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/50">
            <h4 className="font-semibold text-amber-400 mb-2">3. LEGAL {'>'} HOPE</h4>
            <p className="text-sm text-zinc-400">Qiymət ucuzdur, amma Məhkəmə AI "Böyük Cərimə" riskini 90% görürsə → <strong className="text-amber-400">AVOID</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FusionTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Cross-Analysis & Fusion Engine</h2>
        <p className="text-zinc-400 mt-1">18 AI modulunun nəticələrini birləşdirir və ziddiyyətləri həll edir.</p>
      </div>

      <div className="space-y-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <h3 className="font-bold text-zinc-100 mb-2">Stage 1: Signal Collection</h3>
          <p className="text-sm text-zinc-400 mb-4">18 Modul 3 Strateji Qrupda birləşdirilir və ilkin skorlanır.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-zinc-500 font-mono uppercase bg-zinc-950">
                <tr>
                  <th className="px-4 py-2 rounded-tl-lg">AI Module Group</th>
                  <th className="px-4 py-2">Score</th>
                  <th className="px-4 py-2">Confidence</th>
                  <th className="px-4 py-2 rounded-tr-lg">Signal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800/50">
                  <td className="px-4 py-3 font-medium text-zinc-300">1. CORE ANALYTICS</td>
                  <td className="px-4 py-3 text-emerald-400">+75</td>
                  <td className="px-4 py-3">85%</td>
                  <td className="px-4 py-3 text-emerald-400">BULLISH</td>
                </tr>
                <tr className="border-b border-zinc-800/50">
                  <td className="px-4 py-3 font-medium text-zinc-300">2. STRATEGIC INTEL</td>
                  <td className="px-4 py-3 text-rose-400">-20</td>
                  <td className="px-4 py-3">70%</td>
                  <td className="px-4 py-3 text-zinc-400">NEUTRAL/BEARISH</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-zinc-300">3. ALPHA HUNTERS</td>
                  <td className="px-4 py-3 text-rose-500 font-bold">-95</td>
                  <td className="px-4 py-3">99%</td>
                  <td className="px-4 py-3 text-rose-500 font-bold">STRONG SELL (!!!)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-900 border border-rose-500/30 rounded-xl p-5">
            <h3 className="font-bold text-rose-400 mb-2 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" /> Stage 2: Conflict Resolution (VETO)
            </h3>
            <p className="text-sm text-zinc-300 mb-3">Bəzi "Alpha Hunter" siqnalları digərlərini ləğv etmək gücünə malikdir.</p>
            <ul className="space-y-2 text-sm text-zinc-400 font-mono bg-zinc-950 p-3 rounded-lg border border-zinc-800">
              <li><span className="text-rose-400">IF</span> Insider_Trading == "STRONG_SELL"</li>
              <li><span className="text-zinc-500">→ IGNORE</span> Fundamental (+75)</li>
              <li><span className="text-zinc-500">→ IGNORE</span> Technical (+60)</li>
              <li className="text-rose-400 font-bold pt-2">FINAL: BLOCK BUY / INITIATE SHORT</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <h3 className="font-bold text-zinc-100 mb-2 flex items-center gap-2">
              <LineChart className="w-4 h-4" /> Stage 3: Dynamic Weighting
            </h3>
            <p className="text-sm text-zinc-300 mb-3">Sistem bazar rejiminə görə çəkiləri dəyişir.</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><strong className="text-emerald-400">BULL MARKET:</strong> Alpha Hunters (50%), Core (40%)</li>
              <li><strong className="text-rose-400">BEAR MARKET:</strong> Alpha Hunters (50%), Strategic (30%)</li>
              <li><strong className="text-amber-400">CRISIS/CRASH:</strong> Strategic (50%), Alpha Hunters (40%)</li>
              <li><strong className="text-blue-400">HIGH VOLATILITY:</strong> Core (50%), Alpha Hunters (40%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExecutionTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Execution & Learning Loop</h2>
        <p className="text-zinc-400 mt-1">Qərarları real ticarətə çevirir və sistem davamlı öyrənir.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-zinc-100 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" /> Execution Engine
          </h3>
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
            {[
              { title: "Order Generation", desc: "Position Sizing Calculation (e.g., Target 3% = $300K)" },
              { title: "Pre-Trade Risk Checks", desc: "Position Limit (5%), Sector Limit (30%), Portfolio VaR" },
              { title: "Algorithm Selection", desc: "VWAP, POV, Implementation Shortfall, Iceberg" },
              { title: "Smart Order Routing", desc: "Dark Pools (10s) → NYSE (60%) → NASDAQ (40%)" },
              { title: "Real-Time Monitoring", desc: "Live P&L, Slippage tolerance, Adaptive adjustments" },
              { title: "Post-Trade Analysis", desc: "Transaction Cost Analysis (TCA), Benchmark comparison" }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-500 font-mono text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#18181b]">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-950 p-4 rounded-xl border border-zinc-800/50">
                  <h4 className="font-semibold text-zinc-200 text-sm">{step.title}</h4>
                  <p className="text-xs text-zinc-500 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-zinc-100 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" /> Learning Loop (Self-Improvement)
          </h3>
          <div className="space-y-4">
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/50">
              <h4 className="font-semibold text-zinc-200 mb-2 text-sm">Pattern Recognition</h4>
              <p className="text-xs text-zinc-400 mb-2">Müşahidə: CEO Persona güclü çıxdı (+3% alpha).</p>
              <p className="text-xs text-emerald-400 font-mono">→ Action: Persona Analysis weight artır: 3% → 8%</p>
            </div>
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/50">
              <h4 className="font-semibold text-zinc-200 mb-2 text-sm">Model Retraining</h4>
              <ul className="text-xs text-zinc-400 space-y-1">
                <li>• Technical AI: Weekly (Pattern drift {'>'} 5%)</li>
                <li>• Sentiment AI: Daily (Language evolution)</li>
                <li>• Fundamental AI: Quarterly (Accuracy drop {'>'} 5%)</li>
              </ul>
            </div>
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/50">
              <h4 className="font-semibold text-zinc-200 mb-2 text-sm">Strategy Adaptation</h4>
              <p className="text-xs text-zinc-400 mb-2">Regime Change: Low Vol → High Vol Detected</p>
              <ul className="text-xs text-amber-400 font-mono space-y-1">
                <li>→ Reduce all position sizes by 20%</li>
                <li>→ Increase cash allocation: 10% → 15%</li>
                <li>→ Tighten stop-losses by 25%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Texnologiya Stack</h2>
        <p className="text-zinc-400 mt-1">İstifadə olunan texnologiyalar və infrastruktur.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TECH_STACK.map((category, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-zinc-100 mb-4">{category.category}</h3>
            <div className="space-y-4">
              {category.items.map((item, j) => (
                <div key={j} className="border-l-2 border-emerald-500/30 pl-3">
                  <h4 className="font-semibold text-zinc-200 text-sm">{item.name}</h4>
                  <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvestorTab() {
  return (
    <div className="space-y-8">
      <div className="bg-zinc-900 border border-emerald-500/30 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
              <Briefcase className="w-4 h-4" /> VC & PE PITCH
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">{INVESTMENT_THESIS.title}</h2>
            <p className="text-zinc-300 leading-relaxed text-lg mb-8">
              {INVESTMENT_THESIS.summary}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {INVESTMENT_THESIS.metrics.map((metric, i) => (
                <div key={i} className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-4">
                  <div className="text-xs text-zinc-500 font-mono mb-1">{metric.label}</div>
                  <div className="text-xl font-bold text-emerald-400">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INVESTMENT_THESIS.keyPoints.map((point, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 font-mono text-sm text-zinc-400">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3">{point.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{point.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

