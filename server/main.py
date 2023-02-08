from fastapi import FastAPI
from posts_router import router as posts_router

app = FastAPI()


@app.middleware("http")
async def add_cors_headers(request, call_next):
    response = await call_next(request)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    response.headers["Access-Control-Max-Age"] = "3600"
    if request.method == "OPTIONS":
        response.status_code = 200
    return response


app.include_router(posts_router, prefix="/posts")
