export let TennisPlus = {
  planning: (): Promise<string> => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(`Planning du ${new Date().toLocaleDateString()}`);
      }, 5000);
    });
  }
};
