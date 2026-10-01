#!/usr/bin/env bash

# Executa analise de telemetria e geracao de graficos via container Docker leve

set -e

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Iniciando analise estatistica de telemetria no container Docker..."

docker run --rm \
  -v "$PROJECT_DIR":/app \
  -w /app \
  python:3.11-slim \
  bash -c "pip install --no-cache-dir pandas matplotlib && python3 scripts/analisar_telemetria.py"

echo "Processamento finalizado com sucesso."
