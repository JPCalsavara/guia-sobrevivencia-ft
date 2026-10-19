import re
with open('src/app/calouros/page.tsx', 'r') as f:
    c = f.read()

c = c.replace('https://www.imobiliariaroque.com.br/', 'https://roqueimoveis.com.br/')

# Substituir as 4 imobiliárias finais (Bom Jesus, Della Nina, Boa Vista, Prates) pelas duas novas.
# Eles começam no "Bom Jesus Imóveis" e vão até o fechamento da última "Prates Imóveis".

portinari_sassi = """
                  <div className={styles.realtorCard}>
                    <div>
                      <h4 className={styles.realtorName}>Portinari Imóveis</h4>
                      <p className={styles.realtorDesc}>
                        Apoio em locação imobiliária com portfólio diversificado em toda a região de Limeira.
                      </p>
                    </div>
                    <a
                      href="https://www.portinarimoveis.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.realtorActionBtn}
                      aria-label="Acessar portal da Portinari Imóveis em nova janela"
                    >
                      <span>Portal Portinari Imóveis</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </div>

                  <div className={styles.realtorCard}>
                    <div>
                      <h4 className={styles.realtorName}>Sassi Imóveis</h4>
                      <p className={styles.realtorDesc}>
                        Locação imobiliária tradicional com atendimento para estudantes universitários em Limeira.
                      </p>
                    </div>
                    <a
                      href="https://www.sassiimoveis.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.realtorActionBtn}
                      aria-label="Acessar portal da Sassi Imóveis em nova janela"
                    >
                      <span>Portal Sassi Imóveis</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </div>
"""

start_str = '<div className={styles.realtorCard}>\n                    <div>\n                      <h4 className={styles.realtorName}>Bom Jesus Imóveis</h4>'
end_str = '<span>Portal Prates Imóveis</span>\n                      <ExternalLink size={12} aria-hidden="true" />\n                    </a>\n                  </div>'

if start_str in c and end_str in c:
    start_idx = c.find(start_str)
    end_idx = c.find(end_str) + len(end_str)
    c = c[:start_idx] + portinari_sassi.strip() + "\n" + c[end_idx:]

with open('src/app/calouros/page.tsx', 'w') as f:
    f.write(c)
