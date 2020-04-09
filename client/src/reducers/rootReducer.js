export default function rootReducer(state = {
  isFetchingStartingLocation: false,
  isFetchingDestination: false,
  suggestedStartingLocations: [],
  suggestedDestinations: [],
  isConvertingStartLatLong: false,
  isConvertingDestinationLatLong: false,
    }, action) {
  switch(action.type) {
    case 'FETCHING_MAPBOX_KEY':
      return {...state, isFetchingMapboxKey: true}
    case "FETCHING_SUGGESTED_START_LOCATIONS":
      return {...state, isFetchingStartingLocation: true, suggestedStartingLocations: []}
    case "DISPLAY_START_LOCATIONS":
      return {...state, isFetchingStartingLocation: false, suggestedStartingLocations: action.suggestedStartingLocations}
    case "FETCHING_SUGGESTED_DESTINATIONS":
      return {...state, isFetchingDestination: true, suggestedDestinations: []}
    case "DISPLAY_DESTINATIONS":
      return {...state, isFetchingDestination: false, suggestedDestinations: action.suggestedDestinations}
        default:
    return state
  }
}