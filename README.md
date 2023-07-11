# Front-end Homework Assignment

### Hey there,

You can find the implementation of the assignment. I just had few updates on this, UI and behaviour-wise.

# Getting started

Contents:

- Code base
    - [Installation](#installation)
    - [serving](#serving)

- UI
    - [UI features](#ui-features)
    - [Tech gimmicks](#tech-features)
    - [Would-be-nice, short on time](#would-be-nice)

## <a name="installation"></a> Installation

Please be sure your Node.js version is about 16.18+

```bash npm2yarn
npm install
```

## <a name="serving"></a> Serving

- Via your local machine:

    ```bash
    yarn dev
    ```

- Via GitHub CodeSpaces:

    ```bash
    yarn dev --host 0.0.0.0
    ```

# UI 

## <a name="ui-features"></a> Here is what you can find as features:

- [x] Infinite-scroll
- [x] Search bar with unlimited wishes
- [x] Being able to favorite items from results and not lost them. Main trick on this feature is, please remember which keyword you entered and based on that you can find your favorited images inside list. I added //TODO for this feature in [Would-be-nice](#would-be-nice)
- [x] Could be too far from search bar, I got you back! "Go to top" button will help you do new search
- [x] Lazy loaded images
- [x] Responsive view for gallery and items
- [x] Compressing images based on viewport. Means you will save your data if you login with mobile
- [x] Getting more info while hovering to the image. Such as owner, title and views, upload date

## <a name="tech-features"></a> Technical additions:

- [x] Everything setup from scratch. Means I needed to spend my times once more setup some tricky cases through documentations. I love it!
- [x] TypeScript (Hope able to cover major type-check thirsty parts)
- [x] Testing and coverage powered by Vite/Vitest
- [x] Test cases
  - [x] Most possible scenarios

## <a name="would-be-nice"></a> What would be done, but needs a bit time

- [x] Separate tab or drawer for favorites images! and being able to remove them without searching again!
- [x] Navigating full-screen mode or original flickr page of the image
- [x] All testing cases
- [x] Maybe vercel build for it, which everyone can run without proper installation
- [x] Maybe other more points which I don't remember but would love to talk about more!
