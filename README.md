# Himu Technologies Inc. — Consulting Website

A lightweight, fast, accessible consulting website for **Mohammed Kabir**, Principal Consultant, Himu Technologies Inc.

Built with HTML5, CSS3 and vanilla JavaScript only. No React, no Node.js, no npm, no database, no build step, no paid services, no trackers. It is five files and a folder of assets, and it will still work exactly the same way in ten years.

---

## Contents

| File | What it is | Do you edit it? |
|------|-----------|-----------------|
| `index.html` | The page structure | Rarely |
| `styles.css` | All visual design | Only to change colours |
| **`content.js`** | **All text, engagements, services, testimonials, contact details** | **Yes — this is the one** |
| `app.js` | Builds the page from `content.js` | No |
| `README.md` | This file | No |
| `assets/headshot.jpg` | Your photograph — currently a navy-and-brass **MK** monogram placeholder | Replace when you have a photograph |
| `assets/Mohammed-Kabir-Resume.pdf` | Your downloadable resume — a PDF of your current master resume ships with the site | Replace each time you update it |

**The rule to remember:** to change what the website *says*, edit `content.js`. Nothing else.

### Exactly what goes into the repository

Seven items, in this structure. Nothing else is needed, and nothing else should be there.

```
mokabir.github.io/
├── index.html                            ← the page
├── styles.css                            ← all styling, light and dark
├── content.js                            ← everything the site says  (edit this one)
├── app.js                                ← builds the page from content.js
├── README.md                             ← this file (optional, but keep it)
└── assets/
    ├── headshot.jpg                      ← photo, or the MK monogram placeholder
    └── Mohammed-Kabir-Resume.pdf         ← the file every Download Resume button opens
```

File names are case-sensitive on GitHub Pages. `Assets/Headshot.JPG` will not load; `assets/headshot.jpg` will.

---

## 1. Uploading the files to `mokabir.github.io`

GitHub Pages publishes a website from a repository. For a personal site the repository must be named after your GitHub username followed by `.github.io` — in your case, **`mokabir.github.io`**.

### If the repository does not exist yet

