'use client'

import { useState, useRef } from 'react'
import type { VisualRoadmap, RoadmapNode } from '@/data/visualRoadmaps'

interface Props {
  roadmap: VisualRoadmap
  completedNodes: Set<string>
  onNodeToggle: (id: string) => void
  onNodeClick?: (node: RoadmapNode) => void
}

export default function RoadmapCanvas({ roadmap, completedNodes, onNodeToggle, onNodeClick }: Props) {
  const [tooltip, setTooltip] = useState<{ node: RoadmapNode; x: number; y: number } | null>(null)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const panStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 })
  const svgRef = useRef<SVGSVGElement>(null)

  const { nodes, edges, canvasWidth, canvasHeight, accentColor, theme } = roadmap
  const isLight = theme === 'roadmapLight'

  const nodeMap = new Map(nodes.map(n => [n.id, n]))

  // Node colors by type
  const nodeStyle = (node: RoadmapNode, isDone: boolean) => {
    if (isLight) {
      const baseLight = {
        core: { fill: '#f5de45', stroke: '#111827', text: '#111827', strokeWidth: 2 },
        recommended: { fill: '#efe6d5', stroke: '#374151', text: '#1f2937', strokeWidth: 1.5 },
        optional: { fill: '#e8e2d8', stroke: '#6b7280', text: '#4b5563', strokeWidth: 1 },
        group: { fill: '#ffffff', stroke: '#111827', text: '#111827', strokeWidth: 1.5 },
      }
      const s = baseLight[node.type]
      if (isDone) return { ...s, fill: '#c8e6c9', stroke: '#15803d', text: '#14532d' }
      return s
    }
    const base = {
      core: { fill: accentColor, stroke: accentColor, text: '#0a0a0b', strokeWidth: 0 },
      recommended: { fill: '#1c1c20', stroke: accentColor + '60', text: '#e4e4e7', strokeWidth: 1 },
      optional: { fill: '#111113', stroke: 'rgba(255,255,255,0.12)', text: '#71717a', strokeWidth: 1 },
      group: { fill: '#18181b', stroke: 'rgba(255,255,255,0.08)', text: '#a1a1aa', strokeWidth: 1 },
    }
    const s = base[node.type]
    if (isDone) return { ...s, fill: accentColor + '30', stroke: accentColor, text: accentColor }
    return s
  }

  const getNodeCenter = (id: string) => {
    const n = nodeMap.get(id)
    if (!n) return { x: 0, y: 0 }
    const w = n.width ?? 160
    const h = n.height ?? 44
    return { x: n.x, y: n.y + h / 2 }
  }

  const getEdgePath = (fromId: string, toId: string) => {
    const from = nodeMap.get(fromId)
    const to = nodeMap.get(toId)
    if (!from || !to) return ''
    const fw = from.width ?? 160
    const fh = from.height ?? 44
    const tw = to.width ?? 160
    const th = to.height ?? 44

    const fx = from.x
    const fy = from.y + fh / 2
    const tx = to.x
    const ty = to.y + th / 2

    // Determine connection points based on relative position
    let x1, y1, x2, y2

    const verticalDiff = Math.abs(ty - fy)
    const horizDiff = Math.abs(tx - fx)

    if (verticalDiff > horizDiff) {
      // Primarily vertical
      x1 = fx
      y1 = from.y + fh
      x2 = tx
      y2 = to.y
    } else {
      // Primarily horizontal
      if (tx > fx) {
        x1 = fx + fw / 2
        y1 = fy
        x2 = tx - tw / 2
        y2 = ty
      } else {
        x1 = fx - fw / 2
        y1 = fy
        x2 = tx + tw / 2
        y2 = ty
      }
    }

    const midY = (y1 + y2) / 2
    if (verticalDiff > horizDiff) {
      return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`
    }
    return `M ${x1} ${y1} L ${x2} ${y2}`
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return
    setIsPanning(true)
    panStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y }
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning) return
    setPan({
      x: panStart.current.panX + (e.clientX - panStart.current.x),
      y: panStart.current.panY + (e.clientY - panStart.current.y),
    })
  }
  const handleMouseUp = () => setIsPanning(false)

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    setZoom(z => Math.min(2, Math.max(0.3, z - e.deltaY * 0.001)))
  }

  function handleNodeClick(node: RoadmapNode) {
    if (node.type === 'group') return
    if (onNodeClick) {
      onNodeClick(node)
    } else {
      onNodeToggle(node.id)
    }
  }

  const totalNodes = nodes.filter(n => n.type !== 'group').length
  const doneCount = completedNodes.size
  const pct = Math.round((doneCount / totalNodes) * 100)

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Legend & controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1rem',
        background: isLight ? '#e8edf5' : 'var(--bg-1)',
        borderBottom: `1px solid ${isLight ? '#c5cedd' : 'var(--border)'}`,
        flexWrap: 'wrap',
        gap: 10,
      }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { color: accentColor, label: 'Core Topic', type: 'core' },
            { color: accentColor + '60', label: 'Recommended', type: 'rec' },
            { color: 'rgba(255,255,255,0.12)', label: 'Optional', type: 'opt' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{
                width: 28, height: 14,
                background: item.type === 'core' ? accentColor : 'transparent',
                border: `1.5px solid ${item.color}`,
                borderRadius: 3,
                display: 'inline-block',
              }} />
              <span style={{ fontSize: 11, color: isLight ? '#374151' : 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>{item.label}</span>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              display: 'inline-block', width: 20, height: 11,
              borderTop: `1.5px dashed ${accentColor}80`,
            }} />
            <span style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>Subtopic link</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: isLight ? '#374151' : 'var(--text-3)' }}>
            {doneCount}/{totalNodes} done ({pct}%)
          </span>
          <button onClick={() => setZoom(z => Math.min(2, z + 0.15))}
            style={{ background: isLight ? '#dfe6f2' : 'var(--bg-2)', border: `1px solid ${isLight ? '#b8c4d8' : 'var(--border)'}`, borderRadius: 6, padding: '4px 10px', color: isLight ? '#111' : 'var(--text-2)', cursor: 'pointer', fontSize: 14 }}>+</button>
          <button onClick={() => setZoom(z => Math.max(0.3, z - 0.15))}
            style={{ background: isLight ? '#dfe6f2' : 'var(--bg-2)', border: `1px solid ${isLight ? '#b8c4d8' : 'var(--border)'}`, borderRadius: 6, padding: '4px 10px', color: isLight ? '#111' : 'var(--text-2)', cursor: 'pointer', fontSize: 14 }}>−</button>
          <button onClick={() => { setZoom(0.7); setPan({ x: 0, y: 0 }) }}
            style={{ background: isLight ? '#dfe6f2' : 'var(--bg-2)', border: `1px solid ${isLight ? '#b8c4d8' : 'var(--border)'}`, borderRadius: 6, padding: '4px 8px', color: isLight ? '#111' : 'var(--text-2)', cursor: 'pointer', fontSize: 11, fontFamily: 'var(--font-mono)' }}>Reset</button>
        </div>
      </div>

      {/* SVG Canvas */}
      <div style={{
        width: '100%',
        height: 620,
        overflow: 'hidden',
        cursor: isPanning ? 'grabbing' : 'grab',
        background: isLight ? '#e2e8f0' : 'var(--bg)',
        position: 'relative',
      }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <svg
          ref={svgRef}
          width={canvasWidth}
          height={canvasHeight}
          style={{
            display: 'block',
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: '50% 0%',
            transition: isPanning ? 'none' : 'transform 0.05s',
          }}
        >
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill={isLight ? '#2563eb' : accentColor + '80'} />
            </marker>
            <marker id="arrow-dashed" markerWidth="6" markerHeight="6" refX="5" refY="2.5" orient="auto">
              <path d="M0,0 L0,5 L6,2.5 z" fill={isLight ? '#3b82f6' : accentColor + '50'} />
            </marker>
          </defs>

          {isLight ? (
            <rect width={canvasWidth} height={canvasHeight} fill="#eef2f8" />
          ) : (
            <>
              <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.04)" />
              </pattern>
              <rect width={canvasWidth} height={canvasHeight} fill="url(#dots)" />
            </>
          )}

          {/* Edges */}
          {edges.map((edge, i) => {
            const path = getEdgePath(edge.from, edge.to)
            const isDashed = edge.style === 'dashed'
            const strokeMain = isLight ? '#2563eb' : accentColor + '70'
            const strokeDash = isLight ? '#2563eb' : accentColor + '45'
            return (
              <path
                key={i}
                d={path}
                fill="none"
                stroke={isDashed ? strokeDash : strokeMain}
                strokeWidth={isDashed ? 1.5 : 2}
                strokeDasharray={isDashed ? '5,4' : undefined}
                markerEnd={isDashed ? 'url(#arrow-dashed)' : 'url(#arrow)'}
              />
            )
          })}

          {/* Nodes */}
          {nodes.map(node => {
            const w = node.width ?? 160
            const h = node.height ?? 44
            const isDone = completedNodes.has(node.id)
            const st = nodeStyle(node, isDone)
            const isCore = node.type === 'core'

            return (
              <g
                key={node.id}
                transform={`translate(${node.x - w / 2}, ${node.y})`}
                onClick={() => handleNodeClick(node)}
                onContextMenu={(e) => {
                  e.preventDefault()
                  if (node.type !== 'group') onNodeToggle(node.id)
                }}
                onMouseEnter={e => {
                  const rect = (e.currentTarget as SVGGElement).getBoundingClientRect()
                  setTooltip({ node, x: rect.left, y: rect.top })
                }}
                onMouseLeave={() => setTooltip(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Glow for core nodes */}
                {isCore && (
                  <rect
                    x={-2} y={-2} width={w + 4} height={h + 4}
                    rx={8} ry={8}
                    fill="none"
                    stroke={accentColor + '30'}
                    strokeWidth={6}
                  />
                )}

                {/* Main rect */}
                <rect
                  x={0} y={0} width={w} height={h}
                  rx={isCore ? 6 : 5} ry={isCore ? 6 : 5}
                  fill={st.fill}
                  stroke={st.stroke}
                  strokeWidth={st.strokeWidth}
                />

                {/* Done overlay */}
                {isDone && (
                  <rect x={0} y={0} width={w} height={h}
                    rx={isCore ? 6 : 5} fill={isLight ? 'rgba(22,101,52,0.2)' : accentColor + '20'}
                  />
                )}

                {/* Label */}
                <text
                  x={w / 2} y={h / 2}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill={isDone ? (isLight ? '#15803d' : accentColor) : st.text}
                  fontSize={isCore ? 13 : 12}
                  fontWeight={isCore ? 700 : 500}
                  fontFamily="'Syne', sans-serif"
                  style={{ userSelect: 'none', pointerEvents: 'none' }}
                >
                  {node.label}
                </text>

                {/* Check mark */}
                {isDone && (
                  <g transform={`translate(${w - 18}, 6)`}>
                    <circle cx={6} cy={6} r={7} fill={isLight ? '#15803d' : accentColor} />
                    <text x={6} y={6} dominantBaseline="middle" textAnchor="middle" fontSize={9} fill="#0a0a0b" fontWeight={700} fontFamily="sans-serif">✓</text>
                  </g>
                )}
              </g>
            )
          })}
        </svg>

        {/* Click hint */}
        <div style={{
          position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
          fontSize: 11, fontFamily: 'var(--font-mono)', color: isLight ? '#374151' : 'var(--text-3)',
          background: isLight ? '#f8fafc' : 'var(--bg-2)', border: `1px solid ${isLight ? '#cbd5e1' : 'var(--border)'}`,
          borderRadius: 100, padding: '4px 14px', pointerEvents: 'none',
        }}>
          Click topic for YouTube resources · Right-click to mark done · Drag to pan · Scroll to zoom
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div style={{
          position: 'fixed',
          left: Math.min(tooltip.x + 10, window.innerWidth - 260),
          top: tooltip.y - 10,
          background: 'var(--bg-2)',
          border: `1px solid ${accentColor}50`,
          borderRadius: 10,
          padding: '10px 14px',
          maxWidth: 240,
          zIndex: 1000,
          pointerEvents: 'none',
          animation: 'fadeIn 0.15s ease forwards',
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{tooltip.node.label}</div>
          {tooltip.node.description && (
            <div style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.5, marginBottom: 6 }}>{tooltip.node.description}</div>
          )}
          {tooltip.node.resources?.map(r => (
            <div key={r.url} style={{ fontSize: 11, color: accentColor, fontFamily: 'var(--font-mono)' }}>
              → {r.title} {r.free ? '(free)' : ''}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
