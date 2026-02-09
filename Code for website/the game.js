let playerName = "";
let progress = 0;

function choosePath(path) {

  // progress update must be FIRST
  progress = progress + 1;

  // ask name only once
  if (progress === 1) {
    playerName = prompt("Traveler, what is your name?");
  }

  // START SCREEN
  if (path === "start") {
    updateStory(
      "You stand at the edge of an ancient forest. Three paths lie before you.",
      "Game folders/forest.jpg",
      [
        ["Follow the river", "river"],
        ["Enter the cave", "cave"],
        ["Climb the mountain", "mountain"]
      ]
    );
    return;
  }

  // RIVER PATH
  if (path === "river") {
    updateStory(
      playerName + ", you follow the river until you reach a broken bridge. The water roars below.",
      "Game folders/river.jpg",
      [
        ["Try to jump across", "jump"],
        ["Search for another way", "search"],
        ["Turn back", "back"]
      ]
    );
    return;
  }

  // CAVE PATH
  if (path === "cave") {
    updateStory(
      "The cave glows with blue crystals. A soft humming fills the air, vibrating in your chest.",
      "Game folders/cave.jpg",
      [
        ["Touch a crystal", "crystal"],
        ["Explore deeper", "deep"],
        ["Leave the cave", "back"]
      ]
    );
    return;
  }

  // MOUNTAIN PATH
  if (path === "mountain") {
    updateStory(
      "The mountain trail is steep, but the view grows more breathtaking with every step.",
      "Game folders/mountain.jpg",
      [
        ["Climb to the peak", "peak"],
        ["Rest on a ledge", "rest"],
        ["Return to the forest", "back"]
      ]
    );
    return;
  }
  // Explore Deeper in Cave
  if (path ==="deep") {
    updateStory(
        "You go deeper in the Cave but you see a light in the distance.",
        "Game folders/Cave with light",
    []
    );
    return
  }
  // SECOND‑TIER CHOICES
  if (path === "jump") {
    updateStory(
      "You leap! For a moment you feel weightless… then land safely on the other side.",
      "Game folders/jump.jpg",
      []
    );
    return;
  } 

  if (path === "search") {
    updateStory(
      "You find a fallen tree that forms a natural bridge. It creaks but holds.",
      "Game folders/treebridge.jpg",
      []
    );
    return;
  }

  if (path === "crystal") {
    updateStory(
      "The crystal pulses warmly. Suddenly, you understand whispers in the air—ancient voices greeting you.",
      "Game folders/crystal.jpg",
      []
    );
    return;
  }

  if (path === "peak") {
    updateStory(
      "At the peak, the entire world stretches before you. You feel unstoppable.",
      "Game folders/peak.jpg",
      []
    );
    return;
  }

  if (path === "back") {
    updateStory(
      "You return to the forest entrance. The paths shift again, waiting for your next choice.",
      "Game folders/forest.jpg",
      [
        ["River", "river"],
        ["Cave", "cave"],
        ["Mountain", "mountain"]
      ]
    );
    return;
  }
}

function updateStory(text, image, options) {
  document.getElementById("story").textContent = text;
  document.getElementById("sceneImage").src = image;

  const choiceDiv = document.getElementById("choices");
  choiceDiv.innerHTML = "";

  options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option[0];
    btn.onclick = () => choosePath(option[1]);
    choiceDiv.appendChild(btn);
  });
}

