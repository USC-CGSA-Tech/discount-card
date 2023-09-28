from fastapi import FastAPI, Depends, APIRouter
from schemas import (
    BusinessListResponse,
    BusinessListRequest,
    BusinessCreateRequest,
    BusinessCreateResponse,
    Tag,
    TagListResponse,
    TagCreateRequest,
    TagCreateResponse,
)


business_router = APIRouter(prefix="/businesses", tags=["businesses"])


@business_router.post("/list", response_model=BusinessListResponse)
async def get_businesses(request: BusinessListRequest):
    return BusinessListResponse(data=[], code=200, message="success")


@business_router.post("/update", response_model=BusinessCreateResponse)
async def create_or_update_business(request: BusinessCreateRequest):
    pass


@business_router.post("/delete", response_model=BusinessCreateResponse)
async def delete_business(id: int):
    return BusinessCreateResponse(data=[], code=200, message="success")


tag_router = APIRouter(prefix="/tags", tags=["tags"])


@tag_router.get("/list", response_model=TagListResponse)
async def get_tags():
    return TagListResponse(data=[], code=200, message="success")


@tag_router.post("/update", response_model=TagCreateResponse)
async def create_or_update_tag(request: TagCreateRequest):
    return TagCreateResponse(data=Tag(id=1, name="dummy"), code=200, message="success")


@tag_router.post("/delete", response_model=TagCreateResponse)
async def delete_tag(id: int):
    return TagCreateResponse(data=Tag(id=1, name="dummy"), code=200, message="success")


app = FastAPI()
app.include_router(business_router)
app.include_router(tag_router)


@app.get("/")
async def root():
    return {"message": "Hello World"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app)
