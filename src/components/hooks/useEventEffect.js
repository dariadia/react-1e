import React, { useEffect, experimental_useEffectEvent as useEffectEvent } from "react";

// experimental_useEffectEvent* = available only in the experimental version of React
// *niche

// use when:
// you have an event (e.g. user clicks button)
// you do NOT want useEffect to run every time event(c) happens
// BUT you want to use other things inside that use effect (hence, react complains it should be a dep, but you do not want that)

export function Chat({ url, loggingOptions }) {
  const onConnected = useEffectEvent(url => {
    logConnection(`Connected to ${url}`, loggingOptions)
  })

  useEffect(() => {
    const room = connectToRoom(url)
    room.onConnected(() => {
      onConnected(url)
    })
    return () => {
      room.disconnect()
    }
  }, [url])
  return
}

function logConnection(message, options) {
  // some code
}
function connectToRoom(message, options) {
  // some code
}
