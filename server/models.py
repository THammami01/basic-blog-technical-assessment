from pydantic import BaseModel


class PostDTO(BaseModel):
    title: str
    content: str
    author: str
