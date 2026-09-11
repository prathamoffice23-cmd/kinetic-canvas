# Kinetic Canvas

CRAZY UI / CINEMATIC INTERACTION DIRECTION

The portfolio must NOT look like a normal template.

Create a crazy, futuristic, cinematic UI that feels like a premium award-winning developer portfolio.

The design should make visitors think:

"WOW — I haven't seen a portfolio like this before."

But keep it professional and usable.

1. LIVING / MOVING BACKGROUND

The background should feel alive.

Add subtle animated elements such as:

Floating particles

Glowing dots

Moving gradient blobs

Interactive light trails

Slowly moving geometric shapes

Subtle animated grid

Floating 3D objects

Tiny stars/noise

Soft atmospheric glow

Objects should move continuously but slowly.

The movement should feel natural, premium, and cinematic — NOT like a distracting screensaver.

2. FLOATING 3D OBJECTS

Add several futuristic floating objects around the website.

Examples:

Abstract 3D geometric shapes

Glass spheres

Metallic rings

Floating cubes

Wireframe objects

Glowing orbs

Abstract tech components

These objects should:

Slowly rotate

Float up and down

React subtly to mouse movement

Have depth/parallax

Cast soft light/glow

Move at different speeds

Use WebGL/Three.js or another suitable technology if supported.

If full 3D would hurt performance, create convincing CSS-based alternatives.

3. INTERACTIVE HERO

The hero section should be the most impressive part of the website.

Create a large cinematic visual around the name Pratham Hapani.

Possible concept:

The user's cursor creates a subtle glowing field.

When the mouse moves:

Background particles react

3D objects slightly move

Gradient lighting follows the cursor

Text has subtle parallax

Floating elements shift in depth

The interaction must remain smooth.

Do NOT make the entire page shake or aggressively follow the cursor.

4. CRAZY TYPOGRAPHY

Use large experimental typography.

The hero name should be extremely prominent.

Example visual hierarchy:

PRATHAM
HAPANI

or

PRATHAM
<span>HAPANI</span>

Use:

Oversized typography

Gradient text

Animated text reveal

Slight letter-spacing animation

Masked text transitions

Split-text animation

Subtle distortion/glitch effect where appropriate

Do not overuse glitch effects.

Typography should remain readable.

5. SCROLL-BASED ANIMATIONS

Make scrolling feel cinematic.

As the user scrolls:

Objects move at different speeds

Sections reveal themselves

Images scale subtly

Cards slide into position

Background gradients change

3D objects rotate

Typography transforms

Lines draw themselves

Timeline elements animate

Section transitions have depth

Use scroll progress to control animations.

The page should feel like the user is moving through an interactive digital experience rather than simply scrolling through a resume.

6. PROJECT SECTION — INTERACTIVE CARDS

Make project cards highly interactive.

On hover:

Card slightly lifts

Image zooms subtly

Lighting follows cursor

Border glow appears

Technology tags animate

Background changes subtly

For desktop, consider a 3D tilt effect based on cursor position.

For mobile, replace hover interactions with touch-friendly interactions.

Project cards should feel like physical objects floating in space.

7. MAGNETIC BUTTONS

Create premium magnetic buttons.

Examples:

View My Work →

Let's Connect →

When the cursor gets close:

Button subtly moves toward cursor

Glow increases

Arrow moves

Border animation activates

Keep the effect subtle and smooth.

8. CUSTOM CURSOR

On desktop, create a custom cursor.

Normal state:

Small glowing dot

When hovering a button:

Cursor expands

Shows an arrow or label

When hovering a project:

Cursor can display "VIEW"

When hovering a link:

Cursor changes state

Disable the custom cursor on touch devices.

9. GLASS + GLOW UI

Use a sophisticated combination of:

Glassmorphism

Transparent surfaces

Backdrop blur

Thin borders

Soft shadows

Neon glow

Subtle gradients

But avoid making every element a glass card.

Use glass effects strategically.

10. SECTION TRANSITIONS

Do not make every section simply appear underneath the previous section.

Create cinematic transitions.

Examples:

Dark background → glowing gradient

Large typography passing through the viewport

Animated horizontal lines

Floating objects moving between sections

Gradient blobs changing position

Cards appearing from depth

Smooth color transitions

Sections should visually feel connected.

11. SCROLL PROGRESS

Add a very subtle scroll-progress indicator.

It could be:

A glowing vertical line

Thin progress bar

Small indicator on the side

It should show the user's position in the portfolio.

12. LOADING EXPERIENCE

Create a short premium loading animation.

Example:

PRATHAM HAPANI

with an animated percentage or progress line.

Keep it short.

Target:
under 1.5 seconds whenever possible.

Do not force a loading screen if the page is already ready.

13. EASTER EGGS

Add 1–2 subtle interactive easter eggs.

For example:

A hidden interaction with a floating object

A keyboard shortcut

A small visual reaction when clicking the logo

An unexpected animation

Keep them tasteful.

14. PHYSICS / MOTION

Where appropriate, use physics-like motion.

Objects can have:

Momentum

Smooth inertia

Spring animations

Magnetic attraction

Floating motion

Parallax depth

Motion should have realistic easing.

Avoid linear robotic animations.

Preferred feeling:

smooth + organic + futuristic + premium

15. MOBILE MOTION

Do NOT remove all animation on mobile.

Instead:

Reduce particle count

Reduce 3D complexity

Disable expensive mouse interactions

Keep scroll animations

Keep subtle floating elements

Maintain the visual identity

The mobile version should still feel special.

16. PERFORMANCE RULE

Crazy UI does NOT mean slow UI.

Performance is extremely important.

Use:

GPU-friendly transforms

RequestAnimationFrame where appropriate

Lazy loading

Optimized assets

Reduced particle count on mobile

Code splitting

Efficient WebGL

Intersection Observer for scroll animations

Avoid unnecessary expensive effects.

Target:
60 FPS on modern desktop devices.

17. OVERALL ART DIRECTION

Think of the website as a combination of:

Apple-level polish + futuristic developer portfolio + interactive 3D experience + cinematic motion design.

The result should be:

Futuristic

Experimental

Premium

Minimal

Interactive

Memorable

Professional

Fast

The UI can be "crazy", but the information architecture must remain simple.

The user should always know:
Who Pratham is → What he does → What he built → What he achieved → How to contact him.

The animations should enhance the story, not hide it.

FINAL RULE

Do not create a boring portfolio with animations added on top.

Design the entire experience around motion from the beginning.

Every major section should have at least one meaningful interactive or animated element, while maintaining excellent usability and accessibility.

The final result should feel like a living digital portfolio rather than a static webpage.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3d5500d5-79de-4923-995f-8da6e7d97742).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
