import json
import os
import matplotlib.pyplot as plt
import pandas as pd

def load_data(file_path='data/telemetry_events.json'):
    if not os.path.exists(file_path):
        print(f"Arquivo {file_path} nao encontrado.")
        return None
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return pd.DataFrame(data)

def main():
    df = load_data()
    if df is None or df.empty:
        print("Nenhum dado encontrado para analisar.")
        return

    os.makedirs('scratch/graficos', exist_ok=True)
    plt.style.use('seaborn-v0_8-whitegrid' if 'seaborn-v0_8-whitegrid' in plt.style.available else 'default')

    print("=" * 65)
    print("RELATORIO ESTATISTICO: ENGAJAMENTO POR ASSUNTO NO GUIA DA FT")
    print("=" * 65)

    # 1. Metricas Agrupadas por Assunto
    summary = df.groupby('topicTitle').agg(
        visualizacoes=('dwellTimeSeconds', 'count'),
        tempo_medio_seg=('dwellTimeSeconds', 'mean'),
        tempo_mediano_seg=('dwellTimeSeconds', 'median'),
        profundidade_media_scroll=('scrollDepthPct', 'mean'),
        taxa_interacao_pct=('interacted', lambda x: (x.sum() / len(x)) * 100),
        taxa_mobile_pct=('isMobile', lambda x: (x.sum() / len(x)) * 100)
    ).sort_values(by='visualizacoes', ascending=False)

    print("\n--- RESUMO DE VISUALIZACOES E RETENCAO ---")
    print(summary.round(2).to_string())

    # 2. Resposta Cientifica: POR QUE um assunto e mais visto?
    print("\n--- ANALISE DAS CAUSAS (POR QUE UM ASSUNTO E MAIS VISTO?) ---")
    
    # Calculo da matriz de correlacao numerica
    numeric_cols = ['dwellTimeSeconds', 'scrollDepthPct', 'isMobile', 'interacted']
    corr_matrix = df[numeric_cols].astype(float).corr()
    print("\nMatriz de Correlacao de Pearson:")
    print(corr_matrix.round(3).to_string())

    corr_scroll_dwell = corr_matrix.loc['scrollDepthPct', 'dwellTimeSeconds']
    corr_mobile_dwell = corr_matrix.loc['isMobile', 'dwellTimeSeconds']
    corr_interact_dwell = corr_matrix.loc['interacted', 'dwellTimeSeconds']

    print("\nDiagnosticos dos Fatores de Atencao:")
    if abs(corr_scroll_dwell) < 0.3:
        print("1. Efeito Posicao vs Interesse Genuino:")
        print("   A correlacao entre profundidade de rolagem e tempo de leitura e baixa/moderada.")
        print("   Isso indica que estudantes navegam intencionalmente ate o assunto procurado,")
        print("   em vez de abandonarem a leitura antes de chegar nas secoes inferiores.")
    
    if corr_interact_dwell > 0.3:
        print("2. Fator de Acao Pratica:")
        print("   Ha correlacao positiva relevante entre tempo de leitura e clique de acao (como copiar e-mail).")
        print("   Quanto mais o aluno se dedica a ler a regra (ex: PAD ou IC), maior a probabilidade de acao.")

    if corr_mobile_dwell < 0:
        print("3. Comportamento Mobile:")
        print("   No smartphone, as sessoes tendem a ser mais pontuais e ageis do que no desktop.")

    # 3. GRAFICO 1: Volume de Visualizacoes vs Tempo Medio de Leitura
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5.5))

    # Grafico 1A: Volume
    colors = ['#2563eb', '#059669', '#d97706', '#7c3aed']
    summary['visualizacoes'].plot(kind='bar', ax=ax1, color=colors[:len(summary)])
    ax1.set_title('1. Volume de Acessos por Assunto (Mais Vistos)', fontsize=11, fontweight='bold')
    ax1.set_ylabel('Quantidade de Visualizacoes')
    ax1.set_xlabel('')
    ax1.tick_params(axis='x', rotation=25)
    for p in ax1.patches:
        ax1.annotate(f"{int(p.get_height())}", (p.get_x() + p.get_width() / 2., p.get_height()),
                     ha='center', va='bottom', fontsize=9, xytext=(0, 3), textcoords='offset points')

    # Grafico 1B: Tempo de Retencao Real
    summary['tempo_medio_seg'].plot(kind='bar', ax=ax2, color='#10b981')
    ax2.set_title('2. Tempo Medio de Leitura por Assunto (Retencao em Segundos)', fontsize=11, fontweight='bold')
    ax2.set_ylabel('Segundos')
    ax2.set_xlabel('')
    ax2.tick_params(axis='x', rotation=25)
    for p in ax2.patches:
        ax2.annotate(f"{p.get_height():.1f}s", (p.get_x() + p.get_width() / 2., p.get_height()),
                     ha='center', va='bottom', fontsize=9, xytext=(0, 3), textcoords='offset points')

    plt.tight_layout()
    plot_retencao_path = 'scratch/graficos/ranking_assuntos_e_retencao.png'
    plt.savefig(plot_retencao_path, dpi=300)
    plt.close()

    # 4. GRAFICO 2: Heatmap de Correlacao Explicativa
    fig, ax = plt.subplots(figsize=(7, 5.5))
    cax = ax.matshow(corr_matrix, cmap='coolwarm', vmin=-1, vmax=1)
    fig.colorbar(cax)

    labels = ['Tempo Leitura', 'Profundidade Scroll', 'E Mobile', 'Interagiu']
    ax.set_xticks(range(len(labels)))
    ax.set_yticks(range(len(labels)))
    ax.set_xticklabels(labels, rotation=30, ha='left', fontsize=9)
    ax.set_yticklabels(labels, fontsize=9)

    for i in range(len(labels)):
        for j in range(len(labels)):
            val = corr_matrix.iloc[i, j]
            ax.text(j, i, f"{val:.2f}", ha='center', va='center',
                    color='white' if abs(val) > 0.45 else 'black', fontweight='bold')

    ax.set_title('Matriz de Correlacao: Fatores de Engajamento e Causa', pad=25, fontsize=11, fontweight='bold')
    plt.tight_layout()
    plot_corr_path = 'scratch/graficos/correlacao_engajamento.png'
    plt.savefig(plot_corr_path, dpi=300)
    plt.close()

    # 5. GRAFICO 3: Comparativo Mobile vs Desktop por Assunto
    df_device_topic = df.groupby(['topicTitle', 'isMobile']).size().unstack(fill_value=0)
    df_device_topic.columns = ['Desktop', 'Mobile']
    
    fig, ax = plt.subplots(figsize=(10, 5))
    df_device_topic.plot(kind='bar', ax=ax, color=['#3b82f6', '#f59e0b'])
    ax.set_title('3. Consumo Mobile vs Desktop por Assunto', fontsize=11, fontweight='bold')
    ax.set_ylabel('Visualizacoes')
    ax.set_xlabel('')
    ax.tick_params(axis='x', rotation=20)
    ax.legend(title='Plataforma')
    plt.tight_layout()
    plot_device_path = 'scratch/graficos/comportamento_mobile_vs_desktop.png'
    plt.savefig(plot_device_path, dpi=300)
    plt.close()

    print("\n" + "=" * 65)
    print("GRAFICOS GERADOS COM SUCESSO:")
    print(f"1. {plot_retencao_path}")
    print(f"2. {plot_corr_path}")
    print(f"3. {plot_device_path}")
    print("=" * 65)

if __name__ == '__main__':
    main()
