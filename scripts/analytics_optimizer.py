#!/usr/bin/env python3
"""
Otimizador de Telemetria e Analytics em Desenvolvimento
Analisa metricas do Vercel Analytics e sugere otimizacoes continuas para o portal.

Conforme estabelecido na ADR 0006 e ADR 0001, todas as saidas e relatorios gerados
preservam a ausencia de travessoes, parenteses e emojis decorativos.
"""

import sys
import json
import argparse
from pathlib import Path

DEFAULT_SNAPSHOT_PATH = Path(__file__).resolve().parent.parent / "data" / "analytics_snapshot.json"
TARGET_INSIGHTS_PATH = Path(__file__).resolve().parent.parent / "src" / "data" / "analyticsInsights.json"

def carregar_dados(caminho_arquivo: Path) -> dict:
    if not caminho_arquivo.exists():
        raise FileNotFoundError(f"Arquivo de telemetria nao encontrado em: {caminho_arquivo}")
    with open(caminho_arquivo, "r", encoding="utf-8") as f:
        return json.load(f)

def analisar_metricas(dados: dict) -> dict:
    visitantes = dados.get("visitors", 0)
    visualizacoes = dados.get("page_views", 0)
    bounce_rate = dados.get("bounce_rate", 0.0)
    rotas = dados.get("routes", {})
    dispositivos = dados.get("devices", {})
    sistemas = dados.get("operating_systems", {})
    referenciadores = dados.get("referrers", {})

    paginas_por_visitante = round(visualizacoes / visitantes, 2) if visitantes > 0 else 0.0

    # Analise de rotas de conteudo (desconsiderando home)
    rotas_conteudo = {k: v for k, v in rotas.items() if k != "/"}
    total_conteudo = sum(rotas_conteudo.values())

    ranking_rotas = []
    for rota, views in sorted(rotas.items(), key=lambda item: item[1], reverse=True):
        percentual_total = round((views / visualizacoes) * 100, 1) if visualizacoes > 0 else 0.0
        percentual_conteudo = round((views / total_conteudo) * 100, 1) if rota != "/" and total_conteudo > 0 else 0.0
        
        status = "equilibrio"
        if rota != "/":
            if percentual_conteudo >= 30.0:
                status = "alta_demanda"
            elif percentual_conteudo <= 10.0:
                status = "baixa_descoberta"

        ranking_rotas.append({
            "rota": rota,
            "visualizacoes": views,
            "percentual_total": percentual_total,
            "percentual_conteudo": percentual_conteudo,
            "classificacao": status
        })

    # Recomendacoes estrategicas de produto
    recomendacoes = []
    
    # 1. Recomendacao academica
    rota_academico = rotas.get("/academico", 0)
    if rota_academico > 0:
        pct_academico = round((rota_academico / total_conteudo) * 100, 1) if total_conteudo > 0 else 0.0
        if pct_academico >= 30.0:
            recomendacoes.append({
                "alvo": "/academico",
                "prioridade": "alta",
                "acao": "Destacar atalhos de regras da DAC e alerta de Programacao 1 na primeira dobra da pagina inicial",
                "justificativa": f"A rota academica concentra {pct_academico}% de todo o consumo de conteudo do portal"
            })

    # 2. Recomendacao calouros
    rota_calouros = rotas.get("/calouros", 0)
    pct_calouros = round((rota_calouros / total_conteudo) * 100, 1) if total_conteudo > 0 else 0.0
    if pct_calouros <= 10.0:
        recomendacoes.append({
            "alvo": "/calouros",
            "prioridade": "critica",
            "acao": "Adicionar banner de boas-vindas com chamada direta para moradia e calendario na pagina inicial",
            "justificativa": f"Apenas {pct_calouros}% das visualizacoes de conteudo chegam ao guia do calouro, revelando deficit de descoberta"
        })

    # 3. Recomendacao mobile e android
    android_pct = round(sistemas.get("android", 0.0) * 100, 1)
    mobile_pct = round(dispositivos.get("mobile", 0.0) * 100, 1)
    if mobile_pct >= 40.0:
        recomendacoes.append({
            "alvo": "ui_mobile",
            "prioridade": "continua",
            "acao": "Validar largura de tabelas, cartoes e alvos de toque em telas Android",
            "justificativa": f"Dispositivos moveis representam {mobile_pct}% dos acessos, com Android liderando {android_pct}% do total geral"
        })

    # 4. Recomendacao linux
    linux_pct = round(sistemas.get("gnu_linux", 0.0) * 100, 1)
    if linux_pct >= 8.0:
        recomendacoes.append({
            "alvo": "ferramentas_desenvolvimento",
            "prioridade": "media",
            "acao": "Manter scripts, atalhos de terminal e orientacoes de configuracao em ambiente GNU Linux",
            "justificativa": f"Usuarios GNU Linux somam {linux_pct}% da base, confirmando perfil de graduandos de computacao da FT"
        })

    return {
        "resumo": {
            "visitantes_unicos": visitantes,
            "visualizacoes_totais": visualizacoes,
            "paginas_por_visitante": paginas_por_visitante,
            "taxa_rejeicao_percentual": round(bounce_rate * 100, 1)
        },
        "ranking_rotas": ranking_rotas,
        "dispositivos": dispositivos,
        "sistemas_operacionais": sistemas,
        "referenciadores": referenciadores,
        "recomendacoes": recomendacoes
    }

