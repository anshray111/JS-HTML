let styles = ["James", "Brennie"];
styles.push("Robert"); 
styles[Math.floor(styles.length / 2)] = "Calvin"; 
console.log(styles.shift()); 
styles.unshift("Rose", "Regal"); 
console.log(styles); 
