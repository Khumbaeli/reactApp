from sqlalchemy import Identity, Column, Integer, String
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

class ClimbTable(Base):
    __tablename__ = "climb_table"

    id_identity = Identity(start=1, increment=1)
    id = Column(Integer, id_identity, primary_key=True)

    location = Column(String(50), unique=False, nullable=False)
    climb = Column(String(50), unique=False, nullable=False)
    grade = Column(String(50), unique=False, nullable=False)