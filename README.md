
# Design Decisions

## Overview
Thank you very much for the opportunity to participate in this design brief. I genuinely appreciate the ambition of FIDJOO's vision.

However, after carefully reviewing the project scope in conjunction with the proposed 7-day timeframe for both design implementation and coding, I must be transparent and address the timeline. Achieving all remaining requirements, along with the development, will be extremely challenging within just one week.

Based on the robust components already implemented, I am confident that you have a clear understanding of my technical capabilities and the level of quality you can expect for the remainder of the project.

### ✅ Work Completed
The following key items are already complete and adhere closely to my prototype design:

- Home page styling
- Themed Button styling
- Tab bar styling
- Tab bar navigation and stack page navigations (core routing structure)
- Story creation first page (initial step)

### Link to The Figma Prototype
https://www.figma.com/proto/HQI0wl6WCwSo8nOofl9Ljw/FIDJOO?node-id=1-2&viewport=1495%2C561%2C0.7&t=79tUHxOW6s6mc6pB-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1


## 1. User Experience (UX) Principles
- The interface follows a simple, structured flow tailored for children.
- Each screen presents one primary action, reducing cognitive load and supporting intuitive navigation.
- Large visuals (story covers, characters, adventures) guide users through choices with minimal text dependency.
- A clear progress bar reinforces the step-by-step journey.

## 2. Child-Targeted Design
- Bright colors, rounded shapes, and expressive illustrations create a playful and welcoming environment for young users.
- The large visual cards minimize the need for reading proficiency.
- Friendly iconography in the navigation encourages exploration and helps children recognize functions visually.

## 3. Accessibility and Ease of Use
- Large, high-contrast buttons ensure children—and users inclusively.
- Adequate spacing reduces accidental taps. The text is short, straightforward, and combined with large imagery to support early readers and multilingual households.

## 4. Engagement and Motivation
- The design incorporates encouraging reinforcement screens such as reading streaks (e.g., "10 days of reading!") and completion celebrations.
- These provide immediate positive feedback, boosting motivation and forming healthy reading habits.
- The creation flow is framed as a fun, empowering activity.

## 5. Mascot and Branding Integration
- The mascot acts as a consistent emotional guide across the experience. It appears in creation prompts, confirmation dialogs, and celebration screens.
- Its simple shape and expressive eyes foster emotional connection and make the brand memorable and inclusive.

## 6. Safety and Emotional Design
- Confirmation prompts use gentle emotional cues (such as the sad mascot) to communicate possible loss of progress without inducing fear.
- Buttons are clearly differentiated by color and tone—for example, blue for a safe choice, red for a potentially destructive action.

## 7. Information Architecture
- The home screen is organised into clear sections like "Tous," "Préférée," and "Inachevée" to help both children and parents locate content quickly.
- The library grid intentionally mimics the familiar look of a bookshelf. Each book cover is placed inside a soft rectangular frame that resembles a book, helping children intuitively understand that these are their stored stories.
- The CTA "+ Create Story" card remains visually prominent to encourage ongoing creativity.

## 8. Notes on Animation (Future Work)
**Due to time limitations**, animations are not implemented yet. Future versions could include micro-interactions (button bounce, mascot movements, transitions) to further support engagement, delight, and comprehension without overwhelming the child.

## 9.Attribution & Ownership Notice
This design and its associated code were created specifically for the purposes of the provided design brief. If this work is not selected for the final product, I kindly ask that we have a conversation before any part of this work is reused. I would truly appreciate being credited appropriately and ensuring that any reuse aligns with our mutual understanding.

**Thank you for your consideration, professionalism and for acknowledging the creative effort behind this project.**

----------------------------------------------------------ORIGINAL README-----------------------------------------------------------



# Fidjoo – Design + Frontend Mini-Challenge

## Welcome 👋

This challenge evaluates both **UI/UX skills** and **React Native implementation** for the Fidjoo app.

**Fidjoo** is the first AI platform allowing children (5–9 years old) to create their own animated storybooks safely and intuitively.

---

## 🎯 Objective

Redesign and re-implement **3 key screens** of the Fidjoo experience:

1. **Home / Start Creation** - [app/(tabs)/index.tsx](app/(tabs)/index.tsx)
2. **Choose a Style + Hero** - [app/(tabs)/creation.tsx](app/(tabs)/creation.tsx)
3. **Story Viewer** - [app/(tabs)/story.tsx](app/(tabs)/story.tsx)

Your mission is to propose a **child-friendly UI** and build a **functional prototype** in React Native.

---

## 🚀 Getting Started

### Installation

```bash
# Clone your forked repository
git clone https://github.com/YOUR_USERNAME/fidjoo-design-frontend-challenge.git
cd fidjoo-design-frontend-challenge

# Install dependencies
pnpm install

# Start the development server
pnpm start
```

Then press:

- `i` for iOS simulator
- `a` for Android emulator
- `w` for web browser

### Project Structure

```bash
fidjoo-design-frontend-challenge/
├── app/
│   └── (tabs)/
│       ├── index.tsx        # Screen 1: Home / Start Creation
│       ├── creation.tsx     # Screen 2: Choose Style & Hero
│       └── story.tsx        # Screen 3: Story Viewer
├── assets/
│   ├── data/
│   │   ├── child.json       # Child profile data
│   │   ├── avatars.json     # Avatar images
│   │   ├── book.json        # Book metadata
│   │   ├── book_pages.json  # 10 pages with text, audio, video
│   │   └── choices.json     # Styles and heroes
│   ├── fonts/               # Baloo2 & Raleway fonts
│   └── images/              # Logos and mascots
├── components/              # Reusable UI components
└── constants/
    └── theme.ts            # Fidjoo brand colors & fonts
```

