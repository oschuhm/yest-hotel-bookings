# 🧪 Model-Based Testing with Yest, Xray Cloud, Jira & GitHub Actions

This project demonstrates a complete example of **Model-Based Testing (MBT)** integrating modern QA tools.  
The system under test is the publicly available [Adactin Hotel App](https://adactinhotelapp.com/), a platform intended for training and demonstration purposes.

## 🔗 Repository

The full project is available on GitHub:  
👉 [github.com/oschuhm/yest-hotel-bookings](https://github.com/oschuhm/yest-hotel-bookings)

## 📋 Jira/Xray Project

Requirements and test management are handled in the **"Smiles and More" Jira project**.  
You can view the board and related items here:  
👉 [mbtdemo.atlassian.net Jira Project – SAM](https://mbtdemo.atlassian.net/jira/software/c/projects/SAM)

## 🌟 Objective

The goal is to showcase the interaction of the following tools within a cohesive testing workflow:

- **Yest** (Smartesting) for modeling and test case generation
- **Xray Cloud & Jira** for test management and planning
- **Cypress** with **Badeball Cucumber Preprocessor** for automated execution
- **GitHub Actions** as CI infrastructure (planned and expandable)

This project serves as a **public showcase** and can act as a blueprint for similar MBT setups.

---

## 🧱 Process Overview

```mermaid
graph TD
  A[Yest: Modeling (.yest)] --> B[Test Case Generation (.feature)]
  B --> C[Xray API: Upload to Xray Cloud]
  C --> D[Xray: Test Planning (Test Plan)]
  D --> E[GitHub Action (planned): Automated Execution]
  E --> F[Cypress + Cucumber: Test against Adactin Hotel App]
```

---

## ⚙️ Technologies at a Glance

| Tool                      | Purpose                                                         |
|---------------------------|-----------------------------------------------------------------|
| **Yest**                  | Behavior modeling & Gherkin test case generation                |
| **Xray Cloud**            | Test case management, planning, REST API integration            |
| **Jira**                  | Test management & requirement traceability                      |
| **Cypress**               | End-to-end test automation in the browser                       |
| **Badeball Cucumber Preprocessor** | Gherkin/BDD support for Cypress                   |
| **GitHub Actions**        | Automated test execution (planned)                              |

---

## 📦 Project Structure

```
mbt-example/
├── yest/                 # .yest files – versioned test models
├── testcases/            # Generated .feature files from Yest
├── cypress/              # Cypress + Cucumber step definitions
│   ├── e2e/
│   └── support/
├── docs/                 # Architecture diagrams & model images
├── README.md
```

> **Note**: `.feature` files are selected/generated at runtime based on the Xray Test Plan.

---

## 🚀 Detailed Workflow

1. **Modeling in Yest**  
   Application behavior (e.g., login, hotel search) is modeled in Yest.  
   Models are versioned in the repository and updated as needed.  
   Requirements are tracked in Jira and linked to specific parts of the model, such as decision table lines.  
   Yest automatically creates and maintains traceability between the requirements and the generated test cases.

2. **Test Case Generation**  
   Yest generates test cases, which can be published to Xray either as manual tests with detailed steps or in Cucumber (Gherkin) format.  
   In this project, we focus on Cucumber-based test cases as they are suited for automation.

3. **Upload to Xray (Cloud)**  
   Test cases in Cucumber format are uploaded via REST API and linked to a test plan.

4. **Test Planning in Jira/Xray**  
   Test cases are organized and scheduled for execution using Xray's planning features.

5. **Automated Execution (via Cypress)**  
   The `.feature` files are executed using Cypress with the Badeball Cucumber Preprocessor.  
   A GitHub Actions workflow is planned to automate this step.

---

## 🔐 Authentication & Environment

- Tests directly interact with [https://adactinhotelapp.com](https://adactinhotelapp.com)
- No sensitive credentials are included in this repository
- A test user account can be registered for free on the Adactin site

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🙌 Contributing

Pull requests, questions, and suggestions are welcome!  
Please open an issue or submit a contribution via GitHub.

---
