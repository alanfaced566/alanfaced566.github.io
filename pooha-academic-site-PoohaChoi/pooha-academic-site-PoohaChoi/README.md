# Pooha Academic Website

A lightweight personal academic website designed for GitHub Pages.
No build tools, package manager, or command line are required.

## The one file you normally edit

Open `content.js`. It contains:

- name and biography
- research interests
- CV links
- notes and project cards
- contact information
- social/profile links

Keep commas and quotation marks in place when editing it.

## Add a PDF or image

1. Upload the file into the `files/` folder.
2. In `content.js`, set a link such as:

```js
linkHref: "files/my-note.pdf"
```

Use simple lowercase filenames without spaces when possible.

## Publish with GitHub Pages

### Option A: personal homepage

1. Create a GitHub repository named `PoohaChoi.github.io`.
2. Upload every file and folder from this package to the repository root.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main`, folder `/(root)`, then save.
6. The site will appear at `https://poohachoi.github.io/`.

### Option B: project site

Create a repository with any name, upload the files, then enable Pages from `main` and `/(root)`. The address will be `https://poohachoi.github.io/REPOSITORY_NAME/`.

## Preview locally

Double-click `index.html`. Most features work directly in a browser. For the most accurate preview, run a small local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Change the visual style

At the top of `styles.css`, edit these values:

```css
--navy: #14213d;
--blue: #315c8c;
--gold: #c99a3d;
--paper: #f7f4ed;
```

## Google Sites

Google Sites does not import a custom HTML/CSS website as a native editable theme. The cleanest setup is to host this site on GitHub Pages and place its link on the existing Google Site, or eventually use a custom domain for the GitHub Pages site.
