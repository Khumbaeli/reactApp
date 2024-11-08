from pydantic import BaseModel, Field

class ClimbTableCreate(BaseModel):
    location: str = Field(..., max_length=50, description="Location of the climbing route")
    climb: str = Field(..., max_length=50, description="Name of the climb")
    grade: str = Field(..., max_length=50, description="Difficulty grade of the climb")
    
    class Config:
        from_attributes = True
