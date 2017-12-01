function produceDrivingRange(blockRange) {
  return function(startPoint, endPoint) {
    if ((startPoint - endPoint) <= blockRange) {
      return true
    }
    else {
      return false
    }
  }
}
