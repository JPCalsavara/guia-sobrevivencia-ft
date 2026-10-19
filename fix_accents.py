import os
import re

replacements = {
    r'\bCiberseguranca\b': 'Cibersegurança',
    r'\bseguranca\b': 'segurança',
    r'\bSeguranca\b': 'Segurança',
    r'\bRecomendacao\b': 'Recomendação',
    r'\bcomputacao\b': 'computação',
    r'\baviao\b': 'avião',
    r'\baviacao\b': 'aviação',
    r'\bautomacao\b': 'automação',
    r'\bestruturacao\b': 'estruturação',
    r'\bvalidacao\b': 'validação',
    r'\bavancada\b': 'avançada',
    r'\binsaciavel\b': 'insaciável',
    r'\bcompreensao\b': 'compreensão',
    r'\bvoce entendera\b': 'você entenderá',
    r'\bAlem de\b': 'Além de',
    r'\balem de\b': 'além de',
    r'\btecnico\b': 'técnico',
    r'\btecnicos\b': 'técnicos',
    r'\bcritico\b': 'crítico',
    r'\bcritica\b': 'crítica',
    r'\bruido\b': 'ruído',
    r'\bconteudos\b': 'conteúdos',
    r'\bdominio\b': 'domínio',
    r'\brevisao\b': 'revisão',
    r'\bmetricas\b': 'métricas',
    r'\bnao substituem\b': 'não substituem',
    r'\bcompeticoes\b': 'competições',
    r'\bcenario\b': 'cenário',
    r'\bpraticos\b': 'práticos',
    r'\bpratico\b': 'prático',
    r'\bEtico\b': 'Ético',
    r'\buniversitarios\b': 'universitários',
    r'\bInformacao\b': 'Informação',
    r'\binformacao\b': 'informação',
    r'\bcibernetica\b': 'cibernética',
    r'\bInteligencia\b': 'Inteligência',
    r'\binteligencia\b': 'inteligência'
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for pattern, replacement in replacements.items():
        # Only replace if not preceded or followed by a hyphen or underscore (to avoid changing IDs or variable names)
        # We can use regex with negative lookbehind and lookahead
        safe_pattern = r'(?<![-_a-zA-Z])' + pattern.replace(r'\b', '') + r'(?![-_a-zA-Z])'
        new_content = re.sub(safe_pattern, replacement, new_content)
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith(('.tsx', '.ts', '.md', '.json')) and file != 'package.json' and file != 'package-lock.json':
            process_file(os.path.join(root, file))