1. Sign in at [github.com](https://github.com).
2. Select the **+** button in the top-right corner, then **New repository**.
3. In **Repository name**, type exactly: `mokabir.github.io`
4. Set the repository to **Public**. (GitHub Pages needs this on a free account.)
5. Tick **Add a README file** — this creates the repository immediately so you have somewhere to upload to.
6. Select **Create repository**.

### Uploading the website files

1. Open your repository at `https://github.com/mokabir/mokabir.github.io`.
2. Select **Add file** → **Upload files**.
3. Drag in these four files together: `index.html`, `styles.css`, `content.js`, `app.js` — and `README.md` if you want it kept.
4. Scroll down to **Commit changes**. In the description box type something you will recognise later, such as `Initial website upload`.
5. Select **Commit changes**.

### Uploading the assets folder

The `assets` folder holds your photograph and resume. GitHub's uploader creates folders automatically when you drag one in.

1. Select **Add file** → **Upload files** again.
2. Drag the whole `assets` folder in.
3. Commit the change.

If dragging the folder does not work in your browser, upload the files one at a time — when the upload page asks for a filename, type `assets/headshot.jpg` (the slash creates the folder).

---

## 2. Publishing through GitHub Pages

1. In your repository, select **Settings** (along the top of the repository, not your account settings).
2. In the left sidebar, select **Pages**.
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **main**, leave the folder as **/ (root)**, and select **Save**.
5. Wait one to two minutes. Refresh the page and GitHub will display:
   *Your site is live at `https://mokabir.github.io/`*

That address is your website. It is free, it has an HTTPS certificate, and it stays live as long as the repository exists.

### After you make a change

Every time you commit a change, GitHub republishes the site automatically. It usually takes 30–90 seconds. You can watch progress under the **Actions** tab.

**If you do not see your change:** your browser is showing you a cached copy. Force a fresh load with `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac).

---

## 3. Updating `content.js`

You can do all of this in your browser — no software to install, nothing to download.

1. Open `https://github.com/mokabir/mokabir.github.io`.
2. Select the file **`content.js`**.
3. Select the **pencil icon** (top right of the file) to edit it.
4. Make your change.
5. Scroll to the bottom, type a short note in the description box (for example, `Added Guardium engagement`), and select **Commit changes**.
6. Wait about a minute, then refresh your website.

### Where to make each kind of change

`content.js` is marked with numbered signposts. Use your browser's find function (`Ctrl + F` / `Cmd + F`) and search for the marker:

| I want to… | Search for | What to do |
|---|---|---|
| Change your name, credentials or headline | `[EDIT-1]` | Edit the text between the quotation marks |
| Change email, phone, LinkedIn or resume filename | `[EDIT-2]` | Edit the values |
| Update an achievement figure | `[EDIT-3]` | Edit `value`, `label` and `context` |
| Add or remove a service | `[EDIT-4]` | Copy or delete a whole `{ … }` block |
| **Add a new engagement** | `[EDIT-5]` | Copy a whole `{ … }` block, paste it at the top, edit it |
| Update an engagement achievement | `[EDIT-5]` | Edit the lines under `outcomes` |
| Reword the resume download band | `[EDIT-6]` | Edit the heading and body text |
| **Add an approved testimonial** | `[EDIT-7]` | Use the template, set `permissionConfirmed: true` |
| Rewrite the biography | `[EDIT-8]` | Edit or add paragraphs |
| Add a certification | `[EDIT-9]` | Copy a line in the certifications list |
| Change the privacy statement | `[EDIT-10]` | Edit the text |

### The three rules that keep the file working

1. Every item sits inside `{ curly braces }` and is separated from the next by a **comma**.
2. Text sits inside `"double quotation marks"`. A quotation mark inside your text must be written as `\"`.
3. Never remove a comma or a brace unless you are removing a whole item.

If the site goes blank after an edit, you have almost certainly dropped a comma or a brace. Section 7 below restores the previous version in under a minute.

### A note on testimonials

A testimonial is displayed **only** when `permissionConfirmed: true`. This is deliberate. Publish a recommendation only when:

- you have the author's permission to use it as marketing on a commercial website, and
- you are reproducing their **exact wording**, not a tidied-up version.

Until an approved testimonial exists, the site shows a professional invitation to read your LinkedIn recommendations. That is a better look than invented placeholder quotes, and it stays accurate.

---

## 4. Replacing the photograph

The site currently ships with a navy-and-brass **MK** monogram image as a placeholder. It looks deliberate rather than unfinished, and it also serves as the preview image when someone shares your link on LinkedIn. Replace it whenever you have a photograph.

1. Choose a professional headshot. Square works best. Aim for at least 600 × 600 pixels and under 300 KB — large photographs slow the page down.
2. Name the file exactly: **`headshot.jpg`**
3. In your repository, open the **`assets`** folder.
4. Select **Add file** → **Upload files**, drag in the new `headshot.jpg`, and commit. It replaces the placeholder.
5. Open `content.js`, find `[EDIT-1]`, and change `headshotAlt` to describe the photograph — for example, *"Professional headshot of Mohammed Kabir, Principal Consultant at Himu Technologies Inc."* Screen-reader users hear that line in place of the image, so it should describe what is actually there.

If the image file is ever missing or fails to load, the site falls back to an **MK** monogram drawn in the browser — it never shows a broken image.

To use a different filename or a `.png`, change `headshot:` under `[EDIT-1]` in `content.js` to match.

**Tip:** to shrink a photo without any software, search for an online image resizer, or open the image on a Mac in Preview → Tools → Adjust Size.

---

## 5. Replacing the resume

A PDF of your current master resume already sits in `assets/`, so the download buttons work from the moment you publish. To update it:

1. Export your revised resume as a **PDF**.
2. Name it exactly: **`Mohammed-Kabir-Resume.pdf`**
3. Open the **`assets`** folder in your repository, select **Add file** → **Upload files**, drag it in, and commit.

Every *Download Resume* button on the site points to that file, so replacing it updates all of them at once. There is nothing else to change.

If you prefer a different filename, update `resumeFile:` under `[EDIT-2]` in `content.js` so the two match.

**Download counting.** The site counts resume downloads privately, inside each visitor's own browser, using no third-party analytics and sending nothing anywhere. To see the count on your own device, open the site, press `F12`, select **Console**, and type:

```
localStorage.getItem("himu-resume-downloads")
```

This only ever shows *your own* browser's count. There is no visitor tracking on this site, by design — it is a genuine privacy claim, not a marketing one.

---

## 6. Connecting a custom domain later

If you buy a domain such as `himutechnologies.ca`, you can point it at this site at no extra cost.

### At your domain registrar

Add these DNS records:

| Type | Name / Host | Value |
|------|-------------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `mokabir.github.io` |

*(These are GitHub's published addresses. If you are setting this up much later, confirm them at [docs.github.com](https://docs.github.com/pages) first — addresses do occasionally change.)*

### At GitHub

1. Repository → **Settings** → **Pages**.
2. Under **Custom domain**, type your domain and select **Save**. This creates a file called `CNAME` in your repository — leave it alone.
3. Wait for the DNS check to pass. This can take from a few minutes to 24 hours.
4. Once it passes, tick **Enforce HTTPS**.

### One last step

Open `content.js`, find `[siteUrl]` under the metadata block near the bottom, and change it to your new address, for example `https://himutechnologies.ca/`. This makes LinkedIn and email link previews show the correct address.

---

## 7. Restoring an earlier version

GitHub keeps every version of every file. Nothing you do is permanent, and nothing is ever really lost.

### To look at what changed

1. Open the file, for example `content.js`.
2. Select **History** (top right of the file view).
3. Select any entry to see exactly what changed — removed lines in red, added lines in green.

### To restore a previous version of one file

1. Open the file → **History**.
2. Select the version you want to go back to.
3. Select the **⋯** button → **View file** (or **View at this point in history**).
4. Select the **pencil icon** to edit, then **Commit changes**. That content is now live again.

### To undo the most recent change entirely

1. Go to the repository's **Commits** list (select the clock icon or `commits` link near the top of the file list).
2. Open the commit you want to undo.
3. Select **Revert** at the top right, then confirm.

GitHub creates a new commit that reverses the change. Your history stays intact and the site republishes within a minute or two.

**Practical advice:** before a big edit, write a clear commit description such as `Before adding 2027 engagements`. Future you will find it far faster in the history list.

---

## What the site does

- **Responsive** on phone, tablet and desktop
- **Light and dark modes**, following the visitor's system by default, with a manual toggle that is remembered
- **Sticky navigation** with a reading-progress bar and active-section highlighting
- **Filterable engagements** by sector and capability, each structured as challenge → leadership contribution → solution delivered → measurable outcome, with contribution and solution behind an expander
- **Resume download band** beneath the portfolio, for visitors who want the full chronological history
- **Testimonial carousel** that only ever shows explicitly approved quotes
- **Print-friendly profile** — the "Print profile" button produces a four-page executive portfolio: identity, indicators, practice areas, the engagement portfolio at challenge-and-outcome level, credentials and contact. The expanded contribution and solution text, the web-only buttons and all navigation are left off paper, because a reader who wants the full record downloads the resume instead
- **Back to top** button
- **Subtle scroll animations**, disabled automatically for visitors who have asked their device to reduce motion
- **Keyboard accessible** throughout, with a skip link, visible focus outlines and live announcements for screen readers
- **SEO and Open Graph metadata** for search engines and link previews
- **No cookies, no analytics, no third-party scripts, no data collection**

---

## Before you make the site public

A short checklist:

- [ ] Keep the confidentiality rule intact: **no client budgets, program values, portfolio figures, resource counts, country counts or regional counts** anywhere on the site, and no currency or financial wording. Scale is stated qualitatively — "enterprise-scale", "global", "cross-regional" — and performance is described in words rather than percentages. A figure attached to a named client is that client's to disclose, not yours.
- [ ] Confirm the **Executive Impact** indicators still read the way you want them to.
- [ ] Replace `assets/headshot.jpg` with a photograph (and update `headshotAlt`), or keep the monogram deliberately.
- [ ] Confirm `assets/Mohammed-Kabir-Resume.pdf` is the version you want people downloading.
- [ ] Read every engagement description once more, specifically asking whether a former client would object to anything in it.
- [ ] Check the site on your phone as well as your laptop.
- [ ] Set `siteUrl` in `content.js` to the live address so link previews work.

---

## Editing on your own computer instead

You do not need to, but if you prefer working locally:

1. Download the repository (green **Code** button → **Download ZIP**) and unzip it.
2. Edit the files in any plain-text editor — Notepad, TextEdit (in plain-text mode), or [VS Code](https://code.visualstudio.com/).
3. Open `index.html` by double-clicking it to preview in your browser.
4. When finished, upload the changed files back to GitHub as in section 1.

---

*Himu Technologies Inc. — Ontario, Canada.*
*Organizations named on this website are referenced solely to describe professional engagement history. No client, employer or organization named endorses, sponsors or is affiliated with Himu Technologies Inc.*
