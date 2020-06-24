function formatPopulation(input) {
   if (input < 1000000) {
      return (input / 1000).toFixed(1) + ' K';
   } else {
      return (input / 1000000).toFixed(1) + ' M';
   }
}

export default formatPopulation;
