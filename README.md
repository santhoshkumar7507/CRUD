<div align="center">
  <h3>🎓 NexusEdu SIS & Architecture Visualization</h3>
  <p><i>A sleek, in-memory RESTful CRUD API demonstrating modern Python backend patterns.</i></p>

  <p>
    <a href="https://fastapi.tiangolo.com"><img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI"></a>
    <a href="https://www.python.org"><img src="https://img.shields.io/badge/Python_3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"></a>
    <a href="https://pydantic-docs.helpmanual.io/"><img src="https://img.shields.io/badge/Pydantic-E92063?style=for-the-badge&logo=pydantic&logoColor=white" alt="Pydantic"></a>
    <a href="https://graphviz.org/"><img src="https://img.shields.io/badge/Graphviz-222222?style=for-the-badge&logo=graphviz&logoColor=white" alt="Graphviz"></a>
  </p>
</div>

---

## 📌 About The Project

While minimalist in code, this **NexusEdu SIS** is engineered using professional-grade tools. It provides a robust backend foundation showing how to properly structure routing, request validation, and data serialization. 

With the integration of **Graphviz** as a conceptual architecture mapping tool, this project serves not only as an API backend but as an architectural blueprint for modern data-flow design.

## 🕸️ System Architecture (Graphviz / Flow Representation)

The following diagram illustrates the internal flow of request handling, from the client through the validation layer and into our in-memory data store.

```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#1a1a2e',
      'primaryTextColor': '#fff',
      'primaryBorderColor': '#e94560',
      'lineColor': '#00b4d8',
      'secondaryColor': '#0f3460',
      'tertiaryColor': '#16213e'
    }
  }
}%%
graph TD;
    Client((🌐 Client Request)):::client -->|HTTP GET/POST| Router[🚦 FastAPI Router]:::router
    Router -->|Payload| Validator{🛡️ Pydantic Validation}:::validator
    
    Validator -- Invalid Data --> Error[❌ 422 Unprocessable Entity]:::error
    Validator -- Valid Data --> Controller[⚙️ CRUD Controller]:::controller
    
    Controller -->|Read/Write| Storage[(💾 In-Memory List)]:::storage
    Storage -->|Return Data| Controller
    
    Controller -->|Response| Client
    
    classDef client fill:#06d6a0,stroke:#ffffff,stroke-width:3px,color:#000000,font-weight:bold;
    classDef router fill:#00b4d8,stroke:#ffffff,stroke-width:3px,color:#000000,font-weight:bold;
    classDef validator fill:#f72585,stroke:#ffffff,stroke-width:3px,color:#ffffff,font-weight:bold;
    classDef error fill:#d00000,stroke:#ffffff,stroke-width:3px,color:#ffffff,font-weight:bold;
    classDef controller fill:#7209b7,stroke:#ffffff,stroke-width:3px,color:#ffffff,font-weight:bold;
    classDef storage fill:#3a0ca3,stroke:#ffffff,stroke-width:3px,color:#ffffff,font-weight:bold;
```

## 🛠️ Architecture Highlights

- **No-Database Setup**: Uses in-memory state mapping for instant feedback and zero configuration overhead.
- **Graphviz Ready**: Designed with clear entity separations, making it trivial to export schemas and data graphs using Graphviz algorithms.
- **Strict Typing**: All endpoints use **Pydantic** to guarantee that invalid payloads are rejected automatically with helpful error messages.
- **Automatic Docs**: Compliant with OpenAPI standards, instantly generating a Swagger UI dashboard.

---

## 🚦 Getting Started

### Prerequisites

Ensure you have Python installed, along with the optional Graphviz engine if you plan to render local `.dot` files.

### Installation

Navigate to the directory and install the lightweight dependencies:

```bash
pip install fastapi "uvicorn[standard]"
```

### Running the Application

Spin up the local development server with hot-reloading enabled:

```bash
py -m uvicorn crud:app --reload
```
*(If `py` is unrecognized on your terminal, substitute it with `python`)*

The server will start listening at `http://127.0.0.1:8000`.

---

## 📖 API Documentation

Once the server is running, you can interact with the API entirely through the browser!

👉 **[Launch Interactive Swagger UI](http://127.0.0.1:8000/docs)**<br>
👉 **[Launch ReDoc View](http://127.0.0.1:8000/redoc)**

### Available Endpoints

| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/students` | Insert a new student record |
| `GET` | `/students` | Retrieve a list of all students |
| `GET` | `/students/{student_id}` | Fetch details for a specific student |
| `PUT` | `/students/{student_id}` | Update an existing student's data |
| `DELETE` | `/students/{student_id}` | Remove a student from the registry |

---

## 📦 Data Schema (Entity Representation)

All endpoints communicating student data adhere to the following strict JSON schema:

```json
{
  "id": 90,
  "name": "Santhosh",
  "age": 22,
  "course": "AWS Cloud Architecture & Engineering"
}
```

---
<div align="center">
  <small>Engineered with FastAPI & Graphviz Architecture. 🚀</small>
</div>