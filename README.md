<div align="center">
  <h3>🎓 FastStudent API & Architecture Visualization</h3>
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

While minimalist in code, this **Student Management API** is engineered using professional-grade tools. It provides a robust backend foundation showing how to properly structure routing, request validation, and data serialization. 

With the integration of **Graphviz** as a conceptual architecture mapping tool, this project serves not only as an API backend but as an architectural blueprint for modern data-flow design.

## 🕸️ System Architecture (Graphviz / Flow Representation)

The following diagram illustrates the internal flow of request handling, from the client through the validation layer and into our in-memory data store.

```mermaid
graph TD;
    Client((🌐 Client Request)) -->|HTTP GET/POST| Router[🚦 FastAPI Router]
    Router -->|Payload| Validator{🛡️ Pydantic Validation}
    
    Validator -- Invalid Data --> Error[❌ 422 Unprocessable Entity]
    Validator -- Valid Data --> Controller[⚙️ CRUD Controller]
    
    Controller -->|Read/Write| Storage[(💾 In-Memory List)]
    Storage -->|Return Data| Controller
    
    Controller -->|Response| Client
    
    classDef default fill:#f9f9f9,stroke:#333,stroke-width:2px;
    classDef storage fill:#e1f5fe,stroke:#0288d1,stroke-width:2px;
    classDef error fill:#ffebee,stroke:#c62828,stroke-width:2px;
    class Storage storage;
    class Error error;
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
  "id": 101,
  "name": "Sarah Connor",
  "age": 22,
  "course": "Cybersecurity Fundamentals"
}
```

---
<div align="center">
  <small>Engineered with FastAPI & Graphviz Architecture. 🚀</small>
</div>