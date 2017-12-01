function produceDrivingRange(blockRange) {
  return function(startPoint, endPoint) {
    let blockStart = Number(startPoint.slice(0, 2));
    let blockEnd = Number(endPoint.slice(0, 2));
    let travelDistance = blockEnd - blockStart;
    if (travelDistance <= blockRange) {
      return 'within range by ' + travelDistance;
    }
    else {
      return travelDistance + ' blocks out of range';
    }
  }
}
