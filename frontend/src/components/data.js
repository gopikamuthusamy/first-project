// src/components/data.js
// Import images
import saleGuitar from "../assets/saleg1.jpeg";
import electronicDrum from "../assets/electornic-Drum.jpeg";
import midiKeyboard from "../assets/midiKeyboard.jpeg";
import microphone from "../assets/microphone.jpeg";
import snareDrum from "../assets/snare-drum.jpeg";
import soloStudio from "../assets/solo-studio.jpeg";
import gLefthand from "../assets/g-lefthand.jpeg";
import salep from "../assets/salep.jpeg";
import salet from "../assets/salet.jpeg";

// Array of best-selling products
export const bestSellingProducts = [
    { 
      id: 1, 
      name: "Guitar", 
      image: saleGuitar, 
      price: 2850
    },
    { 
      id: 2, 
      name: "Electronic Drum", 
      image: electronicDrum, 
      price: 38168
    },
    { 
      id: 3, 
      name: "MIDI Keyboard", 
      image: midiKeyboard, 
      price: 7600
    },
    { 
      id: 4, 
      name: "Microphone", 
      image: microphone, 
      price: 65837
    },
    { 
      id: 5, 
      name: "Snare Drum", 
      image: snareDrum, 
      price: 41146
    },
    { 
      id: 6, 
      name: "Solo Studio", 
      image: soloStudio, 
      price: 68365
    },
    { 
      id: 7, 
      name: "Guitar Left-Handed", 
      image: gLefthand, 
      price: 11499
    },
    { 
      id: 8, 
      name: "Salep", 
      image: salep, 
      price: 75696
    },
    { 
      id: 9, 
      name: "Salet", 
      image: salet, 
      price: 42246
    }
];

  
  // Example for initial wishlist items (this can be dynamically updated later)
  export const wishlistItems = [
    { 
      id: 1, 
      name: "Guitar", 
      image: require("../assets/saleg1.jpeg").default, 
      price: 13499 
    },
    { 
      id: 2, 
      name: "electronic-Drum", 
      image: require("../assets/electornic-Drum.jpeg").default, 
      price: 56168 
    },
    { 
      id: 5, 
      name: "midikeyboard", 
      image: require("../assets/midiKeyboard.jpeg").default, 
      price: 41146 
    },
  ];
  
  