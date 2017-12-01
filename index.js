function produceDrivingRange(blockRange) {
  return function(startPoint, endpoint) {
    if (drivingRange <= distanceMax) {
      return true
    }
    else {
      return false
    }
  }
}