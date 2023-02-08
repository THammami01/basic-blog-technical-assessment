FROM python:3.11

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt ./requirements.txt 
RUN pip install -r requirements.txt 

COPY . .
