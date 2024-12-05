const textarea = document.querySelector("#noteTextarea");
const savenotecheckbox = document.querySelector("#saveNotesCheckbox");

// Function to load the saved notes from localStorage (if any)
const loadNotes = () => {
  // Get saved notes from localStorage by the key 'autosave-data'
  const savedNotes = localStorage.getItem("autosave-data");
  // If there are saved notes, load them into the textarea
  if (savedNotes) {
    textarea.value = savedNotes;
  }
};

// Function for autosaving the notes
const autosave = () => {
  if (savenotecheckbox.checked) {
    localStorage.setItem("autosave-data", textarea.value);
  }
};

// Function to initialize the app
const initApp = () => {
  loadNotes();
  savenotecheckbox.checked = false;
  setInterval(autosave, 1000);
};

// Event listener for the checkbox (turns autosave on/off)
savenotecheckbox.addEventListener("change", () => {
  if (savenotecheckbox.checked) {
    alert("Autosave is ON");
  } else {
    alert("Autosave is OFF");
  }
});

initApp();
