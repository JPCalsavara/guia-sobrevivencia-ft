import re

with open('src/app/carreira/page.tsx', 'r') as f:
    c = f.read()
c = c.replace("Série 'Começando aos 40' com lições", "Série &apos;Começando aos 40&apos; com lições")
with open('src/app/carreira/page.tsx', 'w') as f:
    f.write(c)

with open('src/app/calouros/page.tsx', 'r') as f:
    c = f.read()

# I messed up the replacement of `roqueimoveis` before Portinari and Sassi. Let's fix the calouros/page.tsx div issue.
# Let's see the end of the imobiliárias div.
c = c.replace("</p>\n                    </div>\n                    <a\n                      href=\"https://roqueimoveis.com.br/\"\n                      target=\"_blank\"\n                      rel=\"noopener noreferrer\"\n                      className={styles.realtorActionBtn}\n                      aria-label=\"Acessar portal da Imobiliária Roque em nova janela\"\n                    >\n                      <span>Portal Imobiliária Roque</span>\n                      <ExternalLink size={12} aria-hidden=\"true\" />\n                    </a>\n                  </div>\n                  <div className={styles.realtorCard}>", "</p>\n                    </div>\n                    <a\n                      href=\"https://roqueimoveis.com.br/\"\n                      target=\"_blank\"\n                      rel=\"noopener noreferrer\"\n                      className={styles.realtorActionBtn}\n                      aria-label=\"Acessar portal da Imobiliária Roque em nova janela\"\n                    >\n                      <span>Portal Imobiliária Roque</span>\n                      <ExternalLink size={12} aria-hidden=\"true\" />\n                    </a>\n                  </div>\n                </div>\n                  <div className={styles.realtorCard}>")
# Actually, the quickest way to fix calouros/page.tsx is to check it around 500-600.
