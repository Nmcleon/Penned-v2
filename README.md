# Penned

## Overview

This is a simple blog application built with React for the frontend firebase for the backend. The application allows users to create, read, update, and delete blog posts.

## Installation

1. **Clone the repository:**

   ```
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Firebase**

## Firebase Installation

To install Firebase and set up your project, follow these steps:

### Step 1: Install Node.js

Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/) or use a version manager like [nvm](https://github.com/nvm-sh/nvm).

### Step 2: Initialize Firebase in Your Project

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the following command to initialize Firebase:

   ```bash
   npm init -y
   ```

   This creates a `package.json` file in your project directory.

### Step 3: Install Firebase CLI

Install the Firebase Command Line Interface globally on your machine:

```bash
npm install -g firebase-tools
```

### Step 4: Authenticate with Firebase

Before you can deploy your app, you need to authenticate with Firebase:

```bash
firebase login
```

Follow the prompts to log in to your Firebase account.

### Step 5: Create a New Firebase Project

Create a new Firebase project or select an existing one:

```bash
firebase init
```

Select the Firebase features you want to set up (e.g., Firestore, Hosting, Authentication) and follow the prompts.

### Step 6: Create `firebase.js` Configuration File

In your project root, create a new file named `firebase.js`. Paste the following content into the file, replacing `<your-project-id>` with your actual Firebase project ID:

```javascript
const firebaseConfig = {
  apiKey: '<API_KEY>',
  authDomain: '<PROJECT_ID>.firebaseapp.com',
  projectId: '<PROJECT_ID>',
  storageBucket: '<BUCKET>.appspot.com',
  messagingSenderId: '<SENDER_ID>',
  appId: '<APP_ID>',
  measurementId: '<G-MEASUREMENT_ID>',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
```

You can find these values in the Firebase Console under your project settings.

## Usage

After setting up Firebase and creating your `firebase.js` file, you can now use Firebase services in your project. Import the `firebase.js` file wherever you need to interact with Firebase services:

```javascript
const firebase = require('./firebase'); // If you're using CommonJS
// or
import firebase from './firebase'; // If you're using ES Modules
```

3. **Start the JSON server:**
   If firebase isn't working. Checkfirebase instalation below

   ```
   npm run server
   ```

   The JSON server will run on `http://localhost:8000`.

4. **Start the React app:**
   ```
   npm start
   ```
   The React app will run on `http://localhost:3000`.

## How to Use

### Creating a Blog Post

1. Navigate to the "Create Article" page.
2. Fill in the required fields: Title, Image URL, Subtopic 1, Content 1.
3. Optionally, add a Subtopic 2 and Content 2.
4. Enter any tags for the blog post, separated by commas.
5. Provide the author's name and upload an image.
6. Click on the "Create Article" button to submit the form.

### Viewing Blog Posts

1. Navigate to the home page to see a list of all blog posts.
2. Click on a blog post title to view its details.

### Editing a Blog Post

1. Click on the "Edit" button below the blog post you want to edit.
2. Make changes to the blog post details.
3. Click on the "Update" button to save your changes.
