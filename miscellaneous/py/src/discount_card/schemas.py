from __future__ import annotations
from pydantic import BaseModel
from enum import Enum


class Response(BaseModel):
    code: int
    message: str
    data: dict | list


class Tag(BaseModel):
    id: int
    name: str


class TagRecursive(Tag):
    children: list[TagRecursive]


class Business(BaseModel):
    id: int
    name: str
    telephone: str
    wechat: str
    email: str
    address: str
    description: str
    promotion: str
    promotion: str
    image_url: str
    tags: list[Tag]
    created_at: str
    updated_at: str


class SearchKey(str, Enum):
    name = "name"
    telephone = "telephone"
    wechat = "wechat"
    email = "email"
    address = "address"
    description = "description"
    promotion = "promotion"


class BusinessListRequest(BaseModel):
    offset: int
    limit: int
    tag_ids: list[int] = None
    search_key: SearchKey = None
    search_value: str = None


class BusinessListResponse(Response):
    data: list[Business]


class BusinessCreateRequest(BaseModel):
    id: int = None
    name: str
    telephone: str
    wechat: str
    email: str
    address: str
    description: str
    promotion: str
    image_url: str
    tag_ids: list[int]


class BusinessCreateResponse(Response):
    data: Business


class TagListResponse(Response):
    data: list[TagRecursive]

class TagCreateRequest(BaseModel):
    id: int = None
    name: str
    parent_id: int = None

class TagCreateResponse(Response):
    data: Tag
