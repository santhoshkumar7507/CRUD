# 🎓 Student Management API

![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Uvicorn](https://img.shields.io/badge/Uvicorn-499848?style=for-the-badge&logo=gunicorn&logoColor=white)

A lightweight, blazing-fast RESTful API built with **FastAPI** to manage student records. This project demonstrates core CRUD (Create, Read, Update, Delete) operations using Python.

## ✨ Features

- **Fast & Modern:** Built with FastAPI, one of the fastest Python frameworks.
- **In-Memory Storage:** Easy to run and test without setting up a database.
- **Data Validation:** Automatic request validation using Pydantic.
- **Interactive Docs:** Out-of-the-box Swagger UI for easy testing.

---

## 🚀 Getting Started

### 1. Prerequisites
Make sure you have Python installed. You will also need to install `fastapi` and `uvicorn`.

```bash
pip install fastapi "uvicorn[standard]"
```

### 2. Run the Server
You can start the development server using the Python launcher. Run this command in your project directory:

```bash
py -m uvicorn crud:app --reload
```
*(Note: If `py` doesn't work, try `python -m uvicorn crud:app --reload`)*

### 3. Explore the API
Once the server is running, visit the auto-generated interactive documentation:
👉 **[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)**

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/students` | Create a new student |
| `GET` | `/students` | Retrieve a list of all students |
| `GET` | `/students/{id}` | Retrieve a specific student by ID |
| `PUT` | `/students/{id}` | Update an existing student by ID |
| `DELETE` | `/students/{id}` | Delete a student by ID |

---

## 🗃️ Data Model

The API expects and returns data based on the following `Student` schema:

```json
{
  "id": 1,
  "name": "John Doe",
  "age": 20,
  "course": "Computer Science"
}
```

---

> Built with ❤️ using FastAPI.