def exibir_relatorio(resultado: dict):
    resumo = resultado["resumo"]
    print("=" * 72)
    print("RELATORIO DE TELEMETRIA E ANALISE DE USO DO GUIA FT")
    print("=" * 72)
    print(f"Visitantes Unicos: {resumo['visitantes_unicos']}")
    print(f"Visualizacoes Totais: {resumo['visualizacoes_totais']}")
    print(f"Profundidade Media: {resumo['paginas_por_visitante']} paginas por visitante")
    print(f"Taxa de Rejeicao: {resumo['taxa_rejeicao_percentual']}%")
    print("-" * 72)
    print("DISTRIBUICAO DE TRAFEGO POR ROTA:")
    for r in resultado["ranking_rotas"]:
        pct_txt = f"{r['percentual_total']}% do total"
        if r['rota'] != "/":
            pct_txt += f" | {r['percentual_conteudo']}% do conteudo"
        classificacao = r['classificacao'].upper().replace("_", " ")
        print(f"  {r['rota']:<15} {r['visualizacoes']:>4} views [{pct_txt}] -> {classificacao}")
    
    print("-" * 72)
    print("RECOMENDACOES DE OTIMIZACAO ACIONAVEIS:")
    for idx, rec in enumerate(resultado["recomendacoes"], 1):
        print(f"{idx}. Prioridade: {rec['prioridade'].upper()} | Alvo: {rec['alvo']}")
        print(f"   Acao: {rec['acao']}")
        print(f"   Motivo: {rec['justificativa']}")
    print("=" * 72)

def aplicar_otimizacoes(resultado: dict, destino: Path):
    destino.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "geradoEm": "2026-09-30",
        "resumo": resultado["resumo"],
        "rotasAltaDemanda": [r["rota"] for r in resultado["ranking_rotas"] if r["classificacao"] == "alta_demanda"],
        "rotasBaixaDescoberta": [r["rota"] for r in resultado["ranking_rotas"] if r["classificacao"] == "baixa_descoberta"],
        "recomendacoes": resultado["recomendacoes"]
    }
    with open(destino, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"Arquivo de insights gerado com sucesso em: {destino}")

def main():
    parser = argparse.ArgumentParser(description="Otimizador de telemetria e analise de uso para o Guia FT")
    parser.add_argument("--file", type=str, default=str(DEFAULT_SNAPSHOT_PATH), help="Caminho do arquivo JSON de telemetria")
    parser.add_argument("--apply", action="store_true", help="Gera arquivo de dados de insights em src/data/analyticsInsights.json")
    parser.add_argument("--json", action="store_true", help="Emite o resultado formatado em JSON puro")
    args = parser.parse_args()

    caminho = Path(args.file)
    dados = carregar_dados(caminho)
    resultado = analisar_metricas(dados)

    if args.json:
        print(json.dumps(resultado, indent=2, ensure_ascii=False))
    else:
        exibir_relatorio(resultado)

    if args.apply:
        aplicar_otimizacoes(resultado, TARGET_INSIGHTS_PATH)

if __name__ == "__main__":
    main()
