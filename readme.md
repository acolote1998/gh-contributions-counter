# 📊 GitHub Contributions Counter (Placeholder Version)

A lightweight Node/TypeScript utility that simulates fetching contribution data for a list of GitHub users and prints their contributions within a given date range, along with their share of the total.

---

## 🚀 Features

- Supports **date ranges** (start + end date)
- Prints a formatted report showing:
  - Date range
  - User name
  - Total contributions
  - Percentage of contributions compared to the team

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/acolote1998/gh-contributions-counter.git &&
cd gh-contributions-counter &&
npm install
```

---

## ▶️ Usage

Run the script with two arguments: from date and until date (YYYY-MM-DD):

```bash
npm start -- 2025-09-01 2025-09-15
```

Example output:

```
--------------------------------------------
      From 2025-09-10 until 2025-09-15
--------------------------------------------
 Name       | Contributions | % of Contributions
--------------------------------------------
Aki                12             86%
John                2             14%
Jack                0              0%
```

---

## 👥 Users

The list of tracked users is defined in `userList.json`

An example file is provided as `userList.json.example` which you can and use as a template

The user list has the following structure:

```json
[
  {
    ghId: "user123",
    name: "Aki",
  },
  {
    ghId: "user456",
    name: "John",
  },
];
```

To add a new GitHub user, append a new object to the JSON array with their GitHub login ID (ghId) and the display name you want to see in the report.

For example:

```json
{
  "ghId": "user123",
  "name": "Aki"
}
```
