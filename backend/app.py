from fastapi import Depends, FastAPI, HTTPException, status
from backend import database
from typing import Annotated
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError
from backend import database_models
from backend.schemas import ClimbTableCreate
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/climbs')
async def get_root_with_db(db: Annotated[Session, Depends(database.get_db)]):

    all_results = db.query(database_models.ClimbTable).all()

    return all_results

if __name__ == '__main__':
    app.run(debug=True)

@app.post("/climbs/", response_model=ClimbTableCreate)
async def create_climb(db: Annotated[Session, Depends(database.get_db)], route: ClimbTableCreate):
    new_route = database_models.ClimbTable(**route.model_dump())
        # Add to database
    try:
        db.add(new_route)
        db.commit()
    except SQLAlchemyError as db_err:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error: {str(db_err)}"
        )
    
    # Return the created route
    return ClimbTableCreate.model_validate(new_route)
    
    
@app.delete("/climbs/{climb_id}", status_code=status.HTTP_200_OK)
def delete_climbing_route_by_name(db: Annotated[Session, Depends(database.get_db)],climb_id: str):
    print(climb_id)
    try:
        # Query to find and delete routes with the specific name
        deletion_count = db.query(database_models.ClimbTable).filter(
            database_models.ClimbTable.climb == climb_id
        ).delete(synchronize_session=False)
        
        db.commit()
        
        # Check if any routes were deleted
        if deletion_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"No climbing routes found with name: {id}"
            )
        
        return {
            "message": f"Successfully deleted {deletion_count} climbing route(s)",
            "deleted_count": deletion_count
        }
    
    except SQLAlchemyError as db_err:
        # Rollback in case of database error
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error: {str(db_err)}"
        )
    except Exception as e:
        # Catch any unexpected errors
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Unexpected error: {str(e)}"
        )