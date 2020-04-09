export default function rootReducer(state = {
  isConvertingStartLatLong: false,
  isConvertingDestinationLatLong: false,
    }, action) {
  switch(action.type) {
    case 'FETCHING_MAPBOX_KEY':
      return {...state, isFetchingMapboxKey: true}
        default:
    return state
  }
}