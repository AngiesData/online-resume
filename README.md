# GitHub Online Resume

This is a simple resume website built with:

- HTML
- CSS
- Basic JavaScript

## The easiest way to update it

Most resume content is stored in `script.js` inside the `resumeData` section.

To add a completed course:

1. Open `script.js` on GitHub.
2. Click the pencil icon.
3. Find the `certifications` section.
4. Copy one existing course block.
5. Change the date, title, school/provider, and description.
6. Click **Commit changes**.

## Add your photograph

1. Upload your photograph to the repository.
2. Name it `profile.png`.
3. In `index.html`, change:

```html
src="https://i.imgur.com/profile.png"
```

to:

```html
src="profile.png"
```

## Publish with GitHub Pages

1. Create a new public GitHub repository.
2. Upload all four files from this folder.
3. Open the repository's **Settings**.
4. Select **Pages** in the left menu.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/root` folder.
7. Click **Save**.
8. GitHub will display your live resume address after deployment.

Your address will usually look like:

`https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

## Change the colors

Open `styles.css`. At the top of the file, update the color values under `:root`.

## Important privacy reminder

Avoid publishing your street address, personal phone number, employee ID, or any confidential employer or patient information.
