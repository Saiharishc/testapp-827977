from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get('/test')
def read_root():
    return {"message": "API is running"}

class TestData(BaseModel):
    data: str

@app.post('/test')
def post_test_data(test_data: TestData):
    return {"message": f"Received data: {test_data.data}"}
