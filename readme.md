# 📊 GitHub Contributions Counter

A small Node/TypeScript utility that fetches contribution data for a list of GitHub users and prints their contributions within a given date range, along with their share of the total.

---

## 🚀 Features

- Fetches contribution data using [github-contributions-api.jogruber.de](https://github-contributions-api.jogruber.de)
- Supports **date ranges** (start + end date)
- Prints a formatted report showing:
  - User name
  - Total contributions
  - Percentage of contributions compared to the team
- Easy to extend with more users

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/acolote1998/gh-contributions-counter.git
cd gh-contributions-counter
npm install
```

---

## ▶️ Usage

Run the script with two arguments: from date and until date (YYYY-MM-DD):

```bash
npm start -- 2025-09-01 2025-09-15
```

Example output:

---

```bash
Name | Contributions | % of Contributions

Aki:        42             20%
David:      55             26%
Amanda:     30             14%
```

---

## 👥 Users

The list of tracked users is defined in listOfUsers.ts:

```bash
export const users: UserType[] = [
{ ghId: "david11267", name: "David" },
{ ghId: "Helloinoit", name: "Elias" },
{ ghId: "samuel-kar", name: "Samuel" },
];
```

You can add or remove GitHub users here.

---
