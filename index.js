function produceDrivingRange(distanceMax) {
  return function(drivingRange) {
    if (drivingRange <= distanceMax) {
      return true
    }
    else {
      return false
    }
  }
}