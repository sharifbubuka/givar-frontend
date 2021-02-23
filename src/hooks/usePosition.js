import { useState, useEffect } from 'react'

export const usePosition = () => {
  const [ position, setPosition ] = useState({})
  const [ positionError, setPositionError ] = useState(null)

  // callbacks will go here
  function onSuccess({ coords }) {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude
    })
  }

  function onError() {
    setPositionError('Unable to retrieve your location')
  }

  useEffect(() => {
    const geo = navigator.geolocation
    if (!geo) {
      setPositionError('Geolocation is not supported')
      return
    }

    // const options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // }

    geo.getCurrentPosition(onSuccess, onError)
  }, [])

  return {...position, positionError}
}