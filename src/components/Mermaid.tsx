import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { cn } from '../lib/utils';

interface MermaidProps {
  chart: string;
  className?: string;
}

export const Mermaid: React.FC<MermaidProps> = ({ chart, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'loose',
      fontFamily: 'JetBrains Mono, monospace',
    });

    const renderChart = async () => {
      try {
        const id = `mermaid-svg-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
      } catch (error) {
        console.error('Mermaid rendering failed', error);
      }
    };

    renderChart();
  }, [chart]);

  return (
    <div 
      ref={ref} 
      className={cn("flex justify-center overflow-x-auto p-4 bg-zinc-900/50 rounded-xl border border-zinc-800", className)}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
