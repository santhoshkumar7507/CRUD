<div align="center">
  <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI Logo" width="300" />
  <br>
  <h3>🎓 FastStudent API</h3>
  <p><i>A sleek, in-memory RESTful CRUD API demonstrating modern Python backend patterns.</i></p>

  <p>
    <a href="https://fastapi.tiangolo.com"><img src="https://img.shields.io/badge/Framework-FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI"></a>
    <a href="https://www.python.org"><img src="https://img.shields.io/badge/Language-Python_3.8+-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python"></a>
    <a href="https://pydantic-docs.helpmanual.io/"><img src="https://img.shields.io/badge/Validation-Pydantic-E92063?style=flat-square&logo=pydantic&logoColor=white" alt="Pydantic"></a>
  </p>
</div>

---

## 📌 About The Project

While simple in scope, this **Student Management API** is engineered using professional-grade tools. It provides a robust backend foundation showing how to properly structure routing, request validation, and data serialization without the overhead of a database connection.

Perfect for quick prototyping, frontend integration testing, or as an educational reference for modern API design.

## 🛠️ Architecture Highlight

- **No-Database Setup**: Uses in-memory state mapping for instant feedback and zero configuration overhead.
- **Strict Typing**: All endpoints use **Pydantic** to guarantee that invalid payloads are rejected automatically with helpful error messages.
- **Automatic Docs**: Compliant with OpenAPI standards, instantly generating a Swagger UI dashboard.

---

## 🚦 Getting Started

### Prerequisites

Ensure you have a recent version of Python installed on your system.

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

## 📦 Data Payload Structure

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
  <small>Designed for simplicity. Built for speed. 🚀</small>
</div>