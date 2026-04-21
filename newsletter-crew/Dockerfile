FROM python:3.11-slim

WORKDIR /app

# Install poetry
RUN pip install --no-cache-dir poetry==1.8.3

# Copy dependency files first for layer caching
COPY pyproject.toml poetry.lock* ./

# Install dependencies (no dev, no venv inside container)
RUN poetry config virtualenvs.create false \
    && poetry install --no-interaction --no-ansi --no-root

# Copy source
COPY . .

ENV PYTHONPATH=/app/src

# Create output directory
RUN mkdir -p output

# Expose default port; Gunicorn reads PORT at runtime
EXPOSE 8080

# Run with gunicorn — 1 worker because crew runs in a background thread
CMD ["gunicorn", "app:app", "-c", "gunicorn.conf.py"]
