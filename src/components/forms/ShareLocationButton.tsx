'use client'

import React, { useState } from 'react'
import { useServerAction } from 'zsa-react'

interface ShareLocationButtonProps {
  tag: string
  formAction: any
}

const ShareLocationButton: React.FC<ShareLocationButtonProps> = ({
  tag,
  formAction,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [location, setLocation] = useState({
    tag: tag,
    longitude: 0,
    latitude: 0,
  })
  const [errorMessage,setErrorMessage] = useState<any>(null)

  const handleLocationShare = async () => {
    setIsLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            ...location,
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          })
          console.log('Latitude:', position.coords.latitude)
          console.log('Longitude:', position.coords.longitude)
          setIsLoading(false)
        },
        (error) => {
          console.error('Error fetching location:', error.message)
          setErrorMessage(error.message)
          setIsLoading(false)
        }
      )

      console.log('Here', location)

      if (location.latitude && location.longitude) {
        await execute(location)
      }
    } else {
      console.error('Geolocation is not supported by this browser.')
      setErrorMessage('Geolocation is not supported by this browser.')

      setIsLoading(false)
    }
  }

  const { execute, isPending, isError, error, isSuccess } =
    useServerAction(formAction)

  return (
    <>
      <button
        type="button"
        disabled={isLoading || isSuccess}
        onClick={handleLocationShare}
        className="active:scale-[.98] active:duration-300 transition-all py-3 w-full rounded-xl bg-black text-white text-lg font-bold"
      >
        {isLoading
          ? 'Fetching location...'
          : isPending
            ? 'Sharing location with owner'
            : 'Share Location with Owner'}
      </button>
      {isError && <p className="text-red-500 mt-2">{error.message}</p>}
      {isSuccess && (
        <p className="text-center text-green-800 mt-2">
          Location share was successfull
        </p>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  )
}

export default ShareLocationButton
