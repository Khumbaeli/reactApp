import os
from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict

DOTENV = os.path.join(os.path.dirname(__file__), ".env")
print(DOTENV)

class Settings(BaseSettings):
    ORACLE_DB_USERNAME: str
    ORACLE_DB_PASSWORD: str
    ORACLE_DB_DSN: str

    model_config = SettingsConfigDict(env_file=DOTENV)

@lru_cache
def get_settings():
    return Settings