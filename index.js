function produceDrivingRange(blockRange) {
  return function(startPoint, endPoint) {
    let blockStart = Number(startPoint.slice(0, 2));
    let blockEnd = Number(endPoint.slice(0, 2));
    console.log (blockEnd);
    let travelDistance = blockEnd - blockStart;
    if (travelDistance <= blockRange) {
      return 'within range by ' + (blockRange - travelDistance);
    }
    else {
      return (travelDistance - blockRange) + ' blocks out of range';
    }

  }
}

function produceTipCalculator(tipPercent) {
  return function(fare) {
    return fare * tipPercent
  }
}
