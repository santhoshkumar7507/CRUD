from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse, Response
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import os

app = FastAPI()

# Mount the static directory
os.makedirs("static", exist_ok=True)
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def serve_frontend():
    return FileResponse("static/index.html")

@app.get("/favicon.ico", include_in_schema=False)
def favicon():
    return Response(content=b"", media_type="image/x-icon")

# Temporary storage
students = []

# Schema
class Student(BaseModel):
    id: int
    name: str
    age: int
    course: str


# CREATE
@app.post("/students")
def create_student(student: Student):
    students.append(student)
    return {
        "message": "Student added successfully",
        "data": student
    }


# READ ALL
@app.get("/students")
def get_students():
    return students


# READ ONE
@app.get("/students/{student_id}")
def get_student(student_id: int):

    for student in students:
        if student.id == student_id:
            return student

    raise HTTPException(
        status_code=404,
        detail="Student not found"
    )


# UPDATE
@app.put("/students/{student_id}")
def update_student(student_id: int, updated_student: Student):

    for index, student in enumerate(students):
        if student.id == student_id:
            students[index] = updated_student

            return {
                "message": "Student updated successfully",
                "data": updated_student
            }

    raise HTTPException(
        status_code=404,
        detail="Student not found"
    )


# DELETE
@app.delete("/students/{student_id}")
def delete_student(student_id: int):

    for index, student in enumerate(students):
        if student.id == student_id:
            deleted_student = students.pop(index)

            return {
                "message": "Student deleted successfully",
                "data": deleted_student
            }

    raise HTTPException(
        status_code=404,
        detail="Student not found"
    )