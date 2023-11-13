from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# Directory to store and serve the images
IMAGE_DIR = "uploaded_images"
os.makedirs(IMAGE_DIR, exist_ok=True)

@app.post("/upload-image/")
async def upload_image(file: UploadFile = File(...)):
    try:
        file_location = os.path.join(IMAGE_DIR, file.filename)
        with open(file_location, "wb+") as file_object:
            file_object.write(file.file.read())
        return {"filename": file.filename}
    except Exception as e:
        return {"error": str(e)}

@app.get("/images/{filename}")
async def get_image(filename: str):
    file_location = os.path.join(IMAGE_DIR, filename)
    if os.path.exists(file_location):
        return FileResponse(file_location)
    return {"error": "File not found"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=20002)
