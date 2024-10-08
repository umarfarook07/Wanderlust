import React from 'react'
import { memo } from 'react'
const DividerWithText = memo(() => {
  return (
      <div className="flex items-center justify-center w-full">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="px-4">or use one of these options</span>
          <div className="flex-grow border-t border-gray-400"></div>
      </div>
  )
})
export default DividerWithText