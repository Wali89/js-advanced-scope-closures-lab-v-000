function produceDrivingRange(blockRange) {
  return function(startPoint, endPoint) {
    let blockStart = Number(startPoint.slice(0, 2));
    let blockEnd = Number(endPoint.slice(0, 2));
    if ((startPoint - endPoint) <= blockRange) {
      return true
    }
    else {
      return false
    }
  }
}
