import re
with open('src/data/links.ts', 'r') as f:
    c = f.read()

# O arquivo links.ts tem alguns vídeos repetidos no final:
# id: 'pesquisa-salarial-2026', id: 'video-era-devs-produto', id: 'video-trabalho-na-gringa', id: 'video-ia-programadores', id: 'video-carreira-em-y'
# Vamos substituir tudo isso a partir do 'pesquisa-salarial-2026' até o final do array.

start = c.find("{    id: 'pesquisa-salarial-2026',")
if start == -1:
    start = c.find("  {\n    id: 'pesquisa-salarial-2026',")

end = c.find("];", start)

new_code = """...careerVideosData.map((v) => ({
    id: `video-${v.id}`,
    title: `${v.channel}: ${v.title}`,
    description: v.topic,
    url: v.url,
    category: 'carreira-tecnologia' as const,
    badge: v.topic
  })),
  {
    id: careerSurveyData.id,
    title: careerSurveyData.title,
    description: careerSurveyData.source,
    url: careerSurveyData.url,
    category: 'carreira-tecnologia' as const,
    badge: 'Pesquisa'
  }
"""

if start != -1 and end != -1:
    c = c[:start] + new_code + c[end:]

with open('src/data/links.ts', 'w') as f:
    f.write(c)

