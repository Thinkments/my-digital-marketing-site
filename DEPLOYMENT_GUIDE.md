# Deploy Your Figma Make Site to GitHub Pages

This guide will walk you through every step to get your website live on GitHub Pages.

## 📋 What You'll Need

Before starting, make sure you have:
1. **A GitHub account** (free at [github.com](https://github.com))
2. **Git installed** on your computer
3. **Node.js installed** (version 18 or higher)

---

## 🔧 Installation Check (Do This First!)

### Check if Git is installed:

**On Windows (Command Prompt or PowerShell):**
```
git --version
```

**On Mac/Linux (Terminal):**
```bash
git --version
```

If you see a version number, you're good! If not, install Git:
- **Windows:** Download from [git-scm.com](https://git-scm.com/download/win)
- **Mac:** Git comes with Xcode Command Line Tools. Run: `xcode-select --install`
- **Linux:** Run: `sudo apt-get install git` (Ubuntu/Debian) or `sudo yum install git` (Fedora/RHEL)

### Check if Node.js is installed:

```bash
node --version
```

If you see a version number (should be 18.0.0 or higher), you're good! If not:
- Download and install from [nodejs.org](https://nodejs.org) (choose the LTS version)

---

## 🚀 Step-by-Step Deployment Instructions

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** button in the top-right corner
3. Select **"New repository"**
4. Choose a name for your repository (example: `my-digital-marketing-site`)
5. **Keep it PUBLIC** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

**IMPORTANT:** Remember your repository name! You'll need it in the next steps.

---

### Step 2: Prepare Your Local Project

Now we'll set up your project folder. Open your terminal and navigate to where you extracted the files.

**On Windows (Command Prompt):**
```cmd
cd path\to\figma-make-site
```

**On Mac/Linux (Terminal):**
```bash
cd path/to/figma-make-site
```

**Replace `path/to/figma-make-site` with the actual location of your project folder.**

---

### Step 3: Configure Your Repository Name

You need to create a `.env` file with your GitHub repository name.

**Option A - Create the file manually:**

1. In your project folder, create a new file called `.env` (no file extension)
2. Open it in any text editor
3. Add this line (replace `your-repo-name` with your actual repository name from Step 1):
   ```
   VITE_BASE_PATH=/your-repo-name/
   ```
4. Save the file

**Example:** If your repository is named `my-digital-marketing-site`, the file should contain:
```
VITE_BASE_PATH=/my-digital-marketing-site/
```

**Option B - Create via terminal:**

**On Mac/Linux:**
```bash
echo "VITE_BASE_PATH=/your-repo-name/" > .env
```

**On Windows (PowerShell):**
```powershell
echo "VITE_BASE_PATH=/your-repo-name/" > .env
```

**Remember to replace `your-repo-name` with your actual repository name!**

---

### Step 4: Install Dependencies

This installs all the packages your website needs to run.

```bash
npm install
```

**This will take a few minutes.** You'll see a progress bar as packages are downloaded.

---

### Step 5: Test Locally (Optional but Recommended)

Before deploying, make sure everything works:

```bash
npm run dev
```

This will start a local server. You should see something like:
```
VITE v6.3.5  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  press h + enter to show help
```

Open your browser and go to `http://localhost:3000/` to see your site.

**To stop the server:** Press `Ctrl + C` in the terminal

---

### Step 6: Initialize Git and Push to GitHub

Now we'll upload your code to GitHub.

**Step 6a: Initialize Git repository**
```bash
git init
```

**Step 6b: Add all files**
```bash
git add .
```

**Step 6c: Create your first commit**
```bash
git commit -m "Initial commit: Figma Make site"
```

**Step 6d: Set your main branch**
```bash
git branch -M main
```

**Step 6e: Connect to your GitHub repository**

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

**Example:**
```bash
git remote add origin https://github.com/johnsmith/my-digital-marketing-site.git
```

**Step 6f: Push to GitHub**
```bash
git push -u origin main
```

**You may be asked to log in to GitHub.** Enter your username and password (or use a personal access token if you have 2FA enabled).

---

### Step 7: Enable GitHub Pages

Almost there! Now we'll turn on GitHub Pages.

1. Go to your repository on GitHub (https://github.com/YOUR-USERNAME/YOUR-REPO-NAME)
2. Click on **"Settings"** (near the top of the page)
3. In the left sidebar, click **"Pages"**
4. Under **"Build and deployment"**:
   - **Source:** Select "GitHub Actions"
5. That's it! GitHub will automatically deploy your site

---

### Step 8: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You should see a workflow called "Deploy to GitHub Pages" running
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once you see a green checkmark ✓, your site is live!

---

### Step 9: View Your Live Site! 🎉

Your website is now live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

**Example:**
```
https://johnsmith.github.io/my-digital-marketing-site/
```

---

## 🔄 Making Updates to Your Site

Whenever you want to update your website:

### Step 1: Make your changes
Edit your files as needed

### Step 2: Save and commit your changes
```bash
git add .
git commit -m "Description of what you changed"
git push
```

**That's it!** GitHub Actions will automatically rebuild and redeploy your site.

---

## 🐛 Troubleshooting

### Problem: "git: command not found"
**Solution:** Git is not installed. Follow the installation instructions in the "Installation Check" section above.

### Problem: "npm: command not found"
**Solution:** Node.js is not installed. Download and install from [nodejs.org](https://nodejs.org)

### Problem: Pages not found after navigation
**Solution:** Make sure your `.env` file has the correct repository name with slashes:
```
VITE_BASE_PATH=/your-repo-name/
```

### Problem: GitHub Actions workflow fails
**Solution:** 
1. Go to your repository Settings → Pages
2. Make sure "Source" is set to "GitHub Actions" (not "Deploy from a branch")

### Problem: Site shows 404 on GitHub Pages
**Solution:** 
1. Double-check your `.env` file has the correct repository name
2. Make sure you pushed all files including `.github/workflows/deploy.yml`
3. Wait 5-10 minutes after the first deployment

### Problem: Authentication failed when pushing
**Solution:** 
- If you have 2-factor authentication enabled on GitHub, you need to use a Personal Access Token instead of your password
- Go to GitHub Settings → Developer settings → Personal access tokens → Generate new token
- Use this token as your password when prompted

---

## 📚 Additional Commands Reference

### View git status (see what files have changed):
```bash
git status
```

### View commit history:
```bash
git log --oneline
```

### Pull latest changes (if working with others):
```bash
git pull
```

### Build the site locally (without deploying):
```bash
npm run build
```

The built files will be in the `build` folder.

---

## 🎓 Understanding the File Structure

Here's what each new file does:

- **`.github/workflows/deploy.yml`** - Tells GitHub how to build and deploy your site automatically
- **`.env`** - Contains your repository name for proper URL routing
- **`.gitignore`** - Tells Git which files NOT to upload (like node_modules)
- **`404.html`** - Handles routing for single-page apps on GitHub Pages
- **`index.html`** (modified) - Added script to handle redirects

---

## ✅ Quick Command Summary

Once everything is set up, these are the only commands you'll use regularly:

```bash
# See what files changed
git status

# Save changes
git add .
git commit -m "Your message here"

# Upload to GitHub (triggers automatic deployment)
git push

# Test locally before deploying
npm run dev
```

---

## 🆘 Need More Help?

If you run into any issues:
1. Read the error message carefully - it often tells you what's wrong
2. Check the Troubleshooting section above
3. Make sure all commands are run from inside your project folder
4. Verify your `.env` file has the correct repository name

**Remember:** Every time you push to GitHub, your site will automatically rebuild and deploy. This usually takes 2-3 minutes.

Good luck! 🚀
