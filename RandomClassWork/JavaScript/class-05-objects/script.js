// Define a class for CPUs
class CPU {
  constructor(
    name,
    architecture,
    coreCount,
    threadCount,
    baseClock,
    boostClock,
    microcode
  ) {
    this.name = name; // CPU name (e.g., Ryzen 9800X3D)
    this.architecture = architecture; // CPU architecture (e.g., Granite Ridge)
    this.coreCount = coreCount; // Number of cores (e.g., 8)
    this.threadCount = threadCount; // Number of threads (e.g., 16)
    this.baseClock = baseClock; // Base clock speed in GHz
    this.boostClock = boostClock; // Boost clock speed in GHz
    this.microcode = microcode;
  }

  // Method to display CPU details
  displaySpecs() {
    console.log(`--- ${this.name} Specifications ---`);
    console.log(`Architecture: ${this.architecture}`);
    console.log(`Cores: ${this.coreCount}C`);
    console.log(`Threads: ${this.threadCount}T`);
    console.log(`Base Clock: ${this.baseClock} GHz`);
    console.log(`Boost Clock: ${this.boostClock} GHz`);
    console.log(`MicroCode version: ${this.microcode} `);
  }

  // Method to simulate overclocking
  overclock(extraGHz) {
    this.boostClock += extraGHz;
    console.log(
      `${this.name} has been overclocked! New Boost Clock: ${this.boostClock} GHz`
    );
  }
}

// Create an object for the Ryzen 9800X3D
let ryzen9800x3d = new CPU(
  "Ryzen 9800X3D", // Name
  "Granite Ridge", // Architecture
  8, // Core Count
  16, // Thread Count
  4.0, // Base Clock in GHz
  5.7
   6// Boost Clock in GHz
  123g
);

// Use the methods
ryzen9800x3d.displaySpecs(); // Display CPU details
ryzen9800x3d.overclock(0.3); // Overclock by 0.3 GHz
ryzen9800x3d.displaySpecs;
