import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from backend import database_models

load_dotenv()
print(os.getenv('ORACLE_DB_USERNAME'))

username = os.getenv('ORACLE_DB_USERNAME')
password =  os.getenv('ORACLE_DB_PASSWORD')
dsn =  os.getenv('ORACLE_DB_DSN')

engine = create_engine(f"oracle+oracledb://{username}:{password}@{dsn}")

database_models.Base.metadata.create_all(bind=engine)

def get_db():
    db = Session(engine)
    try:
        yield db
    finally:
        db.close()