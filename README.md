# Online Notepad with Autosave Functionality

This is a simple **Online Notepad** application that allows users to write and store notes. The application features an **autosave** function that saves the user's input in the local storage automatically, as long as the "Save My Notes" checkbox is checked. The application will persist the notes even after a page reload, as the data is saved to the browser's local storage.

## Features

- **Autosave**: The notes are automatically saved every 1 second when the "Save My Notes" checkbox is checked.
- **Persistent Notes**: Notes are retained in the `textarea` even after closing or refreshing the browser.
- **Manual Toggle**: Autosave can be enabled or disabled using a checkbox.
- **Local Storage**: Data is saved in the browser's local storage under the key `'autosave-data'`.

## How It Works

1. The user can type their notes into the textarea.
2. When the "Save My Notes" checkbox is checked, the application will save the content of the textarea to **local storage** every second.
3. Upon opening the app, the saved notes are loaded from local storage into the textarea.
4. The "Save My Notes" checkbox is unchecked by default.

## Technologies Used

- **HTML**: For the structure and layout of the page.
- **Tailwind**: For styling the notepad.
- **JavaScript**: For implementing the autosave functionality and interacting with the local storage.

## Getting Started

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/yourusername/Online-Notepad.git
