from fastapi import APIRouter, HTTPException
from pymongo import MongoClient
from bson import ObjectId
from models import PostDTO


MONGODB_HOST = "mongodb"
MONGODB_PORT = 27017
MONGODB_USER = "mongouser"
MONGODB_PASSWORD = "mongopassword"
MONGODB_DB = "technical-assessment"

MONGODB_CONN_STRING = f"mongodb://{MONGODB_USER}:{MONGODB_PASSWORD}@{MONGODB_HOST}:{MONGODB_PORT}"

router = APIRouter()

client = MongoClient(MONGODB_CONN_STRING)
db = client[MONGODB_DB]
posts_collection = db["posts"]


@router.get("/")
async def get_posts():
    return [
        {
            "id": str(post["_id"]),
            "title": post["title"],
            "content": post["content"],
            "author": post["author"],
            "vote_count": post["vote_count"]
        } for post in posts_collection.find()
    ]


@router.get("/{post_id}")
async def get_post(post_id: str):
    post = posts_collection.find_one({"_id": ObjectId(post_id)})

    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    return {
        "id": str(post["_id"]),
        "title": post["title"],
        "content": post["content"],
        "author": post["author"],
        "vote_count": post["vote_count"]
    }


@router.post("/")
async def create_post(post: PostDTO):
    post_dict = post.dict()

    post_dict["vote_count"] = 0
    result = posts_collection.insert_one(post_dict)

    if result.acknowledged:
        return {"id": str(result.inserted_id)}

    raise HTTPException(status_code=400, detail="Could not create post")


@router.put("/{post_id}")
async def update_post(post_id: str, post: PostDTO):
    post = post.dict()
    post.pop("vote_count", None)

    post = posts_collection.update_one(
        {"_id": ObjectId(post_id)},
        {"$set": post}
    )

    if post.modified_count == 1:
        return {"message": "Post updated successfully"}

    if post.matched_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")

    raise HTTPException(status_code=400, detail="Could not update post")


@router.patch("/{post_id}/upvote")
async def upvote_post(post_id: str):
    post = posts_collection.find_one_and_update(
        {"_id": ObjectId(post_id)},
        {"$inc": {"vote_count": 1}}
    )

    if post:
        return {"message": "Post upvoted successfully"}

    raise HTTPException(status_code=400, detail="Could not upvote post")


@router.patch("/{post_id}/downvote")
async def downvote_post(post_id: str):
    post = posts_collection.find_one_and_update(
        {"_id": ObjectId(post_id)},
        {"$inc": {"vote_count": -1}}
    )

    if post:
        return {"message": "Post downvoted successfully"}

    raise HTTPException(status_code=400, detail="Could not downvote post")


@router.delete("/{post_id}")
async def delete_post(post_id: str):
    result = posts_collection.delete_one({"_id": ObjectId(post_id)})

    if result.deleted_count == 1:
        return {"message": "Post deleted successfully"}

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")

    raise HTTPException(status_code=400, detail="Could not delete post")
