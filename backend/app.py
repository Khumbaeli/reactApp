from fastapi import Depends, FastAPI
from backend import database
from typing import Annotated
from sqlalchemy.orm import Session
from backend import database_models

app = FastAPI()

@app.get('/')
async def get_root_with_db(db: Annotated[Session, Depends(database.get_db())]):

    all_results = db.query(database_models.TestTable).all()

    return all_results

if __name__ == '__main__':
    app.run(debug=True)
