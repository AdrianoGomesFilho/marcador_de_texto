# Project Objective
Develop a Chrome-compatible extension that highlights text/numbers on web pages with different colors. A similar existing extension is "Highlight This" by Wim Deboel.

## Functionality
- **Purpose**: The extension will highlight process numbers in emails/webpages. For instance, if a process number is highlighted in green, it indicates it's yours; if in another user's color, you can ignore or forward it.
- **Current Issue**: Highlighting words in Gmail is challenging due to security barriers with iframes that prevent DOM modifications. The "Highlight This" extension by Wim Deboel is currently the best tool for this purpose.

## Technology Used
- **Language**: JavaScript - DOM element modification.

## Usage Instructions
1. Download and install the project directly in the Chrome browser.
2. Navigate to `chrome://extensions/`.
3. Enable Developer Mode.
4. Click and drag the project folder into Chrome.

## Current Status
The project is currently on hold due to difficulties handling Gmail iframes.

### Issues to Address
- Prevent editing in editable fields (e.g., when pasting, the program replaces the term).
- Make it work within Gmail's iframe and Astrea (discover limitations).
- Import and sync the word list.

# About the Developer
- Problem-solving: I aim to find a solution for every problem, constantly learning through online resources like YouTube, ChatGPT, and various websites. Coding and testing are my primary methods.
- Current Role: I work as a lawyer at @sgaadv and implement my projects there.
