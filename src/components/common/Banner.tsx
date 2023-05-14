import React from 'react'

export type BannerData = {
  message: string
  state: 'success' | 'error'
}
export default function Banner({
  banner: { state, message },
}: {
  banner: BannerData
}) {
  const isSuccess = state == 'success'
  const icon = isSuccess ? '😊' : '😂'
  return (
    <p
      className={`p-2 ${
        isSuccess ? 'bg-green-300' : 'bg-red-300'
      } text-center rounded-md`}
    >{`${icon} ${message}`}</p>
  )
}
