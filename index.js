// 1. distanceFromHqInBlocks
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42 - pickupLocation);
  }
  
  // 2. distanceFromHqInFeet
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }
  
  // 3. distanceTravelledInFeet
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    return blocks * 264;
  }
  
  // 4. calculatesFarePrice
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free.
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet.
    } else if (distance > 2000 && distance < 2500) {
      return 25; // Flat fare for distance between 2000 and 2500 feet.
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed.
    }
  }
  