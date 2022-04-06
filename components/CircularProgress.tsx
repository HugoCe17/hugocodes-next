import { useState } from 'react'

type Props = { value: number }
export default function CircularProgress(props: Props) {
  const { value } = props
  const [circumference, setCircumference] = useState(30 * 2 * Math.PI)

  return (
    <div className="inline-flex items-center justify-center overflow-hidden rounded-full">
      {/* Building a Progress Ring: https://css-tricks.com/building-progress-ring-quickly/ */}
      <svg className="h-20 w-20">
        <circle
          className="text-slate-800"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className="text-amber-400"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (value / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span className="absolute font-mono text-xl font-extralight text-slate-400">
        {value}%
      </span>
    </div>
  )
}
