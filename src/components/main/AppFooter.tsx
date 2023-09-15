import React from 'react'

export default function AppFooter() {
  return (
    <div className="py-2 text-center  text-sm">
      {'© ' + new Date().getFullYear() + ' danwoo. All Rights Reserved'}
    </div>
  )
}