---

## 🧭 Scope

### 1. Home / "Start Creation" - [index.tsx](app/(tabs)/index.tsx)

**Data sources:**

- [assets/data/child.json](assets/data/child.json) - Child profile (name, birthdate, avatar, gender)
- [assets/data/avatars.json](assets/data/avatars.json) - Avatar images
- [assets/data/book.json](assets/data/book.json) - Example of a previously generated story

**Requirements:**

- Display the child's profile section (name + avatar)
- Show previously generated stories as visual cards
- Provide a central CTA to start generating a new story

**Optional bonuses:**

- Profile editing
- Games button opening a modal
- Credit balance → credit shop with parental gate

---

### 2. Choose a Style & Hero - [creation.tsx](app/(tabs)/creation.tsx)

**Data source:**

- [assets/data/choices.json](assets/data/choices.json) - Contains both styles and heroes

**Data structure:**

- Items with `type: "style"` are visual styles (wool, anime, realist, disney)
- Items with `type: "hero"` are character heroes
- Heroes are linked to styles via the `style` property (hero.style === style.id)

**Flow:**

1. **Step 1** – User selects a style
2. **Step 2** – User selects a hero within that style

**Requirements:**

- Simple, visual, child-friendly navigation
- Display style cards with images and display names
- Filter and show heroes matching the selected style
- Visual feedback for selection

---

### 3. Story Viewer - [story.tsx](app/(tabs)/story.tsx)

**Data sources:**

- [assets/data/book.json](assets/data/book.json) - Book metadata (title, cover image, rating)
- [assets/data/book_pages.json](assets/data/book_pages.json) - 10 pages with full content

**Each page contains:**

- `page_text` - Story text to display
- `audio_url` - MP3 narration file (hosted)
- `video_url` - MP4 animation file (hosted)

**Requirements:**

- Display each page visually with text
- Integrate audio player for narration
- Integrate video player for animations
- Child-friendly navigation between pages (prev/next)
- Show current page number / total pages

---

## 🎨 Design Resources

### Brand Colors (available in [constants/theme.ts](constants/theme.ts))

```typescript
// Use CustomLightTheme and CustomDarkTheme
primary: '#49AAFF'    // Fidjoo blue
secondary: '#8DD1FF'  // Light blue
tertiary: '#ffb71c'   // Yellow accent
```

### Fonts (available in [constants/theme.ts](constants/theme.ts))

```typescript
// Headings: Baloo2 (rounded, playful)
Fonts.heading.regular
Fonts.heading.bold
Fonts.heading.extrabold

// Body text: Raleway (clean, readable)
Fonts.body.regular
Fonts.body.semibold
Fonts.body.bold
```

### Assets

- **Mascots:** [assets/images/mascotte/](assets/images/mascotte/) (blue, black, white versions)
- **Logos:** [assets/images/logo/](assets/images/logo/) (blue, black, white versions)
- **Fonts:** [assets/fonts/](assets/fonts/)

---

## 📦 Deliverables

You must provide:

- ✅ **Figma file** with the redesigned screens
- ✅ **Interactive prototype** in Figma
- ✅ **GitHub repo** (forked from this one) with your React Native implementation
- ✅ **README** (update this file!) explaining:
  - Your design decisions
  - UX thinking and approach
  - Inspirations and references
  - Any assumptions or creative choices
  - Instructions to test your implementation

---

## 🧠 Expectations

- ✨ Fully **child-friendly interface** (ages 5-9)
- 🎨 Visual, intuitive navigation (minimal reading required)
- 🎨 Respect **Fidjoo branding** (use provided colors and fonts)
- 🎨 Use `CustomLightTheme` and `CustomDarkTheme` from [constants/theme.ts](constants/theme.ts)
- 📱 Screens must work on **mobile & tablet** – iOS + Android
- 💻 Clean, modular, readable code
- 🎬 Smooth animations and micro-interactions
- ♿️ Consider accessibility (touch targets, contrast)

---

## ⏰ Deadline

You have **7 days** after receiving the brief.

---

## 🧾 Evaluation Criteria

| Criterion         | Weight | Description                                    |
|-------------------|--------|------------------------------------------------|
| UX Clarity        | 30%    | Can a child understand it without reading?     |
| UI Creativity     | 25%    | Visual originality & coherence                 |
| Frontend Quality  | 25%    | Code clarity, structure, animations            |
| Brief Adherence   | 10%    | Deliverables + coherence                       |
| Added Value       | 10%    | Smart ideas, micro-interactions, surprises     |

---

## 🚀 How to Submit

1. **Fork this repository** (and star it if you like!)
2. **Complete the challenge** in your fork
3. **Update this README** with your design decisions and notes
4. **Submit:**
   - Your **Figma link** (with view permissions)
   - Your **GitHub repository link**
   - Any additional notes or explanations

---

## 💡 Tips

- Start by exploring the data files in [assets/data/](assets/data/)
- Check the existing theme setup in [constants/theme.ts](constants/theme.ts)
- Use the provided components in [components/](components/) as starting points
- Test on different screen sizes
- Think about animations and transitions
- Consider edge cases (no stories yet, loading states, errors)

---

## 🧸 Have fun

We look forward to seeing your creativity ✨

This challenge is an opportunity to show your design thinking and technical skills. Don't hesitate to add your personal touch while respecting the Fidjoo spirit!
