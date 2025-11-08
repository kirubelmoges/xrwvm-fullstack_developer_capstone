FROM python:3.12.0-slim-bookworm

# Environment variables
ENV PYTHONBUFFERED 1
ENV PYTHONWRITEBYTECODE 1
ENV APP=/app

# Change the working directory
WORKDIR $APP

# Install Python dependencies
COPY requirements.txt $APP
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the rest of the application files
COPY . $APP

# Expose port 8000
EXPOSE 8000

# Give execution permission to entrypoint
RUN chmod +x /app/entrypoint.sh

# Run the entrypoint script, then start Gunicorn
ENTRYPOINT ["/bin/bash", "/app/entrypoint.sh"]
CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "djangoproj.wsgi"]
